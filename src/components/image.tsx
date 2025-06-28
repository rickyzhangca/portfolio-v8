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
      <img
        onClick={() => {
          window.open(href, '_blank');
        }}
        src={src}
        className={tw(
          'not-prose w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-700 object-contain',
          autoHeight ? 'h-auto' : 'h-96',
          className,
        )}
      />
    );
  }

  return (
    <div className={tw('not-prose w-full')}>
      <img
        src={src}
        className={tw(
          'm-auto rounded-xl border border-gray-200 object-contain',
          autoHeight ? 'h-auto' : 'h-96',
          className,
        )}
      />
    </div>
  );
};
