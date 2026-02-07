
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer } from 'lucide-react';

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      {/* Navigation for web view */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-bold"
        >
          <Printer size={20} /> Print / Save PDF
        </button>
      </div>

      {/* Resume Document */}
      <div className="max-w-[8.5in] mx-auto bg-white shadow-2xl p-[0.75in] md:p-[1in] text-black font-serif leading-snug print:shadow-none print:p-0 transition-all duration-300">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-1">Sandeep R</h1>
          <p className="text-xl font-bold mb-3">Full-Stack Developer</p>
          <div className="text-sm space-y-1">
            <p>Bangalore, India</p>
            <p className="flex flex-wrap justify-center gap-x-2">
              <span>sandeep135791311@gmail.com</span>
              <span className="opacity-30">|</span>
              <span>+91 8189976572</span>
              <span className="opacity-30">|</span>
              <span>github.com/Sandeep1311-hub</span>
            </p>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-bold border-b-2 border-black mb-3 uppercase tracking-tight">Professional Summary</h2>
          <p className="text-[15px] leading-relaxed text-justify">
            Full-stack developer with <strong>2+ years of experience</strong> building and deploying production-grade web and mobile applications. Strong expertise in <strong>React.js, React Native, Node.js/Express, Firebase, Three.js, AWS, and Azure</strong>. Proven ability to deliver end-to-end solutions—from frontend UX and backend architecture to cloud deployment and CI/CD—across job platforms, food delivery systems, AI-driven tools, and 3D visualization projects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold border-b-2 border-black mb-3 uppercase tracking-tight">Technical Skills</h2>
          <div className="text-[14px] space-y-1">
            <p><strong>Languages:</strong> JavaScript, TypeScript, Python</p>
            <p><strong>Frontend:</strong> React.js, React Native, HTML, CSS, Tailwind CSS</p>
            <p><strong>Backend:</strong> Node.js, Express.js, REST APIs</p>
            <p><strong>Databases:</strong> MongoDB, Firebase</p>
            <p><strong>Cloud & DevOps:</strong> AWS, Azure, CI/CD Pipelines</p>
            <p><strong>AI & Data:</strong> LLMs, AI Agents, Neural Networks</p>
            <p><strong>3D & Visualization:</strong> Three.js, Plotly</p>
            <p><strong>Tools:</strong> Git, GitHub, Vite, Netlify</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold border-b-2 border-black mb-4 uppercase tracking-tight">Professional Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-base">Software Trainee</h3>
              <span className="font-bold italic">ACE, Hosur</span>
            </div>
            <p className="text-sm italic mb-2">2024 – 2025</p>
            <ul className="list-disc ml-5 text-[14px] space-y-1 text-justify">
              <li>Led backend development and cloud architecture initiatives using Node.js and Azure.</li>
              <li>Designed and implemented scalable backend services for enterprise-grade applications.</li>
              <li>Worked on LLM integrations and neural network architectures for intelligent automation.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-base">Full-Stack Developer</h3>
              <span className="font-bold italic">Bluestock</span>
            </div>
            <p className="text-sm italic mb-2">2023</p>
            <ul className="list-disc ml-5 text-[14px] space-y-1 text-justify">
              <li>Implemented CI/CD pipelines to improve deployment speed and reliability.</li>
              <li>Built internal React Native and web applications with complex third-party integrations.</li>
              <li>Enhanced platform stability and maintainability through modular architecture.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-base">Developer Intern</h3>
              <span className="font-bold italic">Processdrive.co</span>
            </div>
            <p className="text-sm italic mb-2">2023</p>
            <ul className="list-disc ml-5 text-[14px] space-y-1 text-justify">
              <li>Built a full-scale food delivery application from scratch.</li>
              <li>Designed responsive UI/UX optimized for mobile and web platforms.</li>
              <li>Delivered production-ready features in collaboration with cross-functional teams.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold border-b-2 border-black mb-3 uppercase tracking-tight">Projects</h2>
          <div>
            <h3 className="font-bold text-base">AI Research Agent</h3>
            <p className="text-[14px] mb-1">Automated research assistant leveraging LLMs to aggregate, analyze, and synthesize information from multiple sources.</p>
            <p className="text-[13px] italic">TypeScript, Node.js, AI Agents, LLMs</p>
          </div>
        </section>
      </div>
    </div>
  );
}
