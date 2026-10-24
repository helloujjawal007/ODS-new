/**
 * Security utilities for input sanitization, rate limiting, and email header protection.
 */

// Simple in-memory rate limiter per IP/action
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const submissionReceipts = new Map<string, number>();

/**
 * Checks whether an IP has exceeded the request threshold.
 * @param ip Client IP
 * @param action Action identifier (e.g. "contact", "newsletter")
 * @param limit Maximum requests in the window
 * @param windowMs Time window in milliseconds (default: 60,000ms = 1 min)
 */
export function checkRateLimit(
  ip: string,
  action: string,
  limit: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const key = `${action}:${ip}`;

  // Periodic cleanup
  if (rateLimitMap.size > 5000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (now > v.resetAt) rateLimitMap.delete(k);
    }
  }

  const existing = rateLimitMap.get(key);
  if (!existing || now > existing.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count };
}

/**
 * Checks for rapid duplicate submissions (e.g. double-click)
 */
export function isDuplicateSubmission(hashKey: string, cooldownMs: number = 5000): boolean {
  const now = Date.now();
  const lastTime = submissionReceipts.get(hashKey);
  if (lastTime && now - lastTime < cooldownMs) {
    return true;
  }
  submissionReceipts.set(hashKey, now);

  if (submissionReceipts.size > 2000) {
    for (const [k, time] of submissionReceipts.entries()) {
      if (now - time > 60000) submissionReceipts.delete(k);
    }
  }

  return false;
}

/**
 * HTML entities escaping to prevent XSS in email clients and web views.
 */
export function escapeHtml(input: string): string {
  if (!input) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Strips carriage returns and newlines to prevent email header injection (CRLF).
 */
export function stripCrlf(input: string): string {
  if (!input) return "";
  return String(input).replace(/[\r\n\t]/g, " ").trim();
}

/**
 * Sanitizes and truncates a string input safely.
 */
export function sanitizeInput(input: unknown, maxLength: number = 500): string {
  if (typeof input !== "string") return "";
  const trimmed = input.trim();
  const stripped = stripCrlf(trimmed);
  return stripped.slice(0, maxLength);
}
