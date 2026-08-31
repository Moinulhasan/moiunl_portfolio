import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { aiTools } from "@/data/aiTools";
import {
    Activity,
    ArrowRight,
    AudioLines,
    BrainCircuit,
    Sparkles,
} from "lucide-react";
import { Link } from "next-view-transitions";

const iconMap: Record<string, React.ReactNode> = {
    "econotes-studio": <AudioLines className="w-7 h-7" />,
    "run-gen-ai": <Activity className="w-7 h-7" />,
};

export function AIToolsSection() {
    return (
        <section
            id="ai-tools"
            className="section-padding relative overflow-hidden"
        >
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] -z-10"></div>
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-12 text-center space-y-4 animate-fade-in">
                    <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
                    >
                        <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                        Built with AI
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        AI Tools I{" "}
                        <span className="gradient-text">Created</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        AI-powered products I&apos;ve designed and built to solve real-world
                        productivity challenges — from transcription to intelligent
                        automation.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {aiTools.map((tool, index) => (
                        <Link
                            key={tool.id}
                            href={`/ai-tools/${tool.id}`}
                            className="group block"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Card className="h-full glass-card card-hover border border-black/10 dark:border-white/10 overflow-hidden rounded-xl flex flex-col">
                                {/* Colored Top Accent Bar */}
                                <div
                                    className={`h-1 w-full bg-gradient-to-r ${tool.bg
                                        .replace("bg-", "from-")
                                        .replace("/10", "")} to-transparent`}
                                ></div>

                                <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                                    {/* Icon + Category */}
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`inline-flex items-center justify-center p-3 rounded-xl ${tool.bg} ${tool.color} transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            {iconMap[tool.id] || (
                                                <BrainCircuit className="w-7 h-7" />
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge
                                                variant="secondary"
                                                className="rounded-md px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20"
                                            >
                                                {tool.status}
                                            </Badge>
                                            <Badge
                                                variant="secondary"
                                                className="rounded-md px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-secondary text-secondary-foreground border border-black/5 dark:border-transparent"
                                            >
                                                {tool.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Tool Name + Description */}
                                    <div className="space-y-2 flex-grow">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p
                                            className={`text-sm font-medium ${tool.color} uppercase tracking-wider`}
                                        >
                                            {tool.description}
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                            {tool.longDescription}
                                        </p>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {[...tool.frontendStack.slice(0, 2), ...tool.backendStack.slice(0, 1)].map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-[10px] px-1.5 py-0 border-primary/15 text-muted-foreground"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Bottom Link Hint */}
                                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pt-2 mt-auto">
                                        View Details{" "}
                                        <ArrowRight className="ml-1.5 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
