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
import logo7 from '../../pages/more/logo-7.webp';
import logo8 from '../../pages/more/logo-8.webp';
import logo9 from '../../pages/more/logo-9.webp';

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium text-gray-900 underline opacity-0 outline-hidden transition group-hover:opacity-100 hover:cursor-pointer"
        onClick={() => setDisplayContent('more')}
      >
        Fun projects →
      </button>
      <img
        src={logo0}
        className="absolute size-20 -rotate-6 rounded-[14px] shadow-xs transition group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:shadow-sm"
      />
      <img
        src={logo1}
        className="absolute size-20 -translate-x-12 translate-y-8 rounded-[14px] shadow-xs transition group-hover:-translate-x-16 group-hover:translate-y-10 group-hover:shadow-sm"
      />
      <img
        src={logo2}
        className="absolute size-20 translate-x-16 translate-y-32 rotate-6 rounded-[14px] shadow-xs transition group-hover:translate-y-40 group-hover:shadow-sm"
      />
      <img
        src={logo3}
        className="absolute size-20 -translate-x-12 translate-y-18 -rotate-12 rounded-[14px] shadow-xs transition group-hover:-translate-x-12 group-hover:translate-y-28 group-hover:shadow-sm"
      />
      <img
        src={logo4}
        className="absolute size-20 translate-x-20 translate-y-4 rotate-6 rounded-[14px] shadow-xs transition group-hover:translate-x-28 group-hover:-translate-y-2 group-hover:shadow-sm"
      />
      <img
        src={logo5}
        className="absolute size-20 translate-x-28 translate-y-12 rounded-[14px] shadow-xs transition group-hover:translate-x-44 group-hover:translate-y-16 group-hover:shadow-sm"
      />
      <img
        src={logo6}
        className="absolute size-20 translate-x-32 translate-y-24 rotate-12 rounded-[14px] shadow-xs transition group-hover:translate-x-40 group-hover:translate-y-28 group-hover:shadow-sm"
      />
      <img
        src={logo7}
        className="absolute size-20 -translate-x-8 translate-y-28 rotate-12 rounded-[14px] shadow-xs transition group-hover:-translate-x-8 group-hover:translate-y-44 group-hover:shadow-sm"
      />
      <img
        src={logo8}
        className="absolute size-20 translate-x-32 translate-y-36 -rotate-12 rounded-[14px] shadow-xs transition group-hover:translate-x-36 group-hover:translate-y-48 group-hover:shadow-sm"
      />
      <img
        src={logo9}
        className="absolute size-20 translate-x-6 translate-y-36 -rotate-12 rounded-[14px] shadow-xs transition group-hover:translate-x-4 group-hover:translate-y-48 group-hover:shadow-sm"
      />
    </motion.div>
  );
};
