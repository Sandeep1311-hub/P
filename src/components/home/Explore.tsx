
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Terminal, Layers, Globe, Wrench, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Explore() {
  const skillCategories = [
    {
      title: "AI & Neural Networks",
      icon: <Layers className="h-4 w-4 text-primary" />,
      skills: ["LLMs", "Neural Networks", "Python", "Deep Learning", "Transformers", "NLP"],
    },
    {
      title: "Backend",
      icon: <Terminal className="h-4 w-4 text-primary" />,
      skills: ["Node.js", "Express.js", "TypeScript", "REST APIs", "Firebase", "MongoDB"],
    },
    {
      title: "Frontend",
      icon: <Code2 className="h-4 w-4 text-primary" />,
      skills: ["React.js", "React Native", "Next.js", "TailwindCSS", "JavaScript", "Redux", "Zustand"],
    },
    {
      title: "Cloud & Deployment",
      icon: <Globe className="h-4 w-4 text-primary" />,
      skills: ["Azure", "CI/CD Pipelines", "Vercel", "GitHub Actions", "App Store", "Play Store"],
    },
    {
      title: "Testing & Tools",
      icon: <Wrench className="h-4 w-4 text-primary" />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Retool", "Vitest"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-4 w-4 text-primary" />,
      skills: ["Ownership", "Communication", "Problem-solving", "Teamwork", "Adaptability"],
    },
  ];

  const projects = [
    {
      id: "ai-research-agent",
      title: "AI Research Agent",
      description: "An advanced automated research assistant utilizing LLMs to aggregate, analyze, and synthesize complex information from various sources.",
      tags: ["GenAI", "TypeScript", "Node.js", "AI Agent"],
      link: "https://github.com/Sandeep1311-hub/ai-research-agent",
      github: "https://github.com/Sandeep1311-hub/ai-research-agent",
    },
    {
      id: "project-netlify",
      title: "Modern Web Application",
      description: "A high-performance interactive web application deployed on Netlify, focusing on seamless user experience and modern UI patterns.",
      tags: ["React", "Netlify", "UI/UX", "Vite"],
      link: "https://inquisitive-lollipop-d5ae22.netlify.app/",
      github: "#",
    },
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
  ];

  return (
    <section id="explore" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Explore</h2>
        
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="bg-card border p-1 h-auto mb-12">
            <TabsTrigger 
              value="skills" 
              className="px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
            >
              <Code2 className="h-4 w-4" /> Skills
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
            >
              <Layers className="h-4 w-4" /> Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div key={category.title} className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors py-1.5 px-4 rounded-lg font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => {
                const imageData = PlaceHolderImages.find(img => img.id === project.id);
                return (
                  <div key={project.id} className="group relative bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={imageData?.imageUrl || ""}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={imageData?.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                        <Link href={project.link} target="_blank" className="p-4 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-xl">
                          <ExternalLink size={24} />
                        </Link>
                        {project.github !== "#" && (
                          <Link href={project.github} target="_blank" className="p-4 bg-background text-foreground rounded-full hover:scale-110 transition-transform shadow-xl border">
                            <Github size={24} />
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-medium bg-primary/5 text-primary border-primary/10">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
