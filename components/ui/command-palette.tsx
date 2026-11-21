'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Command } from 'cmdk';
import { Search, Download } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

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
              onKeyDown={(e) => {
                if (e.key === 'Escape') setOpen(false);
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Portfolio quick actions"
            >
              <Command label="Portfolio quick actions" loop>
                <div className="mb-4 flex items-center gap-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <Command.Input
                    autoFocus
                    aria-label="Search quick actions"
                    placeholder="Search quick actions..."
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                  />
                </div>
                <Command.List className="space-y-1">
                  <Command.Empty className="py-4 text-center text-sm text-gray-500">
                    No matching actions.
                  </Command.Empty>
                  <Command.Item
                    value="Go to home"
                    className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm data-[selected]:bg-white/10"
                    onSelect={() => {
                      window.location.hash = '#hero';
                      setOpen(false);
                    }}
                  >
                    <span className="flex-1">Go to Home</span>
                  </Command.Item>
                  <Command.Item
                    value="View projects"
                    className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm data-[selected]:bg-white/10"
                    onSelect={() => {
                      window.location.hash = '#projects';
                      setOpen(false);
                    }}
                  >
                    <span className="flex-1">View Projects</span>
                  </Command.Item>
                  <Command.Item
                    value="Open resume"
                    className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm data-[selected]:bg-white/10"
                    onSelect={() => {
                      window.open(SITE_CONFIG.resume, '_blank', 'noopener,noreferrer');
                      setOpen(false);
                    }}
                  >
                    <Download className="w-4 h-4 text-gray-400" />
                    <span className="flex-1">Open resume</span>
                  </Command.Item>
                </Command.List>
              </Command>
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