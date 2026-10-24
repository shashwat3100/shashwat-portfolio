import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';
import { disciplines } from '../data/portfolioData';

export default function DisciplineTabs() {
  const [activeTab, setActiveTab] = useState(disciplines[0].id);

  const activeDiscipline = disciplines.find(d => d.id === activeTab) || disciplines[0];

  return (
    <section id="disciplines" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>04 / HOW I THINK & BUILD</span>
        </div>
        <div className="text-xs font-mono-tag text-neutral-400">
          PHILOSOPHY · SYSTEMS · INTERFACES
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Tab Buttons */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-editorial text-white mb-4 leading-tight">
            How I work.<br />
            <em className="italic text-amber-200/90 font-serif">From architecture to impact.</em>
          </h2>
          <p className="text-neutral-400 text-sm font-light mb-8">
            Software engineering is more than writing code—it is shaping systems that people and businesses can rely upon.
          </p>

          <div className="flex flex-col gap-3">
            {disciplines.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === d.id
                    ? 'border-amber-400/40 bg-amber-500/10 text-white shadow-lg'
                    : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tag text-amber-400/80">
                      {d.number}
                    </span>
                    <span className="text-sm font-medium">
                      {d.title}
                    </span>
                  </div>
                  <span className={`text-xs transition-transform ${activeTab === d.id ? 'text-amber-400 translate-x-1' : 'text-neutral-600'}`}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Active Discipline Deep Dive */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-br from-neutral-900/90 to-[#0c0c11]">
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-500 pb-6 border-b border-white/5 mb-6">
              <span className="uppercase tracking-wider text-amber-300">
                DISCIPLINE PROFILE / {activeDiscipline.number}
              </span>
              <span>ESTABLISHED METHODOLOGY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial text-white mb-2">
              {activeDiscipline.tagline}
            </h3>
            <p className="text-neutral-300 text-base font-light leading-relaxed mb-8">
              {activeDiscipline.description}
            </p>

            <div>
              <span className="text-xs font-mono-tag uppercase tracking-wider text-neutral-400 block mb-4">
                Core Competencies & Tooling:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDiscipline.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono-tag text-amber-200/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>EXPLORE ALL APPLIED REPOSITORIES</span>
              <a
                href="#work"
                className="text-amber-300 hover:text-amber-200 flex items-center gap-1 font-mono-tag"
              >
                <span>View in Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
