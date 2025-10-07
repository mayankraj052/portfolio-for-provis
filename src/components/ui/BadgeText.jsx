import { Sparkles } from "lucide-react";

export default function BadgeText({ text, Icon = Sparkles }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium">
      <Icon className="h-4 w-4 text-violet-400" />
      <span>{text}</span>
    </div>
  );
}
