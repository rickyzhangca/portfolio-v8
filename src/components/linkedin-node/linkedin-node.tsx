import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../atoms';

export const LinkedInNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      className="flex cursor-grab items-center gap-3 rounded-full border border-white/30 bg-[#367CB6] p-1.5 text-white active:cursor-grabbing"
      whileHover={{
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
    >
      <p className="pl-4">LinkedIn</p>
      <div className="flex items-center gap-1">
        <button
          className="nodrag flex items-center justify-center rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          onClick={() =>
            window.open('https://www.linkedin.com/in/ricky-zhang/', '_blank')
          }
          onPointerDownCapture={(e) => e.stopPropagation()}
          type="button"
        >
          <ArrowUpRightIcon size={20} weight="bold" />
        </button>
      </div>
    </motion.div>
  );
};
