'use client';

import { motion } from 'framer-motion';
import { openSource } from '@/lib/data';
import SectionHeading from '@/components/ui/section-heading';
import { Github } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="open-source" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Open Source"
          subtitle="Contributions"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {openSource.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-4 mb-4">
                <Github className="text-gray-400 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-white">{project.name}</h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs">{project.language}</span>
                </div>
                <span className="text-gray-500">{project.stars.toLocaleString()} ⭐</span>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}