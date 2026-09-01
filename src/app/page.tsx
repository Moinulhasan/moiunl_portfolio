
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AIToolsSection } from "@/components/AIToolsSection";
import { ContactSection } from "@/components/ContactSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior PHP & Laravel Developer",
  description:
    "Portfolio of Moinul Hasan Khan, Senior Software Specialist based in Dhaka, Bangladesh — PHP, Laravel, MySQL, Redis, and AWS expertise.",
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
