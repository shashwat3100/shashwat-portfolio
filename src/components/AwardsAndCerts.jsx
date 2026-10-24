import React from 'react';
import { Award, CheckCircle, FileCode, ShieldCheck, Trophy } from 'lucide-react';
import { awardsAndCerts } from '../data/portfolioData';

export default function AwardsAndCerts() {
  return (
    <section id="awards" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>07 / HONORS & CERTIFICATIONS</span>
        </div>
        <div className="text-xs font-mono-tag text-neutral-400">
          COMPETITIONS & TECHNICAL VALIDATION
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-editorial text-white mb-4">
          Honors & certifications.<br />
          <em className="italic text-amber-200/90 font-serif">Recognized for hackathon innovation and engineering rigor.</em>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
          Competitive hackathon victories and foundational technical certifications across C++ algorithms, Java OOP, and AI development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsAndCerts.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-7 border border-white/10 relative overflow-hidden group hover:border-amber-400/30"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                {idx === 0 ? <Trophy className="w-5 h-5 text-amber-300" /> : <ShieldCheck className="w-5 h-5 text-emerald-400" />}
              </div>

              <span className="text-xs font-mono-tag px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                {item.tag}
              </span>
            </div>

            <h3 className="text-2xl font-editorial text-white mb-1 group-hover:text-amber-200 transition-colors">
              {item.title}
            </h3>
            <span className="text-xs font-mono-tag text-amber-300/80 block mb-3">
              {item.issuer} · {item.year}
            </span>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
