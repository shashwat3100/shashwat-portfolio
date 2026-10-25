import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#6366f1', '#3b82f6', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-4 z-50 px-4 max-w-6xl mx-auto w-full">
      <nav className="glass-panel rounded-full px-5 py-2.5 flex items-center justify-between shadow-xl transition-all">
        {/* Brand Monogram & Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs font-semibold text-indigo-300 group-hover:scale-105 transition-transform">
            SB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-mono-tag">
              B.Tech IT · SVPCET
            </span>
          </div>
        </a>

        {/* Clean, Focused Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-300">
          <a href="#work" className="hover:text-white transition-colors">Projects</a>
          <a href="#arsenal" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="#experience" className="hover:text-white transition-colors">Leadership</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#resume" className="hover:text-indigo-300 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyEmail}
            className="hidden sm:flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-all cursor-pointer font-mono-tag"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm transition-all cursor-pointer"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
          </a>
        </div>
      </nav>
    </header>
  );
}
