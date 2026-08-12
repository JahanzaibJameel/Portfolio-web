'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Command } from 'cmdk';
import { Search, Download } from 'lucide-react';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md mx-4 rounded-2xl bg-gray-950/50 backdrop-blur-xl border border-white/10 p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-5 h-5 text-gray-400" />
                <span className="text-lg font-semibold">Quick Actions</span>
              </div>
              <Command.List>
                <Command.Item
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-white/10 cursor-pointer"
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') {
                      window.location.hash = '#home';
                      setOpen(false);
                    }
                  }}
                >
                  <span className="sr-only">Go to Home</span>
                  <span className="flex-1">Go to Home</span>
                  <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-gray-700 bg-gray-800 px-2 text-xs text-gray-400">
                    <span className="text-white">⌘</span>H
                  </kbd>
                </Command.Item>
                <Command.Item
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-white/10 cursor-pointer"
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') {
                      window.location.hash = '#projects';
                      setOpen(false);
                    }
                  }}
                >
                  <span className="sr-only">View Projects</span>
                  <span className="flex-1">View Projects</span>
                  <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-gray-700 bg-gray-800 px-2 text-xs text-gray-400">
                    <span className="text-white">⌘</span>P
                  </kbd>
                </Command.Item>
                <Command.Item
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-white/10 cursor-pointer"
                  onSelect={() => {
                    window.open('/cv.pdf', '_blank');
                    setOpen(false);
                  }}
                >
                  <Download className="w-4 h-4 text-gray-400" />
                  <span className="flex-1">Download CV</span>
                  <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-gray-700 bg-gray-800 px-2 text-xs text-gray-400">
                    <span className="text-white">⌘</span>D
                  </kbd>
                </Command.Item>
              </Command.List>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-8 right-8 z-40 hidden sm:block focus:outline-none"
        aria-label="Toggle Command Palette"
      >
        <kbd className="px-3.5 py-1.5 rounded-full bg-gray-900/80 border border-white/10 text-xs text-gray-300 font-medium hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-lg backdrop-blur-md flex items-center gap-1.5">
          <span className="text-blue-400 font-bold">⌘</span>K
        </kbd>
      </button>
    </>
  );
}