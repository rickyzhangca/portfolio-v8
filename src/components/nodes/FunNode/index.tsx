import { NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../../atoms';

import { Tooltip, TooltipContent, TooltipTrigger } from '../../Tooltip';
import anime from './anime.webp';
import cat from './cat.webp';
import cs2 from './cs2.webp';
import figma from './figma.webp';
import hackthon from './hackthon.webp';
import macbook from './macbook.webp';
import shoe from './shoe.webp';
import tailwind from './tailwind.webp';
import turtles from './turtles.webp';

export const FunNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      whileHover={{
        rotate: isDragging ? -4 : 2,
        scale: isDragging ? 1.4 : 1.3,
        filter: isDragging
          ? 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))'
          : 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.05))',
      }}
      className="relative"
    >
      <img src={macbook} className="w-80" />
      <Tooltip>
        <TooltipTrigger className="absolute right-16 top-12 w-24 rotate-6">
          <img src={shoe} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I'm a runner! I have run 4 marathons in 2023 and 2 in 2024 🎽
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute bottom-16 left-4 w-16 rotate-6">
          <img src={hackthon} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I enjoy hackthons and sometimes I'm a judge 🧑‍💻
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute bottom-6 right-16 w-32 rotate-6">
          <img src={cat} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I have a lovely long-hair grey cat 🥰
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute right-4 top-4 w-10">
          <img src={anime} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I'm a seasoned anime fan 💫
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute bottom-6 left-4 w-24 -rotate-3">
          <img src={cs2} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I play a lot of Cities: Skylines 🏙️
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute left-4 top-4 w-14 -rotate-6">
          <img src={figma} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I'm a serious Figma expert and one of the earliest users 😎
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute left-16 top-12 w-16 rotate-6">
          <img src={tailwind} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I love Tailwind CSS so much 💅
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute bottom-6 right-4 w-20 rotate-6">
          <img src={turtles} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I have two turtles sunbathing next to me 🐢
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
