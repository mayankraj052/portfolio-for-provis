import { GraduationCap, Calendar, MapPin, Award, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      university: "University of Engineering and Management, Jaipur",
      location: "Jaipur, Rajasthan, India",
      years: "2022 - 2026",
      cgpa: "8.9 CGPA",
      description: "Specialized in Artificial Intelligence, Machine Learning, and Full-Stack Development.",
      highlights: ["AI/ML Research", "Web Development", "Cloud Computing", "Database Management System"]
    },
    {
      degree: "Higher Secondary Education (12th)",
      university: "Bihar School Examination Board, Patna",
      location: "Bihar, India",
      years: "2020 - 2022",
      cgpa: "72%",
      description: "Focused on Mathematics, Physics, and Chemistry",
      highlights: ["Mathematics", "Computer Science", "Physics"]
    },
    {
      degree: "Secondary Education (10th)",
      university: "Bihar School Examination Board, Patna",
      location: "Bihar, India",
      years: "2019 - 2020",
      cgpa: "82.3%",
      description: "Achieved excellence in academics with a strong foundation in science and mathematics.",
      highlights: ["Academic Excellence", "Science", "Mathematics"]
    }
  ];

  return (
    <section id="education" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>My academic journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and emerging technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-indigo-500/50 -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full border-4 border-slate-900"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Card */}
                <div className={`lg:w-[calc(50%-2rem)] w-full ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <CardHeader className="relative mb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-2 rounded-lg">
                              <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                              {item.degree}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-slate-300 font-medium text-lg mb-2">{item.university}</CardDescription>
                        </div>
                        <div className="bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                          <Award className="h-4 w-4 text-violet-400" />
                          <span className="text-sm font-bold text-violet-300">{item.cgpa}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-fuchsia-400" />
                          <span className="text-sm">{item.years}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-indigo-400" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-white transition-all duration-300">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
