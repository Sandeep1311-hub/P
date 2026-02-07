
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-12 w-[25rem] h-[25rem] bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-12 w-[25rem] h-[25rem] bg-primary/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-wider font-semibold mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h2 className="text-muted-foreground font-mono text-base tracking-[0.2em] uppercase mb-4 animate-fade-in-up [animation-delay:100ms]">
            Software Trainee @ ACE, Hosur
          </h2>
          
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up [animation-delay:200ms] tracking-tight">
            Building scalable <br />
            <span className="text-gradient">software solutions.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl animate-fade-in-up [animation-delay:400ms] leading-relaxed font-light">
            I'm a Software Trainee & Developer at ACE, Hosur, specializing in backend systems and cloud integrations. Experienced in building Python 3D visual ready projects.
          </p>
          
          <div className="flex flex-wrap gap-6 animate-fade-in-up [animation-delay:600ms]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 group font-semibold uppercase tracking-wider">
              Explore Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-primary/20 hover:border-primary/50 font-semibold uppercase tracking-wider">
              Contact Me
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 animate-fade-in-up [animation-delay:800ms]">
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
