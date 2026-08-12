'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex h-screen w-full items-center justify-center bg-black"
    >
      <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500 border-t-transparent" />
    </motion.div>
  );
}