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
            href="https://linkedin.com/in/aronne-kohler-2b1204292/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/aronne-kohler-2b1204292
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
          date="Aug 2022 – May 2026"
        />
      </Section>

      {/* ---------- Professional Experience ---------- */}
      <Section title="Professional Experience">
        <Entry
          heading="Software Engineer, Data Intern"
          subheading="Cachengo — Huntingdon, TN (Remote)"
          date="Jun 2025 – Aug 2025"
          bullets={[
            "Led the transformation of internal database data into leadership dashboards, improving decision-making visibility.",
            "Generated synthetic datasets in Python to accelerate testing, analytics, and product development.",
            "Built an MCP server and integrated AI agents to automate and streamline data workflows.",
            "Contributed production code to active company projects, enhancing performance and reliability.",
            "Partnered with cross-functional teams to ensure data accuracy, accessibility, and scalability.",
          ]}
        />
      </Section>

      {/* ---------- Leadership Experience ---------- */}
      <Section title="Leadership Experience">
        <Entry
          heading="Founder & CEO, Botflow.io"
          subheading="Lynchburg, VA & Greensboro, NC"
          date="Aug 2023 – Present"
          bullets={[
            "Launched Botflow.io, a SaaS platform for creating embedded AI chatbots on client websites.",
            "Acquired and managed three initial client contracts, overseeing requirements gathering, billing, and delivery.",
            "Architected and developed the full-stack application using Next.js, React, MySQL & Prisma; deployed on Vercel.",
          ]}
        />
        <Entry
          heading="Botflow.io Capstone"
          subheading="Liberty University • Lynchburg, VA"
          date="Aug 2023 – Present"
          bullets={[
            "Defined product roadmap and feature requirements for a team of four senior developers.",
            "Held weekly sprint planning and review meetings, ensuring milestones were achieved on schedule.",
            "Coordinated QA cycles and integrated customer feedback, resulting in 100% completion of planned tasks.",
          ]}
        />
      </Section>

      {/* ---------- Projects ---------- */}
      <Section title="Projects">
        <Entry
          heading="Botflow.io"
          subheading="TypeScript • React • Next.js • Prisma"
          date="Aug 2023 – Present"
          bullets={[
            "Built and iterated on Botflow.io, a service enabling clients to embed AI chatbots that schedule, take payments, and perform database queries.",
            "Leveraged OpenAI and Anthropic APIs alongside RAG in a Next.js-powered full-stack application.",
            "Secured three launch customers and integrated custom workflows for appointment booking and payments.",
          ]}
        />
        <Entry
          heading="Web-IDE"
          subheading="TypeScript • Next.js • WebContainers • WASM"
          date="Jul 2025 – Present"
          bullets={[
            "Developed an open-source, browser-native IDE with built-in Node.js sandbox.",
            "Leveraged WebContainers and WASM to enable a local-first development environment directly in the browser.",
          ]}
        />
        <Entry
          heading="Linkme.ltd"
          subheading="TypeScript • React • Next.js • SVG"
          date="Oct 2024 – Jan 2025"
          bullets={[
            "Built an open-source alternative to Flowcode for generating compliant, customizable QR codes.",
            "Implemented advanced SVG manipulation in React with exports to PNG, JPG, and PDF formats.",
            "Integrated IP-based geotracking for scan analytics and user insights.",
          ]}
        />
        <Entry
          heading="Personal Website"
          subheading="Next.js • Tailwind CSS • React • Framer Motion"
          date="May 2025"
          bullets={[
            "Built a responsive portfolio site (awkohler.dev) with Next.js, Tailwind, and Framer Motion.",
          ]}
        />
      </Section>

      {/* ---------- Technical Skills ---------- */}
      <Section title="Technical Skills">
        <SkillLine
          label="Languages"
          skills="TypeScript, JavaScript, Python, Java, C++, Kotlin, Swift, SQL"
        />
        <SkillLine
          label="Frameworks & Libraries"
          skills="React, Next.js, Node.js, Prisma, Angular, React Native, Tailwind CSS, Pandas, NumPy, Matplotlib, PyTorch, Scikit-Learn, Reactflow"
        />
        <SkillLine
          label="Databases"
          skills="MySQL, PostgreSQL, MongoDB, Redis, Pinecone, Epsilla, Amazon S3"
        />
        <SkillLine
          label="Cloud & Tools"
          skills="AWS, GCP, Vercel, Supabase, Docker, Cloudflare, Stripe, OpenAI API, Anthropic API"
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