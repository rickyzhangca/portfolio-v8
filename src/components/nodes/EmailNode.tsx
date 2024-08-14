import { CheckIcon, CopyIcon, MailIcon } from '@primer/octicons-react';
import { NodeProps } from '@xyflow/react';
import copy from 'copy-to-clipboard';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { atoms } from '../../atoms';

export const EmailNode = ({ id }: NodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <motion.div
      whileHover={{
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
      className="flex cursor-grab items-center gap-3 rounded-full border border-gray-200 bg-white px-1.5 py-1.5 text-gray-900 active:cursor-grabbing"
    >
      <p className="flex items-center gap-px pl-4 pr-1.5">
        <span className="font-bold">hi</span>
        <span>@</span>
        <span>rickyzhang.me</span>
      </p>
      <div className="flex items-center gap-1">
        <button
          onPointerDownCapture={(e) => e.stopPropagation()}
          onClick={() => window.open('mailto:hi@rickyzhang.me')}
          className="flex items-center justify-center rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700"
        >
          <MailIcon />
        </button>
        <button
          onPointerDownCapture={(e) => e.stopPropagation()}
          onClick={() => {
            copy('hi@rickyzhang.me');
            setIsCopied(true);
          }}
          disabled={isCopied}
          className="flex items-center justify-center rounded-full bg-gray-100 p-3 text-gray-500 transition hover:bg-gray-200 hover:text-gray-600"
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </motion.div>
  );
};
