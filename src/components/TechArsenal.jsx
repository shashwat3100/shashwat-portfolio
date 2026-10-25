import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  Box, 
  Flame, 
  Server, 
  Workflow,
  CheckCircle2
} from 'lucide-react';

const row1Skills = [
  { name: 'React 19', category: 'Frontend', level: 'Production', icon: Layers, color: '#61dafb' },
  { name: 'Next.js 16', category: 'Framework', level: 'App Router', icon: Code2, color: '#ffffff' },
  { name: 'Node.js', category: 'Backend', level: 'Runtime', icon: Server, color: '#68a063' },
  { name: 'PostgreSQL', category: 'Database', level: 'Relational', icon: Database, color: '#336791' },
  { name: 'TypeScript', category: 'Language', level: 'Strict Mode', icon: Code2, color: '#3178c6' },
  { name: 'Express.js', category: 'API Engine', level: 'REST APIs', icon: Server, color: '#e2e8f0' },
  { name: 'C++', category: 'Core CS', level: 'DSA Certified', icon: Terminal, color: '#00599c' },
  { name: 'Java', category: 'Language', level: 'OOP Architecture', icon: Terminal, color: '#f89820' },
  { name: 'Tailwind CSS v4', category: 'Design System', level: 'Modern CSS', icon: Sparkles, color: '#38bdf8' },
  { name: 'Python', category: 'Language', level: 'ML & Scripting', icon: Terminal, color: '#ffd43b' },
  { name: 'SQL & Indexing', category: 'Database', level: 'Optimized Queries', icon: Database, color: '#00b4d8' },
];

const row2Skills = [
  { name: 'Three.js', category: '3D WebGL', level: 'Interactive Shaders', icon: Box, color: '#f59e0b' },
  { name: 'Google Gemini SDK', category: 'Applied AI', level: 'LLM Pipelines', icon: Sparkles, color: '#8b5cf6' },
  { name: 'WebGL', category: 'Graphics', level: 'Hardware Accelerated', icon: Box, color: '#ec4899' },
  { name: 'Blender', category: 'Spatial Design', level: '3D Assets & Lighting', icon: Box, color: '#f97316' },
  { name: 'GSAP', category: 'Animation', level: 'Kinematic & Timelines', icon: Sparkles, color: '#88ce02' },
  { name: 'Docker', category: 'DevOps', level: 'Containerized', icon: Workflow, color: '#2496ed' },
  { name: 'Git & GitHub', category: 'Version Control', level: 'CI / CD Workflows', icon: Terminal, color: '#f05032' },
  { name: 'Vite', category: 'Tooling', level: 'Sub-second HMR', icon: Flame, color: '#646cff' },
  { name: 'Cannon-es Physics', category: '3D Math', level: 'Kinematic Engines', icon: Box, color: '#10b981' },
  { name: 'Postman', category: 'Testing', level: 'API Testing', icon: Workflow, color: '#ff6c37' },
  { name: 'Linux / Shell', category: 'Systems', level: 'Bash & PowerShell', icon: Terminal, color: '#4ade80' },
];

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterItem = (item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'languages') return ['Language', 'Core CS'].includes(item.category);
    if (activeCategory === 'web') return ['Frontend', 'Framework', 'Backend', 'Database', 'API Engine', 'Design System'].includes(item.category);
    if (activeCategory === 'ai-3d') return ['3D WebGL', 'Applied AI', 'Graphics', 'Spatial Design', 'Animation', '3D Math'].includes(item.category);
    if (activeCategory === 'tools') return ['DevOps', 'Version Control', 'Tooling', 'Testing', 'Systems'].includes(item.category);
    return true;
  };

  return (
    <section id="arsenal" className="py-20 overflow-hidden relative border-y border-white/5 bg-[#07070a]">
      {/* Top Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>01 / TECHNICAL ARSENAL</span>
          </div>
          <div className="text-xs font-mono-tag text-neutral-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>CONTINUOUS HARDWARE ACCELERATED STREAM</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-editorial text-white mb-3">
              Tools, languages & systems.<br />
              <em className="italic text-amber-200/90 font-serif">Selected for speed, scale, and clarity.</em>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
              A continuous horizontal stream of production frameworks, data engines, applied AI libraries, and 3D spatial tools. Hover to pause any card.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'languages', label: 'Core & Languages' },
              { id: 'web', label: 'Web & Databases' },
              { id: 'ai-3d', label: 'Applied AI & 3D' },
              { id: 'tools', label: 'Tools & DevOps' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-tag transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-md shadow-amber-400/20'
                    : 'border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sideways Slideshow Container with Fade Masks */}
      <div className="relative w-full space-y-4 py-2">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#07070a] via-[#07070a]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#07070a] via-[#07070a]/80 to-transparent z-10" />

        {/* Row 1: Sliding Left */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-left flex gap-4 pr-4">
            {[...row1Skills, ...row1Skills].map((item, idx) => {
              const Icon = item.icon;
              const isDimmed = !filterItem(item);
              return (
                <div
                  key={`r1-${idx}`}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl border transition-all duration-300 min-w-[240px] select-none ${
                    isDimmed
                      ? 'border-white/5 bg-white/[0.01] opacity-30 grayscale'
                      : 'border-white/10 bg-[#0e0e14]/90 hover:border-amber-400/40 hover:bg-[#14141d] hover:shadow-xl hover:shadow-amber-500/5'
                  }`}
                >
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-white truncate group-hover:text-amber-100 transition-colors">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-tag text-neutral-400">
                      <span className="text-amber-300/80">{item.category}</span>
                      <span>·</span>
                      <span className="text-neutral-500">{item.level}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-right flex gap-4 pr-4">
            {[...row2Skills, ...row2Skills].map((item, idx) => {
              const Icon = item.icon;
              const isDimmed = !filterItem(item);
              return (
                <div
                  key={`r2-${idx}`}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl border transition-all duration-300 min-w-[240px] select-none ${
                    isDimmed
                      ? 'border-white/5 bg-white/[0.01] opacity-30 grayscale'
                      : 'border-white/10 bg-[#0e0e14]/90 hover:border-amber-400/40 hover:bg-[#14141d] hover:shadow-xl hover:shadow-amber-500/5'
                  }`}
                >
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-white truncate group-hover:text-amber-100 transition-colors">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-tag text-neutral-400">
                      <span className="text-emerald-300/80">{item.category}</span>
                      <span>·</span>
                      <span className="text-neutral-500">{item.level}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Proof Strip for Skills */}
      <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tag text-neutral-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>VERIFIED ON GITHUB: PRODUCTION CODEBASES & LIVE DEPLOYMENTS</span>
        </div>
        <div className="text-neutral-400">
          PAUSE HOVER · DUAL DIRECTION · 22+ PRODUCTION TECHNOLOGIES
        </div>
      </div>
    </section>
  );
}
