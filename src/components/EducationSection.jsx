import React from 'react';
import { School } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>06 / ACADEMIC FOUNDATIONS</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          FORMAL ENGINEERING EDUCATION
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          Academic Qualifications & Foundations
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl">
          Pursuing Information Technology & Engineering with rigorous focus on Data Structures, Algorithms, Systems Architecture, and Computer Science fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-7 border border-white/[0.08] hover:border-white/[0.16] bg-zinc-900/40 backdrop-blur-md flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono-tag text-zinc-300 bg-zinc-800/80 px-2.5 py-1 rounded-md border border-white/[0.08]">
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {edu.grade}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-zinc-300 font-normal mb-6 flex items-baseline gap-1.5">
                <School className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>{edu.institution}</span>
              </p>

              <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                {edu.highlights.map((h, hIdx) => (
                  <p key={hIdx} className="text-xs text-zinc-400 font-normal leading-relaxed">
                    • {h}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono-tag text-zinc-500">
              <span>LOCATION: NAGPUR</span>
              <span className="text-indigo-400">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
