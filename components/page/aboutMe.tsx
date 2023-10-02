"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {GraduationCap, MapPin, School2} from "lucide-react";

export default function AboutMe() {

    const redirectToGitHub = () => {
        // Redirect the user to your GitHub profile URL
        window.location.href = 'https://github.com/awkohler';
    };

    const redirectToInstagram = () => {
        // Redirect the user to your GitHub profile URL
        window.location.href = 'https://www.instagram.com/aronnekohler/';
    };


    return (
        <section className="flex flex-col w-full py-12 md:py-24 lg:py-32 xl:py-48 rounded-3xl bg-card justify-center items-center">
            <div className={"w-3/4 flex grid grid-rows-1 grid-cols-2"}>
                <div className={"relative h-96 w-96 rounded-full bg-primary ml-52"}>
                    <Image className={"rounded-full border-secondary border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>
                </div>

                <div className={""}>
                    <div className={"flex flex-row p-6"}>
                        <MapPin className={"mt-1"} />
                        <div className={"font-bold text-2xl ml-2"}>
                            Greensboro, NC and Lynchburg, VA
                        </div>
                    </div>

                    <Separator className={"w-10/12"}></Separator>

                    <div className={"flex flex-row p-6"}>
                        <GraduationCap className={"mt-1"} />
                        <div className={"font-bold text-2xl ml-3"}>
                            Northern Guilford High School (Graduated)
                        </div>
                    </div>

                    <Separator className={"w-10/12"}></Separator>

                    <div className={"flex flex-row p-6"}>
                        <School2 />
                        <div className={"font-bold text-2xl ml-3"}>
                            Liberty University (2nd year sophomore)
                        </div>
                    </div>

                    <Separator className={"w-10/12"}></Separator>

                    <div className={"flex p-6"}>
                        <div className={"ml-3 w-10/12"}>
                            I am a 19 year old college student attending Liberty University pursuing a computer science, software engineering degree.
                        </div>
                    </div>

                </div>

            </div>

            <div className={"flex flex-row pt-24"}>

                <div className={"px-5 flex flex-col items-center"}>
                    <div className={"relative h-56 w-56 rounded-full bg-primary"}>
                        <Image className={"rounded-full border-secondary border-2"} fill src={"/igpfp.jpeg"} alt={"Profile"}></Image>
                    </div>

                    <div className={"pt-5"}>
                        <Button
                            className={""}
                            onClick={redirectToInstagram}
                        >
                            My Instagram
                        </Button>
                    </div>
                </div>


                <div className={"px-5 flex flex-col items-center"}>
                    <div className={"relative h-56 w-56 rounded-full bg-primary"}>
                        <Image className={"rounded-full border-secondary border-2"} fill src={"/ghpfp.png"} alt={"Profile"}></Image>
                    </div>

                    <div className={"pt-5"}>
                        <Button
                            onClick={redirectToGitHub}
                        >
                            My GitHub
                        </Button>
                    </div>
                </div>

            </div>

        </section>
    )
}
