import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { ViewTransitionItem } from "./ViewTransition";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const featured = index === 0;
            const visibleTech = project.technologies.slice(0, 3);
            const extraTech = project.technologies.length - visibleTech.length;

            return (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className={`group block h-full ${featured ? "lg:col-span-2" : ""}`}
              >
                <Card className="h-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-card/50 hover:bg-white/90 dark:hover:bg-card/80 transition-all duration-300 overflow-hidden rounded-xl flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden border-b border-border/40 shrink-0 ${
                      featured ? "aspect-[21/9]" : "aspect-[16/10]"
                    }`}
                  >
                    <ViewTransitionItem
                      name={`project-image-${project.id}`}
                      className="block w-full h-full"
                    >
                      <img
                        src={project.cardImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </ViewTransitionItem>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {featured && (
                        <Badge className="rounded-md px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground border-none shadow">
                          Featured
                        </Badge>
                      )}
                      {project.liveLink && (
                        <Badge
                          variant="secondary"
                          className="rounded-md px-2 py-0.5 text-xs font-medium bg-white/90 dark:bg-black/60 text-foreground border-none shadow backdrop-blur-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                          Live
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      {visibleTech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-md px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-secondary text-secondary-foreground border border-black/5 dark:border-transparent group-hover:border-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {extraTech > 0 && (
                        <span className="text-xs text-muted-foreground">
                          +{extraTech}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
                        className={`font-semibold leading-tight text-foreground group-hover:text-primary transition-colors ${
                          featured ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {project.title}
                      </ViewTransitionItem>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-auto border-t border-border/40">
                      <span className="flex items-center text-sm font-medium text-primary">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      {project.liveLink && (
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
