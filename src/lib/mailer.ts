import nodemailer from "nodemailer";

export const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "team.onlinedigitalsolution@gmail.com";

export interface ContactInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  customServiceNotes?: string;
  tier: string;
  tierLabel?: string;
  addons?: string[];
  addonNames?: string[];
  timeline: string;
  customBudgetNotes?: string;
  platform?: string;
  url?: string;
  details?: string;
  customComplianceNotes?: string;
  engagementModel?: string;
  customCommunicationNotes?: string;
  minEstimate?: number;
  maxEstimate?: number;
  estimatedWeeks?: number;
  submittedAt?: string;
  userAgent?: string;
}

export interface NewsletterPayload {
  email: string;
  source?: string;
  submittedAt?: string;
}

/**
 * Creates a Nodemailer transport instance if credentials exist.
 */
function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
}

/**
 * Sends a project inquiry email to team.onlinedigitalsolution@gmail.com
 */
export async function sendContactInquiryEmail(payload: ContactInquiryPayload) {
  const submittedTime = payload.submittedAt || new Date().toISOString();
  const fromAddress =
    process.env.SMTP_FROM ||
    `"Cloud Consultancy Portal" <${process.env.SMTP_USER || NOTIFICATION_EMAIL}>`;

  const minFormatted = payload.minEstimate
    ? `$${payload.minEstimate.toLocaleString()}`
    : "Custom";
  const maxFormatted = payload.maxEstimate
    ? `$${payload.maxEstimate.toLocaleString()}`
    : "Custom";
  const estimateString =
    payload.minEstimate && payload.maxEstimate
      ? `${minFormatted} – ${maxFormatted}`
      : "Custom scoping required";

  const subject = `[New Client Inquiry] ${payload.service} — ${payload.name} (${payload.company || "Individual"})`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0F172A; background-color: #F8FAFC; margin: 0; padding: 24px; }
    .card { max-width: 680px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #0F172A; color: #FFFFFF; padding: 24px 32px; border-bottom: 3px solid #2563EB; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
    .header p { margin: 4px 0 0; color: #94A3B8; font-size: 13px; font-family: monospace; }
    .content { padding: 32px; }
    .section-title { font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em; color: #2563EB; font-weight: 700; margin: 24px 0 12px; border-bottom: 1px solid #E2E8F0; padding-bottom: 6px; }
    .section-title:first-child { margin-top: 0; }
    .grid { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    .grid td { padding: 8px 12px; font-size: 13px; border-bottom: 1px solid #F1F5F9; }
    .grid td.label { font-weight: 600; color: #475569; width: 35%; background: #F8FAFC; }
    .grid td.value { color: #0F172A; }
    .badge { display: inline-block; background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; }
    .highlight-box { background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 6px; padding: 16px; margin: 16px 0; }
    .highlight-box .amount { font-size: 22px; font-weight: 700; color: #15803D; margin-top: 4px; }
    .notes-box { background: #F8FAFC; border-left: 3px solid #2563EB; padding: 12px 16px; font-size: 13px; color: #334155; margin-top: 6px; white-space: pre-wrap; }
    .footer { background: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px 32px; font-size: 12px; color: #64748B; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Cloud Consultancy — New Project Inquiry</h1>
      <p>Target Recipient: ${NOTIFICATION_EMAIL} | Submitted: ${submittedTime}</p>
    </div>
    
    <div class="content">
      <div class="highlight-box">
        <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #166534; letter-spacing: 0.05em;">Calculated Project Estimate</div>
        <div class="amount">${estimateString}</div>
        <div style="font-size: 12px; color: #4B5563; margin-top: 2px;">Estimated Turnaround: ${payload.estimatedWeeks || 4}–${(payload.estimatedWeeks || 4) + 2} Weeks | Tier: ${payload.tierLabel || payload.tier}</div>
      </div>

      <div class="section-title">Client Contact Information</div>
      <table class="grid">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${payload.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${payload.email}">${payload.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value">${payload.phone || "Not specified"}</td>
        </tr>
        <tr>
          <td class="label">Company / Org</td>
          <td class="value">${payload.company || "Individual / Not specified"}</td>
        </tr>
      </table>

      <div class="section-title">Project Scope & Technical Requirements</div>
      <table class="grid">
        <tr>
          <td class="label">Primary Service</td>
          <td class="value"><span class="badge">${payload.service}</span></td>
        </tr>
        <tr>
          <td class="label">Complexity Tier</td>
          <td class="value">${payload.tierLabel || payload.tier}</td>
        </tr>
        <tr>
          <td class="label">Target Timeline</td>
          <td class="value">${payload.timeline}</td>
        </tr>
        <tr>
          <td class="label">Engagement Model</td>
          <td class="value">${payload.engagementModel || "Fixed Project Sprint"}</td>
        </tr>
        <tr>
          <td class="label">Target Platform</td>
          <td class="value">${payload.platform || "Not specified"}</td>
        </tr>
        ${payload.url ? `<tr><td class="label">Current URL</td><td class="value"><a href="${payload.url}" target="_blank">${payload.url}</a></td></tr>` : ""}
        ${payload.addonNames && payload.addonNames.length > 0 ? `<tr><td class="label">Selected Add-ons</td><td class="value">${payload.addonNames.join(", ")}</td></tr>` : ""}
      </table>

      ${payload.details ? `
      <div class="section-title">Project Summary / Overview</div>
      <div class="notes-box">${payload.details}</div>
      ` : ""}

      ${payload.customServiceNotes ? `
      <div class="section-title">Custom Technical Specs / Stacks</div>
      <div class="notes-box">${payload.customServiceNotes}</div>
      ` : ""}

      ${payload.customBudgetNotes ? `
      <div class="section-title">Budget / Launch Deadlines</div>
      <div class="notes-box">${payload.customBudgetNotes}</div>
      ` : ""}

      ${payload.customComplianceNotes ? `
      <div class="section-title">Compliance / Security / Migration Notes</div>
      <div class="notes-box">${payload.customComplianceNotes}</div>
      ` : ""}

      ${payload.customCommunicationNotes ? `
      <div class="section-title">Communication & NDA Preferences</div>
      <div class="notes-box">${payload.customCommunicationNotes}</div>
      ` : ""}
    </div>

    <div class="footer">
      This inquiry was received by the Cloud Consultancy website estimator.<br/>
      Reply directly to this email to reply to <strong>${payload.name} (${payload.email})</strong>.
    </div>
  </div>
</body>
</html>
  `;

  const text = `
Cloud Consultancy — New Project Inquiry
========================================
Recipient: ${NOTIFICATION_EMAIL}
Date: ${submittedTime}

CLIENT CONTACT:
- Name: ${payload.name}
- Email: ${payload.email}
- Phone: ${payload.phone || "Not specified"}
- Company: ${payload.company || "Individual"}

ESTIMATE & TIMELINE:
- Calculated Budget: ${estimateString}
- Estimated Timeline: ${payload.timeline} (${payload.estimatedWeeks || 4} Weeks)
- Engagement Model: ${payload.engagementModel || "Fixed Project Sprint"}

TECHNICAL SCOPE:
- Service: ${payload.service}
- Tier: ${payload.tierLabel || payload.tier}
- Platform: ${payload.platform || "Not specified"}
- Current URL: ${payload.url || "N/A"}
- Addons: ${payload.addonNames ? payload.addonNames.join(", ") : "None"}

PROJECT DETAILS:
${payload.details || "N/A"}

CUSTOM SPECIFICATIONS:
${payload.customServiceNotes ? `Tech Specs: ${payload.customServiceNotes}` : ""}
${payload.customBudgetNotes ? `Budget Notes: ${payload.customBudgetNotes}` : ""}
${payload.customComplianceNotes ? `Compliance: ${payload.customComplianceNotes}` : ""}
${payload.customCommunicationNotes ? `Communication: ${payload.customCommunicationNotes}` : ""}
`;

  const transporter = getTransporter();

  if (!transporter) {
    // Development or credential-pending mode:
    console.warn(
      `[MAILER] SMTP credentials not configured (SMTP_USER/SMTP_PASS). Simulating delivery to ${NOTIFICATION_EMAIL}:`
    );
    console.log(`[MAILER] SUBJECT: ${subject}`);
    console.log(`[MAILER] SENDER: ${payload.name} <${payload.email}>`);
    console.log(`[MAILER] ESTIMATE: ${estimateString}`);
    return {
      success: true,
      delivered: false,
      simulated: true,
      recipient: NOTIFICATION_EMAIL,
      message: `Inquiry registered successfully. To enable live Gmail delivery, set SMTP_USER and SMTP_PASS in .env.local`
    };
  }

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: NOTIFICATION_EMAIL,
      replyTo: `${payload.name} <${payload.email}>`,
      subject,
      html,
      text
    });

    console.log(`[MAILER] Inquiry email dispatched successfully to ${NOTIFICATION_EMAIL}. MessageId: ${info.messageId}`);
    return {
      success: true,
      delivered: true,
      messageId: info.messageId,
      recipient: NOTIFICATION_EMAIL
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[MAILER] Error sending inquiry email to ${NOTIFICATION_EMAIL}:`, errorMessage);
    return {
      success: false,
      error: errorMessage,
      recipient: NOTIFICATION_EMAIL
    };
  }
}

/**
 * Sends a newsletter subscription notification to team.onlinedigitalsolution@gmail.com
 */
export async function sendNewsletterNotification(payload: NewsletterPayload) {
  const submittedTime = payload.submittedAt || new Date().toISOString();
  const fromAddress =
    process.env.SMTP_FROM ||
    `"Cloud Consultancy Portal" <${process.env.SMTP_USER || NOTIFICATION_EMAIL}>`;

  const subject = `[Newsletter Signup] New Subscriber: ${payload.email}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0F172A; background-color: #F8FAFC; margin: 0; padding: 24px; }
    .card { max-width: 580px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #0F172A; color: #FFFFFF; padding: 20px 24px; border-bottom: 3px solid #2563EB; }
    .header h1 { margin: 0; font-size: 18px; font-weight: 600; }
    .content { padding: 24px; }
    .email-box { background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 6px; padding: 14px 18px; font-size: 16px; font-weight: 600; color: #1D4ED8; margin: 16px 0; }
    .footer { background: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 14px 24px; font-size: 12px; color: #64748B; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Cloud Consultancy — New Newsletter Subscriber</h1>
    </div>
    <div class="content">
      <p style="margin-top:0; font-size:14px; color:#475569;">
        A new user has subscribed to receive Engineering Notes from the website footer:
      </p>
      <div class="email-box">
        ${payload.email}
      </div>
      <table style="width:100%; border-collapse: collapse; font-size:13px; color:#64748B;">
        <tr>
          <td style="padding:6px 0; width:120px;"><strong>Recipient:</strong></td>
          <td>${NOTIFICATION_EMAIL}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;"><strong>Timestamp:</strong></td>
          <td>${submittedTime}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;"><strong>Source:</strong></td>
          <td>${payload.source || "Website Footer (Engineering Notes)"}</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      Cloud Consultancy Notification Dispatcher
    </div>
  </div>
</body>
</html>
  `;

  const text = `
Cloud Consultancy — New Newsletter Subscriber
==============================================
Recipient: ${NOTIFICATION_EMAIL}
Email: ${payload.email}
Timestamp: ${submittedTime}
Source: ${payload.source || "Website Footer (Engineering Notes)"}
`;

  const transporter = getTransporter();

  if (!transporter) {
    console.warn(
      `[MAILER] SMTP credentials not configured. Simulating newsletter subscription notification to ${NOTIFICATION_EMAIL} for ${payload.email}`
    );
    return {
      success: true,
      delivered: false,
      simulated: true,
      recipient: NOTIFICATION_EMAIL
    };
  }

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: NOTIFICATION_EMAIL,
      replyTo: payload.email,
      subject,
      html,
      text
    });

    console.log(`[MAILER] Newsletter notification sent to ${NOTIFICATION_EMAIL}. MessageId: ${info.messageId}`);

    // Optionally send welcome email to subscriber
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: payload.email,
        subject: "Welcome to Cloud Consultancy Engineering Notes",
        html: `
          <div style="font-family: sans-serif; color: #0F172A; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 8px;">
            <h2 style="color: #2563EB;">Welcome to Cloud Consultancy Engineering Notes</h2>
            <p>Thank you for subscribing! You will receive our occasional deep-dives into Next.js architecture, Core Web Vitals optimization, and enterprise CRM engineering.</p>
            <p>If you have a project brief or need immediate cloud architecture consulting, feel free to reply to this email or visit <a href="https://onlinedigitalsolution.com/contact/">our contact portal</a>.</p>
            <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #64748B;">Cloud Consultancy Team &bull; <a href="mailto:${NOTIFICATION_EMAIL}">${NOTIFICATION_EMAIL}</a></p>
          </div>
        `,
        text: `Welcome to Cloud Consultancy Engineering Notes!\n\nThank you for subscribing! You will receive our occasional deep-dives into Next.js architecture, Core Web Vitals, and enterprise CRM engineering.\n\nCloud Consultancy Team (${NOTIFICATION_EMAIL})`
      });
    } catch (welcomeErr) {
      console.warn("[MAILER] Could not send welcome copy to subscriber:", welcomeErr);
    }

    return {
      success: true,
      delivered: true,
      messageId: info.messageId,
      recipient: NOTIFICATION_EMAIL
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[MAILER] Error sending newsletter notification:`, errorMessage);
    return {
      success: false,
      error: errorMessage,
      recipient: NOTIFICATION_EMAIL
    };
  }
}
