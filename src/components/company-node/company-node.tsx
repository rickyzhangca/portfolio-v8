import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { atoms } from '../../atoms';
import type { Contents } from '../../pages';
import { OpenCardLinkButton } from '../open-card-link-button';

type CompanyNodeProps = {
  id: keyof typeof Contents;
  company: string;
  logo: string;
  time: string;
  position: string;
};

export const CompanyNode = ({
  id,
  company,
  logo,
  time,
  position,
}: CompanyNodeProps) => {
  const [currentDraggingNode] = useAtom(atoms.currentDraggingNode);
  const isDragging = currentDraggingNode === id;

  return (
    <motion.div
      className="group"
      whileHover={{
        rotate: isDragging ? -8 : 4,
        scale: isDragging ? 1.05 : 1,
        boxShadow: isDragging
          ? '0 10px 20px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)'
          : '0 1px 4px 0 rgb(0 0 0 / 0.05)',
      }}
    >
      <div className="relative flex flex-col gap-2.5 rounded-md border border-gray-200 bg-white p-2 pb-2.5 shadow-sm">
        <div>
          {/** biome-ignore lint/performance/noImgElement: just simple img */}
          <img
            alt={`${company}-logo`}
            className="size-68 rounded-sm"
            src={logo}
          />
          <OpenCardLinkButton className="text-[#005DAA]" content={id} />
        </div>
        <div className="flex flex-col items-center gap-1 pl-0.5">
          <p className="font-medium text-gray-900">
            {position} @ {company}
          </p>
          <p className="text-gray-400 text-sm">{time}</p>
        </div>
        <div className="-z-10 -translate-x-0.5 -translate-y-0.5 group-hover:-rotate-3 absolute h-full w-full rounded-md border border-gray-200 bg-white shadow-sm transition group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </motion.div>
  );
};
