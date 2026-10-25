import React from 'react';
import { ShieldCheck, Trophy } from 'lucide-react';
import { awardsAndCerts } from '../data/portfolioData';

export default function AwardsAndCerts() {
  return (
    <section id="awards" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>07 / HONORS & CERTIFICATIONS</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          COMPETITIONS & TECHNICAL VALIDATION
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          Honors, Awards & Certifications
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl">
          Competitive hackathon victories and foundational technical certifications across C++ algorithms, Java OOP, and AI development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsAndCerts.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-7 border border-white/[0.08] hover:border-white/[0.18] bg-zinc-900/40 backdrop-blur-md relative overflow-hidden group transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                {idx === 0 ? <Trophy className="w-5 h-5 text-amber-400" /> : <ShieldCheck className="w-5 h-5 text-emerald-400" />}
              </div>

              <span className="text-xs font-mono-tag px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                {item.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-white mb-1">
              {item.title}
            </h3>
            <span className="text-xs font-mono-tag text-indigo-300/90 block mb-3">
              {item.issuer} · {item.year}
            </span>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
