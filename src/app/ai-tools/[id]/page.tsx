import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aiTools } from "@/data/aiTools";
import {
    Activity,
    ArrowLeft,
    ArrowUpRight,
    AudioLines,
    BrainCircuit,
    CheckCircle2,
    Cpu,
    DollarSign,
    Layers,
    Lightbulb,
    Monitor,
    Server,
    Sparkles,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return aiTools.map((tool) => ({
        id: tool.id,
    }));
}

const iconMap: Record<string, React.ReactNode> = {
    "econotes-studio": <AudioLines className="w-8 h-8" />,
    "run-gen-ai": <Activity className="w-8 h-8" />,
};

export default async function AIToolDetails(props: {
    params: Promise<{ id: string }>;
}) {
    const params = await props.params;
    const tool = aiTools.find((t) => t.id === params.id);

    if (!tool) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="container mx-auto px-4 pt-24 pb-16">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Top Section: Hero */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Header Info */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-500">
                            <Link
                                href="/#ai-tools"
                                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to AI Tools
                            </Link>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="secondary"
                                        className="bg-primary/10 text-primary border-primary/20"
                                    >
                                        {tool.category}
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-green-500/10 text-green-400 border-green-500/20"
                                    >
                                        {tool.status}
                                    </Badge>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                    {tool.name}
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {tool.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-6">
                                <div>
                                    <span className="text-sm text-muted-foreground block mb-1">
                                        AI Model Used
                                    </span>
                                    <span className="font-semibold flex items-center gap-2 text-sm">
                                        <BrainCircuit className="h-4 w-4 text-primary shrink-0" />{" "}
                                        {tool.aiModel}
                                    </span>
                                </div>
                                {tool.pricing && (
                                    <div>
                                        <span className="text-sm text-muted-foreground block mb-1">
                                            Pricing
                                        </span>
                                        <span className="font-semibold flex items-center gap-2">
                                            <DollarSign className="h-4 w-4 text-primary" />{" "}
                                            {tool.pricing}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <Button className="group" size="lg" asChild>
                                    <a
                                        href={tool.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit {tool.name}
                                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: Visual Card */}
                        <div className="relative animate-in slide-in-from-right duration-500 flex items-center justify-center">
                            <div className="relative w-full max-w-md mx-auto">
                                <Card className="glass-card border border-black/10 dark:border-white/10 overflow-hidden">
                                    <div className={`h-2 w-full ${tool.topBar}`}></div>
                                    <CardContent className="p-10 flex flex-col items-center justify-center space-y-6 text-center">
                                        <div
                                            className={`inline-flex items-center justify-center p-6 rounded-2xl ${tool.bg} ${tool.color}`}
                                        >
                                            {iconMap[tool.id] || (
                                                <BrainCircuit className="w-8 h-8" />
                                            )}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold mb-2">{tool.name}</h2>
                                            <p
                                                className={`text-sm font-medium ${tool.color} uppercase tracking-wider`}
                                            >
                                                {tool.description}
                                            </p>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                                            {tool.longDescription}
                                        </p>
                                    </CardContent>
                                </Card>
                                {/* Decorative Glow */}
                                <div
                                    className={`absolute -z-10 inset-0 ${tool.bg} rounded-3xl blur-3xl opacity-50`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Full Details */}
                    <div className="grid lg:grid-cols-3 gap-12 pt-12 border-t border-border/40">
                        {/* Main Content (2/3) */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* Key Functions */}
                            <section className="space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                    Key Functions
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {tool.keyFunctions.map((func, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-xl border border-white/5 bg-secondary/5 hover:bg-secondary/10 transition-colors flex gap-3"
                                        >
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <p className="text-sm text-foreground/80 leading-relaxed">
                                                {func}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Use Cases */}
                            <section className="space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Lightbulb className="h-6 w-6 text-primary" />
                                    Best Use Cases
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {tool.useCases.map((useCase, index) => (
                                        <div
                                            key={index}
                                            className="p-5 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors"
                                        >
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <p className="text-sm text-foreground/80 leading-relaxed">
                                                    {useCase}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar (1/3) - Tech Stack */}
                        <div className="space-y-10">
                            {/* AI Model */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Cpu className="h-5 w-5 text-primary" />
                                    AI Model Used
                                </h3>
                                <div className="p-4 rounded-xl border border-white/5 bg-secondary/5">
                                    <p className="text-sm text-foreground/80 leading-relaxed">
                                        {tool.aiModel}
                                    </p>
                                </div>
                            </div>

                            {/* Frontend Stack */}
                            {tool.frontendStack.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Monitor className="h-5 w-5 text-primary" />
                                        Frontend Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.frontendStack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="px-3 py-1 bg-sky-500/10 text-sky-400 border-sky-500/20 text-sm"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Backend Stack */}
                            {tool.backendStack.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Server className="h-5 w-5 text-primary" />
                                        Backend Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.backendStack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="px-3 py-1 bg-purple-500/10 text-purple-400 border-purple-500/20 text-sm"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Full Tech Overview */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Layers className="h-5 w-5 text-primary" />
                                    Technology Overview
                                </h3>
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-medium text-primary">Category:</span>
                                            <span className="text-foreground/80">{tool.category}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-medium text-primary">Status:</span>
                                            <span className="text-foreground/80">{tool.status}</span>
                                        </div>
                                        {tool.pricing && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="font-medium text-primary">Pricing:</span>
                                                <span className="text-foreground/80">{tool.pricing}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
