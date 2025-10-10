import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "[ ABOUT ]", href: "#about" },
    { name: "[ PROJECTS ]", href: "#projects" },
    { name: "[ RESEARCH ]", href: "#research" },
    { name: "[ SKILLS ]", href: "#skills" },
    { name: "[ CONNECT ]", href: "#connect" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary text-primary-foreground ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Initials */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-2xl font-bold tracking-tight hover:text-secondary transition-colors duration-300"
            >
              RS
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium tracking-wide hover:text-secondary transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-primary transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-3xl font-bold text-primary-foreground hover:text-secondary transition-colors duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isOpen ? "fade-in 0.5s ease-out forwards" : "none",
                }}
              >
                {item.name}
              </button>
            ))}
            
            {/* Copyright in Mobile Menu */}
            <p className="absolute bottom-8 text-xs text-primary-foreground/60 text-center px-6">
              Copyright © 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
