'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const springYProgress = useSpring(scrollYProgress, { stiffness: 320, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[linear-gradient(90deg,#67e8f9_0%,#a78bfa_50%,#f9a8d4_100%)] shadow-[0_0_18px_rgba(103,232,249,0.5)]"
      style={{ scaleX: springYProgress }}
    />
  );
}