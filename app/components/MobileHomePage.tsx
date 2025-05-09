"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/ui/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";
import { GitHubButton } from "@/components/github-button";
import { SVGKeyboard } from "@/components/svg-keyboard";
import { useScroll, useTransform } from "motion/react";

const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "Botflow.io",
    period: "2023 – present",
    desc: "A SAAS platform for creating AI Chatbots, embeddable on any website.",
    img: "/botflow-landing.png",
    tags: ["Next.js", "OpenAI", "TypeScript", "Stripe"],
  },
  {
    title: "Linkme.tld",
    period: "2024 – present",
    desc: "QR Code Generator — an open-source alternative to Flowcode.",
    img: "/rangers-qr.png",
    tags: ["TypeScript", "ShadCN UI"],
  },
  {
    title: "This Website",
    period: "2023 – present",
    desc: "Personal portfolio with advanced animations.",
    img: "/og-image.png",
    tags: ["Framer Motion", "Next.js", "Tailwind"],
  },
];

export default function MobileHomePage() {
  /** keep the tab logic unchanged ↓ ↓ ↓ */
  const [activeTab, setActiveTab] = useState<1 | 2 | 3 | 4>(4);

  // Animation variants
  const titleVariants: Variants = {
    offscreen: { y: 300 },
    onscreen: {
      y: 20,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="overflow-x-clip bg-[#f0f0f0] min-h-screen z-10">
      <ScrollProgress className="top-0" />
      <Navbar />

       {/* Hero Section */}
       <motion.section
        className="-mb-[1rem]"
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <motion.div
            // ref={headerRef}
            className="w-screen border-b border-gray-300 top-[5rem] lg:pb-0 md:pb-10 pb-14"
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              paddingTop: 20,
              marginBottom: -60,
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >

            <motion.div
              variants={titleVariants}
              className="relative text-[#df0939] font-bold text-[8rem] md:text-[9rem] lg:text-[14rem] text-center leading-none"
            >
              <h1 className="whitespace-normal">Aronne Kohler</h1>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* ––––– HERO / ABOUT ––––– */}
      <section className="px-6 pt-24 flex flex-col gap-16 text-black">
        {/* tagline */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl flex items-center justify-center">
          <div className="flex flex-col">
            <h2 className="">Aronne Kohler</h2>
            <div className="text-2xl md:text-5xl">
              <p>Full stack developer, AI integrator</p>
              <p>Liberty University &apos;26</p>
            </div>
          </div>

        </motion.div>

        {/* profile picture */}
        <motion.div
          className="flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <Image
            src="/profile.png"
            alt="Profile"
            width={240}
            height={240}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        {/* mission statement */}
        <motion.p
          className="text-2xl leading-snug text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Creating beautiful interfaces that serve people and solve problems.
        </motion.p>

        {/* resume image + CTA */}
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <Link href="/resume" passHref className="relative">
            <Image
              src="/resume.png"
              alt="Resume"
              width={320}
              height={420}
              className="rounded-xl border-4 border-black/10"
            />

            {/* Centered overlay button */}
            <span
              className="absolute inset-0 m-auto flex h-fit w-max items-center justify-center
                        px-6 py-2 bg-[#df0939] text-white rounded-full text-lg font-semibold
                        shadow-lg hover:brightness-110 transition"
            >
              View Resume
            </span>
          </Link>
        </motion.div>
      </section>

      {/* ––––– PROJECTS ––––– */}
      <section className="mt-20 px-6 pb-24 bg-[#0e100f] text-[#f7f2e1] pt-12">
        <motion.h2
          className="text-7xl font-extrabold text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Projects
        </motion.h2>

        <div className="flex flex-col gap-12">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="bg-white/5 rounded-2xl overflow-hidden shadow-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: idx * 0.05 }}
            >
              <Image
                src={p.img}
                alt={p.title}
                width={640}
                height={360}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <span className="text-sm opacity-70">{p.period}</span>
                <p>{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Skills Tab Sections */}
      <div className="relative bg-[#0e100f]" style={{ zIndex: 20 }}>
        {/* Fullstack Development Tab */}
        <section className={cn(
          "relative text-[#0e100f] h-screen sticky top-0 overflow-hidden pointer-events-none",
          activeTab === 1 ? "z-10" : ""
        )}>
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 w-full pointer-events-none">
            <div 
              className="bg-[#f7f2e1] h-full rounded-tl-md col-start-1 col-span-1 cursor-pointer pointer-events-auto"
              onClick={() => setActiveTab(1)}
            ></div>
            <svg 
              viewBox="0 0 40 40" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-[100%] cursor-pointer z-15 pointer-events-auto" 
              onClick={() => setActiveTab(1)}
            >
              <path d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z" fill="#f7f2e1"/>
            </svg>
          </div>

          <div className="py-8 px-4 h-[calc(100vh-1.75rem)] flex flex-col bg-[#f7f2e1] overflow-auto">
            <h2 className="text-4xl font-bold mb-6">Fullstack</h2>

            {/* intro paragraph */}
            <p className="text-base mb-6">
              My strongest skill. I have several years of experience across several projects. From
              CSS to REST APIs, CRUD, to security and resilience, I am a strong full-stack developer.
            </p>

            {/* tech columns side-by-side on mobile */}
            <div className="grid grid-cols-2 gap-4">
              {/* Frontend */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
                <ul className="text-sm space-y-1 list-disc ml-4">
                  <li>React &amp; Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>ShadCN UI</li>
                  <li>Stripe</li>
                  <li>Supabase</li>
                  <li>Framer Motion</li>
                  <li>Vercel</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Backend</h3>
                <ul className="text-sm space-y-1 list-disc ml-4">
                  <li>Node.js</li>
                  <li>Python / Django</li>
                  <li>PostgreSQL / MySQL</li>
                  <li>AWS &amp; Serverless</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Tab */}
        <section className={cn(
          "relative text-[#0e100f] h-screen sticky top-0 overflow-hidden pointer-events-none",
          activeTab === 2 ? "z-10" : ""
        )}>
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[1.5rem] pointer-events-none">
            <div 
              className="bg-[#EDD230] h-full rounded-tl-md col-start-2 col-span-1 cursor-pointer pointer-events-auto" 
              onClick={() => setActiveTab(2)}
            ></div>
            <svg 
              viewBox="0 0 40 40" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-[100%] cursor-pointer pointer-events-auto" 
              onClick={() => setActiveTab(2)}
            >
              <path d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z" fill="#EDD230" />
            </svg>
          </div>

          <div className="py-8 px-4 h-[calc(100vh-1.75rem)] flex flex-col bg-[#EDD230] overflow-auto">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>

      {/* compact list of project cards */}
      <div className="flex flex-col gap-3">
        {/* repeat structure for each project */}
        {[
          {
            name: "Botflow.io",
            date: "2023-present",
            tags: ["Next.js", "OpenAI", "TypeScript"],
          },
          {
            name: "Linkme.tld",
            date: "2024-present",
            tags: ["TypeScript", "ShadCN UI"],
          },
          {
            name: "SQL-MCP",
            date: "2025-present",
            tags: ["PostgreSQL", "MySQL", "Supabase"],
          },
          {
            name: "Buddy AI",
            date: "2024-present",
            tags: ["Anthropic", "Groq API"],
          },
          {
            name: "Liberty University AI",
            date: "2023-2024",
            tags: ["React", "OpenAI"],
          },
          {
            name: "This Website",
            date: "2023-present",
            tags: ["Motion", "Next.js"],
          },
              ].map((proj) => (
                <div key={proj.name} className="bg-[#f5f5f5] p-3 shadow-md">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{proj.name}</h3>
                    <p className="text-xs text-gray-500">{proj.date}</p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded-full text-xs bg-gray-200 whitespace-nowrap"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI & Concepts Tab */}
        <section className={cn(
          "relative h-screen sticky top-0 overflow-hidden pointer-events-none",
          activeTab === 3 ? "z-10" : ""
        )}>
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[3.5rem] pointer-events-none">
          <div 
              className="bg-[#e07a5f] h-full rounded-tl-md col-start-3 col-span-1 cursor-pointer pointer-events-auto" 
              onClick={() => setActiveTab(3)}
            ></div>
            <svg 
              viewBox="0 0 40 40" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-[100%] cursor-pointer pointer-events-auto" 
              onClick={() => setActiveTab(3)}
            >
              <path d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z" fill="#e07a5f" />
            </svg>
          </div>

          <div className="py-8 px-4 h-[calc(100vh-1.75rem)] flex flex-col bg-[#e07a5f] overflow-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">AI &amp; Concepts</h2>

            {/* two columns side-by-side */}
            <div className="grid grid-cols-2 gap-6">
              {/* AI Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">AI Technologies</h3>
                <ul className="text-sm space-y-1 list-disc pl-4 text-white">
                  <li>Retrieval Augmented Generation</li>
                  <li>LLM Streaming</li>
                  <li>Agentic AI</li>
                  <li>Multimodal Embeddings</li>
                  <li>LLM Driven Development</li>
                  <li>Hybrid Search</li>
                  <li>OpenAI API</li>
                  <li>Anthropic Claude</li>
                </ul>
              </div>

              {/* Concepts & Architecture */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Concepts &amp; Architecture</h3>
                <ul className="text-sm space-y-1 list-disc pl-4 text-white">
                  <li>React Server Components</li>
                  <li>Static Site Generation</li>
                  <li>CDN Distribution</li>
                  <li>Containerization</li>
                  <li>Microservices</li>
                  <li>Cross-site Embedding</li>
                  <li>Authentication</li>
                  <li>Serverless Deployment</li>
                  <li>Rate Limiting</li>
                  <li>KV Storage</li>
                  <li>Headless CMS</li>
                  <li>GitHub Actions</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        {/* Contact Tab */}
        <section className={cn(
          "relative text-[#0e100f] h-screen sticky top-0 overflow-hidden pointer-events-none",
          activeTab === 4 ? "z-10" : ""
        )}>
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[6rem] pointer-events-none">
            <div 
              className="bg-[#f5f5f5] h-full rounded-tl-md col-start-4 col-span-1 cursor-pointer pointer-events-auto" 
              onClick={() => setActiveTab(4)}
            ></div>
            <svg 
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg" 
              className="h-[100%] cursor-pointer pointer-events-auto" 
              onClick={() => setActiveTab(4)}
            >
              <path d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z" fill="#f5f5f5" />
            </svg>
          </div>

          <motion.div
            className="py-8 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#f5f5f5] overflow-auto"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              {/* <h2 className="text-6xl md:text-8xl font-bold mb-3">Connect</h2> */}
              <h2 className="text-4xl font-bold mb-6 text-black">Connect</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                    <Image 
                      src="/profile.png" 
                      alt="Profile picture" 
                      width={256} 
                      height={256} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-2">Contact Information</h3>
                  <ul className="space-y-2 text-xl">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:awkohler@liberty.edu" className="hover:underline">awkohler@liberty.edu</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:awkohler@botflow.io" className="hover:underline">awkohler@botflow.io</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <a href="mailto:aronnek336@proton.me" className="hover:underline">aronnek336@proton.me</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <a href="https://github.com/awkohler" className="hover:underline">github.com/awkohler</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <a href="https://linkedin.com/in/aronneKohler" className="hover:underline">linkedin.com/in/aronneKohler</a>
                    </li>
                  </ul>

                  {/* <motion.button 
                    className="mt-8 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Download Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </motion.button> */}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
