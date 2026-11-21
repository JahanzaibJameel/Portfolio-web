'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { aboutData, storyNarrative } from '@/lib/data';

function StoryCard({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof storyNarrative)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const offsetStart = 0.12 + index * 0.15;
  const itemY = useTransform(scrollYProgress, [offsetStart, 0.6 + index * 0.12, 1], [30 + index * 18, 0, -12 - index * 12]);
  const itemOpacity = useTransform(scrollYProgress, [offsetStart - 0.05, offsetStart, 0.9], [0.2, 1, 1]);

  return (
    <motion.article
      style={{ y: itemY, opacity: itemOpacity }}
      className="editorial-card relative ml-0 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:ml-10 md:p-7"
    >
      <div className="absolute left-[-18px] top-8 hidden h-4 w-4 rounded-full border border-cyan-300/80 bg-slate-950 shadow-[0_0_18px_rgba(103,232,249,0.7)] md:block" />

      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.index}</span>
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
          Narrative layer
        </span>
      </div>

      <h4 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-white md:text-3xl">
        {item.title}
      </h4>

      <p className="mt-4 text-base leading-8 text-slate-200">{item.summary}</p>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{item.detail}</p>
    </motion.article>
  );
}

export default function EditorialStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const introY = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section ref={sectionRef} id="story" className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.12),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_25%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-400">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <span>Editorial flow</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <motion.div
            style={{ y: introY }}
            className="lg:sticky lg:top-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.45)] backdrop-blur-sm md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Narrative system</p>
            <h3 className="mt-6 font-display text-[clamp(2.3rem,5vw,3.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
              I build the product story as deliberately as the interface.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Every screen should move with intention. The role of the interface is not just to display information, but to guide attention, reinforce confidence, and make product complexity feel beautifully legible.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-semibold tracking-[-0.06em] text-white">{aboutData.stats.years}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">Years</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-semibold tracking-[-0.06em] text-white">{aboutData.stats.projects}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">Products</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-semibold tracking-[-0.06em] text-white">100%</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">Intentional</div>
              </div>
            </div>
          </motion.div>

          <div className="relative space-y-6">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-violet-400/0 md:block" />

            {storyNarrative.map((item, index) => (
              <StoryCard key={item.index} item={item} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
