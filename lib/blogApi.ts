export type Post = {
  id?: number;
  slug: string;
  title: string;
  body?: string;
  createdAt?: string;
  updatedAt?: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN || "";
const isServer = typeof window === "undefined";

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers || {}),
      },
    } as any);
  } catch (err: any) {
    throw new Error(`Network error fetching ${path}: ${err?.message ?? err}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  if (res.status === 204) return undefined as T;
  const text = await res.text().catch(() => "");
  if (!text) return undefined as T;
  return JSON.parse(text) as T;
}

async function fetchAdminJson<T>(path: string, init?: RequestInit): Promise<T> {
  if (!isServer) {
    throw new Error("Admin API calls must be made on the server.");
  }
  if (!ADMIN_API_TOKEN) {
    throw new Error("ADMIN_API_TOKEN is not configured.");
  }
  return fetchJson<T>(path, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${ADMIN_API_TOKEN}`,
    },
    cache: "no-store",
  });
}

async function fetchLocalJson<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(path, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers || {}),
      },
      cache: "no-store",
    } as any);
  } catch (err: any) {
    throw new Error(`Network error fetching ${path}: ${err?.message ?? err}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

export async function getPosts(): Promise<Post[]> {
  // Avoid stale cache so new posts appear immediately in Studio/dev
  try {
    return await fetchAdminJson<Post[]>("/posts");
  } catch (e) {
    if (typeof console !== "undefined") console.warn("getPosts failed:", e);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await fetchAdminJson<Post>(`/posts/${encodeURIComponent(slug)}`);
  } catch (e) {
    return null;
  }
}

export async function createPost(post: Post): Promise<Post> {
  return fetchLocalJson<Post>("/api/admin/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
}

export async function updatePost(slug: string, post: Post): Promise<Post> {
  return fetchLocalJson<Post>(`/api/admin/posts/${encodeURIComponent(slug)}`, {
    method: "PUT",
    body: JSON.stringify(post),
  });
}

export async function deletePost(slug: string): Promise<void> {
  await fetchLocalJson<void>(`/api/admin/posts/${encodeURIComponent(slug)}`, {
    method: "DELETE",
  });
}

export function excerptFromBody(body?: string, max = 180): string {
  if (!body) return "";
  const plain = body.replace(/[`*_#>]|\{\/[a-zA-Z].*?\}/g, "");
  return plain.length > max ? plain.slice(0, max).trimEnd() + "…" : plain;
}
