import { ArrowLeftIcon } from '@primer/octicons-react';
import { useAtom } from 'jotai';
import { atoms } from '../atoms';

export const BackButton = () => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);

  return (
    <button
      className="flex items-center gap-1 rounded-full bg-gray-900/5 py-2 pl-4 pr-6 font-medium text-gray-900/50 outline-none transition hover:bg-gray-900/10 hover:text-gray-900/50"
      onClick={() => setDisplayContent(null)}
    >
      <ArrowLeftIcon size={20} />
      Back
    </button>
  );
};
