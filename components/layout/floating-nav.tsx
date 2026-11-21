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
          className="fixed left-1/2 top-6 z-40 max-w-[90vw]"
        >
          <nav className="glass flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 px-3 py-2 shadow-[0_16px_45px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:gap-2 sm:px-4 sm:py-2.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs text-slate-300 transition-all duration-300 hover:bg-white/8 hover:text-white sm:text-sm"
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