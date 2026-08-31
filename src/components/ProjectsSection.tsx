import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    href={`/project/${project.id}`}
                    className="group block h-full"
                  >
                    <Card className="h-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-card/50 hover:bg-white/90 dark:hover:bg-card/80 transition-all duration-300 overflow-hidden rounded-xl flex flex-col shadow-sm hover:shadow-xl hover:border-primary/20">
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/40 shrink-0">
                        <ViewTransitionItem name={`project-image-${project.id}`}>
                          <img
                            src={project.cardImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </ViewTransitionItem>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-md px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-secondary text-secondary-foreground border border-black/5 dark:border-transparent group-hover:border-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2 flex-grow">
                          <ViewTransitionItem name={`project-title-${project.id}`} as="h3">
                            <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                          </ViewTransitionItem>
                          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {project.shortDescription}
                          </p>
                        </div>

                        <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pt-2 mt-auto">
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="-right-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="static translate-y-0 border-primary/20 hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="static translate-y-0 border-primary/20 hover:bg-primary/10 hover:text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
