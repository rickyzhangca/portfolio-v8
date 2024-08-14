import { motion } from 'framer-motion';
import { BackButton } from './BackButton';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        type: 'easeInOut',
      }}
      className="fixed inset-0 z-20 overflow-auto p-14"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.3,
          type: 'spring',
          bounce: 0.4,
        }}
        onClick={(e) => e.stopPropagation()}
        className="mx-auto max-w-5xl overflow-auto rounded-3xl border border-gray-200 bg-white shadow-xl"
      >
        <div className="px-8 pt-8">
          <BackButton />
        </div>
        <div className="prose m-16 max-w-full">{children}</div>
        <div className="px-8 pb-8">
          <BackButton />
        </div>
      </motion.div>
    </motion.div>
  );
};
