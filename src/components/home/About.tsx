
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-photo");

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-5/12 lg:w-4/12">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
              <Image
                src={profileImage?.imageUrl || ""}
                alt="Profile photo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint={profileImage?.imageHint}
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 lg:w-8/12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Full-stack developer skilled in React.js, Node.js/Express, and MongoDB, 
                building real-world apps like a MERN job finder, real-time chat, and 
                e-commerce APIs.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experienced in end-to-end development from frontend UI to backend 
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
