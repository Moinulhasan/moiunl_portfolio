"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Award,
    BookOpen,
    Calendar,
    ExternalLink,
    GraduationCap,
} from "lucide-react";

export function CertificationsSection() {
    const academic = [
        {
            title: "BSc in Computer Science & Engineering",
            institution: "Daffodil International University",
            year: "2015 - 2019",
            description:
                "Focused on Software Engineering, Data Structures, and Algorithms. Completed generic capstone project on Web Applications.",
            icon: <GraduationCap className="h-5 w-5 text-primary" />,
        },
        // Add more if known
    ];

    const personal = [
        {
            title: "CI/CD with Jenkins for beginner",
            issuer: "Simplilearn",
            year: "2026",
            description:
                "Completed the CI/CD with Jenkins course, strengthening hands-on experience in automated build, test, and deployment pipelines",
            link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODA1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTY5NzczMV85OTY2MDg2XzE3Njc5NzU1NzI1ODcucG5nIiwidXNlcm5hbWUiOiJNZCBNb2ludWwgSGFzYW4gS2hhbiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4303%2FCI%252FCD%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1070720131599145137&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD0mpcjXJTy8xi0qyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDADG7XF9BAAAA",
            icon: <Award className="h-5 w-5 text-secondary-foreground" />,
        },
        {
            title: "Web Design & Development with PHP & MySQL",
            issuer:
                "Bangladesh-Korea Information Access Center, Department Of CSE, BUET",
            year: "2023",
            description: "Advanced concepts in PHP and MySQL ecosystem.",
            link: "#",
            icon: <BookOpen className="h-5 w-5 text-secondary-foreground" />,
        },
    ];

    return (
        <section
            id="certifications"
            className="section-padding relative overflow-hidden bg-black/5 dark:bg-black/20"
        >
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12 text-center animate-fade-in">
                    <Badge
                        variant="outline"
                        className="mb-4 px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
                    >
                        Credentials
                    </Badge>
                    <h2 className="section-title text-center mb-4">
                        Certifications & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="max-w-2xl text-center text-muted-foreground text-lg">
                        My academic journey and professional certifications that validation
                        my skills and expertise.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue="academic" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid w-full max-w-[400px] grid-cols-2 h-auto bg-secondary/50 p-1 border border-white/5 backdrop-blur-sm rounded-xl">
                                <TabsTrigger
                                    value="personal"
                                    className="data-[state=active]:bg-primary data-[state=active]:text-white py-2 rounded-lg transition-all duration-300"
                                >
                                    <Award className="w-4 h-4 mr-2" />
                                    Personal
                                </TabsTrigger>
                                <TabsTrigger
                                    value="academic"
                                    className="data-[state=active]:bg-primary data-[state=active]:text-white py-2 rounded-lg transition-all duration-300"
                                >
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    Academic
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="academic" className="space-y-4 animate-fade-in">
                            {academic.map((item, idx) => (
                                <Card
                                    key={idx}
                                    className="glass-card border-none bg-white/5 overflow-hidden hover:bg-white/10 transition-colors"
                                >
                                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                        <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex-grow space-y-2">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <h3 className="text-xl font-bold text-foreground">
                                                    {item.title}
                                                </h3>
                                                <Badge
                                                    variant="secondary"
                                                    className="w-fit flex items-center gap-1"
                                                >
                                                    <Calendar className="w-3 h-3" />
                                                    {item.year}
                                                </Badge>
                                            </div>
                                            <p className="text-primary font-medium">
                                                {item.institution}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>

                        <TabsContent value="personal" className="space-y-4 animate-fade-in">
                            {personal.map((item, idx) => (
                                <Card
                                    key={idx}
                                    className="glass-card border-none bg-white/5 overflow-hidden hover:bg-white/10 transition-colors"
                                >
                                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                        <div className="p-3 bg-indigo-500/10 rounded-xl shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex-grow space-y-2">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <h3 className="text-xl font-bold text-foreground">
                                                    {item.title}
                                                </h3>
                                                <Badge
                                                    variant="secondary"
                                                    className="w-fit flex items-center gap-1"
                                                >
                                                    <Calendar className="w-3 h-3" />
                                                    {item.year}
                                                </Badge>
                                            </div>
                                            <p className="text-indigo-400 font-medium">
                                                {item.issuer}
                                            </p>
                                            <p className="text-muted-foreground">
                                                {item.description}
                                            </p>
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-2"
                                                >
                                                    View Certificate{" "}
                                                    <ExternalLink className="w-3 h-3 ml-1" />
                                                </a>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
