import { NextResponse } from "next/server";
import { sendNewsletterNotification, NOTIFICATION_EMAIL } from "@/lib/mailer";
import { checkRateLimit, stripCrlf, sanitizeInput } from "@/lib/security";

// In-memory set of subscribed email addresses to prevent duplicate records
const subscriberStore = new Set<string>();

export async function POST(request: Request) {
  try {
    // 1. Payload size guard
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 10240) {
      return NextResponse.json(
        { success: false, error: "Payload exceeds 10KB size limit." },
        { status: 413 }
      );
    }

    // 2. Rate limiting per IP (10 requests per minute)
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const { allowed } = checkRateLimit(clientIp, "newsletter", 10, 60000);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 3. Honeypot anti-spam check
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      console.warn("[API/newsletter] Honeypot triggered, ignoring submission.");
      return NextResponse.json({
        success: true,
        message: "Newsletter subscription received."
      });
    }

    // 4. Validate email
    const rawEmail = body.email ? String(body.email).trim() : "";
    if (!rawEmail) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const email = stripCrlf(rawEmail).toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 5. Duplicate subscription check
    if (subscriberStore.has(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "This email address is already subscribed to our engineering notes.",
          duplicate: true
        },
        { status: 409 }
      );
    }

    // Register into store
    subscriberStore.add(email);

    // Limit store size to prevent runaway memory
    if (subscriberStore.size > 10000) {
      const first = subscriberStore.values().next().value;
      if (first) subscriberStore.delete(first);
    }

    const source = sanitizeInput(body.source || "Website Footer Engineering Notes", 120);

    const result = await sendNewsletterNotification({
      email,
      source,
      submittedAt: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "long"
      })
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Unable to register newsletter subscription.",
          recipient: NOTIFICATION_EMAIL
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Subscription registered. Notification sent to ${NOTIFICATION_EMAIL}.`,
      delivered: result.delivered,
      recipient: NOTIFICATION_EMAIL
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("[API/newsletter] Unexpected error:", message);
    return NextResponse.json(
      { success: false, error: "Failed to process newsletter subscription." },
      { status: 500 }
    );
  }
}
