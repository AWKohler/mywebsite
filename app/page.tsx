"use client"

import React from "react";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Hero from "@/components/page/hero";
import AboutMe from "@/components/page/aboutMe";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-clip">

        <Hero></Hero>

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
    </main>
  )
}
