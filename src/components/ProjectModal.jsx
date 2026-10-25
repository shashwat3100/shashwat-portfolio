import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.08] p-6 sm:p-8 relative shadow-2xl bg-[#09090b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg border border-white/[0.08] hover:bg-white/[0.06] text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-12">
          <div className="flex items-center gap-3 text-xs font-mono-tag text-indigo-400 uppercase tracking-wider mb-2">
            <span>{project.number} / {project.category}</span>
            <span>·</span>
            <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-300">
              {project.type}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5">
            {project.title}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="rounded-xl border border-white/[0.08] bg-[#09090b] overflow-hidden mb-6">
          <div className="px-4 py-2 border-b border-white/[0.08] bg-zinc-900/60 flex items-center justify-between text-xs font-mono-tag text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-zinc-400 font-mono text-[11px]">{project.browserUrl}</span>
          </div>
          {project.image && (
            <div className="relative w-full max-h-[440px] overflow-hidden border-b border-white/[0.08] bg-zinc-950">
              <img
                src={project.image}
                alt={`${project.title} Interface`}
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 px-4 py-2 bg-black/80 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono-tag tracking-wider text-zinc-300">
                <span className="text-indigo-300 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  AUTHENTIC PRODUCTION SCREENSHOT
                </span>
                <span className="text-zinc-400">100% VERIFIED INTERFACE</span>
              </div>
            </div>
          )}
          <div className="p-6 bg-zinc-900/30">
            <p className="text-zinc-200 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-tag border border-white/[0.06] bg-zinc-950/60 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Architectural Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono-tag uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Key Engineering & Architecture Highlights
          </h4>
          <div className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300 font-normal leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono-tag text-zinc-400">
            METRICS: <span className="text-zinc-200 font-mono">{project.metrics}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800 text-white text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold shadow-sm transition-all"
              >
                <span>Launch Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
