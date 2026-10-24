import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutStory() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>02 / THE PERSON BEHIND THE WORK</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-tag text-neutral-400">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>NAGPUR, MAHARASHTRA · 4TH YEAR B.TECH IT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col">
          <h2 className="text-4xl sm:text-6xl font-editorial text-white mb-6 leading-[1.08]">
            Engineering mind.<br />
            Builder's instinct.<br />
            <em className="italic text-amber-200/90 font-serif">Systematic precision.</em>
          </h2>

          <div className="space-y-5 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              I am <strong className="text-white font-medium">Shashwat Balamwar</strong>, a 4th-year (Final Year) Information Technology & Engineering student at <strong className="text-amber-200/90 font-normal">St. Vincent Pallotti College of Engineering & Technology (SVPCET), Nagpur</strong>.
            </p>
            <p>
              My work centers on engineering production web software, scalable architectures, and applied AI systems. I combine technical craftsmanship across modern web frameworks with collaborative leadership honed as Class Representative, Technical Coordinator for INFOTSAV 2K25, and student operations at the Entrepreneurship Cell (E-Cell).
            </p>
            <p>
              In 2024, my team was awarded <strong className="text-amber-300 font-medium">1st Place at the Interstella Hackathon (Ramdeobaba University)</strong> for engineering an interactive 3D virtual learning platform. Whether developing AI placement tools with PostgreSQL or 3D spatial simulations with Three.js, I build software that is structurally sound, fast, and visually compelling.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono-tag text-neutral-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200">
              CLASS REPRESENTATIVE (4TH YEAR)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200">
              INFOTSAV 2K25 COORDINATOR
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200">
              INTERSTELLA '24 WINNER
            </span>
          </div>
        </div>

        {/* Right Column: Quick Profile Card */}
        <div className="lg:col-span-5 w-full">
          <div className="glass-panel rounded-3xl p-7 border border-white/10 relative overflow-hidden bg-gradient-to-br from-neutral-900 to-[#0c0c11]">
            <div className="flex items-center gap-3 pb-5 border-b border-white/10 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 font-editorial text-xl">
                SB
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Shashwat Balamwar</h3>
                <span className="text-xs font-mono-tag text-neutral-400 block">
                  B.Tech IT (Final / 4th Year) · SVPCET Nagpur
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <GraduationCap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono-tag text-neutral-400 block uppercase">College & Major</span>
                  <span className="text-sm text-neutral-200">St. Vincent Pallotti College of Engg. (SVPCET)</span>
                  <span className="text-xs text-amber-200/80 block mt-0.5 font-mono">Current GPA: 7.0 / 10 · 4th Year</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <Briefcase className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono-tag text-neutral-400 block uppercase">Positions of Responsibility</span>
                  <span className="text-sm text-neutral-200">Coordinator (INFOTSAV 2K25) & Former E-Cell Lead</span>
                  <span className="text-xs text-neutral-400 block mt-0.5 font-light">Class Representative & Event Operations</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02]">
                <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono-tag text-neutral-400 block uppercase">Major Achievement</span>
                  <span className="text-sm text-neutral-200">1st Place Winner — Interstella 2024</span>
                  <span className="text-xs text-emerald-300/90 block mt-0.5 font-light">Ramdeobaba University Space Tech Hackathon</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono-tag text-neutral-400">
              <span>LOCATION: NAGPUR, IN</span>
              <a href="#contact" className="text-amber-300 hover:text-amber-200">
                GET IN TOUCH ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
