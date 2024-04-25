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
        {/*<body className={inter.className}>*/}
        <body className={myFont.className}>
          {/*<div className={"bg-background"}>*/}
          {/*<div className={"bg-background"}>*/}
          {/*  {children}*/}
          {/*</div>*/}

          <div className={"bg-background"}>
            {children}
          </div>

          {/*<iframe src="customgpt.thesamur.ai/embed/asst_XujJHdQNVJ1AEYETvZpotmFP" />*/}

          <script type="application/javascript" dangerouslySetInnerHTML={{ __html: `
    function loadScript() {
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://test-resources.vercel.app/embedchat.js";
      script.setAttribute('data-id', "clthnb6bg00073cj4hour0kpq");
      script.id = "embedchat";
      head.appendChild(script);
    }
    if (!location.href.includes("ai-demo-my-chatbot")) {
      loadScript();
    }
  `}}></script>

          {/*// script.src = "https://test-resources.vercel.app/embedchat.js";*/}

          {/*script.src = "https://utfs.io/f/490eb957-7d76-4ca4-a136-dd3038f872a4-4bzpj.js";*/}



          {/*<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="834250fb-8888-44ab-9137-7f82ad399ec5";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>*/}

        </body>
      </html>
  )
}
