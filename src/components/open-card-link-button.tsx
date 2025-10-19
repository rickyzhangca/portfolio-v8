import { ArrowRightIcon } from "@phosphor-icons/react";
import { useAtom } from "jotai";
import { useHotkeys } from "react-hotkeys-hook";
import { atoms } from "../atoms";
import type { Contents } from "../pages";
import { tw } from "../utils/tw";

export const OpenCardLinkButton = ({
  className,
  content,
}: {
  className?: string;
  content: keyof typeof Contents;
}) => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);
  useHotkeys("esc", () => setDisplayContent(null));

  return (
    <>
      <button
        className={tw(
          "pointer-events-none absolute top-5 right-5 flex size-10 scale-[80%] items-center justify-center rounded-full bg-white text-gray-900 opacity-0 transition hover:cursor-pointer hover:bg-gray-100 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100",
          className
        )}
        onClick={() => setDisplayContent(content)}
        type="button"
      >
        <ArrowRightIcon size={20} weight="bold" />
      </button>
    </>
  );
};
