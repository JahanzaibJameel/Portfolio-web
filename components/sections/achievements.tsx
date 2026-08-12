'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';
import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Achievements"
          subtitle="Recognition"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.year}-${achievement.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 mb-12 last:mb-0"
              >
                <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Award size={16} />
                </div>
                
                <div className="glass border border-white/10 rounded-2xl p-6">
                  <div className="text-sm text-gray-500 mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <div className="text-gray-400 mb-2">{achievement.organization}</div>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}