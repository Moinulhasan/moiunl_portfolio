
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AIToolsSection } from "@/components/AIToolsSection";
import { ContactSection } from "@/components/ContactSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moinul Hasan Khan | PHP & Laravel Developer",
  description: "Portfolio of Moinul Hasan Khan, detailing expertise in PHP, Laravel, and more.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <AIToolsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
