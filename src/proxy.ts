import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. HARD STOP ON CONTACT QUERY PARAMETERS:
  // If anyone or any bot visits /contact/ or /contact with any query string (e.g. ?service=ui-ux-design, ?tier=...),
  // permanently 301 redirect to the clean canonical /contact/ without any parameters.
  if (pathname === "/contact" || pathname === "/contact/") {
    if (search) {
      const url = new URL("/contact/", request.url);
      url.search = "";
      return NextResponse.redirect(url, 301);
    }
  }

  // 2. PRICING DEPRECATION REDIRECT:
  // If /pricing or /pricing/* is visited (with or without query strings), permanently 301 redirect to /contact/
  if (pathname.startsWith("/pricing")) {
    const url = new URL("/contact/", request.url);
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  // 3. LEGACY QUERY PARAMETER PURGE:
  // If any other page is accessed with legacy service/tier prefill params or schema search_term_string,
  // strip the parameters and permanently 301 redirect to the clean page.
  if (
    search &&
    (search.includes("service=") ||
      search.includes("tier=") ||
      search.includes("search_term_string"))
  ) {
    const cleanPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const url = new URL(cleanPath, request.url);
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes (/api/*)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - static files (*.ico, *.png, *.jpg, *.jpeg, *.svg, *.woff2, *.woff, *.ico, *.xml, *.txt)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2|woff|ico|xml|txt)$).*)",
  ],
};
