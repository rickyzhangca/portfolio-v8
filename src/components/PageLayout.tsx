import { motion } from 'framer-motion';
import { EscBadge } from './EscBadge';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="fixed inset-16 z-20 rounded-2xl border border-gray-200 bg-white shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.3,
        type: 'spring',
        bounce: 0.4,
      }}
    >
      <EscBadge />
      {children}
    </motion.div>
  );
};
