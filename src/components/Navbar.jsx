import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Download, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-950/20"
          : "bg-slate-950/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="group cursor-pointer">
          <div className="relative">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              Portfolio
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-violet-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-3 text-lg md:text-xl font-medium text-slate-300 hover:text-white transition-colors group"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-violet-400 to-indigo-400 group-hover:w-3/4 transition-all duration-300"></div>
            </a>
          ))}

          {/* Resume Button */}
          <Button
            asChild
            className="ml-6 relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 group"
          >
            <a href="/Mayank_Raj_Resume.pdf" download className="flex items-center gap-3 px-6 py-3 text-xl md:text-2xl">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Resume</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-slate-800/50 text-slate-300 hover:text-white"
              >
                {open ? (
                  <X className="h-7 w-7 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-7 w-7 transition-transform duration-300" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] sm:w-[70%] md:w-[50%] bg-slate-950 border-l border-slate-800/50 p-0"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-800/50">
                  <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                    Menu
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-3">
                  {links.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between p-5 text-lg md:text-xl text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/30 transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>

                <div className="p-6 border-t border-slate-800/50">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/30 h-14 text-xl md:text-2xl font-medium group"
                  >
                    <a href="/Mayank_Raj.pdf" download className="flex items-center justify-center gap-3">
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      <span>Download Resume</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
