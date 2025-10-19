import type { NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { atoms } from "../../atoms";

import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import anime from "./anime.webp";
import cat from "./cat.webp";
import cs2 from "./cs2.webp";
import figma from "./figma.webp";
import hackathon from "./hackathon.webp";
import macbook from "./macbook.webp";
import shoe from "./shoe.webp";
import tailwind from "./tailwind.webp";
import turtles from "./turtles.webp";

export const FunNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      className="relative"
      whileHover={{
        rotate: isDragging ? -4 : 2,
        scale: isDragging ? 1.4 : 1.3,
        filter: isDragging
          ? "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))"
          : "drop-shadow(0 1px 4px rgba(0, 0, 0, 0.05))",
      }}
    >
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img alt="macbook" className="w-80" src={macbook} />
      <Tooltip>
        <TooltipTrigger className="absolute top-12 right-16 w-24 rotate-6">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="shoe" src={shoe} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I'm a runner! I have run 7 marathons across Canada 🎽
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute bottom-16 left-4 w-16 rotate-6">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="hackathon" src={hackathon} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I enjoy hackathons and sometimes I'm a judge 🧑‍💻
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute right-16 bottom-6 w-32 rotate-6">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="cat" src={cat} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I have a lovely long-hair grey cat 🥰
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute top-4 right-4 w-10">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="anime" src={anime} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I'm a seasoned anime fan 💫
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="-rotate-3 absolute bottom-6 left-4 w-24">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="cs2" src={cs2} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I play a lot of Cities: Skylines 🏙️
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="-rotate-6 absolute top-4 left-4 w-14">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="figma" src={figma} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I'm a serious Figma expert and one of the earliest users 😎
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute top-12 left-16 w-16 rotate-6">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="tailwind" src={tailwind} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I love Tailwind CSS so much 💅
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger className="absolute right-4 bottom-6 w-20 rotate-6">
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img alt="turtles" src={turtles} />
        </TooltipTrigger>
        <TooltipContent sideOffset={2}>
          I have two turtles sunbathing next to me 🐢
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
