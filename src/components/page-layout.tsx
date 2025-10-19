import { motion } from "framer-motion";
import { BackButton } from "./back-button";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-20 overflow-auto p-3 md:p-6 lg:p-8"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={{ opacity: 1 }}
        className="mx-auto flex max-w-5xl flex-col items-center gap-3 md:gap-8"
        exit={{ opacity: 0, scale: 0.9 }}
        initial={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        transition={{
          duration: 0.3,
          type: "spring",
          bounce: 0.4,
        }}
      >
        <BackButton />
        <div className="flex w-full flex-col gap-2 text-center">{children}</div>
        <BackButton />
      </motion.div>
    </motion.div>
  );
