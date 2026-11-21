'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="The tools behind the craft." subtitle="Skillset" align="left" />

        <div className="space-y-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="editorial-card rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-gradient-to-r from-white/6 to-white/[0.02] px-3.5 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}