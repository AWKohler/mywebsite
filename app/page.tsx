"use client"

import Image from 'next/image'
import React from "react";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {

    const redirectToGitHub = () => {
        // Redirect the user to your GitHub profile URL
        window.location.href = 'https://github.com/awkohler';
    };

    const redirectToInstagram = () => {
        // Redirect the user to your GitHub profile URL
        window.location.href = 'https://www.instagram.com/aronnekohler/';
    };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center">


        <Card className={"w-1/2 overflow-hidden"}>
            <CardHeader>
                <CardTitle>Aronne Kohler</CardTitle>
                <CardDescription className={""}>
                    Aspiring full stack developer with a deep interest in AI. Currently attending Liberty University.
                </CardDescription>
            </CardHeader>


            <CardContent className={"items-center justify-center"}>
                <div className={"text-black flex flex-row"}>
                    <div className={"relative h-72 w-72 rounded-full bg-primary"}>
                        {/*<Image className={"ml-5 mt-1 rounded-full border-secondary border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>*/}
                        <Image className={"rounded-full border-secondary border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>
                    </div>

                    {/*<div className={"relative h-72 w-72 rounded-full bg-primary"}>*/}
                    {/*    <Image className={"ml-5 mt-1 rounded-full border-secondary border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>*/}
                    {/*</div>*/}


                    <div className={"flex flex-col w-1/2 ml-10 text-white"}>
                        <h1 className={"font-bold"}>Hi im Aronne</h1>
                        <Separator className="my-4" />
                            <div className={""}>
                                This is my profile. I am an aspiring full stack developer and entrepreneur. I am currently studying at liberty university
                            </div>
                        <Separator className="my-4" />
                            <div className={"flex"}>
                                <Button
                                    onClick={redirectToGitHub}
                                >
                                    My GitHub
                                </Button>

                            <div className={"pl-3"}>
                                <Button
                                    onClick={redirectToInstagram}
                                >
                                    My Instagram
                                </Button>
                            </div>

                            </div>
                                <Separator className="my-4" />
                                <div className={"mt-4 text-[#D9DCD6]"}>
                                    Contact me: aronnek336@proton.me
                            </div>
                    </div>


                    {/*<div className={"bg-blue-500"}>*/}
                    {/*    ggg*/}
                    {/*</div>*/}
                </div>

            </CardContent>



            <CardFooter className="flex">
                {/*<Button variant="default">Github</Button>*/}
                {/*<Button variant="outline" className="ml-2">Instagram</Button>*/}
            </CardFooter>
        </Card>


        {/*<div className={"flex grid grid-cols-6 grid-rows-3 gap-4"}>*/}

        {/*    /!*<div className={"text-white row-span-full col-span-2 bg-green-700 rounded"}>*!/*/}
        {/*    <div className={"text-white row-start-1 col-start-2 col-span-2 row-span-4 bg-green-700 rounded"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white row-start-1 col-start-4 col-span-4 row-span-4 bg-amber-300 rounded over"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white row-start-2 row-span-2 col-start-3 col-span-2 bg-blue-500 rounded shadow-2xl shadow-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*    <div className={"text-white"}>*/}
        {/*        nigga*/}
        {/*    </div>*/}

        {/*</div>*/}


      {/*<div className={"absolute text-white w-1/3 h-96 rounded-3xl backdrop-blur-xl border-gray-200 bg-[#111827]/30 flex flex-row p-10 justify-evenly"}>*/}
      {/*    */}
      {/*    */}
      {/*    <div className={"w-96 h-fit"}>*/}
      {/*        <h1 className={"font-bold"}>Hi im Aronne</h1>*/}
      {/*        <Separator className="my-4" />*/}
      {/*        <div className={"mt-4 text-[#D9DCD6]"}>*/}
      {/*            This is my profile. I am an aspiring full stack developer and entrepreneur. I am currently studying at liberty university*/}
      {/*        </div>*/}
      {/*        <Separator className="my-4" />*/}
      {/*        <div className={"flex"}>*/}
      {/*            <Button*/}
      {/*                onClick={redirectToGitHub}*/}
      {/*            >*/}
      {/*                My GitHub*/}
      {/*            </Button>*/}

      {/*            <div className={"pl-3"}>*/}
      {/*                <Button*/}
      {/*                    onClick={redirectToInstagram}*/}
      {/*                >*/}
      {/*                    My Instagram*/}
      {/*                </Button>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <Separator className="my-4" />*/}
      {/*        <div className={"mt-4 text-[#D9DCD6]"}>*/}
      {/*            Contact me: aronnek336@proton.me*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*    */}
      {/*    */}
      {/*    <div className={"text-black w-96 h-fit items-center flex"}>*/}
      {/*        <div className={"relative h-72 w-72 mr-4 rounded-full"}>*/}
      {/*            <Image className={"ml-10 rounded-full border-[#D9DCD6] border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*    */}
      {/*</div>*/}


        {/*<div className={"bg-yellow-300 text-white w-52 h-52 rounded-full"}>*/}
        {/*</div>*/}
    </main>
  )
}
