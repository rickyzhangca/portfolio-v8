import { useAtom } from 'jotai';
import { atoms } from '../atoms';

export const EscBadge = () => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);

  return (
    <button
      className="rounded-lg bg-gray-900/10 px-2 py-1 text-sm font-bold text-gray-900/30 outline-none transition hover:bg-gray-900/20 hover:text-gray-900/50"
      onClick={() => setDisplayContent(null)}
    >
      ESC
    </button>
  );
};
