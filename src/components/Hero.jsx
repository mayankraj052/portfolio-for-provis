import { useState, useEffect } from "react";
import { Sparkles, Code2, Brain, Server, Github, Linkedin, Mail, X } from "lucide-react";
import Bottomdecorator from "./ui/Bottomdecorator";
import BadgeText from "./ui/BadgeText";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { icon: Brain, label: "AI/ML", color: "from-violet-500 to-purple-500" },
    { icon: Code2, label: "Web Dev", color: "from-fuchsia-500 to-pink-500" },
    { icon: Server, label: "DevOps", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="relative w-full text-center z-10">
      {/* Greeting Badge */}
      <BadgeText text="Welcome to my portfolio"/>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in-up">
        <span className="text-slate-200">Hi, I'm </span>
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            Mayank Raj
          </span>
          <span className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-2xl"></span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-10 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Seeking an opportunity to apply my technical skills in{" "}
        <span className="text-violet-400 font-semibold">AI/ML</span>,{" "}
        <span className="text-fuchsia-400 font-semibold">web development</span>, and{" "}
        <span className="text-indigo-400 font-semibold">DevOps</span> while continuously learning and contributing to innovative projects.
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div key={tech.label} className="group relative overflow-hidden px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-slate-600 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative flex items-center gap-2">
                <Icon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{tech.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://github.com/mayankraj052" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/mayankraj052" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <X className="h-6 w-6" />
          </a>
          <a href="mailto:mayankrajsingh7646@gmail.com" className="social-icon">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
        .social-icon { position: relative; padding: 0.5rem; background: rgba(31,41,55,0.5); backdrop-blur: blur(4px); border: 1px solid rgba(71,85,105,0.5); border-radius: 9999px; transition: all 0.3s ease; }
        .social-icon:hover { border-color: #7c3aed; transform: translateY(-2px); }
        .social-icon svg { color: #cbd5e1; transition: color 0.3s ease; }
        .social-icon:hover svg { color: #fff; }

        @keyframes fade-in { from {opacity:0;} to {opacity:1;} }
        @keyframes fade-in-up { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
        @keyframes gradient { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
      `}</style>
    </div>
  );
}
