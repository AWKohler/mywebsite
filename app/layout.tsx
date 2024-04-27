import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import localFont from "next/font/local";

const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({ src: '../public/fonts/ClashDisplay-Variable.woff2' })

export const metadata: Metadata = {
  title: 'Aronne Kohler',
  description: 'Aronnes personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={myFont.className}>

          <div className={"bg-background"}>
            {children}
          </div>

  {/*        <script type="application/javascript" dangerouslySetInnerHTML={{ __html: `*/}
  {/*  function loadScript() {*/}
  {/*    var head = document.getElementsByTagName('head')[0];*/}
  {/*    var script = document.createElement('script');*/}
  {/*    script.type = 'text/javascript';*/}
  {/*    script.src = "https://test-resources.vercel.app/embedchat.js";*/}
  {/*    script.setAttribute('data-id', "clthnb6bg00073cj4hour0kpq");*/}
  {/*    script.id = "embedchat";*/}
  {/*    head.appendChild(script);*/}
  {/*  }*/}
  {/*  if (!location.href.includes("ai-demo-my-chatbot")) {*/}
  {/*    loadScript();*/}
  {/*  }*/}
  {/*`}}></script>*/}

        </body>
      </html>
  )
}
