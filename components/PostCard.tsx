import React from "react";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO or readable
  readingTime: string;
  tags: string[];
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Visual header */}
      <div className="relative h-40 w-full overflow-hidden">
        {/* Blue wavey gradient placeholder with grain overlay */}
        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect width="1440" height="320" fill="#0b0b0b" />
            <path
              d="M0,110 C240,210 480,40 720,110 C960,180 1200,90 1440,140 L1440,0 L0,0 Z"
              fill="#8f0523"
              opacity="0.9"
            />
            <path
              d="M0,140 C240,240 480,60 720,140 C960,220 1200,110 1440,170 L1440,0 L0,0 Z"
              fill="#df0939"
              opacity="0.95"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-[url('/grain.png')] bg-[length:70px_70px] bg-repeat bg-[#fcfbf7] bg-blend-overlay mix-blend-overlay opacity-25" />
      </div>

      {/* Body */}
      <div className="space-y-3 p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <time className="font-medium">{post.date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-xl font-pp-editorial leading-tight tracking-tight text-gray-900 group-hover:underline">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-[#2643d9] ring-1 ring-blue-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
