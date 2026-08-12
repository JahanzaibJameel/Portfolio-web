'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/data';

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -20, x: '-50%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-1/2 z-40 max-w-[90vw]"
        >
          <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 glass rounded-full border border-white/10 shadow-2xl backdrop-blur-xl overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs sm:text-sm text-gray-300 hover:text-white px-2.5 py-1 rounded-full hover:bg-white/10 transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}