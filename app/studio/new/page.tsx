import EditorForm from "@/components/studio/EditorForm";

export const metadata = {
  title: "New Post",
};

export default function NewPostPage() {
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
            Create Post
          </h1>
          <p className="max-w-2xl text-sm text-slate-700 md:text-base">
            Draft a new article with clean MDX, a resilient slug, and a clear preview before
            publishing.
          </p>
        </header>
        <EditorForm mode="create" />
      </div>
    </div>
  );
}
