export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-gradient-to-t from-secondary/50 to-background dark:from-secondary/10 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/70">
              &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Md. Moinul Hasan Khan. All rights reserved.
            </p>
          </div>

          {/* <div className="flex gap-6">
            <a 
              href="#" 
              className="text-foreground/70 hover:text-primary transition-colors transform hover:scale-110 duration-300" 
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-foreground/70 hover:text-primary transition-colors transform hover:scale-110 duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@moinulhasan.com" 
              className="text-foreground/70 hover:text-primary transition-colors transform hover:scale-110 duration-300" 
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
