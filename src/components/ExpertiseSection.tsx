import { Progress } from "@/components/ui/progress";
import { Brain, Cloud, Database, Layout, Server, Terminal } from "lucide-react";

const LEVEL_PERCENT: Record<string, number> = {
  expert: 95,
  advanced: 80,
  intermediate: 65,
  beginner: 50,
};

export function ExpertiseSection() {
  const categories = [
    {
      id: "backend",
      icon: <Server className="w-5 h-5" />,
      title: "Backend Engineering",
      description: "Architecture & Scalable Systems",
      longDescription:
        "5+ years architecting Laravel & PHP systems in production — from ERP billing platforms to microservice-based distributor management — built for scale, modularity, and long-term maintainability.",
      skills: [
        { name: "PHP", level: "Advanced" },
        { name: "Laravel", level: "Expert" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "Microservices Architecture", level: "Advanced" },
        { name: "Auth & Sanctum", level: "Advanced" },
        { name: "Job Scheduling (SupervisorD)", level: "Advanced" },
      ],
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      bar: "[&>div]:bg-purple-400",
      topBar: "bg-gradient-to-r from-purple-500 via-purple-400 to-transparent",
    },
    {
      id: "cloud",
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud & Infrastructure",
      description: "AWS & Automated Deployment",
      longDescription:
        "Deploying and scaling SaaS applications on AWS with Docker-based microservices, automated CI/CD, and shell-scripted operations that keep high-transaction systems running reliably.",
      skills: [
        { name: "AWS (EC2, S3)", level: "Intermediate" },
        { name: "Docker", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "Shell Scripting", level: "Advanced" },
        { name: "Queue Management (RabbitMQ)", level: "Advanced" },
      ],
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      bar: "[&>div]:bg-sky-400",
      topBar: "bg-gradient-to-r from-sky-500 via-sky-400 to-transparent",
    },
    {
      id: "database",
      icon: <Database className="w-5 h-5" />,
      title: "Database Management",
      description: "Optimization & Modeling",
      longDescription:
        "Data integrity and performance at scale — optimized MySQL schemas, Redis caching, and MongoDB integrations powering billing, ticketing, and distribution platforms under high transaction loads.",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "Redis", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Database Management", level: "Advanced" },
        { name: "Query Optimization", level: "Advanced" },
      ],
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      bar: "[&>div]:bg-emerald-400",
      topBar: "bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent",
    },
    {
      id: "frontend",
      icon: <Layout className="w-5 h-5" />,
      title: "Frontend Development",
      description: "Interactive User Interfaces",
      longDescription:
        "Full-stack delivery pairing a Laravel backend with React.js and Vue.js frontends — shipping complete, production-ready platforms from multi-vendor marketplaces to ticketing systems.",
      skills: [
        { name: "JavaScript", level: "Expert" },
        { name: "React.js", level: "Advanced" },
        { name: "Vue.js", level: "Advanced" },
        { name: "HTML5/CSS3", level: "Advanced" },
      ],
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      bar: "[&>div]:bg-pink-400",
      topBar: "bg-gradient-to-r from-pink-500 via-pink-400 to-transparent",
    },
    {
      id: "tools",
      icon: <Terminal className="w-5 h-5" />,
      title: "Delivery & Process",
      description: "Business Analysis & Collaboration",
      longDescription:
        "Cross-functional delivery from requirements to release — pairing solution design and process optimization with the day-to-day tooling that keeps distributed teams aligned.",
      skills: [
        { name: "Jira / ClickUp / Slack", level: "Advanced" },
        { name: "Business & Solution Analysis", level: "Advanced" },
        { name: "Solution Design & Process Optimization", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Problem Solving", level: "Intermediate" },
      ],
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      bar: "[&>div]:bg-yellow-400",
      topBar: "bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent",
    },
    {
      id: "ai",
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Augmented Engineering",
      description: "Agentic Workflows & Automation",
      longDescription:
        "Integrating agentic AI workflows and MCP-based tooling into the development lifecycle — from AI-assisted code generation to context-aware automation — to ship faster without cutting corners.",
      skills: [
        { name: "Agentic Development", level: "Advanced" },
        { name: "MCP (Model Context Protocol)", level: "Advanced" },
        { name: "AI-Assisted Code Generation", level: "Expert" },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "AI Workflow Automation", level: "Advanced" },
      ],
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      bar: "[&>div]:bg-indigo-400",
      topBar: "bg-gradient-to-r from-indigo-500 via-indigo-400 to-transparent",
    },
  ];

  return (
    <section
      id="expertise"
      className="section-padding relative overflow-visible"
    >
      {/* Background Ambience — its own overflow-hidden wrapper, kept separate
          from the sticky cards below so it can't break position:sticky while
          still containing these off-edge blobs on narrow viewports. */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24 animate-fade-in">
          <span className="section-label">My Arsenal</span>
          <h2 className="section-title text-center">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="max-w-2xl text-center text-muted-foreground text-lg">
            A comprehensive overview of the tools and technologies I use to
            build scalable, high-performance digital solutions.
          </p>
        </div>

        {/* Stacked scroll cards: each card sticks at the same top offset with an
            ascending z-index, so the next card fully covers the previous one as you
            scroll — pure CSS position:sticky, reverses for free on scroll-up. */}
        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="sticky"
              style={{
                top: "88px",
                zIndex: index + 1,
              }}
            >
              <div className="relative overflow-hidden min-h-[420px] md:min-h-[380px] rounded-[2rem] border border-black/5 dark:border-white/10 bg-background dark:bg-[#0a0a0f]">
                <div className={`h-1.5 w-full ${category.topBar}`} />

                {/* giant faded index numeral */}
                <span className="pointer-events-none absolute -right-2 -top-8 text-[8rem] md:text-[9rem] font-black leading-none text-foreground/[0.035] select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative p-6 md:p-8 grid md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10">
                  {/* Left: identity */}
                  <div className="space-y-3">
                    <div
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${category.bg} ${category.color}`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.2em] ${category.color} mb-2`}
                      >
                        {category.description}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {category.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* Right: proficiency */}
                  <div className="space-y-3 self-center">
                    {category.skills.map((skill) => {
                      const pct =
                        LEVEL_PERCENT[skill.level.toLowerCase()] ?? 70;
                      return (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                              {skill.level}
                            </span>
                          </div>
                          <Progress
                            value={pct}
                            className={`h-1.5 bg-black/5 dark:bg-white/5 ${category.bar}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
