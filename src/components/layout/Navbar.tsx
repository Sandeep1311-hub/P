
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
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Sandeep R</h2>
        <p className="text-primary font-medium">Full‑Stack Developer</p>
      </div>
      <div className="space-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mail className="h-3 w-3" /> sandeep135791311@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-3 w-3" /> +91 8189976572
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3" /> Bangalore, India
        </div>
      </div>
    </div>

    <Separator />

    <section className="space-y-3">
      <h3 className="text-lg font-bold uppercase tracking-wider text-primary text-xs">Professional Summary</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Full‑stack developer with 2+ years of experience specializing in React.js, React Native, Three.js, Node.js/Express, and AWS. 
        Expertise in delivering end‑to‑end solutions—from UI architecture to production deployments on App Store and Play Store.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-lg font-bold uppercase tracking-wider text-primary text-xs">Work Experience</h3>
      
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold">Software Trainee @ ACE, Hosur</h4>
          <span className="text-xs text-muted-foreground">Present</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Building scalable software solutions and backend systems. Specialized in LLM integrations and Neural Networks.
        </p>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold">Full-Stack Developer @ Bluestock</h4>
          <span className="text-xs text-muted-foreground">Previous</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Led CI/CD pipelines and developed React Native apps with complex third-party integrations.
        </p>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold">Developer Intern @ Processdrive.co</h4>
          <span className="text-xs text-muted-foreground">Internship</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Developed a comprehensive food delivery platform with responsive UI/UX from scratch.
        </p>
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-lg font-bold uppercase tracking-wider text-primary text-xs">Core Technical Skills</h3>
      <div className="flex flex-wrap gap-2">
        {["React.js", "Next.js", "React Native", "Three.js", "Node.js", "TypeScript", "Python", "Azure", "AWS", "LLMs", "Neural Networks"].map(skill => (
          <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground uppercase">
            Sandeep <span className="text-primary">R</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-6">
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="flex items-center gap-2">
                    Professional Resume
                  </DialogTitle>
                  <DialogDescription>
                    Overview of my technical background and professional journey.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 p-6 pt-2">
                  <ResumeContent />
                </ScrollArea>
                <div className="p-6 border-t flex justify-end gap-3 bg-muted/20">
                  <Button variant="outline" className="gap-2" onClick={() => window.print()}>
                    <Download className="h-4 w-4" /> Print PDF
                  </Button>
                  <Button asChild className="bg-primary gap-2">
                    <Link href="https://github.com/Sandeep1311-hub" target="_blank">
                      Visit GitHub <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-primary hover:bg-primary/90">Resume</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] rounded-2xl max-h-[90vh] overflow-hidden flex flex-col p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle>Resume</DialogTitle>
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
