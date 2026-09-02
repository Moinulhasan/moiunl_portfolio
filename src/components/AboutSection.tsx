import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Rocket, Users } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      label: "Years Experience",
      value: "6+",
      icon: <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
    {
      label: "Projects Completed",
      value: "30+",
      icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    },
    {
      label: "Happy Clients",
      value: "20+",
      icon: <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
    },
    {
      label: "Commitment",
      value: "100%",
      icon: <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />,
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="section-title mb-6">
            Behind the <span className="gradient-text">Code</span>
          </h2>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-12 leading-relaxed text-muted-foreground text-left md:text-center">
            <p className="mb-6">
              I&apos;m a{" "}
              <span className="text-foreground font-semibold">
                Senior Software Specialist
              </span>{" "}
              based in Dhaka, Bangladesh, with 6+ years architecting scalable
              web applications in the{" "}
              <a
                href="#expertise"
                className="text-primary font-semibold hover:underline decoration-primary/20 transition-all"
              >
                PHP and Laravel
              </a>{" "}
              ecosystem — backed by MySQL, MongoDB, and Redis for data that
              holds up under real production load.
            </p>

            <p className="mb-6">
              Currently at{" "}
              <span className="text-foreground font-semibold">
                SSL Wireless
              </span>
              , I build ERP billing systems, microservice-based applications,
              and automated job scheduling that keep mission-critical
              financial systems running reliably, while deploying and scaling
              infrastructure on AWS with Docker.
            </p>

            <p>
              From a multi-vendor e-commerce platform at IOTA Infotech to a
              distributor management system serving the Bangladesh market, I
              bring the same focus to every{" "}
              <a
                href="#projects"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                project
              </a>
              : clean architecture, measurable business impact, and
              dependable delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="glass-card border-none bg-white/5 hover:bg-white/10 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-3 p-3 rounded-full bg-background/50">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
