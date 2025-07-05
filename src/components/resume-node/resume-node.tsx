import type { NodeProps } from '@xyflow/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { atoms } from '../../atoms';
import resume from './resume.webp';

const FolderBottom = () => (
  <svg
    className="h-auto w-full"
    fill="none"
    height="374"
    viewBox="0 0 477 374"
    width="477"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Resume</title>
    <path
      d="M0 24C0 10.7452 10.7452 0 24 0H131.352C138.707 0 145.656 3.37283 150.207 9.15147L167.293 30.8485C171.844 36.6272 178.793 40 186.148 40H453C466.255 40 477 50.7452 477 64V350C477 363.255 466.255 374 453 374H24C10.7452 374 0 363.255 0 350L0 24Z"
      fill="url(#paint0_linear_24_5)"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_24_5"
        x1="238.5"
        x2="238.5"
        y1="0"
        y2="334"
      >
        <stop stopColor="#89DAFF" />
        <stop offset="1" stopColor="#A7E3FF" />
      </linearGradient>
    </defs>
  </svg>
);

const FolderTop = ({ isHovering }: { isHovering: boolean }) => (
  <motion.svg
    animate={{
      rotateX: isHovering ? '-30deg' : '0deg',
      filter: isHovering ? 'drop-shadow(0px -4px 8px rgb(0 0 0 / 0.05))' : '',
    }}
    className="absolute bottom-0 z-20 h-auto w-full origin-bottom cursor-pointer"
    fill="none"
    height="313"
    viewBox="0 0 477 313"
    width="477"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Folder Top</title>
    <path
      d="M0 24C0 10.7452 10.7452 0 24 0H453C466.255 0 477 10.7452 477 24V289C477 302.255 466.255 313 453 313H24C10.7452 313 0 302.255 0 289V24Z"
      fill="#76D1FB"
    />
    <path
      clipRule="evenodd"
      d="M24 0C10.7452 0 0 10.7452 0 24V273H477V24C477 10.7452 466.255 0 453 0H24Z"
      fill="url(#paint0_linear_24_9)"
      fillRule="evenodd"
    />
    <path
      d="M24 313H453C462.686 313 471.032 307.262 474.824 299H2.17617C5.9682 307.262 14.314 313 24 313Z"
      fill="url(#paint1_linear_24_9)"
    />
    <path
      d="M0 289C0 292.569 0.778974 295.956 2.17617 299H474.824C476.221 295.956 477 292.569 477 289V286.5H0V289Z"
      fill="url(#paint2_linear_24_9)"
    />
    <path d="M0 286.5H477V273H0V286.5Z" fill="url(#paint3_linear_24_9)" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_24_9"
        x1="238.5"
        x2="238.5"
        y1="0"
        y2="313"
      >
        <stop stopColor="#6DCAF5" />
        <stop offset="0.175" stopColor="#76D1FB" />
        <stop offset="0.825" stopColor="#76D1FB" />
        <stop offset="1" stopColor="#6FC4EC" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear_24_9"
        x1="238.5"
        x2="238.5"
        y1="299"
        y2="313"
      >
        <stop stopColor="white" stopOpacity="0.2" />
        <stop offset="0.5" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint2_linear_24_9"
        x1="238.5"
        x2="238.5"
        y1="286.5"
        y2="301"
      >
        <stop stopColor="white" stopOpacity="0.2" />
        <stop offset="0.5" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint3_linear_24_9"
        x1="238.5"
        x2="238.5"
        y1="273.5"
        y2="289"
      >
        <stop stopColor="white" stopOpacity="0.2" />
        <stop offset="0.5" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </motion.svg>
);

export const ResumeNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="relative flex w-48 cursor-grab items-center text-gray-900 active:cursor-grabbing"
      onHoverEnd={() => setIsHovering(false)}
      onHoverStart={() => setIsHovering(true)}
      style={{
        perspective: 600,
      }}
      whileHover={{
        scale: isDragging ? 1.15 : 1,
        filter: isDragging
          ? 'drop-shadow(0px 4px 8px rgb(0 0 0 /0.08))'
          : 'drop-shadow(0px 4px 8px rgb(0 0 0 / 0.03))',
      }}
    >
      <FolderBottom />
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 z-10 h-72 w-full overflow-hidden">
        {/** biome-ignore lint/performance/noImgElement: just simple img */}
        <motion.img
          animate={{
            translateY: isHovering ? '-50px' : '0px',
            filter: 'drop-shadow(0px 0px 4px rgb(0 0 0 / 0.05))',
          }}
          className="absolute bottom-0 left-1/2 z-10 h-auto w-[calc(100%-24px)] cursor-pointer"
          initial={{
            translateX: '-50%',
          }}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1M4WVGROUJAAZc6Q01KqiiKwoQqXayh8B/view?usp=sharing',
              '_blank'
            )
          }
          src={resume}
        />
        <AnimatePresence>
          {isHovering && (
            <motion.div
              animate={{ opacity: 1, x: 10, y: 20 }}
              className="font-fredericka text-gray-500 text-lg"
              exit={{ opacity: 0, x: 10, y: 80 }}
              initial={{ opacity: 0, x: 30, y: 80 }}
              transition={{ delay: 0.05 }}
            >
              View my resume ;-)
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <FolderTop isHovering={isHovering} />
    </motion.div>
  );
};
