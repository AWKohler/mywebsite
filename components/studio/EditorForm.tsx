"use client";

import { useEffect, useMemo, useState } from "react";
import { Post, createPost, updatePost, deletePost } from "@/lib/blogApi";
import { useRouter } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import MdxClient from "@/components/mdx/MdxClient";

type Props = {
  mode: "create" | "edit";
  initial?: Post;
};

export default function EditorForm({ mode, initial }: Props) {
  const router = useRouter();
  const [slug, setSlug] = useState(initial?.slug || "");
  const [title, setTitle] = useState(initial?.title || "");
  const [body, setBody] = useState(initial?.body || "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<"write" | "preview">("write");
  const [previewSource, setPreviewSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [previewError, setPreviewError] = useState<string | null>(null);

  const normalizedSlug = useMemo(() => normalizeSlug(slug), [slug]);
  const trimmedTitle = useMemo(() => title.trim(), [title]);
  const trimmedBody = useMemo(() => body.trim(), [body]);

  useEffect(() => {
    if (mode === "create" && !slugTouched) {
      setSlug(normalizeSlug(title));
    }
  }, [mode, slugTouched, title]);

  const wordCount = useMemo(() => {
    if (!trimmedBody) return 0;
    return trimmedBody.split(/\s+/).filter(Boolean).length;
  }, [trimmedBody]);

  const isDirty = useMemo(() => {
    const initialSlug = initial?.slug ?? "";
    const initialTitle = initial?.title ?? "";
    const initialBody = initial?.body ?? "";
    return slug !== initialSlug || title !== initialTitle || body !== initialBody;
  }, [body, initial?.body, initial?.slug, initial?.title, slug, title]);

  useEffect(() => {
    if (!isDirty) return;
    const handler = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);

  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(async () => {
      if (!trimmedBody) {
        setPreviewSource(null);
        setPreviewError(null);
        return;
      }
      try {
        const serialized = await serialize(trimmedBody, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
          },
          parseFrontmatter: false,
        });
        if (!cancelled) {
          setPreviewSource(serialized);
          setPreviewError(null);
        }
      } catch (err: any) {
        if (!cancelled) {
          setPreviewSource(null);
          setPreviewError(err?.message ?? "Preview failed to render.");
        }
      }
    }, 250);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [trimmedBody]);

  const fieldErrors = useMemo(() => {
    const errors: Record<string, string> = {};
    if (!normalizedSlug) {
      errors.slug = "Slug is required.";
    } else if (normalizedSlug.length < 3) {
      errors.slug = "Slug must be at least 3 characters.";
    } else if (normalizedSlug.length > 80) {
      errors.slug = "Slug must be 80 characters or fewer.";
    }
    if (!trimmedTitle) {
      errors.title = "Title is required.";
    } else if (trimmedTitle.length < 3) {
      errors.title = "Title must be at least 3 characters.";
    } else if (trimmedTitle.length > 120) {
      errors.title = "Title must be 120 characters or fewer.";
    }
    if (!trimmedBody) {
      errors.body = "Body is required.";
    }
    return errors;
  }, [normalizedSlug, trimmedBody, trimmedTitle]);

  const canSave =
    !loading && Object.keys(fieldErrors).length === 0 && (mode === "create" || isDirty);

  async function onSave() {
    if (!canSave) return;
    setLoading(true);
    setError(null);
    try {
      const payload: Post = {
        slug: normalizedSlug,
        title: trimmedTitle,
        body: trimmedBody,
      };
      if (mode === "create") {
        await createPost(payload);
      } else {
        await updatePost(initial!.slug, payload);
      }
      router.push(`/blog/${normalizedSlug}`);
      router.refresh();
    } catch (e: any) {
      setError(e?.message ?? "Failed to save");
    } finally {
      setLoading(false);
    }
  }

  async function onDelete() {
    if (!initial) return;
    if (!confirm("Delete this post?")) return;
    setLoading(true);
    try {
      await deletePost(initial.slug);
      router.push("/studio");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <section className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-[0_20px_60px_-50px_rgba(94,74,43,0.45)] backdrop-blur font-tomato-sans">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-700">
              Studio Draft
            </div>
            <div className="mt-2 text-sm text-slate-700">
              {mode === "edit" ? "Editing live post" : "Creating a new post"}
              {isDirty && <span className="ml-2 text-amber-700">• Unsaved changes</span>}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs text-slate-700">
            <span>{wordCount} words</span>
            <span className="text-slate-300">•</span>
            <span>{trimmedBody.length} chars</span>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800">Slug</label>
            <input
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
              onBlur={() => setSlug(normalizeSlug(slug))}
              placeholder="my-first-post"
              spellCheck={false}
              maxLength={90}
              autoComplete="off"
              aria-invalid={Boolean(fieldErrors.slug)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200/70"
            />
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-700">
              <span>URL preview: /blog/{normalizedSlug || "your-slug"}</span>
              {mode === "edit" && normalizedSlug !== initial?.slug && (
                <span className="text-amber-700">
                  Changing the slug will change the public URL.
                </span>
              )}
            </div>
            {fieldErrors.slug && <p className="mt-2 text-xs text-red-600">{fieldErrors.slug}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              maxLength={140}
              aria-invalid={Boolean(fieldErrors.title)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200/70"
            />
            <div className="mt-2 text-xs text-slate-700">{trimmedTitle.length}/120</div>
            {fieldErrors.title && (
              <p className="mt-2 text-xs text-red-600">{fieldErrors.title}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-slate-800">Body (MDX)</label>
              <div className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 p-1 text-xs text-slate-700 md:flex">
                <button
                  type="button"
                  onClick={() => setActivePanel("write")}
                  className={`rounded-full px-3 py-1 transition ${
                    activePanel === "write"
                      ? "bg-slate-900 text-white"
                      : "hover:text-slate-800"
                  }`}
                >
                  Write
                </button>
                <button
                  type="button"
                  onClick={() => setActivePanel("preview")}
                  className={`rounded-full px-3 py-1 transition ${
                    activePanel === "preview"
                      ? "bg-slate-900 text-white"
                      : "hover:text-slate-800"
                  }`}
                >
                  Preview
                </button>
              </div>
            </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={"# Hello\n\nWrite MDX here..."}
              aria-invalid={Boolean(fieldErrors.body)}
              disabled={loading}
              className={`mt-2 h-[380px] w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 font-mono text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200/70 ${
                activePanel === "preview" ? "md:hidden" : ""
              }`}
            />
            {fieldErrors.body && <p className="mt-2 text-xs text-red-600">{fieldErrors.body}</p>}
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onSave}
            disabled={!canSave}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-slate-900/30 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
          >
            {loading ? "Saving..." : mode === "create" ? "Publish" : "Save changes"}
          </button>
          {mode === "edit" && (
            <button
              onClick={onDelete}
              disabled={loading}
              className="rounded-full border border-slate-200/80 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Delete post
            </button>
          )}
          {!loading && Object.keys(fieldErrors).length > 0 && (
            <span className="text-xs text-slate-700">
              Fix the highlighted fields to enable publishing.
            </span>
          )}
        </div>
      </section>

      <section
        className={`rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-[0_20px_60px_-50px_rgba(94,74,43,0.45)] backdrop-blur font-tomato-sans ${
          activePanel === "write" ? "hidden md:block" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-700">Preview</div>
            <div className="mt-2 text-sm text-slate-700">Raw MDX snapshot.</div>
          </div>
          <button
            type="button"
            onClick={() => setActivePanel("write")}
            className="rounded-full border border-slate-200/70 px-3 py-1 text-xs text-slate-700 transition hover:border-slate-300 hover:text-slate-800 md:hidden"
          >
            Back to editor
          </button>
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200/60 bg-white/80 p-4">
          {previewError ? (
            <div className="text-sm text-red-600">{previewError}</div>
          ) : previewSource ? (
            <article className="mdx-content max-w-none text-sm text-slate-900">
              <MdxClient source={previewSource} />
            </article>
          ) : (
            <div className="text-sm text-slate-700">Preview appears here as you write.</div>
          )}
        </div>
      </section>
    </div>
  );
}

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
