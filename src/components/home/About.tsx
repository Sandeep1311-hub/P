
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "about-profile");

  return (
    <section id="about" className="py-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-[8px] font-bold tracking-[0.2em] uppercase text-primary font-mono">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-[8px] md:text-[9px]">
                Full-stack developer skilled in React.js, Node.js/Express, and MongoDB, 
                building real-world apps like a MERN job finder, real-time chat, and 
                e-commerce APIs. Experienced in end-to-end development from frontend UI to backend 
                architecture and deployment. Focused on scalable, clean, and 
                user-centric solutions.
              </p>
            </div>
          </div>

          {profileImage && (
            <div className="relative w-full max-w-lg mx-auto aspect-[3/2] rounded-2xl overflow-hidden border border-border/50 group">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={profileImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
