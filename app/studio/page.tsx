import Link from "next/link";
import { getPosts } from "@/lib/blogApi";

export const revalidate = 30;

export default async function StudioHome() {
  const posts = await getPosts();
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f7f2e1] via-[#f6efe0] to-[#f2e7d3] font-tomato-sans">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#f48e47]/18 blur-[140px]" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-[#df0939]/12 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#f7d4a2]/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-700">Studio</p>
            <h1 className="mt-3 font-tomato-sans text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Edit Posts
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
              Manage your published posts, jump into drafts, or spin up a new story.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs text-slate-700">
              {posts.length} posts
            </span>
            <Link
              href="/studio/new"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-slate-900/30"
            >
              New Post
            </Link>
          </div>
        </header>

        <section className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-[0_20px_60px_-50px_rgba(94,74,43,0.45)] backdrop-blur">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-300/70 bg-white/70 px-6 py-10 text-center">
              <div className="text-sm font-semibold text-slate-900">No posts yet</div>
              <p className="text-sm text-slate-700">
                Create your first post to start building your blog.
              </p>
              <Link
                href="/studio/new"
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-slate-900/30"
              >
                Create a post
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {posts.map((p) => (
                <article
                  key={p.slug}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{p.title}</h2>
                    <p className="mt-2 text-xs text-slate-700">/blog/{p.slug}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-sm">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="rounded-full border border-slate-200/80 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                    >
                      View
                    </Link>
                    <Link
                      href={`/studio/${p.slug}`}
                      className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-slate-900/25"
                    >
                      Edit
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
