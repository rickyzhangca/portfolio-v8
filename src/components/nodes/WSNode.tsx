import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../atoms';
import { OpenCardLinkButton } from '../OpenCardLinkButton';
import ws from './ws.svg';

export const WSNode = ({ id }: NodeProps) => {
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
      className="group"
    >
      <div className="flex flex-col gap-2.5 rounded-md border border-gray-200 bg-white p-2 pb-2.5 shadow-sm">
        <div className="relative size-68 rounded-sm bg-[#005DAA]">
          <img src={ws} className="w-full" />
          <OpenCardLinkButton className="text-[#005DAA]" content="rbc" />
        </div>
        <div className="flex flex-col items-center gap-1 pl-0.5">
          <p className="font-medium text-gray-900">
            Design Engineer @ Wealthsimple
          </p>
          <p className="text-sm text-gray-400">2024 - Present</p>
        </div>
        <div className="absolute -z-10 h-[298px] w-[238px] -translate-x-0.5 -translate-y-0.5 rounded-md border border-gray-200 bg-white shadow-sm transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:-rotate-3" />
      </div>
    </motion.div>
  );
};
