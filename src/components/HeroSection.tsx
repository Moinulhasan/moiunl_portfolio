"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code2,
  Cpu,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Senior PHP & Laravel Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Remote Work
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Moinul Hasan <br />
              <span className="gradient-text text-glow">Khan</span>
            </h1>

            <div className="h-8 md:h-10 mb-6 flex items-center justify-center lg:justify-start">
              <Code2 className="mr-3 h-6 w-6 text-primary" />
              <span className="text-xl md:text-2xl font-mono text-foreground/80">
                {text}
                <span className="animate-pulse">_</span>
              </span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Architecting robust web solutions with precise code and scalable
              infrastructure. Specializing in{" "}
              <a href="#expertise" className="text-primary font-semibold hover:underline">#Laravel</a>,{" "}
              <a href="#expertise" className="text-primary font-semibold hover:underline">#PHP</a>, and{" "}
              <a href="#expertise" className="text-primary font-semibold hover:underline">
                #CloudTechnologies
              </a>
              .
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full btn-glow"
              >
                <a href="#projects">Explore Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 backdrop-blur-sm bg-background/30"
              >
                <a href="/cv/Md-Moinul-Hasan-Khan-CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start items-center">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mr-2">
                Connect
              </span>
              <a
                href="https://github.com/Moinulhasan"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110 duration-300 hover:shadow-glow p-2 rounded-full border border-transparent hover:border-primary/20 hover:bg-primary/5"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/moinul4u/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110 duration-300 hover:shadow-glow p-2 rounded-full border border-transparent hover:border-primary/20 hover:bg-primary/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:moinulhasan.4960@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110 duration-300 hover:shadow-glow p-2 rounded-full border border-transparent hover:border-primary/20 hover:bg-primary/5"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Futuristic Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

              {/* Main Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/30 z-10 glass-card p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black relative group">
                  <img
                    src="/Moinul_Hasan_Khan_1890.png"
                    alt="Moinul Hasan Khan"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-mono text-sm">
                      Hello World!
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 top-10 glass-card p-3 rounded-xl animate-float z-20 flex items-center gap-2 border-l-4 border-l-blue-500">
                <Terminal className="w-5 h-5 text-blue-500" />
                <div className="text-xs">
                  <div className="font-bold">Backend</div>
                  <div className="text-muted-foreground">Expert</div>
                </div>
              </div>

              <div
                className="absolute -left-4 bottom-20 glass-card p-3 rounded-xl animate-float z-20 flex items-center gap-2 border-l-4 border-l-primary"
                style={{ animationDelay: "1.5s" }}
              >
                <Cpu className="w-5 h-5 text-primary" />
                <div className="text-xs">
                  <div className="font-bold">Scalable</div>
                  <div className="text-muted-foreground">Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#projects" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
}
