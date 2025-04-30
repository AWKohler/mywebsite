"use client";

import React, { useEffect } from 'react';
import { Navbar } from "@/components/ui/navbar";
import FooterSection from "@/components/FooterSection";
import Script from 'next/script';
import Link from 'next/link';

export default function D3Showcase() {
  useEffect(() => {
    // This code will run after the component mounts
    // We'll leave actual D3.js functionality to the external script
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />

      {/* Load D3.js from CDN */}
      <Script src="https://d3js.org/d3.v7.min.js" strategy="beforeInteractive" />
      <Script src="/final.js" strategy="afterInteractive" />
      
      {/* Custom CSS for D3 visualizations */}
      <style jsx global>{`
        .d3-tooltip {
          position: absolute;
          text-align: center;
          padding: 8px;
          font-size: 12px;
          background: #333;
          color: white;
          border: 0;
          border-radius: 4px;
          pointer-events: none;
          z-index: 1000;
        }
        
        svg text {
          user-select: none;
        }
        
        .graph-instructions {
          margin-top: 10px;
          font-size: 14px;
          color: #666;
          text-align: center;
        }
      `}</style>

      <main className="pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">D3.js Data Visualization</h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          This page demonstrates the power of D3.js for creating interactive data visualizations.
          D3 (Data-Driven Documents) is a JavaScript library for producing dynamic, interactive
          data visualizations in web browsers.
        </p>

        {/* Introduction to D3.js */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-6">What is D3.js?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                D3.js (or just D3 for Data-Driven Documents) is a JavaScript library for producing
                dynamic, interactive data visualizations in web browsers. It uses SVG, HTML5, and CSS
                to bring data to life.
              </p>
              <p className="mb-4">
                Created by Mike Bostock, D3.js is widely used by data journalists, data scientists,
                and web developers to create complex charts, graphs, and interactive visualizations.
              </p>
              <p>
                The power of D3 lies in its flexibility - it allows you to bind arbitrary data to a
                Document Object Model (DOM), and then apply data-driven transformations to the document.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Extremely flexible with complete control over the final visual result</li>
                <li>Uses web standards (HTML, SVG, CSS) without proprietary frameworks</li>
                <li>Supports large datasets and dynamic behaviors for interaction and animation</li>
                <li>Provides powerful visualization components and data transformation tools</li>
                <li>Used by companies like The New York Times, Google, and Microsoft</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bar Chart Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Programming Language Proficiency</h2>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <p className="mb-8 text-center">
              This interactive bar chart visualizes my proficiency levels in various programming languages.
            </p>
            <div id="language-chart" className="w-full"></div>
          </div>
        </section>

        {/* Pie Chart Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Development Time Allocation</h2>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <p className="mb-8 text-center">
              This interactive pie chart shows how development time is typically allocated across different activities.
            </p>
            <div id="time-chart" className="w-full h-[400px]"></div>
          </div>
        </section>

        {/* Force Graph Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Technology Relationship Network</h2>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
            <p className="mb-8 text-center">
              This force-directed graph shows the relationships between different technologies in my skill set.
              Drag nodes to rearrange the network and hover to see connections.
            </p>
            <div id="tech-graph" className="w-full h-[500px]"></div>
          </div>
        </section>

        {/* Learn More Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-3xl font-semibold mb-6 text-center">Learn More About D3.js</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://d3js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-3">Official D3.js Website</h3>
              <p>Visit the official D3.js website for documentation, examples, and resources.</p>
            </a>
            
            <a 
              href="https://observablehq.com/@d3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-3">Observable Notebooks</h3>
              <p>Explore interactive D3.js examples and tutorials on Observable.</p>
            </a>
            
            <a 
              href="https://github.com/d3/d3/wiki/Gallery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 transition p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-3">D3.js Gallery</h3>
              <p>Browse the D3.js example gallery for inspiration and code samples.</p>
            </a>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Explore Other Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 transition rounded-full"
            >
              Home
            </Link>
            <Link
              href="/jquery-showcase"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 transition rounded-full"
            >
              jQuery Showcase
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 transition rounded-full"
            >
              Resume
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}