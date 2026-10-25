import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>05 / LEADERSHIP & EXPERIENCE</span>
        </div>
        <div className="text-xs font-mono-tag text-neutral-400">
          POSITIONS OF RESPONSIBILITY · VERIFIED TRACK RECORD
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-editorial text-white mb-4">
          Leadership in action.<br />
          <em className="italic text-amber-200/90 font-serif">Leading teams, technical symposiums & student initiatives.</em>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
          Real organizational accountability: coordinating regional technical symposiums and leading campus student initiatives.
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-editorial text-white group-hover:text-amber-200 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono-tag text-amber-300">
                    {item.type}
                  </span>
                </div>
                <span className="text-sm font-medium text-neutral-300 block mt-1">
                  {item.organization}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono-tag text-neutral-400 self-start sm:self-auto bg-white/[0.02] px-3 py-1.5 rounded-full border border-white/5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {item.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <span className="text-amber-400 text-xs shrink-0 mt-1">↳</span>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
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
