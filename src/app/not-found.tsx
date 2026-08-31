
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                    404
                </h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Page not found</h2>
                    <p className="text-muted-foreground">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for.
                    </p>
                </div>
                <Button asChild size="lg">
                    <Link href="/">
                        Return Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
