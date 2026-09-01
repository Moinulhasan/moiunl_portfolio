
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Calendar,
    CheckCircle2,
    Cpu,
    Github,
    Terminal,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { ViewTransitionItem } from "@/components/ViewTransition";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata(props: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const params = await props.params;
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.shortDescription,
        alternates: { canonical: `/project/${project.id}` },
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            url: `/project/${project.id}`,
            type: "article",
            images: [{ url: project.image }],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.shortDescription,
            images: [project.image],
        },
    };
}

export default async function ProjectDetails(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="container mx-auto px-4 pt-24 pb-16">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Top Section: Split Layout (Left Content, Right Image) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Header Info */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-500">
                            <Link
                                href="/#projects"
                                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Projects
                            </Link>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-primary/10 text-primary border-primary/20"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <ViewTransitionItem name={`project-title-${project.id}`} as="h1">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                        {project.title}
                                    </h1>
                                </ViewTransitionItem>

                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {project.shortDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-6">
                                <div>
                                    <span className="text-sm text-muted-foreground block mb-1">
                                        Company
                                    </span>
                                    <span className="font-semibold flex items-center gap-2">
                                        <Building2 className="h-4 w-4 text-primary" />{" "}
                                        {project.company || "Personal"}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground block mb-1">
                                        Year
                                    </span>
                                    <span className="font-semibold flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-primary" /> {project.year}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground block mb-1">
                                        Role
                                    </span>
                                    <span className="font-semibold flex items-center gap-2">
                                        <Terminal className="h-4 w-4 text-primary" /> {project.role}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                {project.liveLink && (
                                    <Button className="group" size="lg" asChild>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Live Site
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </Button>
                                )}

                                {project.githubLink && (
                                    <Button variant="outline" size="lg" asChild>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Source Code
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative animate-in slide-in-from-right duration-500 flex items-center justify-center">
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/40 bg-muted shadow-2xl w-full flex items-center justify-center">
                                <ViewTransitionItem name={`project-image-${project.id}`} className="w-full h-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover bg-black/5"
                                    />
                                </ViewTransitionItem>
                                {/* Subtle Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary/5 rounded-3xl blur-3xl" />
                        </div>
                    </div>

                    {/* Bottom Section: Full Details */}
                    <div className="grid lg:grid-cols-3 gap-12 pt-12 border-t border-border/40">
                        {/* Main Content (2/3) */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* Overview */}
                            <section className="space-y-6">
                                <h2 className="text-3xl font-bold flex items-center gap-2">
                                    <Cpu className="h-6 w-6 text-primary" />
                                    Project Overview
                                </h2>
                                <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed">
                                    <p>{project.fullDescription}</p>
                                </div>
                            </section>

                            {/* Challenges & Solutions */}
                            {(project.challenges || project.solutions) && (
                                <section className="grid gap-8 md:grid-cols-2">
                                    {project.challenges && (
                                        <div className="space-y-4 p-6 rounded-2xl bg-destructive/5 border border-destructive/10">
                                            <h3 className="text-xl font-bold text-destructive flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-destructive" />{" "}
                                                Challenges
                                            </h3>
                                            <ul className="space-y-3">
                                                {project.challenges.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-muted-foreground flex gap-2 text-sm leading-relaxed"
                                                    >
                                                        <span>•</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.solutions && (
                                        <div className="space-y-4 p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                                            <h3 className="text-xl font-bold text-green-500 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />{" "}
                                                Solutions
                                            </h3>
                                            <ul className="space-y-3">
                                                {project.solutions.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-muted-foreground flex gap-2 text-sm leading-relaxed"
                                                    >
                                                        <span>•</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            )}

                            {/* Gallery */}
                            {project.gallery && project.gallery.length > 0 && (
                                <section className="space-y-8">
                                    <h2 className="text-3xl font-bold">Gallery</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.gallery.map((img, i) => (
                                            <div
                                                key={i}
                                                className="group relative rounded-xl overflow-hidden border border-white/10 aspect-video"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Gallery ${i}`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <span className="text-white font-medium px-4 py-2 rounded-full border border-white/30 backdrop-blur-md">
                                                        View Fullscreen
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar (1/3) - Features & Full Tech Stack */}
                        <div className="space-y-10">
                            {/* Key Features List */}
                            {project.features && project.features.length > 0 && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        Key Features
                                    </h3>
                                    <div className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="p-4 rounded-xl border border-white/5 bg-secondary/5 hover:bg-secondary/10 transition-colors flex gap-3"
                                            >
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <p className="text-sm text-foreground/80 leading-relaxed">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Technologies */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Terminal className="h-5 w-5 text-primary" />
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="px-3 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent text-sm"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
