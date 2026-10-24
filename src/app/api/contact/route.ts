import { NextResponse } from "next/server";
import { sendContactInquiryEmail, NOTIFICATION_EMAIL } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot anti-spam check
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      console.warn("[API/contact] Honeypot triggered, ignoring submission.");
      return NextResponse.json({
        success: true,
        message: "Inquiry processed successfully."
      });
    }

    // Required fields validation
    const name = body.name ? String(body.name).trim() : "";
    const email = body.email ? String(body.email).trim() : "";
    const service = body.service ? String(body.service).trim() : "Custom Development";

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Extract headers for metadata
    const userAgent = request.headers.get("user-agent") || "Unknown";

    const result = await sendContactInquiryEmail({
      name,
      email,
      phone: body.phone ? String(body.phone).trim() : undefined,
      company: body.company ? String(body.company).trim() : undefined,
      service,
      customServiceNotes: body.customServiceNotes ? String(body.customServiceNotes).trim() : undefined,
      tier: body.tier || "growth",
      tierLabel: body.tierLabel || body.tier,
      addons: body.addons || [],
      addonNames: body.addonNames || [],
      timeline: body.timeline || "Within 1 Month",
      customBudgetNotes: body.customBudgetNotes ? String(body.customBudgetNotes).trim() : undefined,
      platform: body.platform ? String(body.platform).trim() : undefined,
      url: body.url ? String(body.url).trim() : undefined,
      details: body.details ? String(body.details).trim() : undefined,
      customComplianceNotes: body.customComplianceNotes ? String(body.customComplianceNotes).trim() : undefined,
      engagementModel: body.engagementModel || "Fixed Project Sprint",
      customCommunicationNotes: body.customCommunicationNotes ? String(body.customCommunicationNotes).trim() : undefined,
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
