
"use client";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-base font-bold tracking-[0.2em] uppercase text-primary font-mono">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto font-light">
                Software Trainee at ACE, Hosur, specializing in Node.js, Azure, and TypeScript. 
                Previously a Developer Intern at Processdrive.co where I built Python 3D visual ready projects. 
                Focused on end-to-end development, scalable architectures, and efficient, clean code solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
