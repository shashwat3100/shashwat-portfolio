import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, FileText, GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, education, experience, awardsAndCerts } from '../data/portfolioData';

export default function ResumeSection() {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const resumeText = `SHASHWAT MANISH BALAMWAR
Nagpur, Maharashtra 440034 | ${personalInfo.email} | ${personalInfo.phone}
LinkedIn: ${personalInfo.socials.linkedin} | Instagram: ${personalInfo.socials.instagram} | GitHub: ${personalInfo.socials.github}

EDUCATION:
- B.Tech in Information Technology & Engineering (2023 - 2027)
  St. Vincent Pallotti College of Engineering & Technology (SVPCET), Nagpur | GPA: 7.0 / 10
- HSC (Science PCM) | St. Xavier's High School, Nagpur | CBSE | 65%
- SSC | Narayana Vidyalayam, Nagpur | CBSE | 75%

POSITIONS OF RESPONSIBILITY:
- Technical Event Coordinator | INFOTSAV 2K25 (09/2025 - 10/2025)
- Former Finance Head & Core Member | Entrepreneurship Cell (E-Cell), SVPCET (2024 - 2025)

AWARDS & HONORS:
- 1st Place Winner | Interstella 2024 Hackathon, Ramdeobaba University (Interactive 3D Orrery)
- Data Structures & Algorithms Using C++ (Certified)
- Java Object-Oriented Programming (Certified)

TECHNICAL SKILLS:
- Languages & Core: C++, Java, JavaScript, TypeScript, Python, SQL, DSA
- Web & Systems: React, Next.js, Node.js, Express, PostgreSQL, Tailwind CSS
- 3D & Graphics: Three.js, WebGL, Cannon-es, Canvas 2D/3D
- Financial Operations: Budgeting, Financial Analysis, Resource Allocation`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#3b82f6', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>08 / CURRICULUM VITAE</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          OFFICIAL RESUME · NAGPUR, MAHARASHTRA
        </div>
      </div>

      {/* Heading & Fast Actions */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
            Curriculum Vitae & Verified Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl">
            A comprehensive, ATS-optimized record of academic standing at SVPCET Nagpur, organizational leadership as E-Cell Finance Head, technical projects, and hackathon victories.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="/resume/Shashwat_Balamwar_Resume.docx"
            download="Shashwat_Balamwar_Resume.docx"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume (.docx)</span>
          </a>

          <button
            onClick={handleCopySummary}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] bg-zinc-900/50 hover:bg-zinc-800 text-xs font-mono-tag text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy Text Summary</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Styled Interactive Document Container */}
      <div className="rounded-2xl border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden bg-zinc-900/40 backdrop-blur-md shadow-2xl">
        {/* Document Top Header */}
        <div className="pb-8 border-b border-white/[0.08] mb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <span className="text-xs font-mono-tag uppercase tracking-wider text-indigo-400 block mb-1">
              CURRICULUM VITAE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-zinc-300 font-normal max-w-xl leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div className="space-y-1.5 text-xs font-mono-tag text-zinc-400 text-left md:text-right shrink-0">
            <div>NAGPUR, MAHARASHTRA 440034</div>
            <a href={`mailto:${personalInfo.email}`} className="text-zinc-300 hover:text-white block">
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="text-zinc-300 hover:text-white block">
              {personalInfo.phone}
            </a>
            <div className="pt-1 flex flex-col gap-0.5">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                LINKEDIN: /in/shashwat-balamwar-a3333a28a
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
                INSTAGRAM: @_shashwat_balamwar_
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Document Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Education & Honors */}
          <div className="lg:col-span-6 space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tag tracking-wider uppercase text-indigo-400 mb-4 pb-2 border-b border-white/[0.06]">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Academic Qualifications</span>
              </div>
              <div className="space-y-3.5">
                {education.map((edu, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                      <span className="text-[11px] font-mono text-emerald-400 shrink-0 font-medium">{edu.grade}</span>
                    </div>
                    <span className="text-xs text-zinc-300 block mb-2">{edu.institution}</span>
                    <span className="text-[11px] font-mono-tag text-zinc-500 block">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Hackathons */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tag tracking-wider uppercase text-indigo-400 mb-4 pb-2 border-b border-white/[0.06]">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>Awards & Technical Honors</span>
              </div>
              <div className="space-y-3">
                {awardsAndCerts.map((award, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-white">{award.title}</span>
                      <span className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                        {award.tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                      {award.issuer} · {award.year}
                    </span>
                    <p className="text-xs text-zinc-400 font-normal">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Positions of Responsibility & Leadership */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tag tracking-wider uppercase text-indigo-400 mb-4 pb-2 border-b border-white/[0.06]">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>Positions of Responsibility</span>
              </div>
              <div className="space-y-3.5">
                {experience.map((exp, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                      <span className="text-[11px] font-mono-tag text-zinc-500 shrink-0">{exp.period}</span>
                    </div>
                    <span className="text-xs text-indigo-300 block mb-3 font-mono-tag">{exp.organization}</span>
                    <div className="space-y-2">
                      {exp.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-normal leading-relaxed">
                          <span className="text-indigo-400 shrink-0 mt-0.5">•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Box */}
            <div className="p-5 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03]">
              <span className="text-xs font-mono-tag uppercase tracking-wider text-indigo-300 block mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Specialized Technical Capabilities
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300 font-normal">
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase mb-1">Engineering</span>
                  <p>C++, Java, React, Node.js, Express, PostgreSQL, REST APIs</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase mb-1">3D & Interactive</span>
                  <p>Three.js, WebGL, Canvas 2D/3D, Shaders, Spatial Interfaces</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase mb-1">Leadership</span>
                  <p>Budgeting Processes, Financial Oversight, Event Logistics</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono-tag text-zinc-400 block uppercase mb-1">AI & Cloud</span>
                  <p>Google Gemini SDK, Docker, Git & GitHub, Linux / CLI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Footer Banner */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-mono-tag text-zinc-400">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>ORIGINAL FILE: Shashwat_Balamwar_Resume.docx (MICROSOFT WORD FORMAT)</span>
          </div>

          <a
            href="/resume/Shashwat_Balamwar_Resume.docx"
            download="Shashwat_Balamwar_Resume.docx"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-mono-tag flex items-center gap-1 group cursor-pointer"
          >
            <span>DOWNLOAD ATTACHED RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
