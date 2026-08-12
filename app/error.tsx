'use client';

import { motion } from 'framer-motion';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
          Something went wrong
        </h1>
        <p className="mb-6 text-gray-400">An unexpected error occurred.</p>
        <button
          onClick={reset}
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:scale-105"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
}