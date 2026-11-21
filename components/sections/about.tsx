'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Engineering clarity, not noise." subtitle="About" align="left" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="max-w-2xl text-xl leading-9 text-slate-200 md:text-2xl">
              {aboutData.mission}
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-400">{aboutData.story}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {aboutData.principles.map((principle) => (
                <div key={principle} className="editorial-card rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 backdrop-blur-sm">
                  {principle}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="editorial-card rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
          >
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">Timeline</p>
            <div className="space-y-6">
              {aboutData.timeline.map((item, index) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                    {index !== aboutData.timeline.length - 1 && <span className="mt-2 h-full w-px bg-white/10" />}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.year}</p>
                    <p className="mt-2 text-base leading-7 text-slate-200">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid gap-5 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {Object.entries(aboutData.stats).map(([key, value]) => (
            <div key={key} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6 text-left backdrop-blur-sm">
              <div className="text-3xl font-bold tracking-[-0.05em] text-white md:text-4xl">{value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{key}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}