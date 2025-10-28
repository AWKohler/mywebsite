"use client";

// import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { IconButton } from "./icon-button";
// import { SearchButton } from "./search";

function GitHubLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z" />
    </svg>
  );
}

function TailwindMark(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 34 24" fill="none" {...props}>
      <path fill="transparent" d="M0 0H34V24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.668 2c-4.445 0-7.223 2.222-8.334 6.667 1.667-2.222 3.611-3.055 5.833-2.5 1.268.317 2.175 1.236 3.178 2.255C18.979 10.081 20.87 12 25 12c4.445 0 7.223-2.222 8.334-6.666-1.666 2.222-3.61 3.055-5.833 2.5-1.269-.318-2.175-1.237-3.178-2.255C22.69 3.919 20.8 2 16.668 2zM8.334 12C3.889 12 1.11 14.222 0 18.667c1.667-2.222 3.612-3.056 5.833-2.5 1.269.316 2.175 1.236 3.178 2.255C10.645 20.081 12.536 22 16.668 22c4.444 0 7.222-2.222 8.333-6.666-1.667 2.222-3.611 3.055-5.833 2.5-1.268-.317-2.175-1.238-3.177-2.255C14.356 13.92 12.463 12 8.334 12z"
        fill="color(display-p3 .2196 .7412 .9725)"
      />
    </svg>
  );
}

export function Header(props: React.PropsWithChildren) {
  let [navIsOpen, setNavIsOpen] = useState(false);
  let router = useRouter();

  const navItems = [
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
    { href: "https://botflow.io/", label: "Botflow" },
    // { href: "https://linkme.ltd/", label: "Linkme" },
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="hidden md:flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        {/* Left: Name/Workmark */}
        <div className="flex items-center gap-4 flex-1">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Home"
            onContextMenu={(evt) => {
              evt.preventDefault();
              router.push("/brand");
            }}
          >
            <h1 className="text-[#df0939] font-bold text-2xl">Aronne Kohler</h1>
          </Link>
        </div>
        {/* Center: Navigation Buttons */}
        <div className="flex items-center justify-center gap-2 flex-1">
          <Link href="/" passHref>
            <button className="px-4 py-1 rounded-full bg-white dark:bg-gray-950 border border-dashed border-gray-300 dark:border-gray-700 text-black font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition">
              Home
            </button>
          </Link>
          {navItems.map((item) => (
            <Link href={item.href} key={item.label} passHref>
                            {/* <button className="px-4 py-1 rounded-full bg-white dark:bg-gray-950 border border-dashed border-gray-300 dark:border-gray-700 text-[#df0939] font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition"> */}

              <button className="px-4 py-1 rounded-full bg-white dark:bg-gray-950 border border-dashed border-gray-300 dark:border-gray-700 text-black font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                {item.label}
              </button>
            </Link>
          ))}
          <Link
            href="https://github.com/AWKohler/mywebsite"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <button className="px-4 py-1 rounded-full bg-white dark:bg-gray-950 border border-dashed border-gray-300 dark:border-gray-700 text-black font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition flex items-center gap-1">
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </button>
          </Link>
        </div>
        {/* Right: Sign in button */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <a href="/studio" className="group relative px-1.5 text-sm/6 text-[#df0939] dark:text-[#df0939]">
            <span className="absolute inset-0 border border-dashed border-[#df0939]/60 bg-[#df0939]/10 group-hover:bg-[#df0939]/15 dark:border-[#df0939]/30" />
            {/* Sign in */}
            Studio
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute top-[-2px] left-[-2px] fill-[#df0939] dark:fill-[#df0939]/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute top-[-2px] right-[-2px] fill-[#df0939] dark:fill-[#df0939]/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute bottom-[-2px] left-[-2px] fill-[#df0939] dark:fill-[#df0939]/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute right-[-2px] bottom-[-2px] fill-[#df0939] dark:fill-[#df0939]/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Mobile header */}
      <div className="md:hidden px-4 sm:px-6 border-b border-gray-300/50 bg-white/30 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between">
          {/* Hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setNavIsOpen((v) => !v)}
            // className="rounded-md p-2 bg-gray-100/70 border border-gray-300/50 text-black hover:bg-gray-200"

            className="rounded-md p-2 text-black hover:bg-gray-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Centered brand */}
          <Link href="/" className="text-[#df0939] font-bold text-2xl">Aronne Kohler</Link>

          {/* <Link href="/" className="text-base font-semibold text-black/90">Aronne Kohler</Link> */}


          {/* Right-side GitHub */}
          {/* <Link href="https://github.com/AWKohler" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 bg-gray-100/70 border border-gray-300/50 text-black hover:bg-gray-200"> */}

          <Link href="https://github.com/AWKohler" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-black hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
        </div>

        {/* Expandable mobile menu (no Studio) */}
        {navIsOpen && (
          <div className="pb-3 border-t border-gray-300/50 bg-white/80 backdrop-blur-sm">
            <nav className="flex flex-col px-2">
              <Link href="/" className="py-2 text-sm text-gray-800 hover:text-black" onClick={() => setNavIsOpen(false)}>
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="py-2 text-sm text-gray-800 hover:text-black"
                  onClick={() => setNavIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://github.com/AWKohler/mywebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-sm text-gray-800 hover:text-black"
                onClick={() => setNavIsOpen(false)}
              >
                GitHub
              </Link>
            </nav>
          </div>
        )}
      </div>

    </div>
    // </div>
  );
}
