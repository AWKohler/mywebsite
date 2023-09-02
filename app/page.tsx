"use client"

import Image from 'next/image'
import React from "react";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

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
      <div className={"absolute text-white w-1/3 h-96 rounded-3xl backdrop-blur-xl border-gray-200 bg-[#111827]/30 flex flex-row p-10 justify-evenly"}>
          <div className={"w-96 h-fit"}>
              <h1 className={"font-bold"}>Hi im Aronne</h1>
              <Separator className="my-4" />
              <div className={"mt-4 text-[#D9DCD6]"}>
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
          <div className={"text-black w-96 h-fit items-center flex"}>
              <div className={"relative h-72 w-72 mr-4 rounded-full"}>
                  <Image className={"ml-10 rounded-full border-[#D9DCD6] border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>
              </div>
          </div>
      </div>
        <div className={"bg-yellow-300 text-white w-52 h-52 rounded-full"}>
        </div>
    </main>
  )
}
