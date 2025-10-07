import { GraduationCap, Briefcase } from "lucide-react";
import BadgeText from "./BadgeText";
import TimelineCard from "./TimelineCard";

export default function Timeline({ data, type }) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <BadgeText
          text={type === "education" ? "My academic journey" : "My professional journey"}
          Icon={type === "education" ? GraduationCap : Briefcase}
        />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {type === "education" ? "Education" : "Work "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {type === "experience" ? "Experience" : ""}
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {type === "education"
            ? "Building a strong foundation in computer science and emerging technologies"
            : "Building innovative solutions and contributing to impactful projects"}
        </p>
      </div>

      {/* Grid Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {data.map((item, index) => (
          <TimelineCard key={index} item={item} type={type} />
        ))}
      </div>
    </div>
  );
}
