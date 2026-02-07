
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
            <p className="text-muted-foreground leading-relaxed">
              Hello! I&apos;m a passionate developer based in San Francisco. With over 5 years 
              of experience in the tech industry, I specialize in building responsive 
              and user-friendly web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey began with a curiosity for how things work on the internet, 
              which led me to pursue a degree in Computer Science. Since then, I&apos;ve 
              worked with startups and established companies, honing my skills in 
              frontend and backend development.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Education</h4>
                <p className="text-sm text-muted-foreground">B.S. Computer Science</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Experience</h4>
                <p className="text-sm text-muted-foreground">5+ Years Professional</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Availability</h4>
                <p className="text-sm text-muted-foreground">Open for Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
