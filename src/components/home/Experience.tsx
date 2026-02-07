
"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Full-Stack Developer",
      period: "2021 - Present",
      description: "Leading the development of a high-traffic e-commerce platform using Next.js and AWS. Optimized performance by 40% and mentored junior developers.",
      skills: ["Next.js", "AWS", "TypeScript"]
    },
    {
      company: "Creative Digital Agency",
      role: "Frontend Developer",
      period: "2019 - 2021",
      description: "Built responsive and interactive web applications for various enterprise clients. Specialized in complex GSAP animations and Three.js integrations.",
      skills: ["React", "GSAP", "Tailwind"]
    },
    {
      company: "Startup Hub",
      role: "Full-Stack Developer Intern",
      period: "2018 - 2019",
      description: "Assisted in building a real-time chat application and a job-matching platform using Node.js and Socket.io.",
      skills: ["Node.js", "Socket.io", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary font-mono mb-4">
              Career Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Experience Highlights</h3>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 md:pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/30"
              >
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_10px_rgba(121,80,242,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold">{exp.role}</h4>
                    <p className="text-primary font-medium flex items-center gap-2 mt-1">
                      <Briefcase className="h-4 w-4" /> {exp.company}
                    </p>
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-4 w-4" /> {exp.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs md:text-sm font-medium border-primary/20 bg-primary/5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
