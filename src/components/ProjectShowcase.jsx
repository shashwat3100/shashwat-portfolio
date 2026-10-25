import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>03 / SELECTED WORK</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          BUILT · TESTED · VERIFIED ON GITHUB
        </div>
      </div>

      {/* Modern Sans Heading */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
          Systems & Products Engineered to Perform
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal">
          A curated portfolio of production platforms spanning applied AI systems, full-stack architectures, 3D WebGL environments, and enterprise applications.
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
              className={`px-4 py-1.5 rounded-lg text-xs font-mono-tag transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'border border-white/[0.08] bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl p-6 sm:p-8 relative overflow-hidden group border border-white/[0.08] hover:border-white/[0.18] bg-zinc-900/40 backdrop-blur-md transition-all duration-300"
          >
            {/* Top Bar inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400 font-semibold px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                  {project.number}
                </span>
                <span className="text-xs font-mono-tag tracking-wider uppercase text-zinc-300">
                  {project.category}
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs text-zinc-400">
                  {project.type}
                </span>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[11px] font-mono-tag text-emerald-400 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.badge}
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Specs */}
              <div className="lg:col-span-7 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs font-mono-tag text-indigo-300 mb-4">
                  {project.subtitle}
                </p>
                <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-normal">
                      <span className="text-indigo-400 shrink-0 mt-0.5">↳</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono-tag border border-white/[0.06] bg-zinc-950/60 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Inspect Architecture</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/[0.08] hover:border-white/[0.16] text-zinc-300 hover:text-white text-xs font-mono-tag transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Codebase</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold shadow-sm transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Browser Frame */}
              <div className="lg:col-span-5 w-full">
                <div className="rounded-xl border border-white/[0.08] bg-[#09090b] overflow-hidden shadow-xl group-hover:border-white/[0.16] transition-all">
                  {/* Browser Bar */}
                  <div className="px-3.5 py-2 border-b border-white/[0.08] bg-zinc-900/60 flex items-center justify-between text-xs font-mono-tag">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-zinc-400 font-mono text-[11px] truncate max-w-[200px]">
                      {project.browserUrl}
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </div>

                  {/* Browser Screen with Screenshot */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative cursor-pointer overflow-hidden group/img aspect-video bg-zinc-950"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Interface`}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Live Interface Indicator */}
                    <div className="absolute bottom-0 inset-x-0 px-3.5 py-1.5 bg-black/85 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono-tag tracking-wider text-zinc-300 z-10">
                      <span className="text-indigo-300 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        AUTHENTIC LIVE INTERFACE
                      </span>
                      <span className="text-zinc-400 group-hover/img:text-white transition-colors">
                        INSPECT ↗
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4 z-20 pointer-events-none">
                      <span className="px-4 py-2 rounded-lg bg-white text-zinc-950 text-xs font-semibold font-mono-tag shadow-lg flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5" />
                        Inspect Architecture ↗
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
