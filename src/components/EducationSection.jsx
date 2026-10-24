import React from 'react';
import { Award, GraduationCap, MapPin, School } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>06 / ACADEMIC FOUNDATIONS</span>
        </div>
        <div className="text-xs font-mono-tag text-neutral-400">
          FORMAL ENGINEERING EDUCATION
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-editorial text-white mb-4">
          Education & qualifications.<br />
          <em className="italic text-amber-200/90 font-serif">Rigorous technical foundations in Nagpur.</em>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
          Studying Information Technology and Engineering with coursework focused on Data Structures, OOP Architecture, Systems Design, and 3D Graphics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono-tag text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-emerald-300">
                  {edu.grade}
                </span>
              </div>

              <h3 className="text-xl font-editorial text-white mb-2 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-neutral-300 font-light mb-6 flex items-baseline gap-1.5">
                <School className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{edu.institution}</span>
              </p>

              <div className="space-y-2 pt-4 border-t border-white/5">
                {edu.highlights.map((h, hIdx) => (
                  <p key={hIdx} className="text-xs text-neutral-400 font-light leading-relaxed">
                    • {h}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tag text-neutral-500">
              <span>LOCATION: NAGPUR</span>
              <span className="text-amber-300">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
