"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    {children}
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </QueryClientProvider>
        </NextThemesProvider>
    );
}
