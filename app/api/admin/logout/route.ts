import { NextResponse } from "next/server";
import { getSessionCookieName } from "@/lib/studioAuth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  const secure = process.env.NODE_ENV === "production";
  response.cookies.set(getSessionCookieName(), "", {
    httpOnly: true,
    secure,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
