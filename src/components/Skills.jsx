import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layers, Brain, Box, Server, Database, Cloud, Zap } from "lucide-react";
import BadgeText from "./ui/BadgeText";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-violet-500 to-purple-500",
      icon: Code2,
      skills: [
        { name: "React", level: "Intermediate", proficiency: 70, icon: Layers },
        { name: "Next.js", level: "Intermediate", proficiency: 65, icon: Layers },
      ]
    },
    {
      title: "Backend Development",
      color: "from-fuchsia-500 to-pink-500",
      icon: Server,
      skills: [
        { name: "Express.js", level: "Intermediate", proficiency: 70, icon: Server },
        { name: "Python", level: "Intermediate", proficiency: 70, icon: Code2 },
        { name: "Core Java", level: "Intermediate", proficiency: 70, icon: Code2 },
        { name: "SQL", level: "Advance", proficiency: 90, icon: Database },
      ]
    },
    {
      title: "AI & Machine Learning",
      color: "from-indigo-500 to-blue-500",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: "Intermediate", proficiency: 70, icon: Zap },
      ]
    },
    {
      title: "Cloud & Tools",
      color: "from-cyan-500 to-teal-500",
      icon: Database,
      skills: [
        { name: "AWS", level: "Learning", proficiency: 35, icon: Cloud },
        { name: "Docker", level: "Intermediate", proficiency: 50, icon: Box },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BadgeText text="What I Learn"/>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <Card
                key={idx}
                className={`group relative border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300`}
              >
                <CardHeader className="flex items-center gap-3 mb-6">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl`}>
                    <CategoryIcon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    const globalIndex = `${idx}-${sIdx}`;
                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(globalIndex)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="h-4 w-4 text-slate-400 group-hover/skill:text-white transition-colors" />
                            <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors text-xl">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-lg text-slate-500 font-medium">{skill.level}</span>
                        </div>
                        <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
