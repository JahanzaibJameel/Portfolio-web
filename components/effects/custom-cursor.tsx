'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const emptySubscribe = () => () => {};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
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
        cursorRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1.8)');
        outerRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1.2)');
      }
    };

    const handlePointerOut = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, [role="button"], .magnetic-button')) {
        cursorRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');
        outerRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');
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
        ref={outerRef}
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-400/10 blur-[1px] md:block"
      />
      <motion.div
        ref={cursorRef}
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)] md:block"
      />
    </>
  );
}
