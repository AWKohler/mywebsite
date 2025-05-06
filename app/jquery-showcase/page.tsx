"use client";

import React, { useEffect } from 'react';
import { Navbar } from "@/components/ui/navbar";
import FooterSection from "@/components/FooterSection";
import Script from 'next/script';
import Link from 'next/link';

export default function JQueryShowcase() {
  useEffect(() => {
    // Initialize jQuery after the component mounts
    const initJQueryWhenReady = () => {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.jQuery) {
        // Give the DOM a moment to render completely
        setTimeout(() => {
          try {
            // Manually trigger the jQuery ready event
            // @ts-ignore
            jQuery(document).ready();
            console.log('jQuery initialization triggered');
          } catch (error) {
            console.error('Error initializing jQuery:', error);
          }
        }, 500);
      } else {
        // If jQuery isn't loaded yet, try again in a moment
        setTimeout(initJQueryWhenReady, 100);
      }
    };
    
    initJQueryWhenReady();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />

      {/* Load jQuery and jQuery UI from CDN */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" strategy="beforeInteractive" />
      <Script src="/jquery.js" strategy="afterInteractive" />
      
      {/* jQuery UI CSS */}
      <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" />

      <main className="pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">jQuery Showcase</h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          This page demonstrates various jQuery effects and features including animations, sliding effects, 
          and autocomplete functionality.
        </p>

        {/* Section 1: Fade Effects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Fade Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards that fade in when scrolled into view */}
            <div className="bg-white rounded-lg shadow-md p-6 fade-in">
              <h3 className="text-xl font-bold mb-3">Fade In Effect</h3>
              <p>This card uses jQuery&apos;s animate() function to fade in when scrolled into view.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in">
              <h3 className="text-xl font-bold mb-3">Scroll-Triggered</h3>
              <p>jQuery detects when this element enters the viewport and triggers the animation.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in">
              <h3 className="text-xl font-bold mb-3">Smooth Animation</h3>
              <p>The opacity property is animated from 0 to 1 for a smooth appearance effect.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Hover Fade Effects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Hover Fade Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover-fade relative overflow-hidden cursor-pointer">
              <img src="/web/react-2.svg" alt="React Logo" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-center">React</h3>
              <p className="text-center">Hover over this card to see additional information.</p>
              <div className="hover-content absolute inset-0 bg-blue-500 bg-opacity-90 text-white p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3 text-center">React</h3>
                <p className="text-center">A JavaScript library for building user interfaces with a component-based architecture. Used extensively in modern web development.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover-fade relative overflow-hidden cursor-pointer">
              <img src="/web/nextjs-2.svg" alt="Next.js Logo" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-center">Next.js</h3>
              <p className="text-center">Hover over this card to see additional information.</p>
              <div className="hover-content absolute inset-0 bg-black bg-opacity-90 text-white p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-3 text-center">Next.js</h3>
                <p className="text-center">A React framework that enables server-side rendering, static site generation, and more. Perfect for production-ready React applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Slide Effects (Accordion) */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Slide Effects</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="accordion-header bg-gray-100 p-4 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="accordion-content p-6">
                <p className="mb-4">Frontend development focuses on creating the user interface and experience.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HTML5 for structure</li>
                  <li>CSS3 and Tailwind for styling</li>
                  <li>JavaScript/TypeScript for interactivity</li>
                  <li>React and Next.js for component-based development</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
              <div className="accordion-header bg-gray-100 p-4 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-semibold">Backend Development</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="accordion-content p-6">
                <p className="mb-4">Backend development involves server-side logic and database management.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Node.js for JavaScript runtime</li>
                  <li>Express for API development</li>
                  <li>MongoDB and PostgreSQL for databases</li>
                  <li>Authentication and authorization</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
              <div className="accordion-header bg-gray-100 p-4 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-semibold">DevOps & Deployment</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="accordion-content p-6">
                <p className="mb-4">DevOps practices bridge development and operations for smoother deployments.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Git for version control</li>
                  <li>CI/CD pipelines for automated testing and deployment</li>
                  <li>Docker for containerization</li>
                  <li>AWS, Vercel, or Netlify for hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Project Details with Slide Toggle */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Project Showcase</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="project-header p-4 cursor-pointer flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <h3 className="text-xl font-semibold">Botflow.io</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="project-details p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/botflow-landing.png" alt="Botflow Project" className="w-full rounded-lg shadow-sm" />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-2">AI Chatbot Platform</h4>
                    <p className="mb-4">A SAAS platform for creating AI Chatbots, embeddable on any website</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">React</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">OpenAI</span>
                    </div>
                    <Link href="#" className="text-green-500 hover:underline">View Project →</Link>
                    {/* <a href="#" className="text-blue-500 hover:underline">View Project →</a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="project-header p-4 cursor-pointer flex justify-between items-center bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <h3 className="text-xl font-semibold">Linkme.tld</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="project-details p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/rangers-qr.png" alt="Linkme Project" className="w-full rounded-lg shadow-sm" />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-2">QR Code Generator</h4>
                    <p className="mb-4">An open source alternative to Flowcode for creating custom QR codes</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">ShadCN UI</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Stripe</span>
                    </div>
                    <Link href="#" className="text-green-500 hover:underline">View Project →</Link>
                    {/* <a href="#" className="text-green-500 hover:underline">View Project →</a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="project-header p-4 cursor-pointer flex justify-between items-center bg-gradient-to-r from-red-500 to-pink-500 text-white">
                <h3 className="text-xl font-semibold">Personal Portfolio</h3>
                <span className="toggle-icon">▼</span>
              </div>
              <div className="project-details p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img src="/ako.png" alt="Portfolio Project" className="w-full rounded-lg shadow-sm" />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-2">This Website</h4>
                    <p className="mb-4">Personal portfolio site with advanced animations and interactive elements</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Framer Motion</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Next.js</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">Tailwind</span>
                    </div>
                    <Link href="#" className="text-green-500 hover:underline">View Project →</Link>
                    {/* <a href="#" className="text-red-500 hover:underline">View Project →</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: jQuery UI Autocomplete */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skill Search with Autocomplete</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4 text-center">Type a programming skill or technology to search:</p>
              
              <div className="flex gap-2 mb-6">
                <div className="flex-grow">
                  <input 
                    type="text" 
                    id="skill-search" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Try typing: React, Python, AWS..."
                  />
                </div>
                <button 
                  id="clear-search"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Clear
                </button>
              </div>
              
              <div id="search-result" className="min-h-[150px]"></div>
              
              <div className="text-sm text-gray-500 mt-4">
                <p>This search uses jQuery UIs Autocomplete widget to provide predictive search functionality.</p>
                <p>Start typing to see matching skills from a predefined list.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Menu - Hidden by default */}
        <div id="mobile-menu" className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl p-4 hidden">
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold">Menu</h3>
            <button id="mobile-menu-toggle" className="text-gray-500">Close</button>
          </div>
          <nav>
            <ul className="space-y-2">
              <li><Link href="/" className="block py-2 hover:bg-gray-100 rounded px-2">Home</Link></li>
              {/* <li><Link href="/d3-showcase" className="block py-2 hover:bg-gray-100 rounded px-2">D3 Showcase</Link></li> */}
              <li><Link href="/resume" className="block py-2 hover:bg-gray-100 rounded px-2">Resume</Link></li>
              <li><Link href="#" className="block py-2 hover:bg-gray-100 rounded px-2">Contact</Link></li>
              {/* <li><link href="/" className="block py-2 hover:bg-gray-100 rounded px-2">Home</link></li>
              <li><link href="/d3-showcase" className="block py-2 hover:bg-gray-100 rounded px-2">D3 Showcase</a></li>
              <li><link href="/resume" className="block py-2 hover:bg-gray-100 rounded px-2">Resume</link></li>
              <li><link href="#" className="block py-2 hover:bg-gray-100 rounded px-2">Contact</link></li> */}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button - Fixed at bottom */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <button 
            id="mobile-menu-toggle" 
            className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </main>

      <style jsx>{`
        .toggle-icon {
          transition: transform 0.3s ease;
        }
        .active .toggle-icon {
          transform: rotate(180deg);
        }
        .ui-autocomplete {
          max-height: 200px;
          overflow-y: auto;
          overflow-x: hidden;
          z-index: 9999 !important;
        }
        .skill-autocomplete {
          background: white;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .search-result-item {
          margin-top: 1rem;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          background-color: #f9fafb;
        }
      `}</style>

      <FooterSection />
    </div>
  );
}