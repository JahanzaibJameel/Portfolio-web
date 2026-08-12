'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Career"
          align="left"
        />

        <div className="space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass border border-white/10 rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold">{job.role}</h3>
                <div className="text-sm text-gray-500">
                  {job.company} • {job.location}
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">{job.period}</div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Achievements</h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                  >
                    {t}
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