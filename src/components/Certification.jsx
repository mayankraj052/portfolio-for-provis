import { Award, ExternalLink, Sparkles, Trophy, CheckCircle2 } from "lucide-react";

export default function Certification() {
  const certifications = [
    {
      title: "Database Management System",
      from: "NPTEL",
      marks: "78% (Top 5 Percentile)",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs75/Course/NPTEL24CS75S13720013902699652.pdf"
    },
    {
      title: "The Joy of Computing using Python",
      from: "NPTEL",
      marks: "76%",
      link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs108/Course/NPTEL23CS108S53780260120250796.pdf"
    },
    {
      title: "Getting Started with Javascript",
      from: "Pupilfirst",
      marks: "",
      link: "https://www.pupilfirst.school/c/230612-5SFO6R"
    },
    {
      title: "Data Structures and Algorithms using Java",
      from: "Infosys Springboard",
      marks: "",
      link: "https://drive.google.com/file/d/1sL6FBVgv3bs-r_pHJfEhspCXcjVWkI0F/view?usp=sharing"
    },
    {
      title: "Introduction to Internet of Things",
      from: "NPTEL",
      marks: "85%",
      link: "https://drive.google.com/file/d/1-4Od7QLYiNlNXzzPeK0iZcl8bjmC1uaZ/view?usp=drivesdk"
    }
  ];

  return (
    <section id="certifications" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>Validated achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Certifications</span> & Awards
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              
              {/* Certificate Card */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex-1 flex flex-col">
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    {cert.marks && (
                      <div className="bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 rounded-lg px-3 py-1.5">
                        <div className="flex items-center gap-1.5">
                          <Trophy className="h-3.5 w-3.5 text-violet-400" />
                          <span className="text-xs font-bold text-violet-300">{cert.marks}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-6">
                    <CheckCircle2 className="h-4 w-4 text-fuchsia-400 flex-shrink-0" />
                    <p className="text-slate-400 text-sm">
                      Issued by <span className="text-slate-300 font-medium">{cert.from}</span>
                    </p>
                  </div>

                  {/* View Certificate Button */}
                  <div className="mt-auto">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all duration-300 group/btn"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              {certifications.length}+
            </p>
            <p className="text-slate-400 text-sm">Certifications</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-2">
              3
            </p>
            <p className="text-slate-400 text-sm">Platforms</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Top 5%
            </p>
            <p className="text-slate-400 text-sm">Percentile</p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}