import type { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
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
import { tw } from '../../utils/tw';

const projects1: string[] = [logo0, logo1, logo2, logo3, logo4];

const projects2: string[] = [logo5, logo6, logo7, logo8, logo9];

export const MoreNode = ({ id }: NodeProps) => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reactFlowNode = nodeRef.current?.closest(
      '.react-flow__node-MoreNode'
    ) as HTMLElement | null;

    if (!reactFlowNode) {
      return;
    }

    reactFlowNode.style.zIndex = isHovered ? '1001' : '0';
  }, [isHovered]);

  return (
    <motion.div
      className={tw(
        'relative transition-all',
        isHovered
          ? 'h-80 w-[536px] overflow-hidden rounded-2xl border bg-white shadow-xl'
          : 'h-40 w-[340px] shadow-none'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={nodeRef}
      whileHover={{
        scale: isDragging ? 1.15 : 1,
      }}
    >
      <button
        className={tw(
          'absolute inset-x-0 top-0 border-b p-4 text-center font-medium text-gray-900 outline-hidden transition hover:cursor-pointer hover:bg-muted',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        onClick={() => setDisplayContent('more')}
        type="button"
      >
        Fun projects →
      </button>
      {projects1.map((project, index) => {
        return (
          // biome-ignore lint/performance/noImgElement: just simple img
          <img
            alt={project}
            className="absolute size-20 rounded-[14px] shadow-sm transition"
            key={project}
            src={project}
            style={{
              transform: `translateX(${isHovered ? index * 96 + 36 : index * 64}px) translateY(${isHovered ? 90 : 0}px) rotate(8deg)`,
            }}
          />
        );
      })}
      {projects2.map((project, index) => {
        return (
          // biome-ignore lint/performance/noImgElement: just simple img
          <img
            alt={project}
            className="absolute size-20 rounded-[14px] shadow-sm transition"
            key={project}
            src={project}
            style={{
              transform: `translateX(${isHovered ? index * 96 + 36 : index * 64}px) translateY(${isHovered ? 200 : 80}px) rotate(-6deg)`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
