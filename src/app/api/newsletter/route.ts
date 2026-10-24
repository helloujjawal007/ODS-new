import { NextResponse } from "next/server";
import { sendNewsletterNotification, NOTIFICATION_EMAIL } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot anti-spam check
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      console.warn("[API/newsletter] Honeypot triggered, ignoring submission.");
      return NextResponse.json({
        success: true,
        message: "Newsletter subscription received."
      });
    }

    const email = body.email ? String(body.email).trim() : "";

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const result = await sendNewsletterNotification({
      email,
      source: body.source || "Website Footer Engineering Notes",
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
