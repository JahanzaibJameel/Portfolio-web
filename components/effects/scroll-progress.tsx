'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const springYProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
      style={{ scaleX: springYProgress }}
    />
  );
}