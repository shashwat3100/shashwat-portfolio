import React, { useState } from 'react';
import { AlertCircle, ArrowUpRight, Check, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const getSubject = () => `Portfolio Inquiry from ${formData.name.trim() || 'Visitor'}`;

  const getBody = () => {
    return `${formData.message.trim()}\n\n---\nSender Name: ${formData.name.trim()}\nSender Email: ${formData.email.trim()}\nSent via Shashwat Balamwar Portfolio`;
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSendGmail = (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message before dispatching.');
      return;
    }
    setErrorMessage('');
    window.open(getGmailUrl(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#6366f1', '#10b981']
    });
  };

  const handleSendMailto = (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message before dispatching.');
      return;
    }
    setErrorMessage('');
    window.location.href = getMailtoUrl();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#6366f1', '#10b981']
    });
  };

  const handleCopyDraft = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message first to copy.');
      return;
    }
    setErrorMessage('');
    const fullDraft = `To: ${personalInfo.email}\nSubject: ${getSubject()}\n\n${getBody()}`;
    navigator.clipboard.writeText(fullDraft);
    setCopiedDraft(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#10b981']
    });
    setTimeout(() => setCopiedDraft(false), 2500);
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
            I am actively seeking software engineering internships, graduate engineering roles, and collaborative projects across Full-Stack, AI systems, or interactive 3D graphics.
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

        {/* Right Column: Direct Dispatcher Form */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-editorial text-white">
                Send a direct dispatch
              </h3>
              <span className="text-[10px] font-mono-tag px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 uppercase tracking-wider">
                Direct To Email
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light mb-6">
              Write your note below. It will open directly in your mail app pre-filled to <span className="text-amber-300">{personalInfo.email}</span>.
            </p>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-editorial text-white mb-2">
                  Dispatch Prepared & Opened
                </h4>
                <p className="text-xs text-neutral-300 max-w-md leading-relaxed mb-6">
                  Your email client has opened with your message addressed to <span className="text-amber-300 font-mono-tag">{personalInfo.email}</span>. Simply click <strong className="text-white">"Send"</strong> in your email window to deliver it straight to my inbox!
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mb-6">
                  <a
                    href={getGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono-tag text-amber-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Re-open Gmail Web</span>
                  </a>
                  <a
                    href={getMailtoUrl()}
                    className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono-tag text-neutral-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Re-open Mail App</span>
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl text-xs text-neutral-400 hover:text-white font-mono-tag transition-colors underline cursor-pointer"
                >
                  Edit message or draft another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendGmail} className="space-y-4">
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
                    placeholder="Describe your role or project inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Primary Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleSendGmail}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold text-xs font-mono-tag tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Gmail Web</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendMailto}
                    className="w-full py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-xs font-mono-tag tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-300" />
                    <span>Send via Default Mail App (Outlook / Apple Mail)</span>
                  </button>
                </div>

                {/* Quick Copy Draft Option */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 font-mono-tag transition-colors cursor-pointer"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Draft Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Or copy formatted message to clipboard</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
