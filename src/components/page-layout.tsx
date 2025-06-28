import { motion } from 'framer-motion';
import { BackButton } from './back-button';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
      className="fixed inset-0 z-20 overflow-auto p-3 md:p-6 lg:p-8"
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
        className="mx-auto flex max-w-5xl flex-col items-center gap-3 md:gap-8"
      >
        <BackButton />
        <div className="flex w-full flex-col gap-2 text-center">{children}</div>
        <BackButton />
      </motion.div>
    </motion.div>
  );
};
