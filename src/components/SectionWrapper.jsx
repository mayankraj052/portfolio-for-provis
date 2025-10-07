// components/ui/SectionWrapper.jsx
import Bottomdecorator from "./ui/Bottomdecorator";

export default function SectionWrapper({ children, id }) {
  return (
    <section
      id={id}
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Inner Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        {children}
      </div>

      <Bottomdecorator />
    </section>
  );
}
