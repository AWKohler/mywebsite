import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifyStudioSession } from "@/lib/studioAuth";

async function isAuthorized() {
  const secret = process.env.STUDIO_SESSION_SECRET || "";
  const token = (await cookies()).get(getSessionCookieName())?.value;
  if (!secret || !token) return false;
  return verifyStudioSession(secret, token);
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
  const adminToken = process.env.ADMIN_API_TOKEN || "";
  if (!adminToken) {
    return NextResponse.json({ error: "Admin API token missing." }, { status: 500 });
  }

  const payload = await request.json().catch(() => null);
  const res = await fetch(`${apiBase}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${adminToken}`,
    },
    body: JSON.stringify(payload ?? {}),
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) {
    return NextResponse.json({ error: text || "Request failed." }, { status: res.status });
  }
  return NextResponse.json(text ? JSON.parse(text) : null, { status: res.status });
}
