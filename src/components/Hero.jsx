import React from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Ambient Radial Top Glow */}
      <div className="ambient-glow-top" />

      {/* Modern Status Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono-tag mb-8 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse" />
        <span className="font-medium tracking-wide">
          Available for Software Engineering Roles & Summer Internships
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="relative z-10 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-5">
        Shashwat Balamwar
      </h1>

      {/* Primary Role Tagline */}
      <p className="relative z-10 text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-indigo-200 to-zinc-400 max-w-3xl mb-6">
        Full-Stack Systems & Applied AI Engineer
      </p>

      {/* Concrete Bio Description */}
      <p className="relative z-10 text-sm sm:text-base md:text-lg text-zinc-400 font-normal max-w-2xl leading-relaxed mb-10">
        4th-year IT Engineering student at <strong className="text-zinc-200 font-medium">SVPCET Nagpur</strong>. 1st Place Hackathon Winner (Interstella 2024) and Technical Coordinator for INFOTSAV 2K25. Architecting production web software with React, Node.js, PostgreSQL, and Google GenAI.
      </p>

      {/* Primary Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5 mb-8">
        <a
          href="#work"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs font-mono-tag uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl group cursor-pointer"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-3.5 h-3.5 text-zinc-700 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium text-xs font-mono-tag uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 text-zinc-400" />
          <span>Get In Touch</span>
        </a>
      </div>

      {/* Social Links Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white font-mono-tag text-xs transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 text-zinc-500" />
        </a>

        <a
          href={personalInfo.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 hover:text-white font-mono-tag text-xs transition-colors"
        >
          <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
          <span>Instagram</span>
          <ArrowUpRight className="w-3 h-3 text-zinc-500" />
        </a>

        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono-tag text-xs transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-zinc-500" />
        </a>
      </div>

      {/* Bottom Technical Spec Bar */}
      <div className="w-full mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tag text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span>NAGPUR, MH · SVPCET B.TECH IT · CGPA 6.91/10</span>
        </div>
        <div className="flex items-center gap-6 text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">PROJECTS</a>
          <span>·</span>
          <a href="#arsenal" className="hover:text-white transition-colors">TECH STACK</a>
          <span>·</span>
          <a href="#experience" className="hover:text-white transition-colors">LEADERSHIP</a>
          <span>·</span>
          <a href="#resume" className="hover:text-white transition-colors">RESUME</a>
        </div>
      </div>
    </section>
  );
}
