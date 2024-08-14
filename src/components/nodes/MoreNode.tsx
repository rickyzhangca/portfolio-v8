import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../atoms';

import logo0 from '../../pages/more/logo-0.webp';
import logo1 from '../../pages/more/logo-1.webp';
import logo2 from '../../pages/more/logo-2.webp';
import logo3 from '../../pages/more/logo-3.webp';
import logo4 from '../../pages/more/logo-4.webp';
import logo5 from '../../pages/more/logo-5.webp';
import logo6 from '../../pages/more/logo-6.webp';

export const MoreNode = ({ id }: NodeProps) => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      whileHover={{
        scale: isDragging ? 1.15 : 1,
      }}
      className="group relative size-52"
    >
      <button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium text-gray-900 underline opacity-0 outline-none transition group-hover:opacity-100"
        onClick={() => setDisplayContent('more')}
      >
        Fun projects →
      </button>
      <img
        src={logo0}
        className="absolute size-16 -rotate-6 rounded-[14px] shadow-sm transition group-hover:-translate-x-3 group-hover:-translate-y-4 group-hover:shadow"
      />
      <img
        src={logo1}
        className="absolute size-16 translate-x-5 translate-y-12 rounded-[14px] shadow-sm transition group-hover:-translate-x-6 group-hover:translate-y-10 group-hover:shadow"
      />
      <img
        src={logo2}
        className="absolute size-16 translate-x-16 translate-y-28 rotate-6 rounded-[14px] shadow-sm transition group-hover:translate-x-14 group-hover:translate-y-32 group-hover:shadow"
      />
      <img
        src={logo3}
        className="absolute size-16 translate-x-4 translate-y-24 -rotate-12 rounded-[14px] shadow-sm transition group-hover:-translate-x-2 group-hover:translate-y-28 group-hover:shadow"
      />
      <img
        src={logo4}
        className="absolute size-16 translate-x-20 translate-y-4 rotate-6 rounded-[14px] shadow-sm transition group-hover:translate-x-24 group-hover:translate-y-2 group-hover:shadow"
      />
      <img
        src={logo5}
        className="absolute size-16 translate-x-28 translate-y-12 rounded-[14px] shadow-sm transition group-hover:translate-x-40 group-hover:translate-y-16 group-hover:shadow"
      />
      <img
        src={logo6}
        className="absolute size-16 translate-x-28 translate-y-24 rotate-12 rounded-[14px] shadow-sm transition group-hover:translate-x-40 group-hover:translate-y-28 group-hover:shadow"
      />
    </motion.div>
  );
};
