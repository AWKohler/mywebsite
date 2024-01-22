"use client"

import Image from "next/image";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Hero from "@/components/page/hero";
import AboutMe from "@/components/page/aboutMe";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-clip">

        <Hero></Hero>

        {/*<div className={"grid grid-rows-3 grid-cols-2 gap-4 w-3/4 mb-32 py-8"}>*/}
        <div className={"grid grid-rows-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1400px] mb-32 p-8"}>

            {/*<Card className={"row-start-1 col-span-1 row-span-1 sticky top-80 justify-center items-center"}>*/}
            <Card className={"sm:relative md:relative lg:sticky lg:top-80 row-start-1 col-start-1 col-span-1 row-span-1 justify-center items-center"}>
                <CardHeader className={"h-fit"}>
                    <CardTitle className={"text-xl"}>Hi, my name is Aronne. Here are some of the technologies I have experience with</CardTitle>
                </CardHeader>

                <CardContent className={""}>
                    <CardTitle className={"text-4xl text-primary"}>I am skilled in:</CardTitle>
                </CardContent>
            </Card>


            <Card className={"sm:col-start-1 sm:row-start-2 md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-1"}>
                <CardHeader>
                    <CardTitle>Web</CardTitle>
                </CardHeader>
                <CardContent className={"grid grid-rows-1 grid-cols-5 gap-2"}>

                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/web/react-2.svg"} alt={"react"}></img>
                    </div>
                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/web/logo-javascript.svg"} alt={"JS"}></img>
                    </div>
                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/web/css-3.svg"} alt={"css"}></img>
                    </div>
                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/web/tailwindcss.svg"} alt={"tailwind"}></img>
                    </div>
                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/web/typescript.svg"} alt={"TS"}></img>
                    </div>

                </CardContent>
            </Card>

            {/*<Card className={"col-span-1 col-start-2 row-start-2 row-span-2"}>*/}
            <Card className={"sm:col-start-1 sm:row-start-3 md:col-start-1 md:row-start-3 lg:col-start-2 lg:row-start-2"}>
                <CardHeader>
                    <CardTitle>AI</CardTitle>
                    {/*<CardDescription>I have experience with</CardDescription>*/}
                </CardHeader>
                <CardContent className={""}>

                    <div className={"grid grid-rows-1 grid-cols-5"}>
                        {/*<div className={"relative col-start-1 col-span-1 h-20 w-20"}>*/}
                        {/*    <Image fill src={"/ai/openai-white.svg"} alt={"openai"}></Image>*/}
                        {/*</div>*/}

                        {/*<div className={"relative col-start-2 col-span-1 w-32 h-32 -mt-5"}>*/}
                        {/*    <Image fill src={"/ai/LangChain_Logo-1.png"} alt={"langchain"}></Image>*/}
                        {/*</div>*/}

                        <div className={"relative flex p-0.5"}>
                            <img className={"flex justify-self-center"} src={"/ai/openai-white.svg"} alt={"openai"}></img>
                        </div>
                        <div className={"relative scale-150"}>
                            <img className={"flex justify-self-center ml-10"} src={"/ai/LangChain_Logo-1.png"} alt={"langchain"}></img>
                        </div>
                    </div>

                    <Separator className={"relative mt-4"}></Separator>

                    <div className={"pt-6"}>
                        I have over two years of experience using OpenAI&apos;s large language models in projects with the completions API, starting in late 2021 with the release of GPT-3. Since then I have prototyped complex applications that leverage function calling for sophisticated LLM driven automation.                    </div>
                </CardContent>
                {/*<CardFooter>*/}
                {/*    <p>Card Footer</p>*/}
                {/*</CardFooter>*/}
            </Card>

            {/*<Card className={"col-start-2 row-span-1"}>*/}
            <Card className={"sm:col-start-1 md:col-start-1 lg:col-start-2"}>
                <CardHeader>
                    <CardTitle>Mobile</CardTitle>
                    {/*<CardDescription>Card Description</CardDescription>*/}
                </CardHeader>
                <CardContent className={"grid grid-rows-1 grid-cols-5 gap-2"}>

                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/mobile/react-native-1.svg"} alt={"react-native"}></img>
                    </div>
                    <div className={"relative flex p-0.5"}>
                        <img className={"flex justify-self-center"} src={"/mobile/expo-1.svg"} alt={"expo"}></img>
                    </div>

                </CardContent>
            </Card>
        </div>


        <AboutMe></AboutMe>


        {/*<section className="flex flex-col w-full py-10 sm:hidden md:visible md:py-16 lg:py-22 xl:py-32 justify-center items-center">*/}
        {/*    <div className={"font-bold text-5xl"}>*/}
        {/*        Projects*/}
        {/*    </div>*/}
        {/*    <div className={"grid grid-cols-2 grid-rows-1 py-16 gap-8 w-2/3"}>*/}

        {/*        <Card className={"flex flex-col col-start-1 row-start-1 col-span-1 row-span-1"}>*/}
        {/*            <CardHeader>*/}
        {/*                <CardTitle>Veer phase 1</CardTitle>*/}
        {/*                <CardDescription>An app concept by Brandon Lucaci designed to help curb addiction to social media, and redirect users to productive activities.</CardDescription>*/}
        {/*                /!*<CardDescription>Veer was developed in collaboration with Kyle Wells for Brandon</CardDescription>*!/*/}
        {/*            </CardHeader>*/}
        {/*            <CardContent className={"grid grid-rows-1 grid-cols-5"}>*/}

        {/*                <div className={"relative h-60 w-32"}>*/}
        {/*                    <Image className={"rounded-2xl"} fill src={"/veer/veer_home.png"} alt={"veer"}></Image>*/}
        {/*                </div>*/}

        {/*                <div className={"relative h-60 w-32 -ml-3.5 mt-4"}>*/}
        {/*                    <Image className={"rounded-2xl"} fill src={"/veer/veer_selector.png"} alt={"veer"}></Image>*/}
        {/*                </div>*/}

        {/*            </CardContent>*/}

        {/*            <CardFooter>*/}
        {/*                <p>Veer was developed in collaboration with Kyle Wells for Brandon Lucaci</p>*/}
        {/*            </CardFooter>*/}
        {/*        </Card>*/}

        {/*        <div className={"flex flex-col col-start-2 row-start-1 col-span-1 row-span-1 items-center justify-center font-bold"}>*/}
        {/*            <div className={"text-xl"}>Status:</div>*/}
        {/*            <div className={"text-5xl text-primary"}>Completed</div>*/}
        {/*        </div>*/}

        {/*        <Card className={"flex flex-col col-start-1 row-start-2 col-span-1 row-span-1"}>*/}
        {/*            <CardHeader>*/}
        {/*                <CardTitle>LU GPT</CardTitle>*/}
        {/*                <CardDescription>An AI chat-bot designed to help new and perspective Liberty University student learn more about the university, answer their questions and guide them around the website in a familiar ChatGPT style interface.</CardDescription>*/}
        {/*                <CardDescription>This project uses data scraped from the Liberty University webpage alongside a vector database. It is built on top of OpenAI&apos;s api, and makes use of function calling. It has a front-end written using ReactJS, and a backend built with django.</CardDescription>*/}
        {/*            </CardHeader>*/}
        {/*            <CardContent className={"grid grid-rows-1 grid-cols-5"}>*/}


        {/*            </CardContent>*/}

        {/*            <CardFooter>*/}
        {/*                <p>This project is nearly completed</p>*/}
        {/*            </CardFooter>*/}
        {/*        </Card>*/}

        {/*        <div className={"flex flex-col col-start-2 row-start-2 col-span-1 row-span-1 items-center justify-center font-bold"}>*/}
        {/*            <div className={"text-xl"}>Status:</div>*/}
        {/*            <div className={"text-5xl text-green-500"}>In development</div>*/}
        {/*        </div>*/}

        {/*        <Card className={"flex flex-col col-start-1 row-start-3 col-span-1 row-span-1"}>*/}
        {/*            <CardHeader>*/}
        {/*                <CardTitle>Unnamed SAAS</CardTitle>*/}
        {/*                <CardDescription>A SAAS platform allowing for the automated creation of website OpenAI powered chat-bots for any website</CardDescription>*/}
        {/*                <CardDescription>This project will use web scraping tools to automatically gather data to feed to a vector database. Allowing for those with limited expertise to leverage the latest AI advancements to create a better web experience.</CardDescription>*/}
        {/*            </CardHeader>*/}
        {/*            <CardContent className={"grid grid-rows-1 grid-cols-5"}>*/}

        {/*                <div className={"relative h-32 w-60"}>*/}
        {/*                    <Image className={"rounded-2xl border-secondary border-2"} fill src={"/saas.png"} alt={"saas"}></Image>*/}
        {/*                </div>*/}


        {/*            </CardContent>*/}
        {/*        </Card>*/}

        {/*        <div className={"flex flex-col col-start-2 row-start-3 col-span-1 row-span-1 items-center justify-center font-bold"}>*/}
        {/*            <div className={"text-xl"}>Status:</div>*/}
        {/*            <div className={"text-5xl text-green-500"}>In development</div>*/}
        {/*        </div>*/}

        {/*        <Card className={"flex flex-col col-start-1 row-start-4 col-span-1 row-span-1"}>*/}
        {/*            <CardHeader>*/}
        {/*                <CardTitle>Personal Website</CardTitle>*/}
        {/*                <CardDescription>A Personal website detailing my skills, providing contact info, and showcasing my projects</CardDescription>*/}
        {/*                <CardDescription>This website was written in ReactJS with typescript, tailwind CSS, and ShadCN UI. It is deployed on Vercel.</CardDescription>*/}
        {/*            </CardHeader>*/}
        {/*            <CardContent className={"grid grid-rows-1 grid-cols-5"}>*/}

        {/*                <div className={"relative h-32 w-60"}>*/}
        {/*                    <Image className={"rounded-2xl border-secondary border-2"} fill src={"/website.png"} alt={"website"}></Image>*/}
        {/*                </div>*/}


        {/*            </CardContent>*/}
        {/*        </Card>*/}

        {/*        <div className={"flex flex-col col-start-2 row-start-4 col-span-1 row-span-1 items-center justify-center font-bold"}>*/}
        {/*            <div className={"text-xl"}>Status:</div>*/}
        {/*            <div className={"text-5xl text-primary"}>Completed</div>*/}
        {/*        </div>*/}

        {/*        <Card className={"flex flex-col col-start-1 row-start-5 col-span-1 row-span-1"}>*/}
        {/*            <CardHeader>*/}
        {/*                <CardTitle>MathGPT / SnapSolve</CardTitle>*/}
        {/*                <CardDescription>An AI powered replacement for photo-math, allowing users to get much more in depth answers with interactive explanations in a chat-bot style fashion while also being able to tackle difficult word problems that other tools cannot.</CardDescription>*/}
        {/*                <CardDescription>This project uses MathPix OCR to read problems, and uses wolfram alpha for a step by step guide on how to answer. It then uses OpenAI&apos;s GPT-4 to wrap the answer in a human friendly manner, explaining all the steps.</CardDescription>*/}
        {/*            </CardHeader>*/}

        {/*            <CardContent className={"grid grid-rows-1 grid-cols-5 flex flex-col"}>*/}

        {/*                <div className={"mb-3"}>*/}
        {/*                    Mockups (no app was made)*/}
        {/*                </div>*/}

        {/*                <div className={"flex flex-row"}>*/}
        {/*                    <div className={"relative h-60 w-28"}>*/}
        {/*                        <Image className={"rounded-2xl border-secondary border-2"} fill src={"/mathgpt/mathGPT-1.png"} alt={"mgpt-1"}></Image>*/}
        {/*                    </div>*/}
        {/*                    <div className={"relative h-60 w-28"}>*/}
        {/*                        <Image className={"rounded-2xl border-secondary border-2"} fill src={"/mathgpt/mathGPT-2.png"} alt={"mgpt-1"}></Image>*/}
        {/*                    </div>*/}
        {/*                </div>*/}




        {/*            </CardContent>*/}
        {/*            <CardFooter>*/}
        {/*                <p>This project was deemed too uneconomical and slow due to the many paid apis at play, and the requirement of the expensive GPT-4. A web version may still be completed as a proof on concept.</p>*/}
        {/*            </CardFooter>*/}
        {/*        </Card>*/}

        {/*        <div className={"flex flex-col col-start-2 row-start-5 col-span-1 row-span-1 items-center justify-center font-bold"}>*/}
        {/*            <div className={"text-xl"}>Status:</div>*/}
        {/*            <div className={"text-5xl text-gray-500"}>On hold</div>*/}
        {/*        </div>*/}

        {/*    </div>*/}
        {/*</section>*/}
    </main>
  )
}
