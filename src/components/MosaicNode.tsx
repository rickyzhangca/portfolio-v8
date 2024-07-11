import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../atoms';
import mosaicBg from './mosaic-bg.svg';
import mosaic from './mosaic.svg';

export const MosaicNode = ({ id }: NodeProps) => {
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
      <div className="relative overflow-hidden rounded p-14">
        <img src={mosaic} className="relative z-10 size-20" />
        <img src={mosaicBg} className="absolute inset-0" />
      </div>
      <div className="flex flex-col items-center gap-1 pl-0.5">
        <p className="font-medium text-gray-900">UX Designer @ Mosaic</p>
        <p className="text-sm text-gray-400">2020 - 23</p>
      </div>
    </motion.div>
  );
};
