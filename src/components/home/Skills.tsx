
"use client";

import { Progress } from "@/components/ui/progress";
import { Code2, Palette, Globe, Terminal, BrainCircuit } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "Node.js", level: 90 },
    { name: "Azure", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "LLMs / Neural Networks", level: 85 },
    { name: "Python", level: 80 },
    { name: "React / Next.js", level: 85 },
  ];

  const categories = [
    {
      title: "AI & Neural Networks",
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      description: "Architecting Neural Network models and implementing LLM-based solutions for complex problems.",
    },
    {
      title: "Backend Development",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      description: "Designing scalable APIs and robust server-side architectures using Node.js and TypeScript.",
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Globe className="h-6 w-6 text-primary" />,
      description: "Managing cloud infrastructure and complex CI/CD pipelines on the Azure platform.",
    },
    {
      title: "Full-Stack Ecosystem",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      description: "Developing cross-platform applications with React Native and responsive web interfaces.",
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground">
            Combining deep technical knowledge in backend systems and cloud with cutting-edge AI and neural architecture expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-base">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-secondary" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="p-6 rounded-2xl bg-card border hover:border-primary/50 transition-colors">
                <div className="mb-4">{category.icon}</div>
                <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                <p className="text-base text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
