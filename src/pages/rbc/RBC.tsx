import { HeaderCard } from '../../components/HeaderCard';
import { HighlightCard } from '../../components/HighlightCard';
import { PageLayout } from '../../components/PageLayout';
import amplify from './amplify.webp';

import product from './product.webp';
import pyspark from './pyspark.webp';
import redesign from './redesign.webp';

export const RBC = () => {
  return (
    <PageLayout>
      <HeaderCard
        title="RBC, AIOps"
        subtitle="I worked at RBC as a design engineer in AIOps team, designing and building interfaces for internal AI tools. Due to NDA I am not able to share much publicly. Shoot me an email if you would like to learn more about my work!"
      />
      <div className="grid gap-2 md:grid-cols-2">
        <HighlightCard image={product} title="New internal AIOps products" />
        <HighlightCard
          image={redesign}
          title="Redesign UI for larger data volumes"
        />
        <HighlightCard
          image={pyspark}
          title="Internal tool to help data engineers manage PySpark jobs"
        />
        <HighlightCard
          image={amplify}
          notShipped
          title="Mentor and judge two years of RBC Amplify projects"
        />
      </div>
    </PageLayout>
  );
};
