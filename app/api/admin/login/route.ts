import { NextResponse } from "next/server";
import { getSessionCookieName, getSessionTtlSeconds, signStudioSession } from "@/lib/studioAuth";

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function POST(request: Request) {
  const { password, next } = await request.json().catch(() => ({}));
  const adminPassword = process.env.STUDIO_PASSWORD || "";
  const sessionSecret = process.env.STUDIO_SESSION_SECRET || "";

  if (!adminPassword || !sessionSecret) {
    return NextResponse.json({ error: "Server not configured." }, { status: 500 });
  }

  if (typeof password !== "string" || !constantTimeEqual(password, adminPassword)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = await signStudioSession(sessionSecret);
  const secure = process.env.NODE_ENV === "production";
  const response = NextResponse.json({ ok: true, next: typeof next === "string" ? next : "/studio" });
  response.cookies.set(getSessionCookieName(), token, {
    httpOnly: true,
    secure,
    sameSite: "strict",
    path: "/",
    maxAge: getSessionTtlSeconds(),
  });
  return response;
}
