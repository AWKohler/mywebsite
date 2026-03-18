import { NextRequest, NextResponse } from "next/server";
import { getSessionCookieName, verifyStudioSession } from "@/lib/studioAuth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/studio/login") || pathname.startsWith("/api/admin/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/admin/logout")) {
    return NextResponse.next();
  }

  const secret = process.env.STUDIO_SESSION_SECRET;
  const cookie = request.cookies.get(getSessionCookieName())?.value;
  const valid = secret && cookie ? await verifyStudioSession(secret, cookie) : false;

  if (!valid) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = request.nextUrl.clone();
    url.pathname = "/studio/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*", "/api/admin/:path*"],
};
