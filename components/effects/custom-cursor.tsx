'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const emptySubscribe = () => () => {};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 30 });
  const springY = useSpring(y, { stiffness: 500, damping: 30 });
  const reducedMotion = useReducedMotion();

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!isClient || reducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], .magnetic-button')) {
        cursorRef.current?.style.setProperty('scale', '2');
      }
    };

    const handlePointerOut = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], .magnetic-button')) {
        cursorRef.current?.style.setProperty('scale', '1');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handlePointerOver);
    document.addEventListener('mouseout', handlePointerOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('mouseout', handlePointerOut);
    };
  }, [isClient, reducedMotion, x, y]);

  if (!isClient || reducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{ x: springX, y: springY, scale: 1 }}
        className="pointer-events-none fixed top-0 left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference z-50 transition-transform duration-150 hidden md:block"
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed top-0 left-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl z-40 hidden md:block"
      />
    </>
  );
}
