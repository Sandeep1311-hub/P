
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-photo");

  return (
    <section id="about" className="py-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border grayscale hover:grayscale-0 transition-all duration-700 max-w-sm mx-auto md:mx-0">
             {profileImage && (
               <Image
                 src={profileImage.imageUrl}
                 alt="Profile Photo"
                 fill
                 className="object-cover"
                 data-ai-hint={profileImage.imageHint}
               />
             )}
          </div>
          <div className="space-y-4">
            <h2 className="text-[8px] font-bold tracking-[0.2em] uppercase text-primary font-mono">About Me</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-[10px]">
                Full-stack developer skilled in React.js, Node.js/Express, and MongoDB, 
                building real-world apps like a MERN job finder, real-time chat, and 
                e-commerce APIs. Experienced in end-to-end development from frontend UI to backend 
                architecture and deployment. Focused on scalable, clean, and 
                user-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
