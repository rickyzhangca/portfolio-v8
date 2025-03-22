import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../atoms';
import pen from './pen.webp';

export const NoteNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  const [, setDisplayContent] = useAtom(atoms.displayContent);

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
          <p className="leading-snug font-medium text-gray-800">
            Good design is as much engineering as it is ideation.
          </p>
          <p className="text-sm text-gray-800/60">
            It's not just about conceptualizing an experience, but also how that
            experience works, and how it is crafted by people into reality.
          </p>
        </div>
        <button
          className="w-fit text-sm text-gray-800 underline outline-hidden hover:cursor-pointer"
          onClick={() => setDisplayContent('why')}
        >
          About Ricky →
        </button>
      </div>
      <img
        src={pen}
        className="absolute -right-12 -bottom-8 w-24 transition group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:scale-110 group-hover:-rotate-6"
      />
    </motion.div>
  );
};
