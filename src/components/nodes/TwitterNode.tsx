import { ArrowUpRightIcon } from '@primer/octicons-react';
import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../atoms';

export const TwitterNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      whileHover={{
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
      className="flex cursor-grab items-center gap-3 rounded-full border border-white/30 bg-black p-1.5 text-white active:cursor-grabbing"
    >
      <p className="pl-4">Twitter</p>
      <div className="flex items-center gap-1">
        <button
          onPointerDownCapture={(e) => e.stopPropagation()}
          onClick={() => window.open('https://x.com/rickyrickyriri', '_blank')}
          className="nodrag flex items-center justify-center rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30"
        >
          <ArrowUpRightIcon />
        </button>
      </div>
    </motion.div>
  );
};