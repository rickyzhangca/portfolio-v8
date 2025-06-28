import { HeaderCard } from '../../components/header-card/header-card';
import { HighlightCard } from '../../components/highlight-card/highlight-card';
import { PageLayout } from '../../components/page-layout';
import b2b from './b2b.webp';
import ds from './ds.webp';
import graphic from './graphic.webp';
import icon from './icon.webp';
import packaging from './packaging.webp';
import printers from './printers.webp';

export const Mosaic = () => {
  return (
    <PageLayout>
      <HeaderCard
        title="Mosaic"
        subtitle="I worked at Mosaic as a UI/UX designer but I designed way more than just UI and UX. It was a great journey because I had trusts and supports from my team to let my passion shine through many areas."
      />
      <div className="grid gap-2 md:grid-cols-2">
        <HighlightCard
          image={ds}
          title="A web and multi-device IoT design system"
        />
        <HighlightCard image={printers} title="UI for 3 new 3D printers" />
        <HighlightCard image={b2b} title="B2B service offerings from scratch" />
        <HighlightCard
          image={icon}
          title="Refreshed icon system and pipeline"
        />
        <HighlightCard
          image={graphic}
          title="All print materials from business cards to trade show walls"
        />
        <HighlightCard
          image={packaging}
          title="Packaging design with a unified language"
        />
      </div>
    </PageLayout>
  );
};
