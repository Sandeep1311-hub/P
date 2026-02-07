import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-photo");

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl transform rotate-3" />
            <div className="relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
              <Image
                src={profileImage?.imageUrl || ""}
                alt="Profile photo"
                fill
                className="object-cover"
                data-ai-hint={profileImage?.imageHint}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
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
    </section>
  );
}
