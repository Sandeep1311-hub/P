"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "ACE, Hosur",
      role: "Software Trainee & Developer",
      description: "Leading backend development and cloud architecture initiatives. Specialized in building scalable software solutions and backend systems using Node.js and Azure. Experienced in building Python 3D visual ready projects and implementing advanced LLM integrations.",
      skills: ["Node.js", "Azure", "Python", "3D Visualization", "LLMs", "TypeScript"]
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
    <section id="experience" className="py-24 bg-card/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-base font-bold tracking-[0.3em] uppercase text-primary font-mono mb-4">
              Career Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Professional Experience</h3>
          </div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-10 md:pl-16 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-transparent"
              >
                <div className="absolute left-[-10px] top-2 w-[21px] h-[21px] rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(121,80,242,0.6)]" />
                
                <div className="mb-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2">{exp.role}</h4>
                  <div className="flex items-center gap-3 text-primary text-lg font-bold">
                    <Briefcase className="h-5 w-5" /> {exp.company}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-3xl font-medium">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm md:text-base font-bold py-1.5 px-4 rounded-lg bg-primary/10 text-primary border-none">
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