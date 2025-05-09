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
    <div className="overflow-x-clip bg-[#f0f0f0] min-h-screen">
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
              // marginBottom: -120,
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >
            <motion.div
              variants={titleVariants}
              className="text-[#df0939] font-bold text-[5rem] md:text-[9rem] lg:text-[14rem] gap-y-0 text-center break-words leading-none"
            >
              <SVGKeyboard className="z-9" />
              <h1 className="whitespace-normal z-10">Aronne Kohler</h1>

            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ––––– HERO / ABOUT ––––– */}
      <section className="px-6 pt-8 flex flex-col gap-16 text-black">
        {/* tagline */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl flex items-center justify-center">
          {/* <h1 className="text-[#df0939] text-4xl font-extrabold leading-tight text-center">
            Full-stack Developer<br />AI Integrator
          </h1>
          <p className="mt-3 text-xl text-center">Liberty University ’26</p> */}

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
            <span className="absolute inset-x-0 bottom-4 mx-auto w-max px-6 py-2 bg-[#df0939] text-white rounded-full text-lg font-semibold shadow-lg hover:brightness-110 transition">
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

          <motion.div
            className="py-20 px-12 h-[calc(100vh-2.5rem)] flex flex-col justify-start items-center bg-[#f7f2e1] overflow-auto"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mx-auto flex flex-col justify-start items-start w-full h-full pt-2.5">
              <div className="mb-8 w-full">
                <h2 className="text-6xl md:text-8xl font-bold px-6 w-fit bg-[#f7f2e1]">
                  Fullstack
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 w-full">
                <div className="px-6 bg-[#f7f2e1] w-full md:w-2/3">
                  <h3 className="text-4xl md:text-6xl font-semibold">Web</h3>
                  <p className="text-xl md:text-2xl">
                    My strongest skill. I have several years of experience across
                    several projects. From CSS to REST APIs, CRUD, to security
                    and resilience, I am a strong fullstack developer.
                  </p>
                </div>

                <div className="px-6 bg-[#f7f2e1]">
                  <h3 className="text-4xl md:text-6xl font-semibold mb-6">Frontend</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-4 text-xl md:text-2xl">
                      <li className="flex items-center gap-4">
                        <Image src="/web/react-2.svg" alt="React" width={40} height={40} />
                        React & Next.js
                      </li>
                      <li className="flex items-center gap-4">
                        <Image src="/web/typescript.svg" alt="TypeScript" width={40} height={40} />
                        TypeScript
                      </li>
                      <li className="flex items-center gap-4">
                        <Image src="/web/tailwindcss.svg" alt="Tailwind" width={40} height={40} />
                        Tailwind CSS
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="bg-black rounded-full p-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-white">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line>
                            <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line>
                          </svg>
                        </div>
                        ShadCN UI
                      </li>
                    </ul>
                    <ul className="space-y-4 text-xl md:text-2xl">
                      <li className="flex items-center gap-4">
                        <Image src="/web/stripe-4.svg" alt="Stripe" width={40} height={40} />
                        Stripe
                      </li>
                      <li className="flex items-center gap-4">
                        <Image src="/web/supabase-logo.svg" alt="Supabase" width={40} height={40} />
                        Supabase
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="text-3xl">🔥</span>
                        Framer Motion
                      </li>
                      <li className="flex items-center gap-4">
                        <Image src="/web/vercel.svg" alt="Vercel" width={40} height={40} />
                        Vercel
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-6 bg-[#f7f2e1]">
                  <h3 className="text-4xl md:text-6xl font-semibold mb-6">Backend</h3>
                  <ul className="space-y-4 text-xl md:text-2xl">
                    <li className="flex items-center gap-4">
                      <Image src="/web/logo-javascript.svg" alt="JavaScript" width={40} height={40} />
                      Node.js
                    </li>
                    <li className="flex items-center gap-4">
                      <Image src="/lang/python-5.svg" alt="Python" width={40} height={40} />
                      Python / Django
                    </li>
                    <li className="flex items-center gap-4">
                      <Image src="/web/prisma-3.svg" alt="Prisma" width={40} height={40} />
                      PostgreSQL / MySQL
                    </li>
                    <li className="flex items-center gap-4">
                      <Image src="/web/aws-logo.svg" alt="AWS" width={40} height={40} />
                      AWS & Serverless
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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

          <motion.div
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#EDD230] overflow-auto"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-8">Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-[#f5f5f5] p-6 shadow-md flex flex-col h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">Botflow.io</h3>
                    <p className="text-sm text-gray-500">2023 - present</p>
                    <p className="mt-2">A SAAS platform for creating AI Chatbots, embeddable on any website</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs bg-slate-800 text-white">Next.js</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-200">OpenAI</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-500 text-white">TypeScript</span>
                    <span className="px-2 py-1 bg-blue-500 rounded-full text-xs text-white">Stripe</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 shadow-md flex flex-col h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">Linkme.tld</h3>
                    <p className="text-sm text-gray-500">2024 - present</p>
                    <p className="mt-2">QR Code Generator - an open source alternative to Flowcode</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-500 text-white">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">ShadCN UI</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 shadow-md flex flex-col h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">SQL-MCP</h3>
                    <p className="text-sm text-gray-500">2025 - present</p>
                    <p className="mt-2">SQL Management Control Platform</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">PostgreSQL</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">MySQL</span>
                    <span className="px-2 py-1 bg-green-600 rounded-full text-xs">Supabase</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 shadow-md flex flex-col h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">Buddy AI</h3>
                    <p className="text-sm text-gray-500">2024 - present</p>
                    <p className="mt-2">AI companion for personal tasks</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-400 rounded-full text-xs">Anthropic</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Groq API</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">RAG</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 shadow-md flex flex-col h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">Liberty University AI</h3>
                    <p className="text-sm text-gray-500">2023 - 2024</p>
                    <p className="mt-2">Chatbot for Liberty University</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-300">React</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">OpenAI</span>
                    <span className="px-2 py-1 bg-purple-600 rounded-full text-xs text-white">Botflow</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 shadow-md flex flex-col h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">This Website</h3>
                    <p className="text-sm text-gray-500">2023 - present</p>
                    <p className="mt-2">Personal portfolio with advanced animations</p>
                  </div>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-yellow-300 rounded-full text-xs">Motion</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs bg-slate-800 text-white">Next.js</span>
                    <span className="px-2 py-1 bg-blue-400 rounded-full text-xs">Tailwind</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
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

          <motion.div
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#e07a5f] overflow-auto"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-8">AI & Concepts</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">AI Technologies</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-black">
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Retrieval Augmented Generation</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">LLM Streaming</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Agentic AI</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Multimodal Embeddings</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">LLM Driven Development</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Hybrid Search</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">OpenAI API</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Anthropic Claude</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-6">Concepts & Architecture</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-black">
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">React Server Components</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Static Site Generation</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">CDN Distribution</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Containerization</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Microservices</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Cross-site Embedding</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Authentication</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Serverless Deployment</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Rate Limiting</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">KV Storage</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Headless CMS</div>
                    <div className="bg-white/80 p-4 rounded-3xl shadow-sm">Github Actions</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#f5f5f5] overflow-auto"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-8">Connect</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
                  <ul className="space-y-6 text-xl">
                    <li className="flex items-center gap-3">
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

                  <motion.button 
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
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
