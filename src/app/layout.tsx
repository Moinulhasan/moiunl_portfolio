
import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Moinul Hasan | Portfolio",
  description: "Portfolio of Moinul Hasan - Full Stack Developer",
};

import Script from "next/script";
import { ViewTransitions } from "next-view-transitions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
          <Script
            id="structured-data"
            strategy="beforeInteractive"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebSite",
                    "name": "Moinul Hasan Khan Portfolio",
                    "url": "https://moinul4u.com",
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://moinul4u.com/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  },
                  {
                    "@type": "Person",
                    "name": "Moinul Hasan Khan",
                    "url": "https://moinul4u.com",
                    "image": "https://moinul4u.com/Moinul_Hasan_Khan_1890.png",
                    "jobTitle": "Senior PHP & Laravel Developer",
                    "sameAs": [
                      "https://github.com/Moinulhasan",
                      "https://www.linkedin.com/in/moinul4u/"
                    ],
                    "worksFor": {
                      "@type": "Organization",
                      "name": "Freelance"
                    },
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Dhaka",
                      "addressCountry": "Bangladesh"
                    },
                    "email": "moinulhasan.4960@gmail.com",
                    "telephone": "+8801737711786"
                  },
                  {
                    "@type": "ItemList",
                    "itemListElement": [
                      {
                        "@type": "SiteNavigationElement",
                        "position": 1,
                        "name": "About",
                        "description": "About Moinul Hasan Khan",
                        "url": "https://moinul4u.com/#about"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 2,
                        "name": "Expertise",
                        "description": "Technical Proficiency",
                        "url": "https://moinul4u.com/#expertise"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 3,
                        "name": "Projects",
                        "description": "Featured Projects",
                        "url": "https://moinul4u.com/#projects"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 4,
                        "name": "AI Tools",
                        "description": "AI Productivity Tools",
                        "url": "https://moinul4u.com/#ai-tools"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 5,
                        "name": "Certifications",
                        "description": "Certifications & Education",
                        "url": "https://moinul4u.com/#certifications"
                      },
                      {
                        "@type": "SiteNavigationElement",
                        "position": 6,
                        "name": "Contact",
                        "description": "Contact Me",
                        "url": "https://moinul4u.com/#contact"
                      }
                    ]
                  }
                ]
              }),
            }}
          />
          <Providers>
            <NavBar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
