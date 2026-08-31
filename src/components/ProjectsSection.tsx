"use client";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { ViewTransitionItem } from "./ViewTransition";

// Shortest circular distance from `active`, so the carousel wraps both ways.
function offsetOf(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const count = projects.length;

  const next = () => setActive((a) => (a + 1) % count);
  const prev = () => setActive((a) => (a - 1 + count) % count);

  return (
    <section
      id="projects"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center space-y-4">
          <Badge
            variant="outline"
            className="px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
          >
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A small selection of my recent work in web development and software
            engineering.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            className="relative h-[480px] sm:h-[520px] lg:h-[560px]"
            style={{ perspective: "1800px" }}
          >
            {projects.map((project, index) => {
              const offset = offsetOf(index, active, count);
              const dist = Math.abs(offset);
              const dir = Math.sign(offset);
              const isActive = dist === 0;

              const translateX = dir * (dist === 1 ? 68 : dist === 0 ? 0 : 122);
              const scale = dist === 0 ? 1 : dist === 1 ? 0.78 : 0.6;
              const rotateY = dist === 0 ? 0 : -dir * (dist === 1 ? 32 : 26);
              const opacity = dist === 0 ? 1 : dist === 1 ? 0.55 : dist === 2 ? 0.2 : 0;
              const zIndex = 50 - dist * 10;

              const visibleTech = project.technologies.slice(0, 3);

              return (
                <div
                  key={project.id}
                  role={isActive ? undefined : "button"}
                  tabIndex={isActive ? -1 : 0}
                  aria-label={isActive ? undefined : `Show ${project.title}`}
                  onClick={() => !isActive && setActive(index)}
                  onKeyDown={(e) => {
                    if (!isActive && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      setActive(index);
                    }
                  }}
                  className={`absolute top-1/2 left-1/2 w-[85%] sm:w-[70%] lg:w-[54%] ${
                    isActive ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    pointerEvents: dist > 2 ? "none" : "auto",
                    transition:
                      "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 700ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div className="relative w-full h-[400px] sm:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950 flex flex-col">
                    {/* Image zone */}
                    <div className="relative flex-[1.3] min-h-0 overflow-hidden">
                      <ViewTransitionItem name={`project-image-${project.id}`}>
                        <img
                          src={project.cardImage}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      </ViewTransitionItem>
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent" />
                      {project.liveLink && (
                        <Badge className="absolute top-3 left-3 rounded-md px-2 py-0.5 text-[10px] font-medium bg-black/60 text-white border-none backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
                          Live
                        </Badge>
                      )}
                    </div>

                    {/* Text panel */}
                    <div className="relative shrink-0 p-5 sm:p-7">
                      {/* faint oversized background texture */}
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                        <span className="text-[5rem] sm:text-[6rem] font-black uppercase text-white/[0.04] whitespace-nowrap leading-none select-none">
                          {(project.technologies[0] + " ").repeat(4)}
                        </span>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-2 text-xs text-white/50 mb-2">
                          <span>{project.year}</span>
                          {project.company && (
                            <>
                              <span aria-hidden>·</span>
                              <span>{project.company}</span>
                            </>
                          )}
                        </div>

                        <ViewTransitionItem
                          name={`project-title-${project.id}`}
                          as="h3"
                          className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2"
                        >
                          {project.title}
                        </ViewTransitionItem>

                        <p className="hidden sm:block text-sm text-white/60 leading-relaxed max-w-xl mb-4 line-clamp-2">
                          {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                          {visibleTech.map((tech) => (
                            <Badge
                              key={tech}
                              className="rounded-md px-2 py-0.5 text-xs font-medium bg-white/10 text-white border-none"
                            >
                              {tech}
                            </Badge>
                          ))}

                          {isActive && (
                            <Link
                              href={`/project/${project.id}`}
                              className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors rounded-full px-4 py-2"
                            >
                              View Case Study
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${project.title}`}
                aria-current={index === active}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-black/15 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
