import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { DEV_NAME } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "// about", href: "#about" },
    { name: "// work", href: "#projects" },
    { name: "// Me", href: "#profile" },
    { name: "// contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/50">
              <Terminal className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
              {DEV_NAME.split(" ")[0]}
              <span className="text-muted">_{DEV_NAME.split(" ")[1]}</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-gray-400 hover:text-primary transition-all hover:translate-x-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-white/10 animate-fade-in">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-lg text-gray-300 hover:text-primary pl-2 border-l-2 border-transparent hover:border-primary transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
