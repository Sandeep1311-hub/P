
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
            Available for freelance work
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
            Designing digital <br />
            <span className="text-gradient">experiences that matter.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up [animation-delay:400ms]">
            I&apos;m a Full Stack Developer & Designer crafting high-performance, beautiful 
            web applications with modern technologies. Let&apos;s build something extraordinary together.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 animate-fade-in-up [animation-delay:800ms]">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
