import React from 'react';
import { Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>05 / LEADERSHIP & EXPERIENCE</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          POSITIONS OF RESPONSIBILITY · VERIFIED TRACK RECORD
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          Leadership & Organizational Impact
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl">
          Real organizational accountability: coordinating regional technical symposiums and leading campus student initiatives.
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-white/[0.16] bg-zinc-900/40 backdrop-blur-md relative overflow-hidden transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 font-mono-tag text-indigo-300">
                    {item.type}
                  </span>
                </div>
                <span className="text-sm font-medium text-zinc-300 block mt-1">
                  {item.organization}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono-tag text-zinc-400 self-start sm:self-auto bg-zinc-950/60 px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {item.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <span className="text-indigo-400 text-xs shrink-0 mt-1">↳</span>
                  <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
