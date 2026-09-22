'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="Academic"
          align="left"
        />

        <div className="space-y-16">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">{item.degree}</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    {item.institution} • {item.location}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">{item.period}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}