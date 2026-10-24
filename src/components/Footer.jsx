import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
    <footer className="border-t border-white/5 py-12 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:items-start text-center sm:text-left">
          <span className="text-sm font-medium text-white">
            {personalInfo.name}
          </span>
          <span className="text-xs text-neutral-400 font-light mt-0.5">
            Full-Stack Systems & AI Product Engineering · © {new Date().getFullYear()}
          </span>
        </div>

        {/* Live IST Clock */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono-tag text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>NAGPUR / IST: {time || '03:30:00 PM'}</span>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono-tag text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
