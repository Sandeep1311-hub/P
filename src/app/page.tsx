
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
