
"use client";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary font-mono">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-light">
                Full-stack developer skilled in React.js, Node.js/Express, and MongoDB, 
                building real-world apps like a MERN job finder, real-time chat, and 
                e-commerce APIs. Experienced in end-to-end development from frontend UI to backend 
                architecture and deployment. Focused on scalable, clean, and 
                user-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
