// import { Button } from "./button";
// import Link from "next/link";

// export function Navbar() {
//   return (
//     <div className="fixed inset-x-0 top-0 z-[1000] origin-left flex w-full py-4 items-center justify-center">
//       <div 
//               // className="bg-white/30 backdrop-blur-sm border border-gray-300/50 rounded-full max-w-[750px] gap-2 px-3 py-2 font-2xl flex flex-wrap font-tomato-sans"
//         className="bg-white/30 backdrop-blur-sm border border-gray-300/50 rounded-full max-w-[850px] gap-2 px-3 py-2 font-2xl flex flex-wrap font-tomato-sans"
//       >
//         <Link href="/" passHref>
//           <Button
//               className="
//                   bg-gray-100/70 
//                   border 
//                   border-gray-300/50 
//                   rounded-full 
//                   text-black 
//                   transition-colors 
//                   duration-200 
//                   ease-in-out 
//                   hover:bg-gray-200
//               "
//               >
//               Home
//           </Button>
//         </Link>

//         <Link href="/resume" passHref>
//           <Button
//               className="
//                   bg-gray-100/70 
//                   border 
//                   border-gray-300/50 
//                   rounded-full 
//                   text-black 
//                   transition-colors 
//                   duration-200 
//                   ease-in-out 
//                   hover:bg-gray-200
//               "
//               >
//               Resume
//           </Button>
//         </Link>

//         <Link href="/jquery-showcase" passHref>
//           <Button
//               className="
//                   bg-gray-100/70 
//                   border 
//                   border-gray-300/50 
//                   rounded-full 
//                   text-black 
//                   transition-colors 
//                   duration-200 
//                   ease-in-out 
//                   hover:bg-gray-200
//               "
//               >
//               jQuery Demo
//           </Button>
//         </Link>

//         <Link href="/d3-showcase" passHref>
//           <Button
//               className="
//                   bg-gray-100/70 
//                   border 
//                   border-gray-300/50 
//                   rounded-full 
//                   text-black 
//                   transition-colors 
//                   duration-200 
//                   ease-in-out 
//                   hover:bg-gray-200
//               "
//               >
//               D3.js Showcase
//           </Button>
//         </Link>

//         <Button
//             className="
//                 bg-gray-100/70 
//                 border 
//                 border-gray-300/50 
//                 rounded-full 
//                 text-black 
//                 transition-colors 
//                 duration-200 
//                 ease-in-out 
//                 hover:bg-gray-200
//             "
//             >
//             QR Code
//         </Button>

//         <Button
//             className="
//                 bg-gray-100/70 
//                 border 
//                 border-gray-300/50 
//                 rounded-full 
//                 text-black 
//                 transition-colors 
//                 duration-200 
//                 ease-in-out 
//                 hover:bg-gray-200
//             "
//             >
//             Botflow
//         </Button>

//         <Button
//             className="
//                 bg-gray-100/70 
//                 border 
//                 border-gray-300/50 
//                 rounded-full 
//                 text-black 
//                 transition-colors 
//                 duration-200 
//                 ease-in-out 
//                 hover:bg-gray-200
//             "
//             >
//             Github
//         </Button>
//       </div>
//     </div>
//   );
// }

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
    { href: "/resume.png", label: "Resume" },
    // { href: "/jquery-showcase", label: "jQuery Demo" },
    // { href: "/d3-showcase", label: "D3.js Showcase" },
    // { href: "#", label: "QR Code" },
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
      <div className={`md:hidden bg-white/30 backdrop-blur-sm border-b border-gray-300/50 w-full`}>
        <div className="flex items-center justify-between px-4 py-3">
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
          
          <div className="relative">
            <Button
              onClick={toggleMenu}
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
              Menu
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-md shadow-lg py-1 z-50 border border-gray-300/50">
                {navItems.map((item) => (
                  <Link 
                    href={item.href} 
                    key={item.label} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
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
      </div>
    </div>
  );
}