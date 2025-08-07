import { Image } from './image';
import { ShippedTag } from './shipped-tag';

type HighlightCardProps = {
  image: string;
  title: string;
  description?: string;
  notShipped?: boolean;
};

export const HighlightCard = ({
  image,
  title,
  description,
  notShipped,
}: HighlightCardProps) => {
  return (
    <div className="relative flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white px-3 pt-8 pb-6">
      <Image src={image} />
      {!notShipped && <ShippedTag />}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-medium">{title}</h2>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  );
};
