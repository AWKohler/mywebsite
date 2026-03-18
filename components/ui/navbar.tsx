import { Button } from "./button";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
    // { href: "/studio", label: "Studio" },
    { href: "https://botflow.io/", label: "Botflow" },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-[1000] w-full">
      {/* Desktop Navbar */}
      <div className={`hidden md:flex items-center justify-center py-4`}>
        <div className="bg-white/30 backdrop-blur-sm border border-gray-300/50 rounded-full max-w-[850px] gap-2 px-3 py-2 font-2xl flex flex-wrap font-tomato-sans">
          <Link href="/" passHref>
            <Button
              className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
              "
            >
              Home
            </Button>
          </Link>
          
          {navItems.map((item) => (
            <Link href={item.href} key={item.label} passHref>
              <Button
                className="
                  bg-gray-100/70 
                  border 
                  border-gray-300/50 
                  rounded-full 
                  text-black 
                  transition-colors 
                  duration-200 
                  ease-in-out 
                  hover:bg-gray-200
                "
              >
                {item.label}
              </Button>
            </Link>
          ))}
          
          <Link href="https://github.com/AWKohler/mywebsite" target="_blank" rel="noopener noreferrer" passHref>
            <Button
              className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
              "
            >
              Github
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between px-4 py-3 bg-white/30 backdrop-blur-sm border-b border-gray-300/50">
          {/* Hamburger / Close */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="rounded-md p-2 bg-gray-100/70 border border-gray-300/50 text-black hover:bg-gray-200"
          >
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
          {/* Centered brand */}
          <Link href="/" className="text-2xl font-bold text-black/90">Aronne Kohler</Link>

          <Link href="https://github.com/AWKohler/mywebsite" target="_blank" rel="noopener noreferrer" passHref>
            <Button
              className="
                bg-gray-100/70
                border
                border-gray-300/50
                rounded-full
                p-2
                text-black
                transition-colors
                duration-200
                ease-in-out
                hover:bg-gray-200
                aspect-square
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Full-width dropdown menu */}
        {isMenuOpen && (
          <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-300/50">
            <nav className="flex flex-col font-tomato-sans">
              <Link
                href="/"
                className="px-6 py-4 text-lg font-medium text-black hover:bg-gray-100 border-b border-gray-200/60 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="px-6 py-4 text-lg font-medium text-black hover:bg-gray-100 border-b border-gray-200/60 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://github.com/AWKohler/mywebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-lg font-medium text-black hover:bg-gray-100 flex items-center gap-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
