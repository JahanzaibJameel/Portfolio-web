'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Selected work with real product intent." subtitle="Projects" align="left" />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="editorial-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-90px' }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="flex flex-col"
                >
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{project.period}</span>
                    <span className="text-slate-600">•</span>
                    <span>{project.role}</span>
                  </div>

                  <h3 className="text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{project.description}</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Challenge</p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">{project.challenge}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Approach</p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">{project.approach}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Outcome</p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2, scale: 1.01 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-400/40 hover:text-white"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.repo && (
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2, scale: 1.01 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-400/40 hover:text-white"
                      >
                        <Github size={15} />
                        Source
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 18 : -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-90px' }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="magazine-sheet rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),transparent_25%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.15),transparent_30%),rgba(15,23,42,0.9)] p-5"
                >
                  <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                    <span>Project snapshot</span>
                    <span>{project.metrics[0]?.label}</span>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-2/3 rounded-full bg-white/10" />
                      <div className="h-3 w-5/6 rounded-full bg-white/10" />
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                            <div className="text-lg font-semibold text-white">{metric.value}</div>
                            <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Highlights</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-cyan-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}