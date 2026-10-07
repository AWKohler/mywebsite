import { Download } from "lucide-react";
import React from "react";

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 bg-white shadow">
      {/* ---------- Heading ---------- */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-tight">Aronne Kohler</h1>
        <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-2 text-lg">
          <span>336-708-7723</span>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:awkohler@liberty.edu" className="hover:underline">
            awkohler@liberty.edu
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://linkedin.com/in/aronnek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/aronnek
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://github.com/awkohler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/awkohler
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://awkohler.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            awkohler.dev
          </a>
        </div>
      </header>

      {/* ---------- Education ---------- */}
      <Section title="Education">
        <Entry
          heading="Liberty University"
          subheading="B.S. in Computer Science • Lynchburg, VA"
          date="Aug 2022 – May 2027"
        />
      </Section>

      {/* ---------- Professional Experience ---------- */}
      <Section title="Professional Experience">
        <Entry
          heading="Software Engineer, Data Intern"
          subheading="Cachengo — Huntingdon, TN (Remote)"
          date="Jun 2025 – Aug 2025"
          bullets={[
            "Generated synthetic datasets in Python to stand in for not-yet-available computer-vision event data — person, vehicle and animal detections from security cameras — unblocking the team to build and validate Power BI dashboards months ahead of the upstream data pipeline.",
            "Built an MCP server integrating AI agents to automate internal data workflows.",
            "Contributed to the company's Capacitor-based mobile app for end-user security-camera monitoring.",
          ]}
        />

        <Entry
          heading="Senior Capstone Developer — Salesforce Platform"
          subheading="Upsource Solutions (Salesforce consultancy & AppExchange ISV) — Lynchburg, VA"
          date="Aug 2026 – May 2027 (in progress)"
          bullets={[
            "One of five seniors building internal developer tooling for a Salesforce ISV, targeting their two products: MergeUp (Salesforce document generation) and sFiles (SharePoint–Salesforce file integration).",
            "Scope: a Bash entry point that provisions a working scratch org from clean prerequisites via SFDX — package resolution, shared metadata, reusable deployment logic and synthetic seed data — so a full demo environment builds in one command instead of by hand.",
            "Engineering guardrails: automated tests, linting, static validation and GitHub Actions CI, with shared logic centralized across four independent industry modules.",
          ]}
        />

        <Entry
          heading="Freelance Web Developer"
          subheading="Contract — Sweat & Soak, Brewvita Coffee Co."
          date="2025 – Present"
          bullets={[
            "Designed and built sweatandsoak.com for a college wellness-event company covered by The New York Times and Fox News: multi-campus event calendar, video recaps, merch sales and event-manager recruiting (Vite, Cloudflare).",
            "Rebuilt brewvita.com for a student-run coffee shop, replacing a hosted site builder with a custom front end while keeping Square as the payment backend so online orders land in the baristas' existing POS.",
          ]}
          links={[
            { label: "sweatandsoak.com", href: "https://sweatandsoak.com" },
            { label: "brewvita.com", href: "https://brewvita.com" },
          ]}
        />
      </Section>

      {/* ---------- Projects ---------- */}
      <Section title="Projects">
        <Entry
          heading="Botflow — AI App Builder"
          subheading="Founder & Sole Developer • TypeScript • Next.js • Go • Firecracker • Postgres"
          date="Jul 2025 – Present"
          bullets={[
            "Sole developer of a production SaaS that turns natural-language prompts into deployed apps — Vite web apps and native Swift iOS apps — with live users, tiered plans, and metered billing (92K lines).",
            "Built the native iOS pipeline end to end: compiles prompt-generated Swift on a Mac build cloud, streams a live H.264 Simulator preview to the browser, produces App Store builds, and sideloads onto users' plugged-in iPhones through an Xcode-less Python installer.",
            "Hardened the platform's two untrusted-code surfaces against RCE: a self-hosted Firecracker/KVM microVM sandbox (Go) running agent-generated code, and the Mac cloud compiling user-authored Swift.",
            "Designed the fuzzy code-application engine: Levenshtein-scored SEARCH/REPLACE matching with Unicode normalization, indentation reprojection, and structured near-miss feedback so the model can repair its own failed edits.",
            "Fronted six LLM providers behind one gateway with three-tier credential resolution and per-provider token metering, reconciled against Postgres usage records.",
            "Ran autonomous coding agents in-sandbox through custom MCP tool servers that call back with short-lived tokens, keeping platform credentials out of the sandbox entirely.",
            "Built the monetization stack: Stripe Connect payouts to app creators and RevenueCat iOS subscriptions, with automated per-tenant backend provisioning (Convex + Cloudflare Pages).",
          ]}
          links={[{ label: "botflow.io", href: "https://botflow.io" }]}
        />

        <Entry
          heading="Botflow Sandbox — Code Execution Service"
          subheading="Go • Firecracker • KVM • cgroup v2 • nftables"
          date="Jul 2026 – Present"
          bullets={[
            "Built a self-hosted, drop-in replacement for a managed cloud sandbox provider in Go — four daemons plus a compatibility SDK, letting applications switch execution backends by changing a base URL.",
            "Isolated untrusted guest-root code behind nested controls: KVM, a jailed Firecracker microVM per session, cgroup v2 ceilings, per-VM network namespaces, and host nftables default-drop.",
            "Separated the network-facing API from a root runtime daemon over a typed RPC schema that never accepts shell strings, and wrote a protocol-aware egress gateway validating TLS SNI with server-side DNS re-resolution.",
            "Added lifecycle management for cost control: snapshotting, idle hibernation, and a cron reaper for reclaiming storage.",
          ]}
        />

        <Entry
          heading="Botflow — AI Chatbot SaaS (original product)"
          subheading="TypeScript • React • Next.js • Prisma • RAG"
          date="Aug 2023 – May 2025"
          bullets={[
            "Built a service letting clients embed AI chatbots that schedule appointments and take payments, using OpenAI and Anthropic's APIs alongside RAG in a Next.js full-stack application.",
            "Integrated custom Stripe payment flows and appointment-booking workflows for three launch customers; sunset and later open-sourced following the pivot to the app builder.",
            "Led a capstone team of four at Liberty University (Aug 2024 – May 2025), defining the roadmap and running weekly sprints; delivered 100% of planned features on schedule.",
            "Won $1,000 in a university pitch competition for the business concept.",
          ]}
        />

        <Entry
          heading="Personal Website & Blog"
          subheading="Next.js • Tailwind CSS • Java • Spring Boot • JPA • Oracle Cloud"
          date="May 2025 – Present"
          bullets={[
            "Built awkohler.dev in Next.js and Tailwind, with a full-stack blog on a Spring Boot REST API (JPA) backed by an Oracle Cloud database, serving sub-100ms load times.",
          ]}
          links={[{ label: "awkohler.dev", href: "https://awkohler.dev" }]}
        />
      </Section>

      {/* ---------- Technical Skills ---------- */}
      <Section title="Technical Skills">
        <SkillLine
          label="Languages"
          skills="TypeScript/JavaScript, Python, Go, Java, C++, Swift, SQL"
        />
        <SkillLine
          label="Frameworks & Libraries"
          skills="React, Next.js, Vite, Node.js, Tailwind CSS, Spring Boot, Convex, Drizzle ORM, Prisma, Zod, Pandas, NumPy"
        />
        <SkillLine
          label="Infrastructure & Tools"
          skills="PostgreSQL, Redis, Docker, Firecracker, KVM, nftables, Cloudflare, Vercel, Fly.io, Oracle Cloud, GitHub Actions"
        />
        <SkillLine
          label="AI & Payments"
          skills="Anthropic, OpenAI, Google & xAI APIs, MCP tool servers, RAG, Stripe, Stripe Connect, RevenueCat"
        />
      </Section>

      {/* ---------- Download Button ---------- */}
      <a
        href="/aronne_resume.pdf"
        aria-label="Download resume as PDF"
        className="sticky right-5 bottom-5 bg-black rounded-full border h-12 w-12 flex items-center justify-center hover:bg-slate-700 cursor-pointer"
      >
        <Download color="lightgray" size={22} />
      </a>
    </main>
  );
}

/* ---------- Helper Components ---------- */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-3xl font-semibold border-b border-gray-300 pb-1 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

interface EntryLink {
  label: string;
  href: string;
}

interface EntryProps {
  heading: string;
  subheading?: string;
  date?: string;
  bullets?: string[];
  links?: EntryLink[];
}

function Entry({ heading, subheading, date, bullets, links }: EntryProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <h3 className="text-xl font-medium">{heading}</h3>
        {date && <span className="text-md text-gray-500">{date}</span>}
      </div>
      {subheading && (
        <p className="italic text-md text-gray-600 mt-0.5">{subheading}</p>
      )}
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 list-disc list-inside space-y-1 text-md leading-relaxed">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 underline underline-offset-2 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function SkillLine({ label, skills }: { label: string; skills: string }) {
  return (
    <p className="text-md mb-2">
      <span className="font-semibold">{label}: </span>
      {skills}
    </p>
  );
}
