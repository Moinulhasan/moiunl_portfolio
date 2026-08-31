import { projects } from "@/data/projects";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    // TODO: Replace with your actual domain
    const baseUrl = "https://moinulhasan.com";

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/project/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...projectUrls,
    ];
}
