
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-photo");

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
              <Image
                src={profileImage?.imageUrl || ""}
                alt="Professional headshot"
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
                data-ai-hint="professional headshot"
                priority
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 lg:w-8/12 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
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
