import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifyStudioSession } from "@/lib/studioAuth";

async function isAuthorized() {
  const secret = process.env.STUDIO_SESSION_SECRET || "";
  const token = (await cookies()).get(getSessionCookieName())?.value;
  if (!secret || !token) return false;
  return verifyStudioSession(secret, token);
}

async function proxy(request: Request, slug: string, method: "PUT" | "DELETE") {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
  const adminToken = process.env.ADMIN_API_TOKEN || "";
  if (!adminToken) {
    return NextResponse.json({ error: "Admin API token missing." }, { status: 500 });
  }

  const body = method === "PUT" ? await request.json().catch(() => null) : undefined;
  const res = await fetch(`${apiBase}/posts/${encodeURIComponent(slug)}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${adminToken}`,
    },
    body: method === "PUT" ? JSON.stringify(body ?? {}) : undefined,
    cache: "no-store",
  });

  const text = await res.text();
  if (!res.ok) {
    return NextResponse.json({ error: text || "Request failed." }, { status: res.status });
  }
  if (res.status === 204) {
    return NextResponse.json(null, { status: 204 });
  }
  return NextResponse.json(text ? JSON.parse(text) : null, { status: res.status });
}

export async function PUT(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return proxy(request, slug, "PUT");
}

export async function DELETE(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return proxy(request, slug, "DELETE");
}
