import { ArrowRightIcon } from '@primer/octicons-react';
import { useAtom } from 'jotai';
import { useHotkeys } from 'react-hotkeys-hook';
import { atoms } from '../atoms';
import { Contents } from '../pages';
import { tw } from '../utils/tw';

export const OpenCardLinkButton = ({
  className,
  content,
}: {
  className?: string;
  content: keyof typeof Contents;
}) => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);
  useHotkeys('esc', () => setDisplayContent(null));

  return (
    <>
      <button
        className={tw(
          'pointer-events-none absolute right-3 top-3 flex size-10 scale-[80%] items-center justify-center rounded-full bg-white text-gray-900 opacity-0 transition group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100',
          className,
        )}
        onClick={() => setDisplayContent(content)}
      >
        <ArrowRightIcon size={20} />
      </button>
    </>
  );
};
