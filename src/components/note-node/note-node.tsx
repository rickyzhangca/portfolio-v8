import type { NodeProps } from '@xyflow/react';
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
      className="group flex flex-col gap-2.5 rounded-lg"
      whileHover={{
        rotate: isDragging ? -8 : 4,
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
    >
      <div className="flex h-72 w-64 flex-col justify-between gap-8 rounded-md bg-[#FEF296] p-5 shadow-md">
        <div className="flex flex-col gap-3">
          <p className="font-medium text-gray-800 leading-snug">
            Good design is as much engineering as it is ideation.
          </p>
          <p className="text-gray-800/60 text-sm">
            It's not just about conceptualizing an experience, but also how that
            experience works, and how it is crafted by people into reality.
          </p>
        </div>
        <button
          className="w-fit text-gray-800 text-sm underline outline-hidden hover:cursor-pointer"
          onClick={() => setDisplayContent('why')}
          type="button"
        >
          About me →
        </button>
      </div>
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img
        alt="pen"
        className="-right-12 -bottom-8 group-hover:-translate-x-4 group-hover:-rotate-6 absolute w-24 transition group-hover:translate-y-2 group-hover:scale-110"
        src={pen}
      />
    </motion.div>
  );
};
