"use client";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-xl font-bold tracking-[0.2em] uppercase text-primary font-mono">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-3xl mx-auto font-light">
                I&apos;m Sandeep R, a full‑stack developer specializing in React.js, React Native, Three.js, Node.js/Express, and AWS. I deliver end‑to‑end solutions—from UX and architecture to deployments on App Store and Play Store—across education, food delivery, sports and VR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
