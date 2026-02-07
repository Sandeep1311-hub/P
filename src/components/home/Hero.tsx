"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="hero-glow -top-24 -left-24" />
      <div className="hero-glow bottom-0 -right-24" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-bold mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Software Trainee @ ACE, Hosur
          </div>
          
          <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 font-bold">
            Full‑Stack Developer
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            Building fast, delightful <br />
            <span className="text-gradient">web, mobile & 3D experiences.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed font-normal">
            2+ years crafting production apps with React, React Native, Three.js, Node.js and Azure. I ship clean, scalable, and maintainable products end‑to‑end.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-base rounded-full shadow-xl shadow-primary/30 group font-bold uppercase tracking-wider">
              <Link href="#explore">
                Explore Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-base rounded-full border-primary/30 hover:bg-primary/5 hover:border-primary/60 font-bold uppercase tracking-wider">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </div>

          <div className="mt-20 flex items-center gap-10">
            <Link href="https://github.com/Sandeep1311-hub" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-125">
              <Github className="h-7 w-7" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-125">
              <Linkedin className="h-7 w-7" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-125">
              <Twitter className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}