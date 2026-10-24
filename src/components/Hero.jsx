import React from 'react';
import { ArrowDown, ArrowUpRight, Award, FileText, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Top Ambient Glow */}
      <div className="ambient-glow-top" />

      {/* Live Status Pill */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-xs font-mono-tag mb-8 shadow-sm backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse" />
        <span className="tracking-wide uppercase text-[11px] font-medium">
          {personalInfo.availability}
        </span>
      </div>

      {/* Editorial Kicker */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono-tag tracking-widest uppercase text-neutral-400 mb-6">
        <span>B.TECH IT (4TH YEAR) @ SVPCET NAGPUR</span>
        <span className="text-amber-500/50">/</span>
        <span>FULL-STACK & APPLIED AI</span>
        <span className="text-amber-500/50">/</span>
        <span className="text-amber-300 font-medium">INTERSTELLA 2024 WINNER</span>
      </div>

      {/* Main Headline with Editorial Serif */}
      <h1 className="relative z-10 text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-8 max-w-4xl font-editorial">
        Shashwat <em className="italic font-normal text-amber-200/90 font-serif">Balamwar</em>
      </h1>

      {/* Subtitle / Real Positioning */}
      <p className="relative z-10 text-lg sm:text-xl md:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed mb-10">
        Engineering full-stack web platforms, interactive 3D simulations in Blender & Unity, and applied AI systems.
      </p>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#work"
          className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/10 group cursor-pointer"
        >
          <span>Explore Selected Work</span>
          <ArrowDown className="w-4 h-4 text-neutral-700 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all backdrop-blur-md group"
        >
          <span>LinkedIn Profile</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all backdrop-blur-md group"
        >
          <Terminal className="w-4 h-4 text-amber-400" />
          <span>GitHub Code</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="w-full mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tag text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>BASED IN NAGPUR, MH · PURSUING B.TECH IT</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-amber-300 transition-colors">01 / STORY</a>
          <span>·</span>
          <a href="#work" className="hover:text-amber-300 transition-colors">02 / WORK</a>
          <span>·</span>
          <a href="#experience" className="hover:text-amber-300 transition-colors">03 / LEADERSHIP</a>
        </div>
      </div>
    </section>
  );
}
