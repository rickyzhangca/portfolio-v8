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
          'not-prose h-96 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-100 object-contain p-1',
          className,
        )}
      />
    );
  }

  return (
    <img
      src={src}
      className={tw(
        'not-prose h-96 w-full rounded-xl border border-gray-200 bg-gray-100 object-contain p-1',
        className,
      )}
    />
  );
};
