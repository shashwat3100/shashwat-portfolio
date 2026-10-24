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
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#f59e0b', '#6366f1', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-4 z-50 px-4 max-w-6xl mx-auto w-full">
      <nav className="glass-panel rounded-full px-5 py-3 flex items-center justify-between shadow-2xl transition-all">
        {/* Brand Wordmark */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-sm font-semibold text-amber-300 group-hover:scale-105 transition-transform">
            SB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-amber-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-mono-tag">
              SVPCET Nagpur · B.Tech IT
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-5 text-xs font-medium text-neutral-300">
          <a href="#arsenal" className="hover:text-amber-300 transition-colors">Arsenal</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#disciplines" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#experience" className="hover:text-white transition-colors">Leadership</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#awards" className="hover:text-white transition-colors">Honors</a>
          <a href="#resume" className="hover:text-amber-300 text-amber-200/90 transition-colors font-medium">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Action Button: Copy Email / Let's Talk */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyEmail}
            className="hidden sm:flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-mono-tag">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-mono-tag">{personalInfo.email}</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            Connect
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
