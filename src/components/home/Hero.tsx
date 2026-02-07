
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-12 w-[25rem] h-[25rem] bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-12 w-[25rem] h-[25rem] bg-primary/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[8px] uppercase tracking-wider font-semibold mb-6 animate-fade-in-up">
            <span className="relative flex h-1 w-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1 w-1 bg-primary"></span>
            </span>
            Available for freelance work
          </div>
          
          <h2 className="text-muted-foreground font-mono text-[8px] tracking-[0.2em] uppercase mb-3 animate-fade-in-up [animation-delay:100ms]">
            Full-Stack Developer
          </h2>
          
          <h1 className="text-xl md:text-3xl font-bold leading-tight mb-5 animate-fade-in-up [animation-delay:200ms] tracking-tight">
            Designing digital <br />
            <span className="text-gradient">experiences that matter.</span>
          </h1>
          
          <p className="text-[10px] text-muted-foreground mb-8 max-w-md animate-fade-in-up [animation-delay:400ms] leading-relaxed">
            I'm a Full Stack Developer & Designer crafting high-performance, beautiful web applications with modern technologies. 4+ years crafting production apps with React, React Native, Three.js, Node.js and AWS. I ship clean, scalable, and maintainable products end‑to‑end.
          </p>
          
          <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:600ms]">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-4 text-[9px] rounded-full shadow-lg shadow-primary/25 group font-semibold uppercase tracking-wider">
              Explore Work <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="sm" variant="outline" className="h-8 px-4 text-[9px] rounded-full border-primary/20 hover:border-primary/50 font-semibold uppercase tracking-wider">
              Contact Me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 animate-fade-in-up [animation-delay:800ms]">
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Github className="h-3.5 w-3.5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Linkedin className="h-3.5 w-3.5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Twitter className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
