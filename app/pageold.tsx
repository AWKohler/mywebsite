// "use client"
//
// import Image from 'next/image'
// import React from "react";
// import {Separator} from "@/components/ui/separator";
// import {Button} from "@/components/ui/button";
// import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
//
// export default function Home() {
//
//     const redirectToGitHub = () => {
//         // Redirect the user to your GitHub profile URL
//         window.location.href = 'https://github.com/awkohler';
//     };
//
//     const redirectToInstagram = () => {
//         // Redirect the user to your GitHub profile URL
//         window.location.href = 'https://www.instagram.com/aronnekohler/';
//     };
//
//   return (
//     <main className="flex min-h-screen flex-col items-center p-24 justify-center">
//
//
//         <Card className={"w-1/2 overflow-hidden"}>
//             <CardHeader>
//                 <CardTitle>Aronne Kohler</CardTitle>
//                 <CardDescription className={""}>
//                     Aspiring full stack developer with a deep interest in AI. Currently attending Liberty University.
//                 </CardDescription>
//             </CardHeader>
//
//
//             <CardContent className={"items-center justify-center"}>
//                 <div className={"text-black flex flex-row"}>
//                     <div className={"relative h-72 w-72 rounded-full bg-primary"}>
//                         <Image className={"rounded-full border-secondary border-2"} fill src={"/pfp.png"} alt={"Profile"}></Image>
//                     </div>
//
//                     <div className={"flex flex-col w-1/2 ml-10 text-white"}>
//                         <h1 className={"font-bold"}>Hi im Aronne</h1>
//                         <Separator className="my-4" />
//                             <div className={""}>
//                                 This is my profile. I am an aspiring full stack developer and entrepreneur. I am currently studying at liberty university
//                             </div>
//                         <Separator className="my-4" />
//                             <div className={"flex"}>
//                                 <Button
//                                     onClick={redirectToGitHub}
//                                 >
//                                     My GitHub
//                                 </Button>
//
//                             <div className={"pl-3"}>
//                                 <Button
//                                     onClick={redirectToInstagram}
//                                 >
//                                     My Instagram
//                                 </Button>
//                             </div>
//
//                             </div>
//                                 <Separator className="my-4" />
//                                 <div className={"mt-4 text-[#D9DCD6]"}>
//                                     Contact me: aronnek336@proton.me
//                             </div>
//                     </div>
//
//                 </div>
//
//             </CardContent>
//
//             <CardFooter className="flex">
//                 {/*<Button variant="default">Github</Button>*/}
//                 {/*<Button variant="outline" className="ml-2">Instagram</Button>*/}
//             </CardFooter>
//         </Card>
//
//     </main>
//   )
// }
