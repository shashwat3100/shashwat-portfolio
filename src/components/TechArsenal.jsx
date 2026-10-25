import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Sparkles, 
  Terminal, 
  Layers, 
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
  { name: 'Next.js App Router', category: 'Framework', level: 'SSR & Server Actions', icon: Flame, color: '#ffffff' },
  { name: 'REST APIs & JWT', category: 'API Engine', level: 'Secure Auth Architecture', icon: Server, color: '#38bdf8' },
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
    if (activeCategory === 'ai-3d') return ['3D WebGL', 'Applied AI', 'Graphics', '3D Math'].includes(item.category);
    if (activeCategory === 'tools') return ['DevOps', 'Version Control', 'Tooling', 'Testing', 'Systems'].includes(item.category);
    return true;
  };

  return (
    <section id="arsenal" className="py-20 overflow-hidden relative border-y border-white/[0.08] bg-[#09090b]">
      {/* Top Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-8">
          <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>01 / TECHNICAL ARSENAL</span>
          </div>
          <div className="text-xs font-mono-tag text-zinc-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>CONTINUOUS HARDWARE ACCELERATED STREAM</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              Tools, Languages & Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl">
              Production frameworks, database engines, applied AI libraries, and 3D spatial tools. Hover to pause any card.
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
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tag transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'border border-white/[0.08] bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800'
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
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-10" />

        {/* Row 1: Sliding Left */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-left flex gap-4 pr-4">
            {[...row1Skills, ...row1Skills].map((item, idx) => {
              const Icon = item.icon;
              const isDimmed = !filterItem(item);
              return (
                <div
                  key={`r1-${idx}`}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl border transition-all duration-300 min-w-[240px] select-none ${
                    isDimmed
                      ? 'border-white/[0.04] bg-white/[0.01] opacity-25 grayscale'
                      : 'border-white/[0.08] bg-zinc-900/50 hover:border-white/[0.2] hover:bg-zinc-800/80 shadow-sm'
                  }`}
                >
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/[0.08]"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-white truncate">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-tag text-zinc-400">
                      <span>{item.category}</span>
                      <span>·</span>
                      <span className="text-zinc-500">{item.level}</span>
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
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl border transition-all duration-300 min-w-[240px] select-none ${
                    isDimmed
                      ? 'border-white/[0.04] bg-white/[0.01] opacity-25 grayscale'
                      : 'border-white/[0.08] bg-zinc-900/50 hover:border-white/[0.2] hover:bg-zinc-800/80 shadow-sm'
                  }`}
                >
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/[0.08]"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-white truncate">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-tag text-zinc-400">
                      <span>{item.category}</span>
                      <span>·</span>
                      <span className="text-zinc-500">{item.level}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Proof Strip for Skills */}
      <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tag text-zinc-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>VERIFIED ON GITHUB: PRODUCTION CODEBASES & LIVE DEPLOYMENTS</span>
        </div>
        <div className="text-zinc-500">
          HOVER TO PAUSE · DUAL DIRECTION · 22 PRODUCTION TECHNOLOGIES
        </div>
      </div>
    </section>
  );
}
