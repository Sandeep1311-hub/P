
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-12 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-12 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for freelance work
          </div>
          
          <h2 className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in-up [animation-delay:100ms]">
            Full-Stack Developer
          </h2>
          
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
            Building fast, delightful <br />
            <span className="text-gradient">web, mobile & 3D experiences.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in-up [animation-delay:400ms] leading-relaxed">
            4+ years crafting production apps with React, React Native, Three.js, Node.js and AWS. 
            I ship clean, scalable, and maintainable products end‑to‑end.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/25 group">
              Explore Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-primary/20 hover:border-primary/50">
              Contact Me
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 animate-fade-in-up [animation-delay:800ms]">
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Github className="h-7 w-7" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Linkedin className="h-7 w-7" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Twitter className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
