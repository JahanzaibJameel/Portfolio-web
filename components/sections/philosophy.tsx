'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { philosophyData } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardY = useTransform(scrollYProgress, [0, 0.6, 1], [80, 0, -20]);

  return (
    <section ref={sectionRef} id="philosophy" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Performance is part of design." subtitle="Philosophy" align="left" />

        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="editorial-card rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_30%),rgba(15,23,42,0.75)] p-6 md:p-8 lg:p-10"
        >
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Engineering philosophy</p>
            <h3 className="max-w-5xl text-[clamp(2.5rem,5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
              {philosophyData.intro}
            </h3>
          </div>

          <motion.div style={{ y: cardY }} className="mt-10 grid gap-4 md:grid-cols-3">
            {philosophyData.cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="editorial-card rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{card.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-300">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
            {philosophyData.lines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-2xl font-medium leading-relaxed tracking-[-0.04em] text-slate-200 md:text-4xl"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
