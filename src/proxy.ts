import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/session";
import { ADMIN_EMAIL } from "@/lib/admin";

export function proxy(request: NextRequest) {
  const raw = request.cookies.get(SESSION_COOKIE)?.value;

  if (!raw) {
    const url = new URL("/", request.url);
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith("/dashboard/admin")) {
    try {
      const session = JSON.parse(raw);
      if (session?.email?.toLowerCase?.() !== ADMIN_EMAIL) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
