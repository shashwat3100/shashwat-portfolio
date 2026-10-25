import React, { useState } from 'react';
import { AlertCircle, ArrowUpRight, Check, Copy, Loader2, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#3b82f6']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#10b981']
    });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1-Click in-page dispatch: first attempt custom API, then fallback to direct endpoint
      let response;
      try {
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          })
        });
      } catch {
        response = null;
      }

      if (!response || !response.ok) {
        // Fallback directly to FormSubmit AJAX endpoint
        response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `New Portfolio Message from ${formData.name.trim()} (${formData.email.trim()})`,
            _template: 'table',
            _captcha: 'false'
          })
        });
      }

      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#6366f1', '#3b82f6', '#10b981']
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submit error:', err);
      setErrorMessage('Network error transmitting message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
        <div className="flex items-center gap-3 text-xs font-mono-tag tracking-wider text-indigo-400 uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>CONTACT & OPPORTUNITIES</span>
        </div>
        <div className="text-xs font-mono-tag text-zinc-400">
          NAGPUR, INDIA · OPEN TO ROLES WORLDWIDE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-6 flex flex-col">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
            Let's build something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">
              impactful together.
            </span>
          </h2>
          <p className="text-zinc-300 text-base font-normal leading-relaxed mb-8 max-w-lg">
            I am actively seeking software engineering internships and graduate engineering roles across Full-Stack systems, API architectures, and Applied AI platforms.
          </p>

          {/* Quick Copy Email Card */}
          <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/50 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono-tag text-zinc-400 uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base text-white font-mono-tag hover:text-indigo-300 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-xs text-zinc-200 hover:text-white transition-all cursor-pointer font-mono-tag"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Copy Phone Card */}
          <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/50 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono-tag text-zinc-400 uppercase tracking-wider block mb-1">
                Telephone & WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm text-white font-mono-tag hover:text-indigo-300 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
            <button
              onClick={handleCopyPhone}
              className="flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-xs text-zinc-200 hover:text-white transition-all cursor-pointer font-mono-tag"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 text-xs font-mono-tag text-indigo-300 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-pink-500/20 bg-pink-500/10 hover:bg-pink-500/20 text-xs font-mono-tag text-pink-300 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800 text-xs font-mono-tag text-zinc-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Right Column: 1-Click In-Page Message Form */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-2xl p-7 border border-white/[0.08] relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Send a direct message
              </h3>
              <span className="text-[10px] font-mono-tag px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">
                1-Click Direct Delivery
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-normal mb-6">
              Enter your inquiry below. Submitting immediately delivers the note directly to <span className="text-white font-mono-tag">{personalInfo.email}</span> without leaving this page.
            </p>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Message Delivered Successfully
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out! Your message was delivered straight to <span className="text-indigo-300 font-mono-tag">{personalInfo.email}</span>. I will review and reply to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-xs text-zinc-200 hover:text-white font-mono-tag transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono-tag text-zinc-400 uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan / Hiring Manager"
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-zinc-950/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tag text-zinc-400 uppercase tracking-wider block mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-zinc-950/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tag text-zinc-400 uppercase tracking-wider block mb-1.5">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role inquiry, project scope, or opportunity..."
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-zinc-950/80 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs font-mono-tag tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting Note...</span>
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
