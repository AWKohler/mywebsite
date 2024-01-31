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
          <div className={"bg-background"}>
            {children}
          </div>
        </body>
      </html>
  )
}
