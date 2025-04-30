"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { SVGKeyboard } from "@/components/svg-keyboard";
import { Navbar } from "@/components/ui/navbar";
import { GitHubButton } from "@/components/github-button";
import FooterSection from "@/components/FooterSection";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function SwingInSticky() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 1, 0.8, 0.5],
  );
  const rotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 10, 20]);

  const reft = useRef(null);
  const { scrollYProgress: progress } = useScroll({
    target: reft,
    offset: ["start start", "end start"],
  });
  const textYt = useTransform(progress, [0, 1], ["0%", "200%"]);

  const titleVariants: Variants = {
    offscreen: { y: 300 },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const resumeVariants: Variants = {
    offscreen: {
      y: 300,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
    onscreen: {
      y: 50,
      transition: {
        delay: 0.8,
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
      },
    },
  };

  const pinnedRef = useRef(null);
  const pinnedProgressRef = useRef(null);

  const { scrollYProgress: pinnedProgress } = useScroll({
    target: pinnedRef,
    offset: ["start end", "end end"],
  });

  const rotateNewSection = useTransform(pinnedProgress, [0, 1], [45, 0]);
  const yNewSection = useTransform(pinnedProgress, [0, 1], ["100%", "0%"]);

  const { scrollYProgress: pinnedProgress2 } = useScroll({
    target: pinnedProgressRef,
    offset: ["start end", "end start"],
  });

  const horizontalX = useTransform(pinnedProgress2, [0.3, 1], ["0%", "-100%"]);

  const containerRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress: newsp } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const horizontalScroll = useTransform(newsp, [0.1, 0.9], ["0%", "-75%"]);

  const targetRef = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress2, [0, 1], ["0%", "-108.5%"]);

  return (
    <div style={{ background: "#f0f0f0", margin: 0 }} className="overflow-clip">
      <ScrollProgress className="top-[0px]" />
      <Navbar />

      <motion.section
        className="-mb-[10rem]"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <motion.div
            ref={reft}
            className="w-screen border-b top-[5rem] lg:pb-0 md:pb-10 pb-14"
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              paddingTop: 20,
              marginBottom: -120,
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.5 }}
          >
            <motion.div
              variants={titleVariants}
              className="text-[#df0939] font-bold text-[5rem] md:text-[9rem] lg:text-[14rem]"
            >
              <SVGKeyboard y={textYt} />
              <TextAnimate animation="blurInUp" by="character">
                Aronne Kohler
              </TextAnimate>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        ref={ref}
        className="w-full px-6 md:px-20 text-black text-4xl md:text-7xl grid grid-cols-2 grid-rows-3 justify-center items-center gap-x-10 gap-y-60 border-b overflow-clip"
      >
        <motion.div
          className="w-full flex flex-col justify-center"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="mb-4">Aronne Kohler</h2>
          <div className="text-2xl md:text-5xl">
            <p>Full stack developer, AI integrator</p>
            <p>Liberty University &apos;26</p>
          </div>
        </motion.div>

        <motion.div
          className="w-full sticky top-20 flex items-center justify-center mt-8 md:mt-0"
          style={{ scale, rotate }}
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <BlurFade delay={0.25} inView>
            <Image
              src="/ako.png"
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-auto border"
            />
          </BlurFade>
        </motion.div>

        <div className="w-full flex flex-col justify-center text-justify">
          <h2 className="mb-4">
            Creating Beautiful Interfaces That Serve People And Solve Problems
          </h2>
        </div>

        <div className="w-full flex flex-col justify-center row-start-3">
          <h2 className="mb-4">Resume</h2>
        </div>

        <motion.section
          className="w-full sticky top-20 items-center justify-center mt-8 md:mt-0 z-10 row-start-3 col-start-2"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
            >
              <motion.div
                variants={resumeVariants}
                className="text-[#df0939] font-bold text-[14rem] p-0 border h-1/3 justify-center items-center"
              >
                <Link
                  href="/resume.png"
                  passHref
                  className="border text-center text-xl md:text-2xl px-4 md:px-6 py-2 md:py-3 gap-0 bg-gradient-to-br from-[#df0939] to-[#eb385f] items-center justify-center border-[#ff6b8e] rounded-full text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-md hover:brightness-110 transition-all duration-300 ease-in-out"
                >
                  View Resume
                </Link>

                <Image
                  src="/resume.png"
                  alt="Profile"
                  width={500}
                  height={100}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      <motion.section
        ref={pinnedRef}
        style={{
          position: "relative",
          height: "200vh",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            zIndex: 10,
          }}
        >
          <motion.div
            ref={containerRef}
            className="flex-col overflow-hidden sticky top-0"
            style={{
              rotate: rotateNewSection,
              y: yNewSection,
              background: "#0e100f",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-[9rem] font-bold text-[#f7f2e1]">Projects</h1>
          </motion.div>

          <section
            ref={targetRef}
            className="relative h-[800vh] bg-[#0e100f] w-full sticky top-0"
          >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden w-full">
              <motion.div
                style={{
                  x,
                  whiteSpace: "nowrap",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50px)",
                }}
                className="flex text-[9rem] font-bold text-[#f7f2e1] items-center -ml-[12rem]"
              >
                Projects...
                <div className="font-tomato-sans tracking-tighter pl-[20rem] text-[38rem] font-extrabold">
                  1
                </div>
                {/* <div className="font-tomato-sans tracking-tighter px-8 pl-[8rem] pr-[8rem]">
                  Botflow.io
                </div> */}


                <SparklesText className="font-tomato-sans tracking-tighter px-8 pl-[8rem] pr-[8rem] flex flex-row font-extrabold">
                  Botflow.io
                </SparklesText>
                
                A{" "}

                
                <span className="font-tomato-sans tracking-tighter px-8 bg-gradient-to-r from-[#f7f2e1] to-[#f48e47] text-transparent bg-clip-text">
                  SAAS
                </span>{" "}

                {/* <TextAnimate className="font-tomato-sans tracking-tighter pr-8 flex flex-row font-extrabold" animation="blurInDown" by="character">
                  SAAS
                </TextAnimate> */}

                {/* <SparklesText className="font-tomato-sans tracking-tighter pr-8 flex flex-row font-extrabold">
                  hey hi
                </SparklesText> */}

                {/* {" "}platform for creating{" "} */}

                <TextAnimate className="pl-8 flex flex-row" animation="slideUp" by="word">
                  platform for creating
                </TextAnimate>


                <span className="font-tomato-sans tracking-tighter px-8 bg-gradient-to-r from-[#f7f2e1] to-[#f48e47] text-transparent bg-clip-text pr-[4rem]">
                  AI Chatbots
                </span>
                <Image
                  src="/botflow-landing.png"
                  alt="landing page"
                  width={650}
                  height={500}
                  className="w-full h-auto border rounded-2xl border-[#f7f2e1] border-8"
                />

              <TextAnimate className="pl-[4rem] flex flex-row" animation="hinge" by="word">
                Embedable
              </TextAnimate>

                <span className="pl-[2rem]">on</span>

                <TextAnimate className="font-tomato-sans px-[2rem] tracking-tighter flex flex-row font-extrabold" animation="scaleDown" by="word">
                  ANY
                </TextAnimate>

                <span className="pr-[4rem]">website</span>

                <Image
                  src="/grizzly-chatbot.png"
                  alt="Grizzly Chatbot"
                  width={410}
                  height={500}
                  className="w-full h-auto border rounded-2xl border-[#f7f2e1] border-8"
                />
                <div className="font-tomato-sans tracking-tighter pl-[20rem] pr-[10rem] text-[38rem] font-extrabold">
                  2
                </div>
                {/* <span className="font-tomato-sans tracking-tighter pl-8 pr-14">
                  This website lol 💀
                </span> */}

                <TextAnimate className="font-tomato-sans tracking-tighter pr-8 flex flex-row" animation="slideUp" by="word">
                  This website lol
                </TextAnimate>
                <GitHubButton className="font-tomato-sans tracking-tighter px-8 text-[7rem]" />
                <div className="font-tomato-sans tracking-tighter pl-[20rem] pr-[10rem] text-[38rem] font-extrabold">
                  3
                </div>
                <div className="flex flex-col gap-0">
                  <span className="font-tomato-sans tracking-tighter pl-8 pr-14">
                    Linkme.ltd
                  </span>
                  <span className="font-tomato-sans tracking-tighter pl-8 pr-14 text-[3rem] py-0 -mt-16">
                    QR Code Generator
                  </span>
                </div>
                <Image
                  src="/rangers-qr.png"
                  alt="qrcode"
                  width={400}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl drop-shadow-white"
                />
                <span className="pl-8 pr-6">
                {/* <span className="pl-8 pr-14"> */}

                  An
                </span>

                {/* <span className="pl-8 pr-14">
                  open source
                </span> */}

                <TextAnimate className="flex flex-row" animation="blurInUp" by="character">
                  open source
                </TextAnimate>

                <span className="pl-6 pr-14">
                  alternative to Flowcode
                </span>

                <span className="pl-[30rem] text-[28rem] font-tomato-sans tracking-tighter">
                  Skills
                </span>
              </motion.div>
            </div>
          </section>
        </div>
      </motion.section>

      {/* <div className="relative mt-[800vh]" style={{ zIndex: 20 }}>
        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden bg-[#0e100f]">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 w-full">
            <div className="bg-[#f7f2e1] h-full rounded-tl-md col-start-1 col-span-1"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100%]"
            >
              <path
                d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z"
                fill="#f7f2e1"
              />
            </svg>
          </div>

          <motion.div
            className="py-20 px-12 h-[calc(100vh-2.5rem)] flex flex-col justify-start items-center bg-[#f7f2e1]"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mx-auto flex flex-col justify-start items-start w-full h-full border-double border-x-4 border-t-4 pt-2.5 bg-[repeating-linear-gradient(45deg,#f7f2e1,#f7f2e1_10px,#444444_10px,#444444_11px)]">
              <div className="mb-16 border-double border-b-4 w-full">
                <h2 className="text-6xl md:text-8xl font-bold border-double border-r-4 border-t-4 px-6 w-fit bg-[#f7f2e1]">
                  Fullstack development
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 w-full">
                <div className="border-double border-4 px-6 bg-[#f7f2e1] w-2/3">
                  <h3 className="text-6xl font-semibold">Web</h3>
                  <p className="text-2xl">
                    My strongest skill. I have several years of experience across
                    several projects. From CSS to REST APIs, CRUD, to security
                    and resilience, I am a strong fullstack developer.
                  </p>
                </div>

                <div className="border-double border-4 px-6 bg-[#f7f2e1]">
                  <h3 className="text-6xl font-semibold mb-6">Frontend</h3>

                  <div className="flex flex-row">
                    <ul className="space-y-4 text-2xl">
                      <li className="flex items-center gap-4">
                        <Image
                          src="/web/react-2.svg"
                          alt="React"
                          width={50}
                          height={50}
                        />
                        React & Next.js
                      </li>
                      <li className="flex items-center gap-4">
                        <Image
                          src="/web/typescript.svg"
                          alt="TypeScript"
                          width={50}
                          height={50}
                        />
                        TypeScript
                      </li>
                      <li className="flex items-center gap-4">
                        <Image
                          src="/web/tailwindcss.svg"
                          alt="Tailwind"
                          width={50}
                          height={50}
                        />
                        Tailwind CSS
                      </li>
                      <li className="flex items-center gap-4">
                        <svg
                          viewBox="0 0 84 30"
                          className="transform scale-[0.6] origin-top-left"
                        >
                          <path
                            d="M 31.717 0 L 15.12 29.974 L 0 29.974 L 12.959 6.569 C 14.968 2.941 19.982 0 24.157 0 Z M 68.795 7.493 C 68.795 3.355 72.18 0 76.355 0 C 80.531 0 83.915 3.355 83.915 7.493 C 83.915 11.632 80.531 14.987 76.355 14.987 C 72.18 14.987 68.795 11.632 68.795 7.493 Z M 34.552 0 L 49.672 0 L 33.075 29.974 L 17.955 29.974 Z M 52.41 0 L 67.53 0 L 54.57 23.404 C 52.561 27.033 47.548 29.974 43.373 29.974 L 35.813 29.974 Z"
                            fill="var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a, rgb(15, 17, 21))"
                          />
                        </svg>
                        Framer Motion
                      </li>
                    </ul>

                    <ul className="space-y-4 text-2xl">
                      <li className="flex items-center gap-4">
                        <Image
                          src="/web/stripe-4.svg"
                          alt="React"
                          width={50}
                          height={50}
                        />
                        Stripe
                      </li>
                      <li className="flex items-center gap-4">
                        <Image
                          src="/web/supabase-logo.svg"
                          alt="TypeScript"
                          width={50}
                          height={50}
                        />
                        Supabase
                      </li>
                      <li className="flex items-center gap-4">
                        <Image
                          src="/web/aws-logo.svg"
                          alt="Tailwind"
                          width={50}
                          height={50}
                        />
                        AWS
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="text-4xl">🔥</span>
                        Framer Motion
                      </li>

                      <li className="flex items-center gap-4">
                        <div className="bg-black rounded-full p-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="h-6 w-6 text-white"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                              x1="208"
                              y1="128"
                              x2="128"
                              y2="208"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                            ></line>
                            <line
                              x1="192"
                              y1="40"
                              x2="40"
                              y2="192"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                            ></line>
                          </svg>
                        </div>
                        ShadCN UI
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-double border-4 px-6 bg-[#f7f2e1]">
                  <h3 className="text-6xl font-semibold mb-6">Backend</h3>
                  <ul className="space-y-4 text-2xl">
                    <li className="flex items-center gap-4">
                      <Image
                        src="/web/logo-javascript.svg"
                        alt="JavaScript"
                        width={50}
                        height={50}
                      />
                      Node.js
                    </li>
                    <li className="flex items-center gap-4">
                      <Image
                        src="/lang/python-5.svg"
                        alt="Python"
                        width={50}
                        height={50}
                      />
                      Python
                    </li>
                    <li className="flex items-center gap-4">
                      <Image
                        src="/web/prisma-3.svg"
                        alt="Prisma"
                        width={50}
                        height={50}
                      />
                      PostgreSQL
                    </li>
                    <li className="flex items-center gap-4">
                      <Image
                        src="/web/vercel.svg"
                        alt="Vercel"
                        width={50}
                        height={50}
                      />
                      AWS & Vercel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[1.5rem]">
            <div className="bg-[#EDD230] h-full rounded-tl-md col-start-2 col-span-1"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100%]"
            >
              <path
                d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z"
                fill="#EDD230"
              />
            </svg>
          </div>

          <motion.div
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#EDD230]"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-16">
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">Frontend</h3>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/react-2.svg"
                        alt="React"
                        width={30}
                        height={30}
                      />
                      React & Next.js
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/typescript.svg"
                        alt="TypeScript"
                        width={30}
                        height={30}
                      />
                      TypeScript
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/tailwindcss.svg"
                        alt="Tailwind"
                        width={30}
                        height={30}
                      />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🔥</span>
                      Framer Motion
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-6">Backend</h3>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/logo-javascript.svg"
                        alt="JavaScript"
                        width={30}
                        height={30}
                      />
                      Node.js
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/lang/python-5.svg"
                        alt="Python"
                        width={30}
                        height={30}
                      />
                      Python
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/prisma-3.svg"
                        alt="Prisma"
                        width={30}
                        height={30}
                      />
                      PostgreSQL
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/vercel.svg"
                        alt="Vercel"
                        width={30}
                        height={30}
                      />
                      AWS & Vercel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[3.5rem]">
            <div className="bg-[#d9d9d9] h-full rounded-tl-md col-start-3 col-span-1"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100%]"
            >
              <path
                d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z"
                fill="#d9d9d9"
              />
            </svg>
          </div>

          <motion.div
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#d9d9d9]"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-16">AI</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">Frontend</h3>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/react-2.svg"
                        alt="React"
                        width={30}
                        height={30}
                      />
                      React & Next.js
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/typescript.svg"
                        alt="TypeScript"
                        width={30}
                        height={30}
                      />
                      TypeScript
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/tailwindcss.svg"
                        alt="Tailwind"
                        width={30}
                        height={30}
                      />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🔥</span>
                      Framer Motion
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-6">Backend</h3>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/logo-javascript.svg"
                        alt="JavaScript"
                        width={30}
                        height={30}
                      />
                      Node.js
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/lang/python-5.svg"
                        alt="Python"
                        width={30}
                        height={30}
                      />
                      Python
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/prisma-3.svg"
                        alt="Prisma"
                        width={30}
                        height={30}
                      />
                      PostgreSQL
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/vercel.svg"
                        alt="Vercel"
                        width={30}
                        height={30}
                      />
                      AWS & Vercel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[6rem]">
            <div className="bg-[#f5f5f5] h-full rounded-tl-md col-start-4 col-span-1"></div>
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100%]"
            >
              <path
                d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z"
                fill="#f5f5f5"
              />
            </svg>
          </div>

          <motion.div
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#f5f5f5]"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-16">
                Contact me
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">Frontend</h3>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/react-2.svg"
                        alt="React"
                        width={30}
                        height={30}
                      />
                      React & Next.js
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/typescript.svg"
                        alt="TypeScript"
                        width={30}
                        height={30}
                      />
                      TypeScript
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/tailwindcss.svg"
                        alt="Tailwind"
                        width={30}
                        height={30}
                      />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🔥</span>
                      Framer Motion
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-6">Backend</h3>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/logo-javascript.svg"
                        alt="JavaScript"
                        width={30}
                        height={30}
                      />
                      Node.js
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/lang/python-5.svg"
                        alt="Python"
                        width={30}
                        height={30}
                      />
                      Python
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/prisma-3.svg"
                        alt="Prisma"
                        width={30}
                        height={30}
                      />
                      PostgreSQL
                    </li>
                    <li className="flex items-center gap-3">
                      <Image
                        src="/web/vercel.svg"
                        alt="Vercel"
                        width={30}
                        height={30}
                      />
                      AWS & Vercel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div> */}


      <div className="relative mt-[800vh]" style={{ zIndex: 20 }}>
        {/* Fullstack Development Section */}
        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden bg-[#0e100f]">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 w-full">
            <div className="bg-[#f7f2e1] h-full rounded-tl-md col-start-1 col-span-1"></div>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-[100%]">
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
                      Python
                    </li>
                    <li className="flex items-center gap-4">
                      <Image src="/web/prisma-3.svg" alt="Prisma" width={40} height={40} />
                      PostgreSQL/MySQL
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

        {/* Projects Section */}
        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[1.5rem]">
            <div className="bg-[#EDD230] h-full rounded-tl-md col-start-2 col-span-1"></div>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-[100%]">
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
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold">Botflow.io</h3>
                  <p className="text-sm text-gray-500">2023 - present</p>
                  <p className="mt-2">A SAAS platform for creating AI Chatbots, embeddable on any website</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">OpenAI</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold">Linkme.tld</h3>
                  <p className="text-sm text-gray-500">2024 - present</p>
                  <p className="mt-2">QR Code Generator - an open source alternative to Flowcode</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">ShadCN UI</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Stripe</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold">SQL-MCP</h3>
                  <p className="text-sm text-gray-500">2025 - present</p>
                  <p className="mt-2">SQL Management Control Platform</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">PostgreSQL</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">MongoDB</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Prisma</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold">Buddy AI</h3>
                  <p className="text-sm text-gray-500">2024 - present</p>
                  <p className="mt-2">AI companion for personal tasks</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Anthropic</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Groq API</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">RAG</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold">Liberty University AI</h3>
                  <p className="text-sm text-gray-500">2023 - 2024</p>
                  <p className="mt-2">Chatbot for Liberty University</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">OpenAI</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Supabase</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-[#f5f5f5] p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold">This Website</h3>
                  <p className="text-sm text-gray-500">2023 - present</p>
                  <p className="mt-2">Personal portfolio with advanced animations</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Framer Motion</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Tailwind</span>
                  </div>
                  <GitHubButton className="mt-4 text-xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* AI Section */}
        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[3.5rem]">
            <div className="bg-[#d9d9d9] h-full rounded-tl-md col-start-3 col-span-1"></div>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-[100%]">
              <path d="M 0 40 L 40 40 L 5.788 1.986 C 4.65 0.722 3.029 0 1.328 0 L 0 0 Z" fill="#d9d9d9" />
            </svg>
          </div>

          <motion.div
            className="py-20 px-8 h-[calc(100vh-2.5rem)] flex flex-col justify-start bg-[#d9d9d9] overflow-auto"
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-8">AI & Concepts</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-semibold mb-6">AI Technologies</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="bg-white p-4 rounded-lg shadow-sm">Retrieval Augmented Generation</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">LLM Streaming</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Agentic AI</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Multimodal Embeddings</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">LLM Driven Development</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Hybrid Search</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">OpenAI API</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Anthropic Claude</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-6">Concepts & Architecture</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="bg-white p-4 rounded-lg shadow-sm">React Server Components</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Static Site Generation</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">CDN Distribution</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Containerization</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Microservices</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Cross-site Embedding</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Authentication</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Serverless Deployment</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Rate Limiting</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">KV Storage</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Headless CMS</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">Github Actions</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="relative text-[#0e100f] h-screen sticky top-0 overflow-hidden">
          <div className="h-20" />
          <div className="h-10 flex flex-row grid grid-cols-6 ml-[6rem]">
            <div className="bg-[#f5f5f5] h-full rounded-tl-md col-start-4 col-span-1"></div>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-[100%]">
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
                    <span className="text-6xl">AK</span>
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

      <FooterSection />
    </div>
  );
}
