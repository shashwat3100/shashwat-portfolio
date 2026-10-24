import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { metrics } from '../data/portfolioData';

export default function ProofStrip() {
  return (
    <section className="border-y border-white/5 bg-[#09090d] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col border-l border-white/10 pl-5">
              <span className="text-3xl sm:text-4xl font-editorial font-normal text-white mb-1 tracking-tight">
                {item.value}
              </span>
              <span className="text-sm font-medium text-amber-200/90 mb-1">
                {item.label}
              </span>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
