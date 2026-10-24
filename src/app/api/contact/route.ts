import { NextResponse } from "next/server";
import { sendContactInquiryEmail, NOTIFICATION_EMAIL } from "@/lib/mailer";
import {
  checkRateLimit,
  isDuplicateSubmission,
  stripCrlf,
  sanitizeInput
} from "@/lib/security";

export async function POST(request: Request) {
  try {
    // 1. Payload size guard (max 50KB)
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 51200) {
      return NextResponse.json(
        { success: false, error: "Payload exceeds 50KB size limit." },
        { status: 413 }
      );
    }

    // 2. Rate limiting per IP
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const { allowed } = checkRateLimit(clientIp, "contact", 10, 60000);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 3. Honeypot anti-spam check
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      console.warn("[API/contact] Honeypot triggered, ignoring submission.");
      return NextResponse.json({
        success: true,
        message: "Inquiry processed successfully."
      });
    }

    // 4. Required fields validation & sanitization
    const rawName = body.name ? String(body.name).trim() : "";
    const rawEmail = body.email ? String(body.email).trim() : "";

    if (!rawName || !rawEmail) {
      return NextResponse.json(
        { success: false, error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Email format & CRLF protection
    const email = stripCrlf(rawEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Name sanitization & length limits
    const name = sanitizeInput(rawName, 120);
    const service = sanitizeInput(body.service || "Custom Development", 150);
    const phone = body.phone ? sanitizeInput(body.phone, 50) : undefined;
    const company = body.company ? sanitizeInput(body.company, 120) : undefined;
    const customServiceNotes = body.customServiceNotes ? sanitizeInput(body.customServiceNotes, 1000) : undefined;
    const customBudgetNotes = body.customBudgetNotes ? sanitizeInput(body.customBudgetNotes, 1000) : undefined;
    const platform = body.platform ? sanitizeInput(body.platform, 150) : undefined;
    const url = body.url ? sanitizeInput(body.url, 250) : undefined;
    const details = body.details ? sanitizeInput(body.details, 4000) : undefined;
    const customComplianceNotes = body.customComplianceNotes ? sanitizeInput(body.customComplianceNotes, 1000) : undefined;
    const engagementModel = sanitizeInput(body.engagementModel || "Fixed Project Sprint", 100);
    const customCommunicationNotes = body.customCommunicationNotes ? sanitizeInput(body.customCommunicationNotes, 1000) : undefined;

    // 5. Duplicate submission check (prevents double-click duplicate dispatch)
    const submissionHash = `${clientIp}:${email}:${service}:${name}`;
    if (isDuplicateSubmission(submissionHash, 8000)) {
      return NextResponse.json(
        {
          success: false,
          error: "Duplicate submission detected. Please wait a few seconds before resubmitting."
        },
        { status: 409 }
      );
    }

    // Extract headers for metadata
    const userAgent = sanitizeInput(request.headers.get("user-agent") || "Unknown", 250);

    const result = await sendContactInquiryEmail({
      name,
      email,
      phone,
      company,
      service,
      customServiceNotes,
      tier: body.tier || "growth",
      tierLabel: body.tierLabel || body.tier,
      addons: body.addons || [],
      addonNames: body.addonNames || [],
      timeline: body.timeline || "Within 1 Month",
      customBudgetNotes,
      platform,
      url,
      details,
      customComplianceNotes,
      engagementModel,
      customCommunicationNotes,
      minEstimate: Number(body.minEstimate) || undefined,
      maxEstimate: Number(body.maxEstimate) || undefined,
      estimatedWeeks: Number(body.estimatedWeeks) || undefined,
      submittedAt: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "long"
      }),
      userAgent
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Unable to dispatch email inquiry.",
          recipient: NOTIFICATION_EMAIL
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully transmitted to our engineering team.",
      delivered: result.delivered,
      recipient: NOTIFICATION_EMAIL
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("[API/contact] Unexpected error:", message);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry submission." },
      { status: 500 }
    );
  }
}
