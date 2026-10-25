import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { disciplines } from '../data/portfolioData';

export default function DisciplineTabs() {
  const [activeTab, setActiveTab] = useState(disciplines[0].id);

  const activeDiscipline = disciplines.find(d => d.id === activeTab) || disciplines[0];

  return (
    <section id="disciplines" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>04 / CORE DISCIPLINES</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          PHILOSOPHY · SYSTEMS · ARCHITECTURES
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Tab Buttons */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            How I Build Software
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal mb-8 leading-relaxed">
            Software engineering is more than writing syntax—it is architecting resilient systems that deliver high performance and intuitive user experiences.
          </p>

          <div className="flex flex-col gap-2.5">
            {disciplines.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === d.id
                    ? 'border-white/[0.2] bg-zinc-800 text-white shadow-sm'
                    : 'border-white/[0.06] bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-400 font-medium">
                      {d.number}
                    </span>
                    <span className="text-sm font-semibold">
                      {d.title}
                    </span>
                  </div>
                  <span className={`text-xs transition-transform ${activeTab === d.id ? 'text-indigo-400 translate-x-1' : 'text-zinc-600'}`}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Active Discipline Deep Dive */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden bg-zinc-900/40 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono-tag text-zinc-400 pb-6 border-b border-white/[0.08] mb-6">
              <span className="uppercase tracking-wider text-indigo-400">
                DISCIPLINE PROFILE / {activeDiscipline.number}
              </span>
              <span>VERIFIED METHODOLOGY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {activeDiscipline.tagline}
            </h3>
            <p className="text-zinc-300 text-base font-normal leading-relaxed mb-8">
              {activeDiscipline.description}
            </p>

            <div>
              <span className="text-xs font-mono-tag uppercase tracking-wider text-zinc-400 block mb-4">
                Core Competencies & Tooling:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDiscipline.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-zinc-950/60 text-xs font-mono-tag text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
              <span>EXPLORE ALL APPLIED REPOSITORIES</span>
              <a
                href="#work"
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-mono-tag"
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
