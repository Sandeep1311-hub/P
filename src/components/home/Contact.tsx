"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Let's talk.</h2>
            <p className="text-muted-foreground mb-12 max-w-md text-lg leading-relaxed">
              Want to hire me? Or just want to say hi? Feel free to reach out. I am always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</h4>
                  <p className="text-lg font-semibold text-foreground">sandeep135791311@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone</h4>
                  <p className="text-lg font-semibold text-foreground">+91 8189976572</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Location</h4>
                  <p className="text-lg font-semibold text-foreground">44/4 chowdappa layout, bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl shadow-primary/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider opacity-70">Name</Label>
                  <Input id="name" placeholder="Full Name" required className="bg-background/50 h-14 rounded-xl border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider opacity-70">Email</Label>
                  <Input id="email" type="email" placeholder="Email Address" required className="bg-background/50 h-14 rounded-xl border-border/50 focus:border-primary" />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider opacity-70">Subject</Label>
                <Input id="subject" placeholder="What are you looking for?" required className="bg-background/50 h-14 rounded-xl border-border/50 focus:border-primary" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wider opacity-70">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me more about your project..."
                  className="min-h-[180px] bg-background/50 rounded-xl border-border/50 focus:border-primary p-4"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary h-16 text-lg font-bold rounded-xl shadow-xl shadow-primary/20" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    Send Message <Send className="ml-3 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}