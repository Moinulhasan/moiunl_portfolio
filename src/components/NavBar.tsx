"use client";
import { Menu, X } from "lucide-react";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "AI Tools", href: "#ai-tools" },
    { name: "Contact", href: "#contact" },
    { name: "Certificate", href: "#certifications" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${isScrolled
            ? "translate-y-0 opacity-100 py-0"
            : "-translate-y-full opacity-0 pointer-events-none py-2"
          }`}
      >
        <div
          className={`
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-full max-w-5xl
          ${isScrolled
              ? "bg-white/80 dark:bg-black/20 backdrop-blur-xl border border-black/5 dark:border-white/20 shadow-lg"
              : "bg-transparent border-transparent"
            }
        `}
        >
          <Link
            href="/"
            className="text-2xl font-bold gradient-text font-heading flex items-center gap-2"
          >
            Moinul
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-black/5 dark:bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground p-2 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col pt-32 px-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-8 items-center">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
