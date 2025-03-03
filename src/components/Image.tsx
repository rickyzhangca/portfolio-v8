import { tw } from '../utils/tw';

export const Image = ({
  src,
  href,
  className,
}: {
  src: string;
  href?: string;
  className?: string;
}) => {
  if (href) {
    return (
      <img
        onClick={() => {
          window.open(href, '_blank');
        }}
        src={src}
        className={tw(
          'not-prose h-96 w-full cursor-pointer rounded-2xl border border-gray-200 bg-gray-700 object-contain',
          className,
        )}
      />
    );
  }

  return (
    <div className={tw('not-prose w-full', className)}>
      <img
        src={src}
        className="m-auto h-96 rounded-2xl border border-gray-200 object-contain"
      />
    </div>
  );
};
