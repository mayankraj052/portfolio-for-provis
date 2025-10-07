import { useState } from "react";
import { ExternalLink, Github, Sparkles, Code2, Layers, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "AI-Powered Finance Management System",
      description: "A full-stack finance management app that supports multiple accounts, expense/income tracking, chart visualizations, AI-based receipt scanning using Gemini, and daily/monthly email updates. Built with Supabase, Tailwind, Prisma, and deployed on Vercel.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "Gemini AI", "Prisma", "Inngest", "Resend", "Recharts"],
      demo: "https://wealth-ebon.vercel.app/",
      code: "https://github.com/mayankraj052/AI_Money_Management",
      category: "Web Dev",
      icon: Layers
    },
    {
      title: "Diabetes Prediction",
      description: "A machine learning model for diabetes prediction using Flask and scikit-learn.",
      tech: ["ML", "Flask", "NumPy", "scikit-learn", "HTML", "CSS", "Bootstrap"],
      demo: "https://diabetes-prediction-college-project.onrender.com",
      code: "https://github.com/mayankraj052/Diabetes-Prediction",
      category: "AI/ML",
      icon: Zap
    },
    {
      title: "Real-Time Video Call App",
      description: "A video calling application where users can find and connect using their username, built with WebSockets.",
      tech: ["React", "WebSocket", "Node.js", "Express"],
      demo: "https://react-video-call-xvq3.onrender.com",
      code: "https://github.com/mayankraj052/react-video_call",
      category: "Web Dev",
      icon: Layers
    },
    {
      title: "Real-Time Object Detection",
      description: "Object detection system using YOLO for real-time identification of objects.",
      tech: ["YOLO", "OpenCV", "Deep Learning", "Python"],
      demo: "#",
      code: "#",
      category: "AI/ML",
      icon: Zap
    }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>What I've built</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            A collection of projects showcasing my skills in AI/ML, web development, and cloud technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="relative group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <CardHeader className="flex items-center justify-between mb-4 p-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-2.5 rounded-xl">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">{project.category}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex flex-col flex-grow">
                  <CardTitle className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 leading-relaxed mb-6 flex-grow text-xl">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-white hover:bg-slate-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-700/50 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/mayankraj052"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/50 rounded-full text-slate-300 hover:text-white font-medium transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
