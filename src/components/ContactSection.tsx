"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://api.moinul4u.com/mailsender.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((text) => {
        try {
          const result = JSON.parse(text);
          if (result.success) {
            toast({
              title: "Message sent!",
              description:
                "Thank you for your message. I'll get back to you soon.",
            });
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          } else {
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
            });
          }
        } catch (err) {
          toast({
            title: "Server Error",
            description: "Unexpected response from the server.",
          });
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          title: "Network Error",
          description: "Could not connect to the server. Try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential partnership?
            I'm currently available for freelance work and open to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Side */}
          <div className="min-w-0 space-y-8 animate-in slide-in-from-left duration-500">
            <div className="glass-card card-hover overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-purple-400 to-transparent" />
              <div className="p-8 space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">Contact Details</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    Replies within 24h
                  </span>
                </div>

              <div className="space-y-6">
                <a
                  href="mailto:moinulhasan.4960@gmail.com"
                  className="flex items-center gap-4 group p-4 rounded-xl bg-background/50 hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email Me</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">moinulhasan.4960@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+8801737711786"
                  className="flex items-center gap-4 group p-4 rounded-xl bg-background/50 hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Call Me</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">+880 1737711786</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-transparent">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4 font-medium">Connect on Socials</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/5">
                    <a
                      href="https://github.com/Moinulhasan"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/5">
                    <a
                      href="https://www.linkedin.com/in/moinul4u/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full border-primary/20 hover:bg-primary/5 text-foreground h-12 text-base"
              asChild
            >
              <a href="/cv/Md-Moinul-Hasan-Khan-CV.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>

          {/* Contact Form Side */}
          <div className="min-w-0 glass-card card-hover overflow-hidden animate-in slide-in-from-right duration-500 relative">
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-purple-400 to-transparent" />
            <form onSubmit={handleSubmit} className="space-y-6 p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-11 bg-background/50 border-input focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="h-11 bg-background/50 border-input focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="h-11 bg-background/50 border-input focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="min-h-[150px] resize-none bg-background/50 border-input focus:border-primary/50 transition-colors"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium shadow-lg shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
