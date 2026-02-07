
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "E-Commerce Titan",
      description: "A full-featured shopping platform with real-time inventory and Stripe integration.",
      tags: ["Next.js", "Stripe", "Prisma"],
      link: "#",
      github: "#",
    },
    {
      id: "project-2",
      title: "Analytics Suite",
      description: "Enterprise-grade dashboard for monitoring user engagement and sales metrics.",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
      github: "#",
    },
    {
      id: "project-3",
      title: "Mobile Task Manager",
      description: "A productivity app focusing on intuitive UX and offline functionality.",
      tags: ["React Native", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      id: "project-4",
      title: "Creative Agency Hub",
      description: "A portfolio site for a design agency featuring smooth GSAP animations.",
      tags: ["GSAP", "Tailwind", "Three.js"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground">
              A selection of my recent projects ranging from complex web applications 
              to creative user interfaces.
            </p>
          </div>
          <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
            View all projects <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <div key={project.id} className="group relative bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={imageData?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={imageData?.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link href={project.link} className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </Link>
                    <Link href={project.github} className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
