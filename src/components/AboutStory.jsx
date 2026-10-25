import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin, ArrowUpRight } from 'lucide-react';


export default function AboutStory() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>02 / ABOUT SHASHWAT</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-tag text-zinc-400">
          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
          <span>NAGPUR, MH · 4TH YEAR B.TECH IT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
            Engineering Mind.<br />
            Builder's Instinct.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-white">
              Systematic Execution.
            </span>
          </h2>

          <div className="space-y-5 text-zinc-300 font-normal text-base sm:text-lg leading-relaxed">
            <p>
              I am <strong className="text-white font-semibold">Shashwat Balamwar</strong>, a 4th-year (Final Year) Information Technology & Engineering undergraduate at <strong className="text-white font-medium">St. Vincent Pallotti College of Engineering & Technology (SVPCET), Nagpur</strong>.
            </p>
            <p>
              My work centers on engineering production full-stack platforms, scalable API architectures, and applied AI systems. I combine technical software craftsmanship with organizational leadership honed as Technical Coordinator for INFOTSAV 2K25 and student operations leadership at the Entrepreneurship Cell (E-Cell).
            </p>
            <p>
              In 2024, my team was awarded <strong className="text-emerald-300 font-medium">1st Place at the Interstella Hackathon (Ramdeobaba University)</strong> for engineering an interactive 3D virtual learning platform. Whether designing AI placement tools with PostgreSQL or 3D spatial simulations with Three.js, I build software that is structurally sound, fast, and visually compelling.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-3 text-xs font-mono-tag">
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
              INFOTSAV 2K25 COORDINATOR
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
              INTERSTELLA '24 WINNER
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
              E-CELL OPERATIONS
            </span>
          </div>
        </div>

        {/* Right Column: Quick Profile Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl p-7 border border-white/[0.08] relative overflow-hidden bg-zinc-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3.5 pb-5 border-b border-white/[0.08] mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-lg">
                SB
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight">Shashwat Balamwar</h3>
                <span className="text-xs font-mono-tag text-zinc-400 block">
                  B.Tech IT (Final Year) · SVPCET Nagpur
                </span>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase">College & Major</span>
                  <span className="text-sm text-zinc-200 font-medium">St. Vincent Pallotti College of Engg. (SVPCET)</span>
                  <span className="text-xs text-indigo-300/90 block mt-0.5 font-mono">CGPA: 6.91 / 10 · 4th Year</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                <Briefcase className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase">Positions of Responsibility</span>
                  <span className="text-sm text-zinc-200 font-medium">Coordinator (INFOTSAV 2K25) & Former E-Cell Lead</span>
                  <span className="text-xs text-zinc-400 block mt-0.5">Symposium & Campus Operations</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase">Major Achievement</span>
                  <span className="text-sm text-zinc-200 font-medium">1st Place Winner — Interstella 2024</span>
                  <span className="text-xs text-emerald-400 block mt-0.5">Ramdeobaba University Space Tech Hackathon</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono-tag text-zinc-400">
              <span>LOCATION: NAGPUR, IN</span>
              <a href="#contact" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
