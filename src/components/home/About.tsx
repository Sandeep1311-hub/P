"use client";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/40 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary font-mono">
              About Me
            </h2>
            <p className="text-foreground leading-relaxed text-xl md:text-2xl font-medium max-w-3xl mx-auto">
              I’m Sandeep R, a full‑stack developer specializing in React.js, React Native, Three.js, Node.js/Express, and AWS. I deliver end‑to‑end solutions—from UX and architecture to deployments on App Store and Play Store—across education, food delivery, sports and VR.
            </p>
            <div className="pt-4">
              <p className="text-muted-foreground text-lg italic">
                Currently focusing on backend systems, cloud integrations, and Python-driven 3D visualizations at ACE, Hosur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}