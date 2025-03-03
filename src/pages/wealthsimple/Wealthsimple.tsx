import { HeaderCard } from '../../components/HeaderCard';
import { HighlightCard } from '../../components/HighlightCard';
import { PageLayout } from '../../components/PageLayout';
import shh from './shh.webp';

export const Wealthsimple = () => {
  return (
    <PageLayout>
      <HeaderCard
        title="Wealthsimple, Design System"
        subtitle="Building something people love to use everyday."
      />
      <HighlightCard
        image={shh}
        notShipped
        title="Cooking something exciting this year...!"
      />
    </PageLayout>
  );
};
