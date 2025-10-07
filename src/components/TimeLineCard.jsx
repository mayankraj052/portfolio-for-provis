import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function TimelineCard({ 
  title, 
  subtitle, 
  location, 
  duration, 
  type, 
  description, 
  highlights = [], 
  tags = [], 
  icon: Icon, 
  gradientColor = "from-violet-500 to-indigo-500", 
  reverse = false 
}) {
  return (
    <div className={`relative lg:flex lg:items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* Timeline dot */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full border-4 border-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Card */}
      <div className={`lg:w-[calc(50%-2rem)] w-full ${reverse ? "lg:pl-12" : "lg:pr-12"}`}>
        <Card className="group relative border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
          <CardHeader className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-3">
              {Icon && (
                <div className={`bg-gradient-to-br ${gradientColor} p-2 rounded-lg`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              )}
              <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                {title}
              </CardTitle>
            </div>
            {subtitle && <p className="text-slate-300 font-medium">{subtitle}</p>}
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-4 text-slate-400">
              {duration && (
                <div className="flex items-center gap-2">
                  <span className="text-sm">{duration}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-2">
                  <span className="text-sm">{location}</span>
                </div>
              )}
              {type && (
                <div className="ml-auto bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 rounded-lg px-3 py-1.5">
                  <span className="text-xs font-bold text-violet-300">{type}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {description && <p className="text-slate-400 leading-relaxed">{description}</p>}

            {/* Highlights / Achievements */}
            {highlights.length > 0 && (
              <div className="space-y-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-400">
                    <ChevronRight className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags / Tech */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="hidden lg:block lg:w-[calc(50%-2rem)]"></div>
    </div>
  );
}
