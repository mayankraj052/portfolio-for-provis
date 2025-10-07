import { MapPin, Mail, Code, Rocket, Brain, Sparkles } from "lucide-react";
import Bottomdecorator from "./ui/Bottomdecorator";

export default function About() {
  const highlights = [
    { icon: Code, text: "Full-Stack Development", color: "from-violet-500 to-purple-500" },
    { icon: Brain, text: "AI & Machine Learning", color: "from-fuchsia-500 to-pink-500" },
    { icon: Rocket, text: "Cloud & DevOps", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span>Get to know me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      {/* About Content */}
      <div className="space-y-12">
        {/* Profile + Stats */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative group w-64 sm:w-80">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-800 p-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="Mayank Raj"
                className="rounded-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent rounded-xl"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-3 rounded-xl">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1</p>
                  <p className="text-xs text-slate-400">Year Coding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center max-w-3xl space-y-4">
            <p className="text-slate-300 text-2xl leading-relaxed">
              I'm a passionate <span className="text-violet-400 font-semibold">Computer Science Engineering</span> student with a strong interest in Artificial Intelligence, Machine Learning, and Web Development. I specialize in building scalable applications using modern technologies like <span className="text-fuchsia-400 font-semibold">React</span>, <span className="text-indigo-400 font-semibold">TypeScript</span>, and Deep Learning frameworks.
            </p>
            <p className="text-slate-300 text-xl leading-relaxed">
              Currently, I am honing my skills in <span className="text-violet-400 font-semibold">Cloud Computing</span>, <span className="text-fuchsia-400 font-semibold">Rust</span>, and <span className="text-indigo-400 font-semibold">DevOps</span>, while also exploring advanced AI concepts and ensemble learning techniques for medical data classification.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group relative h-full flex flex-col justify-center overflow-hidden bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 hover:shadow-2xl transition-all duration-300 text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative flex flex-col items-center">
                  <Icon className="h-8 w-8 text-slate-400 group-hover:text-white transition-colors mb-2" />
                  <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="group relative h-full flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-violet-500 to-purple-500 p-3 rounded-xl">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
              <p className="text-slate-200 font-medium">Bihar, India</p>
            </div>
          </div>

          <div className="group relative h-full flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-3 rounded-xl">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
              <p className="text-slate-200 font-medium text-sm truncate">mayankrajsingh7646@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
