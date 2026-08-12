'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Selected Projects"
          subtitle="Work"
        />

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  <p className="text-gray-500 text-sm">{project.period}</p>
                  <p className="text-gray-500">{project.role}</p>
                  
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 glass">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-400 mb-2">Project Image</div>
                      <div className="text-xs text-gray-600">{project.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}