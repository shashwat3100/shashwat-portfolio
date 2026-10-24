import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Terminal, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'ai') return p.category.includes('AI') || p.category.includes('Voice');
    if (filter === 'fullstack') return p.stack.includes('Node.js') || p.stack.includes('PostgreSQL') || p.stack.includes('Next.js');
    if (filter === 'live') return p.badge.includes('Live');
    return true;
  });

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>03 / SELECTED WORK</span>
        </div>
        <div className="text-xs font-mono-tag text-neutral-400">
          BUILT · TESTED · VERIFIED ON GITHUB
        </div>
      </div>

      {/* Editorial Heading */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-6xl font-normal text-white mb-4 font-editorial">
          Systems and products.<br />
          <em className="italic text-amber-200/90 font-serif">Engineered to perform.</em>
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light">
          A curated selection of 7 production platforms spanning applied AI systems, automotive FinTech, 3D WebGL environments, and enterprise commerce.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'Applied AI & Voice' },
            { id: 'fullstack', label: 'Full-Stack & Systems' },
            { id: 'live', label: 'Live Deployed' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-tag transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-amber-400 text-neutral-950 font-semibold shadow-md shadow-amber-400/20'
                  : 'border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="glass-card rounded-3xl p-6 sm:p-9 relative overflow-hidden group border border-white/10 hover:border-amber-400/30"
          >
            {/* Top Bar inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-editorial font-light text-amber-400/70">
                  {project.number}
                </span>
                <span className="text-neutral-600 font-mono text-sm">/</span>
                <span className="text-xs font-mono-tag tracking-wider uppercase text-neutral-300">
                  {project.category}
                </span>
                <span className="text-neutral-700">·</span>
                <span className="text-xs text-neutral-400 font-light">
                  {project.type}
                </span>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono-tag text-emerald-300 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.badge}
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Specs */}
              <div className="lg:col-span-7 flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-editorial text-white mb-2 group-hover:text-amber-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-amber-200/80 mb-4 font-mono-tag">
                  {project.subtitle}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-8">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-baseline gap-2 text-xs sm:text-sm text-neutral-300 font-light">
                      <span className="text-amber-400">↳</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono-tag border border-white/10 bg-white/5 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspect Architecture</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white text-xs font-mono-tag transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Codebase</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 text-xs font-semibold shadow-md shadow-amber-500/20 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Browser Frame */}
              <div className="lg:col-span-5 w-full">
                <div className="rounded-2xl border border-white/10 bg-[#060608] overflow-hidden shadow-2xl group-hover:border-white/20 transition-all">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 border-b border-white/10 bg-white/[0.04] flex items-center justify-between text-xs font-mono-tag">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-neutral-400 font-mono text-[11px] truncate max-w-[200px]">
                      {project.browserUrl}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </div>

                  {/* Browser Screen with Exact Real Screenshot */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative cursor-pointer overflow-hidden group/img aspect-video bg-[#0a0a0f] border-t border-white/5"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Homepage Interface`}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Sarthak-style Artifact Label Bar */}
                    <div className="absolute bottom-0 inset-x-0 px-3.5 py-1.5 bg-black/85 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tag tracking-wider text-neutral-300 z-10">
                      <span className="text-amber-300 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        AUTHENTIC LIVE INTERFACE
                      </span>
                      <span className="text-neutral-400 group-hover/img:text-white transition-colors">
                        VERIFIED CODEBASE ↗
                      </span>
                    </div>

                    {/* Hover Overlay with Inspect Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4 z-20 pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-amber-400 text-neutral-950 text-xs font-semibold font-mono-tag shadow-lg shadow-amber-400/30 flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5" />
                        Inspect Architecture & Details ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
