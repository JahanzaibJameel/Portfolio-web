'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Learning is part of the build." subtitle="Education" align="left" />

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="editorial-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{item.degree}</h3>
                  <p className="mt-2 text-base text-slate-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}