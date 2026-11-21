'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="editorial-card rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_35%),rgba(15,23,42,0.8)] p-6 md:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-8 max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Let&apos;s build something with intent.</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-colors hover:border-cyan-400/40">
                <Mail className="h-5 w-5 text-cyan-300" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-colors hover:border-cyan-400/40">
                <Github className="h-5 w-5 text-cyan-300" />
                <span>GitHub</span>
              </a>

              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-colors hover:border-cyan-400/40">
                <Linkedin className="h-5 w-5 text-cyan-300" />
                <span>LinkedIn</span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5"
            >
              <input name="name" type="text" aria-label="Your name" placeholder="Your name" required className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
              <input name="email" type="email" aria-label="Your email" placeholder="Your email" required className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
              <textarea name="message" rows={5} aria-label="Tell me about your project" placeholder="Tell me about your project" required className="w-full resize-none rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20" />
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#38bdf8_0%,#8b5cf6_50%,#f472b6_100%)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                Open email app
                <Send size={15} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}