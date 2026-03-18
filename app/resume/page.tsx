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
          date="Aug 2022 – Present"
        />
      </Section>

      {/* ---------- Professional Experience ---------- */}
      <Section title="Professional Experience">
        <Entry
          heading="Software Engineer, Data Intern"
          subheading="Cachengo — Huntingdon, TN (Remote)"
          date="Jun 2025 – Aug 2025"
          bullets={[
            "Led the transformation of internal database data into leadership dashboards in collaboration with engineering and operations teams, improving decision-making visibility.",
            "Generated synthetic datasets in Python to accelerate testing, analytics, and product development.",
            "Built an MCP server and integrated AI agents to automate and streamline data workflows.",
            "Contributed to Cachengo's Capacitor-based mobile app used by end users to monitor security cameras.",
          ]}
        />
      </Section>

      {/* ---------- Leadership Experience ---------- */}
      <Section title="Leadership Experience">
        <Entry
          heading="Founder, Botflow.io"
          subheading="Lynchburg, VA & Greensboro, NC"
          date="Aug 2023 – Present"
          bullets={[
            "Founded Botflow.io as an AI chatbot SaaS; acquired and managed clients before pivoting the product.",
            "Pivoted to OpenVibeCode, a no-code web app creation platform (akin to Lovable and Base44), relaunched under the Botflow trademark on botflow.io.",
            "Led a capstone team of four at Liberty University (Aug 2024 – May 2025), defining the product roadmap and running weekly sprint planning and review meetings.",
            "Coordinated QA cycles and integrated customer feedback, delivering 100% of planned features on schedule.",
            "Collaborated with the capstone team to design and deliver Botflow's no-code AI agent builder, enabling non-technical users to create and deploy custom AI workflows.",
            "Won $1,000 in a university pitch competition for the Botflow.io business concept.",
          ]}
        />
      </Section>

      {/* ---------- Projects ---------- */}
      <Section title="Projects">
        <Entry
          heading="OpenVibeCode — botflow.io"
          subheading="TypeScript • Next.js • Agents • WebContainers • Convex"
          date="Jul 2025 – Present"
          bullets={[
            "Built an AI-powered web IDE enabling users to build and deploy full-stack web apps in minutes through natural language. Hosted on botflow.io under the Botflow trademark.",
            "Integrated multi-provider LLM orchestration (Claude, GPT, Fireworks) with sophisticated code diff and application algorithms for reliable autonomous code generation.",
            "Architected browser-native Node.js execution via WebContainers and WASM, eliminating local setup friction.",
            "Integrated Convex as the platform backend for real-time data, auth, and serverless functions out of the box.",
          ]}
        />
        <Entry
          heading="Botflow.io — Technical Implementation"
          subheading="TypeScript • React • Next.js • Prisma"
          date="Aug 2023 – Feb 2026"
          bullets={[
            "Built Botflow.io, a service enabling clients to embed AI chatbots that schedule appointments and take payments.",
            "Leveraged OpenAI and Anthropic's API alongside RAG in a Next.js powered full-stack application.",
            "Integrated custom Stripe payment flows and appointment booking workflows for three launch customers; product sunset Feb 2026 following pivot to OpenVibeCode.",
          ]}
        />
        <Entry
          heading="Personal Website & Blog"
          subheading="Next.js • Tailwind CSS • Java • Spring Boot • Oracle Cloud"
          date="May 2025 – Present"
          bullets={[
            "Built a responsive portfolio site (awkohler.dev) with Next.js, Tailwind, and Framer Motion.",
            "Integrated a full-stack blog with a Spring Boot REST API, JPA, and an Oracle Cloud database.",
            "Deployed on Oracle Cloud Free Tier, achieving near-zero maintenance and sub 100-ms load times.",
          ]}
        />
      </Section>

      {/* ---------- Technical Skills ---------- */}
      <Section title="Technical Skills">
        <SkillLine
          label="Languages"
          skills="TypeScript, JavaScript, Python, Java, C++, C#, Swift, SQL"
        />
        <SkillLine
          label="Frameworks & Libraries"
          skills="React, Next.js, Node.js, Express.js, Astro, Tailwind CSS, Convex, Drizzle ORM, Prisma, React Hook Form, Zod, Pandas, NumPy, Matplotlib, PyTorch, Scikit-Learn, Reactflow"
        />
        <SkillLine
          label="Databases & Infrastructure"
          skills="PostgreSQL, MySQL, MongoDB, Redis, Neon, Pinecone, Amazon S3, Cloudflare R2"
        />
        <SkillLine
          label="Cloud & Tools"
          skills="Vercel, Cloudflare, AWS, Fly.io, Docker, GitHub Actions, Clerk, Stripe, OpenAI API, Anthropic API"
        />
      </Section>

      {/* ---------- Download Button ---------- */}
      <a
        href="/aronne_resume.pdf"
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

interface EntryProps {
  heading: string;
  subheading?: string;
  date?: string;
  bullets?: string[];
}

function Entry({ heading, subheading, date, bullets }: EntryProps) {
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
