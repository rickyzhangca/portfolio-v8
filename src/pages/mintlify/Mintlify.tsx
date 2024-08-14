import { motion } from 'framer-motion';

export const Mintlify = () => {
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
      Mintlify
    </motion.div>
  );
};
