import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { atoms } from '../atoms';
import { tw } from '../utils/tw';

export const TitleNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  const [hoveringIndex, setHoveringIndex] = useState(-2);

  return (
    <motion.div
      whileHover={{
        scale: isDragging ? 1.15 : 1,
      }}
      style={{
        left: '50%',
        top: '50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="font-fredericka flex cursor-grab items-center text-8xl font-thin text-gray-900 active:cursor-grabbing"
    >
      {'I craft experience'.split('').map((char, i) => (
        <span
          key={i}
          className={tw(
            'whitespace-pre transition',
            hoveringIndex === i - 2 && 'text-gray-800',
            hoveringIndex === i - 1 && 'scale-105 text-gray-700',
            hoveringIndex === i && 'scale-110 text-gray-600',
            hoveringIndex === i + 1 && 'scale-105 text-gray-700',
            hoveringIndex === i + 2 && 'text-gray-800',
          )}
          onPointerEnter={() => setHoveringIndex(i)}
          onPointerOut={() => setHoveringIndex(-2)}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};
