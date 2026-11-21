'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-12', alignClasses[align], className)}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className={cn(
            'mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-slate-400',
            align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start',
          )}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
          <span>{subtitle}</span>
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-violet-400/80 to-transparent" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        className={cn(
          'font-display text-[clamp(2.5rem,5vw,5.2rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white',
          align === 'center' ? 'mx-auto max-w-3xl' : '',
        )}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}