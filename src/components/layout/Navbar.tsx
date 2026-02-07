"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ResumeContent = () => (
  <div className="space-y-8 py-4 text-foreground">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight">Sandeep R</h2>
        <p className="text-primary text-lg font-bold">Full‑Stack Developer</p>
      </div>
      <div className="space-y-2 text-sm md:text-right font-medium text-muted-foreground">
        <div className="flex items-center md:justify-end gap-2">
          <Mail className="h-4 w-4" /> sandeep135791311@gmail.com
        </div>
        <div className="flex items-center md:justify-end gap-2">
          <Phone className="h-4 w-4" /> +91 8189976572
        </div>
        <div className="flex items-center md:justify-end gap-2">
          <MapPin className="h-4 w-4" /> Bangalore, India
        </div>
      </div>
    </div>

    <Separator className="bg-primary/20" />

    <section className="space-y-4">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Professional Summary</h3>
      <p className="text-lg leading-relaxed text-muted-foreground font-medium">
        Full‑stack developer with 2+ years of experience specializing in React.js, React Native, Three.js, Node.js/Express, and AWS. 
        Expertise in delivering end‑to‑end solutions—from UI architecture to production deployments on App Store and Play Store.
      </p>
    </section>

    <section className="space-y-6">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Work Experience</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-extrabold">Software Trainee & Developer @ ACE, Hosur</h4>
          <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Present</span>
        </div>
        <p className="text-muted-foreground font-medium">
          Building scalable software solutions and backend systems. Specialized in LLM integrations and Neural Networks. 
          Expertise in Python-based 3D visualizations.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-extrabold">Full-Stack Developer @ Bluestock</h4>
          <span className="text-xs font-bold bg-secondary text-muted-foreground px-3 py-1 rounded-full">Previous</span>
        </div>
        <p className="text-muted-foreground font-medium">
          Led CI/CD pipelines and developed React Native apps with complex third-party integrations.
        </p>
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Core Technical Skills</h3>
      <div className="flex flex-wrap gap-3">
        {["React.js", "Next.js", "React Native", "Three.js", "Node.js", "TypeScript", "Python", "Azure", "AWS", "LLMs", "Neural Networks"].map(skill => (
          <Badge key={skill} variant="secondary" className="font-bold py-1.5 px-4 rounded-xl bg-primary/10 text-primary border-none hover:bg-primary hover:text-white transition-colors">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  </div>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Explore", href: "/#explore" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b py-3 shadow-2xl shadow-primary/5" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="text-2xl font-black tracking-tighter text-foreground uppercase group">
            Sandeep <span className="text-primary group-hover:animate-pulse">R</span>
          </Link>

          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase transition-all text-muted-foreground hover:text-primary hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 rounded-[2rem] border-primary/20">
                <DialogHeader className="p-8 pb-0">
                  <DialogTitle className="text-2xl font-black flex items-center gap-3">
                    Professional Profile
                  </DialogTitle>
                  <DialogDescription className="text-lg font-medium">
                    Overview of my technical background and journey.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 p-8 pt-4">
                  <ResumeContent />
                </ScrollArea>
                <div className="p-8 border-t flex justify-end gap-4 bg-muted/30">
                  <Button variant="outline" className="gap-3 h-12 px-6 rounded-xl font-bold border-primary/20" onClick={() => window.print()}>
                    <Download className="h-4 w-4" /> Save as PDF
                  </Button>
                  <Button asChild className="bg-primary gap-3 h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20">
                    <Link href="https://github.com/Sandeep1311-hub" target="_blank">
                      GitHub Profile <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-primary h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/20">View Resume</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] rounded-[2rem] max-h-[90vh] overflow-hidden flex flex-col p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="font-black">Resume</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="flex-1 p-6">
                    <ResumeContent />
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}