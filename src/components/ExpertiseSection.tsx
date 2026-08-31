import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Cloud, Database, Layout, Server, Terminal } from "lucide-react";

export function ExpertiseSection() {
  const categories = [
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="w-4 h-4 mr-2" />,
      title: "Backend Engineering",
      description: "Architecture & Scalable Systems",
      longDescription:
        "I specialize in building robust server-side applications that can handle high traffic and complex business logic. My focus is on clean architecture, API design, and long-term maintainability.",
      skills: [
        { name: "PHP 8.x", level: "Expert" },
        { name: "Laravel 10", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "Microservices", level: "Advanced" },
        { name: "System Design", level: "Advanced" },
      ],
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      id: "cloud",
      label: "DevOps",
      icon: <Cloud className="w-4 h-4 mr-2" />,
      title: "Cloud & Infrastructure",
      description: "AWS & Automated Deployment",
      longDescription:
        "I design and manage cloud infrastructure to ensure high availability and security. My DevOps workflow includes automated testing, CI/CD pipelines, and containerization.",
      skills: [
        { name: "AWS (EC2, S3, RDS)", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "Linux Admin", level: "Intermediate" },
      ],
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      id: "database",
      label: "Database",
      icon: <Database className="w-4 h-4 mr-2" />,
      title: "Database Management",
      description: "Optimization & Modeling",
      longDescription:
        "Data is the core of any application. I ensure data integrity and performance through optimized schemas, proper indexing, and efficient caching strategies.",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "Redis", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Query Optimization", level: "Expert" },
        { name: "Data Modeling", level: "Advanced" },
      ],
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: <Layout className="w-4 h-4 mr-2" />,
      title: "Frontend Development",
      description: "Interactive User Interfaces",
      longDescription:
        "While my primary focus is backend, I am proficient in modern frontend frameworks to build complete, full-stack solutions with responsive and accessible designs.",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "React", level: "Intermediate" },
        { name: "Vue.js", level: "intermediate" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5/CSS3", level: "Expert" },
      ],
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Terminal className="w-4 h-4 mr-2" />,
      title: "Tools & Workflow",
      description: "Efficiency & Collaboration",
      longDescription:
        "I utilize a suite of industry-standard tools to streamline development, enhance collaboration, and maintain code quality throughout the project lifecycle.",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "Jira / Trello", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "Composer / NPM", level: "Expert" },
      ],
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      id: "ai",
      label: "AI",
      icon: <Brain className="w-4 h-4 mr-2" />,
      title: "Artificial Intelligence",
      description: "AI Integration & Automation",
      longDescription:
        "Leveraging AI tools to enhance development workflows and build intelligent applications.",
      skills: [
        { name: "Cursor", level: "Expert" },
        { name: "n8n", level: "Advanced" },
        { name: "Chat GPT", level: "Expert" },
        { name: "Antigravity", level: "Moderate" },
        { name: "Notebookllm", level: "Moderate" },
      ],
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
  ];

  return (
    <section
      id="expertise"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 animate-fade-in">
          <span className="section-label">My Arsenal</span>
          <h2 className="section-title text-center">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="max-w-2xl text-center text-muted-foreground text-lg">
            A comprehensive overview of the tools and technologies I use to
            build scalable, high-performance digital solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="backend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full md:w-auto h-auto bg-secondary/50 p-1 border border-white/5 backdrop-blur-sm rounded-xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg py-2 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="md:hidden">{category.icon}</span>
                      <span className="hidden md:flex md:items-center">
                        {category.icon}
                        {category.label}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 animate-fade-in"
              >
                <Card className="glass-card border-none bg-white/5 overflow-hidden">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${category.bg.replace("bg-", "from-").replace("/10", "")} to-transparent`}
                  ></div>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left Column: Info */}
                      <div className="flex-1 space-y-4">
                        <div
                          className={`inline-flex items-center p-3 rounded-xl ${category.bg} ${category.color}`}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">
                            {category.title}
                          </h3>
                          <p
                            className={`text-sm font-medium ${category.color} mb-3 uppercase tracking-wider`}
                          >
                            {category.description}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {category.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Skills */}
                      <div className="flex-1 bg-black/5 dark:bg-black/20 rounded-2xl p-6 border border-black/5 dark:border-white/5">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                          Core Competencies
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.skills.map((skill, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 rounded bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors border border-black/5 dark:border-transparent"
                            >
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>
                              <Badge
                                variant="secondary"
                                className="text-[10px] h-5 bg-black/5 dark:bg-black/40 text-muted-foreground border-none"
                              >
                                {skill.level}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
