'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Product-minded engineering in motion." subtitle="Experience" align="left" />

        <div className="space-y-10">
          {experience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="editorial-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{job.company}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{job.role}</h3>
                </div>
                <div className="text-sm text-slate-400 md:text-right">
                  <div>{job.location}</div>
                  <div className="mt-1">{job.period}</div>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{job.description}</p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Focus areas</h4>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-slate-200">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}