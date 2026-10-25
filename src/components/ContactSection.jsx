import React, { useState } from 'react';
import { AlertCircle, ArrowUpRight, Check, Copy, Loader2, Mail, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsActivation, setNeedsActivation] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');
    setNeedsActivation(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `New Portfolio Inquiry from ${formData.name.trim()}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.7 }
        });
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activate')) {
        // FormSubmit sends an activation link on the very first submission
        setNeedsActivation(true);
        setSubmitted(true);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Unable to submit your message at this time.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        err.message || 'Failed to dispatch message automatically. Please click below to send via your email app.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
                <div className={`w-14 h-14 rounded-full ${needsActivation ? 'bg-amber-500/20 border border-amber-500/30 text-amber-400' : 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'} flex items-center justify-center mb-4`}>
                  {needsActivation ? <Mail className="w-7 h-7" /> : <Check className="w-7 h-7" />}
                </div>
                <h4 className="text-xl font-editorial text-white mb-2">
                  {needsActivation ? 'One-Time Activation Required' : 'Message Dispatched'}
                </h4>
                <p className="text-xs text-neutral-300 max-w-md leading-relaxed mb-6">
                  {needsActivation ? (
                    <>
                      FormSubmit sent a one-time confirmation email to <span className="text-amber-300 font-mono-tag">{personalInfo.email}</span>. Click the <strong className="text-white">"Activate Form"</strong> link in your inbox. Once activated, every message from this website will land straight in your inbox!
                    </>
                  ) : (
                    <>
                      Thank you for reaching out. Your note has been delivered to <span className="text-amber-300 font-mono-tag">{personalInfo.email}</span>. I will review and reply promptly.
                    </>
                  )}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setNeedsActivation(false);
                  }}
                  className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-neutral-200 hover:text-white font-mono-tag transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for spam prevention */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#09090d] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`)}&body=${encodeURIComponent((formData.message || '') + `\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-mono-tag text-[11px] underline ml-6"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Click here to send directly via your email app</span>
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-neutral-950 font-semibold text-xs font-mono-tag tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
