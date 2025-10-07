import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, Building2 } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      position: "AI-ML Virtual Intern",
      company: "EduSkill",
      location: "Remote",
      duration: "July 2024 - September 2024",
      type: "Virtual Internship",
      description: "Completed an AI-ML virtual internship, learning TensorFlow and PyTorch. Worked on real-world machine learning problems, gaining hands-on experience in model training and deployment.",
      achievements: [
        "Gained hands-on experience in TensorFlow and PyTorch",
        "Worked on real-world ML problem statements",
        "Deployed basic models successfully"
      ],
      tech: ["Python", "TensorFlow", "PyTorch"]
    }]

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>My professional journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions and contributing to impactful projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-indigo-500/50 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full border-4 border-slate-900"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Shadcn Card */}
                <div className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="group relative border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
                    <CardHeader className="flex flex-col gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-2 rounded-lg">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {item.position}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 font-medium">
                        <Building2 className="h-4 w-4 text-fuchsia-400" />
                        <span>{item.company}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="h-4 w-4 text-fuchsia-400" />
                          <span className="text-sm">{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin className="h-4 w-4 text-indigo-400" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        <div className="ml-auto bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 rounded-lg px-3 py-1.5">
                          <span className="text-xs font-bold text-violet-300">{item.type}</span>
                        </div>
                      </div>

                      <p className="text-slate-400 leading-relaxed text-xl">{item.description}</p>

                      <div className="space-y-2">
                        {item.achievements.map((ach, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2 text-slate-400">
                            <ChevronRight className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm ">{ach}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                        {item.tech.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden lg:block lg:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}




