import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:items-start text-center sm:text-left">
          <span className="text-sm font-semibold text-white tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-xs text-zinc-400 font-normal mt-0.5">
            Full-Stack Systems & Applied AI Engineering · © {CURRENT_YEAR}
          </span>
        </div>

        {/* Live IST Clock */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-zinc-900/40 text-xs font-mono-tag text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>NAGPUR / IST: {time || '12:30:00 PM'}</span>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono-tag text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
