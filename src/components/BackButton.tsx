import { ArrowLeftIcon } from '@phosphor-icons/react';
import { useAtom } from 'jotai';
import { atoms } from '../atoms';

export const BackButton = () => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);

  return (
    <button
      className="z-20 flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white py-3 pr-8 pl-6 font-medium text-gray-950 outline-hidden transition hover:shadow-2xl"
      onClick={() => setDisplayContent(null)}
    >
      <ArrowLeftIcon size={20} weight="bold" />
      Back
    </button>
  );
};
