import { ArrowRightIcon } from '@primer/octicons-react';
import * as Portal from '@radix-ui/react-portal';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Mintlify } from '../pages/mintlify/Mintlify';
import { Mosaic } from '../pages/mosaic/Mosaic';
import { RBC } from '../pages/rbc/RBC';
import { tw } from '../utils/tw';

const Contents = {
  mintlify: <Mintlify />,
  rbc: <RBC />,
  mosaic: <Mosaic />,
};

export const OpenCardLinkButton = ({
  className,
  content,
}: {
  className?: string;
  content: keyof typeof Contents;
}) => {
  const [isDisplayContent, setIsDisplayContent] = useState(false);
  useHotkeys('esc', () => setIsDisplayContent(false));

  return (
    <>
      <button
        className={tw(
          'pointer-events-none absolute right-3 top-3 flex size-10 scale-[80%] items-center justify-center rounded-full bg-white text-gray-900 opacity-0 transition group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100',
          className,
        )}
        onClick={() => setIsDisplayContent(true)}
      >
        <ArrowRightIcon size={20} />
      </button>
      <AnimatePresence>
        {isDisplayContent && (
          <Portal.Root onClick={() => setIsDisplayContent(false)}>
            {Contents[content]}
            <motion.div
              className="fixed inset-0 z-10 bg-white/50 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
            />
          </Portal.Root>
        )}
      </AnimatePresence>
    </>
  );
};
