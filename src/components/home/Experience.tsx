
"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "ACE, Hosur",
      role: "Software Trainee",
      description: "Leading backend development and cloud architecture initiatives. Specialized in building scalable services using Node.js and integrating cloud solutions with Azure. Currently implementing advanced LLM integrations and Neural Network architectures for enterprise-grade tools.",
      skills: ["Node.js", "Azure", "TypeScript", "LLM", "Neural Networks", "Python"]
    },
    {
      company: "Bluestock",
      role: "Full-Stack Developer",
      description: "Spearheaded the implementation of CI/CD pipelines and developed internal React Native/web applications featuring complex third-party integrations for seamless platform functionality.",
      skills: ["React Native", "CI/CD", "Node.js", "Web Apps", "Integration"]
    },
    {
      company: "Processdrive.co",
      role: "Developer Intern",
      description: "Successfully built a comprehensive food delivery application from the ground up, ensuring the UI/UX was fully responsive and optimized for a seamless experience across all device types.",
      skills: ["JavaScript", "React", "Tailwind CSS", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold tracking-[0.2em] uppercase text-primary font-mono mb-4">
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
                
                <div className="mb-4">
                  <h4 className="text-xl md:text-2xl font-bold">{exp.role}</h4>
                  <p className="text-primary font-medium flex items-center gap-2 mt-1">
                    <Briefcase className="h-4 w-4" /> {exp.company}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm md:text-base font-medium border-primary/20 bg-primary/5">
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
