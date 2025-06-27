import { ArrowUpRightIcon } from '@phosphor-icons/react';
import figma from './figma.svg';

type FigmaCardProps = {
  title: string;
  description: string;
  image: string;
  count: string;
  label?: string;
  href: string;
};

export const FigmaCard = ({
  title,
  description,
  image,
  count,
  label,
  href,
}: FigmaCardProps) => {
  return (
    <div className="not-prose flex items-center justify-between rounded-xl border border-gray-200 bg-gray-100 p-4">
      <div className="flex items-center gap-4">
        <img src={image} className="size-16" />
        <div className="flex flex-col">
          <h3>{title}</h3>
          <p className="max-w-96 text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center justify-center text-gray-400">
          <ArrowUpRightIcon size={20} weight="bold" />
          {count}
        </div>
        <a
          className="hover:bg-gray-80 flex items-center gap-2 rounded-full bg-gray-900 py-3 pr-5 pl-4 text-sm text-white"
          href={href}
          target="_blank"
        >
          <img src={figma} />
          {label ?? 'View Plugin'}
        </a>
      </div>
    </div>
  );
};
