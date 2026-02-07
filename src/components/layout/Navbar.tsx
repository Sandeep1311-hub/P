
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
              <Link href="/resume" target="_blank">
                Resume
              </Link>
            </Button>
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
              <Button asChild className="w-full bg-primary h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/20">
                <Link href="/resume" target="_blank" onClick={() => setIsMenuOpen(false)}>
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
