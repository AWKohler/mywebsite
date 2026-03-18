import LoginForm from "@/components/studio/LoginForm";

type Props = {
  searchParams?: Promise<{ next?: string }>;
};

export const metadata = {
  title: "Studio Login",
};

export default async function StudioLoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const nextPath = params?.next || "/studio";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f7f2e1] via-[#f6efe0] to-[#f2e7d3] font-tomato-sans">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#f48e47]/18 blur-[140px]" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-[#df0939]/12 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#f7d4a2]/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20">
        <header className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-700">Studio</p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Sign in
          </h1>
          <p className="mx-auto max-w-xl text-sm text-slate-700 md:text-base">
            This studio is private. Use your password to unlock editing access.
          </p>
        </header>

        <section className="mx-auto w-full max-w-md rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-[0_20px_60px_-50px_rgba(94,74,43,0.45)] backdrop-blur">
          <LoginForm nextPath={nextPath} />
        </section>
      </div>
    </div>
  );
}
