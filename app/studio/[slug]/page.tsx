import { getPost } from "@/lib/blogApi";
import EditorForm from "@/components/studio/EditorForm";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function EditPostPage(props: Props) {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return notFound();
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f7f2e1] via-[#f6efe0] to-[#f2e7d3] font-tomato-sans">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#f48e47]/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#df0939]/12 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#f7d4a2]/25 blur-[160px]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-700">Studio</p>
          <h1 className="font-tomato-sans text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Edit Post
          </h1>
          <p className="max-w-2xl text-sm text-slate-700 md:text-base">
            You are editing <span className="font-mono text-slate-700">/blog/{post.slug}</span>.
            Save to update the live post.
          </p>
        </header>
        <EditorForm mode="edit" initial={post} />
      </div>
    </div>
  );
}
