import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../atoms';
import mintlifyBg from './mintlify-bg.svg';
import mintlify from './mintlify.svg';

export const MintlifyNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      whileHover={{
        rotate: isDragging ? -8 : 4,
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
      className="flex flex-col gap-2.5 rounded-md border border-gray-200 bg-white p-2 pb-2.5"
    >
      <div className="relative overflow-hidden rounded bg-black p-12">
        <img src={mintlify} className="relative z-10 size-32" />
        <img src={mintlifyBg} className="absolute inset-0" />
      </div>
      <div className="flex flex-col items-center gap-1 pl-0.5">
        <p className="font-medium text-gray-900">Design Engineer @ Mintlify</p>
        <p className="text-sm text-gray-400">2024</p>
      </div>
    </motion.div>
  );
};
