import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
export default function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} className={`glass-card ${className}`}>{children}</motion.section>;
}