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
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img
        alt="swag22"
        className="h-24 transition group-hover:scale-125"
        src={swag22}
      />
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img
        alt="swag33"
        className="-ml-4 h-24 transition group-hover:scale-125"
        src={swag33}
      />
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img
        alt="swag86"
        className="-ml-4 h-24 transition group-hover:scale-125"
        src={swag86}
      />
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img
        alt="swag17"
        className="-ml-4 h-24 transition group-hover:scale-125"
        src={swag17}
      />
      <button
        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-56 cursor-pointer rounded-2xl bg-white px-4 py-3 font-medium opacity-0 shadow transition hover:shadow-lg active:bg-muted group-hover:opacity-100"
        onClick={() => setDisplayContent('swag')}
        type="button"
      >
        View my swag collection
      </button>
    </div>
  );
};
