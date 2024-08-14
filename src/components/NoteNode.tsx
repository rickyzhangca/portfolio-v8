import * as Portal from '@radix-ui/react-portal';
import { NodeProps } from '@xyflow/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { atoms } from '../atoms';
import { Why } from '../pages/why/why';
import pen from './pen.webp';

export const NoteNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  const [isDisplayContent, setIsDisplayContent] = useState(false);
  useHotkeys('esc', () => setIsDisplayContent(false));

  return (
    <motion.div
      whileHover={{
        rotate: isDragging ? -8 : 4,
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
      className="group flex flex-col gap-2.5 rounded-lg"
    >
      <div className="flex h-72 w-64 flex-col justify-between gap-8 rounded-md bg-[#FEF296] p-5 shadow-md">
        <div className="flex flex-col gap-3">
          <p className="font-medium leading-snug text-gray-800">
            Good design is as much engineering as it is ideation.
          </p>
          <p className="text-sm text-gray-800/60">
            It's not just about conceptualizing an experience, but also how it
            works, how it is crafted into reality.
          </p>
        </div>
        <button
          className="w-fit text-sm text-gray-800 underline outline-none"
          onClick={() => setIsDisplayContent(true)}
        >
          Why I design & code →
        </button>
        <AnimatePresence>
          {isDisplayContent && (
            <Portal.Root onClick={() => setIsDisplayContent(false)}>
              <Why />
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
      </div>
      <img
        src={pen}
        className="absolute -bottom-8 -right-12 w-24 transition group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:-rotate-6 group-hover:scale-110"
      />
    </motion.div>
  );
};
