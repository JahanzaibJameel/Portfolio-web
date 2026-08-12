'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Muhammad Jahanzaib
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Senior Frontend Engineer crafting exceptional digital products with React, Next.js, and TypeScript.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}