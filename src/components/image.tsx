import { tw } from '../utils/tw';

type ImageProps = {
  src: string;
  href?: string;
  className?: string;
  autoHeight?: boolean;
};

export const Image = ({ src, href, className, autoHeight }: ImageProps) => {
  if (href) {
    return (
      <a href={href} target="_blank">
        {/** biome-ignore lint/performance/noImgElement: just simple img */}
        <img
          alt="missing alt"
          className={tw(
            'not-prose w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-700 object-contain',
            autoHeight ? 'h-auto' : 'h-96',
            className
          )}
          src={src}
        />
      </a>
    );
  }

  return (
    <div className={tw('not-prose w-full')}>
      {/** biome-ignore lint/performance/noImgElement: just simple img */}
      <img
        alt="missing alt"
        className={tw(
          'm-auto rounded-xl border border-gray-200 object-contain',
          autoHeight ? 'h-auto' : 'h-96',
          className
        )}
        src={src}
      />
    </div>
  );
};
