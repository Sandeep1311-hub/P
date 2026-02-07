
import { Progress } from "@/components/ui/progress";
import { Code2, Palette, Globe, Terminal } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "Node.js", level: 85 },
    { name: "Azure", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "React / Next.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "PostgreSQL / MongoDB", level: 70 },
  ];

  const categories = [
    {
      title: "Backend Development",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      description: "Designing scalable APIs and robust server-side architectures.",
    },
    {
      title: "Cloud Services",
      icon: <Globe className="h-6 w-6 text-primary" />,
      description: "Deploying and managing applications on Azure cloud platform.",
    },
    {
      title: "Frontend Development",
      icon: <Palette className="h-6 w-6 text-primary" />,
      description: "Building modern, responsive user interfaces with React.",
    },
    {
      title: "Clean Code",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      description: "Writing maintainable, well-documented, and testable code.",
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground">
            I combine technical expertise with creative problem-solving to deliver 
            exceptional digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
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
                <h4 className="text-lg font-bold mb-2">{category.title}</h4>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
