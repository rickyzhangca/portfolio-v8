import { useAtom } from 'jotai';
import { atoms } from '../../atoms';
import swag17 from '../../pages/swag/17.webp';
import swag22 from '../../pages/swag/22.webp';
import swag33 from '../../pages/swag/33.webp';
import swag86 from '../../pages/swag/86.webp';

export const SwagNode = () => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);

  return (
    <div className="group flex">
      <img
        src={swag22}
        alt="swag22"
        className="h-24 transition group-hover:scale-125"
      />
      <img
        src={swag33}
        alt="swag33"
        className="-ml-4 h-24 transition group-hover:scale-125"
      />
      <img
        src={swag86}
        alt="swag86"
        className="-ml-4 h-24 transition group-hover:scale-125"
      />
      <img
        src={swag17}
        alt="swag17"
        className="-ml-4 h-24 transition group-hover:scale-125"
      />
      <button
        type="button"
        onClick={() => setDisplayContent('swag')}
        className="active:bg-muted absolute top-1/2 left-1/2 w-56 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-2xl bg-white px-4 py-3 font-medium opacity-0 shadow transition group-hover:opacity-100 hover:shadow-lg"
      >
        View my swag collection
      </button>
    </div>
  );
};
