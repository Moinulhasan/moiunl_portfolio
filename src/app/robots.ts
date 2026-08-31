import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    // TODO: Replace with your actual domain
    const baseUrl = "https://moinulhasan.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
