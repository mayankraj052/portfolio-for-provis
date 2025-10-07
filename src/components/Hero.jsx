import { useEffect, useState } from "react";
import {
  Sparkles,
  Code2,
  Brain,
  Server,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //Runs side effects, such as adding/removing event listeners.
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16 px-4 sm:px-8 lg:px-16 xl:px-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Floating Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "1s",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative w-full max-w-[1400px] text-center z-10">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium animate-fade-in">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span>Welcome to my portfolio</span>
        </div>

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
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-10 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Seeking an opportunity to apply my technical skills in{" "}
          <span className="text-violet-400 font-semibold">AI/ML</span>,{" "}
          <span className="text-fuchsia-400 font-semibold">
            web development
          </span>
          , and <span className="text-indigo-400 font-semibold">DevOps</span>{" "}
          while continuously learning and contributing to innovative projects.
        </p>

        {/* Tech Stack Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.label}
                className="group relative overflow-hidden px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-slate-600 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>
                <div className="relative flex items-center gap-2">
                  <Icon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {tech.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/mayankraj052"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/mayankraj052"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <X className="h-6 w-6" />
            </a>
            <a
              href="mailto:mayankrajsingh7646@gmail.com"
              className="social-icon"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gradient-to-b from-violet-400 to-transparent rounded-full mx-auto animate-scroll"></div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .social-icon {
          position: relative;
          padding: 0.5rem;
          background: rgba(31, 41, 55, 0.5);
          backdrop-blur: blur(4px);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          border-color: #7c3aed;
          transform: translateY(-2px);
        }
        .social-icon svg {
          color: #cbd5e1;
          transition: color 0.3s ease;
        }
        .social-icon:hover svg {
          color: #fff;
        }
      `}</style>
    </section>
  );
}
