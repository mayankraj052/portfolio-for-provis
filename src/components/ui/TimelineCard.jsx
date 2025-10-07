import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar, MapPin, Award, ChevronRight, Building2 } from "lucide-react";

export default function TimelineCard({ item, type }) {
  return (
    <Card className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
      <CardHeader className="relative mb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-violet-500 to-indigo-500 p-2 rounded-lg">
                {type === "education" ? (
                  <GraduationCap className="h-5 w-5 text-white" />
                ) : (
                  <Briefcase className="h-5 w-5 text-white" />
                )}
              </div>
              <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                {type === "education" ? item.degree : item.position}
              </CardTitle>
            </div>
            <CardDescription className="text-slate-300 font-medium text-lg mb-2">
              {type === "education" ? item.university : item.company}
            </CardDescription>
          </div>
          {type === "education" ? (
            <div className="bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-bold text-violet-300">{item.cgpa}</span>
            </div>
          ) : (
            <div className="ml-auto bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 rounded-lg px-3 py-1.5">
              <span className="text-xs font-bold text-violet-300">{item.type}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4 text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-fuchsia-400" />
            <span className="text-sm">{type === "education" ? item.years : item.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-indigo-400" />
            <span className="text-sm">{item.location}</span>
          </div>
          {type === "experience" && (
            <div className="flex items-center gap-2 text-slate-300 font-medium">
              <Building2 className="h-4 w-4 text-fuchsia-400" />
              <span>{item.company}</span>
            </div>
          )}
        </div>

        <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>

        {/* Highlights or Achievements */}
        {type === "education" ? (
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-white transition-all duration-300"
              >
                {highlight}
              </span>
            ))}
          </div>
        ) : (
          <>
            <div className="space-y-2">
              {item.achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-400">
                  <ChevronRight className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{ach}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
              {item.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
