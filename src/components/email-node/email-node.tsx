import { CheckIcon, CopyIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import type { NodeProps } from "@xyflow/react";
import copy from "copy-to-clipboard";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { atoms } from "../../atoms";

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
      className="flex cursor-grab items-center gap-3 rounded-full border border-gray-200 bg-white px-1.5 py-1.5 text-gray-900 active:cursor-grabbing"
      whileHover={{
        scale: isDragging ? 1.15 : 1,
        boxShadow: isDragging
          ? "0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)"
          : "0 1px 4px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      <p className="flex items-center gap-px pr-1.5 pl-4">
        <span>ricky.zhang@queensu.ca</span>
      </p>
      <div className="flex items-center gap-1">
        <button
          className="flex items-center justify-center rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700"
          onClick={() => window.open("mailto:ricky.zhang@queensu.ca")}
          onPointerDownCapture={(e) => e.stopPropagation()}
          type="button"
        >
          <EnvelopeSimpleIcon size={20} weight="bold" />
        </button>
        <button
          className="flex items-center justify-center rounded-full bg-gray-100 p-3 text-gray-500 transition hover:bg-gray-200 hover:text-gray-600"
          disabled={isCopied}
          onClick={() => {
            copy("ricky.zhang@queensu.ca");
            setIsCopied(true);
          }}
          onPointerDownCapture={(e) => e.stopPropagation()}
          type="button"
        >
          {isCopied ? (
            <CheckIcon size={20} weight="bold" />
          ) : (
            <CopyIcon size={20} weight="bold" />
          )}
        </button>
      </div>
    </motion.div>
  );
};
