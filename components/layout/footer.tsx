'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-12 pt-8">
      <div className="editorial-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold text-white">{SITE_CONFIG.name}</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Frontend Engineer focused on product clarity, performance, and polished digital experiences.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={`mailto:${SITE_CONFIG.email}`} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold uppercase tracking-[0.18em] text-slate-400">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="#hero" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="#skills" className="transition-colors hover:text-white">Skills</a></li>
              <li><a href="#experience" className="transition-colors hover:text-white">Experience</a></li>
              <li><a href="#projects" className="transition-colors hover:text-white">Projects</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold uppercase tracking-[0.18em] text-slate-400">Connect</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2"><MapPin size={15} /> {SITE_CONFIG.location}</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className="block transition-colors hover:text-white">{SITE_CONFIG.email}</a>
              <a href={SITE_CONFIG.resume} target="_blank" rel="noreferrer" className="block transition-colors hover:text-white">Resume</a>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Built with Next.js, TypeScript, and a lot of intent.</p>
        </motion.div>
      </div>
    </footer>
  );
}