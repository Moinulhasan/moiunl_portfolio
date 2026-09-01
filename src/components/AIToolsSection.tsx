import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { aiTools } from "@/data/aiTools";
import {
    Activity,
    ArrowRight,
    ArrowUpRight,
    AudioLines,
    BrainCircuit,
    Sparkles,
} from "lucide-react";
import { Link } from "next-view-transitions";

const iconMap: Record<string, React.ReactNode> = {
    "econotes-studio": <AudioLines className="w-6 h-6" />,
    "run-gen-ai": <Activity className="w-6 h-6" />,
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {aiTools.map((tool) => {
                        const stack = [
                            ...tool.frontendStack.slice(0, 2),
                            ...tool.backendStack.slice(0, 2),
                        ];

                        return (
                            <Link
                                key={tool.id}
                                href={`/ai-tools/${tool.id}`}
                                className="group block h-full"
                            >
                                <Card className="h-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-card/50 hover:bg-white/90 dark:hover:bg-card/80 transition-all duration-300 overflow-hidden rounded-xl flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                                    {/* Product Screenshot */}
                                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border/40 shrink-0 bg-black">
                                        <img
                                            src={tool.cardImage}
                                            alt={tool.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                        <div className="absolute top-3 left-3 flex items-center gap-2">
                                            <Badge className="rounded-md px-2 py-0.5 text-xs font-medium bg-green-500/90 text-white border-none shadow">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5" />
                                                {tool.status}
                                            </Badge>
                                            <Badge
                                                variant="secondary"
                                                className="rounded-md px-2 py-0.5 text-xs font-medium bg-black/60 text-white border-none shadow backdrop-blur-sm"
                                            >
                                                {tool.category}
                                            </Badge>
                                        </div>

                                        <div
                                            className={`absolute inline-flex items-center justify-center bottom-3 right-3 p-2.5 rounded-xl ${tool.bg} ${tool.color} backdrop-blur-md`}
                                        >
                                            {iconMap[tool.id] || (
                                                <BrainCircuit className="w-6 h-6" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                                        <div className="space-y-2 flex-grow">
                                            <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                                                {tool.name}
                                            </h3>
                                            <p
                                                className={`text-xs font-semibold ${tool.color} uppercase tracking-wider`}
                                            >
                                                {tool.description}
                                            </p>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                {tool.longDescription}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5">
                                            {stack.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-[10px] px-1.5 py-0 border-primary/15 text-muted-foreground"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-2 mt-auto border-t border-border/40">
                                            <span className="flex items-center text-sm font-medium text-primary">
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                            <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                                <ArrowUpRight className="h-4 w-4" />
                                            </span>
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
