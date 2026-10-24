import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MessageSquare, Phone, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#6366f1', '#10b981']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#10b981']
    });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      {/* Section Label */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-widest text-amber-300 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>09 / INITIATE CONVERSATION</span>
        </div>
        <div className="text-xs font-mono-tag text-neutral-400">
          NAGPUR, INDIA · OPEN TO OPPORTUNITIES
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Call to Action */}
        <div className="lg:col-span-6 flex flex-col">
          <h2 className="text-4xl sm:text-6xl font-editorial text-white mb-6 leading-[1.08]">
            Let's build something<br />
            <em className="italic text-amber-200/90 font-serif">extraordinary together.</em>
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-lg">
            I am actively seeking software engineering internships, graduate engineering roles, and collaborative projects across Full-Stack, AI systems, or 3D/game development.
          </p>

          {/* Quick Copy Email Box */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono-tag text-neutral-400 uppercase tracking-wider block mb-1">
                Direct Electronic Mail
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg text-white font-mono-tag hover:text-amber-300 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-neutral-200 hover:text-white transition-all cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-mono-tag">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="font-mono-tag">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Copy Phone Box */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono-tag text-neutral-400 uppercase tracking-wider block mb-1">
                Telephone & WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base text-white font-mono-tag hover:text-amber-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
            <button
              onClick={handleCopyPhone}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-neutral-200 hover:text-white transition-all cursor-pointer"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-mono-tag">Copied!</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="font-mono-tag">Copy Number</span>
                </>
              )}
            </button>
          </div>

          {/* Verified Social Profile Cards */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 text-xs font-mono-tag text-indigo-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono-tag text-neutral-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-amber-400" />
              <span>GitHub (shashwat3100)</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Quick Message */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative">
            <h3 className="text-xl font-editorial text-white mb-2">
              Send a direct dispatch
            </h3>
            <p className="text-xs text-neutral-400 font-light mb-6">
              Drop a note directly with your project proposal or role inquiry.
            </p>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-editorial text-white mb-1">
                  Message Received
                </h4>
                <p className="text-xs text-neutral-400">
                  Thank you for reaching out. I will respond to your email promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono-tag text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Collaborator"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tag text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tag text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role or project..."
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold text-xs font-mono-tag tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
