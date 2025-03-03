import { HeaderCard } from '../../components/HeaderCard';
import { HighlightCard } from '../../components/HighlightCard';
import { PageLayout } from '../../components/PageLayout';
import auth from './auth.webp';
import chat from './chat.webp';
import editor from './editor.webp';
import fonts from './fonts.webp';
import footer from './footer.webp';
import gitlab from './gitlab.webp';
import support from './support.webp';

export const Mintlify = () => {
  return (
    <PageLayout>
      <HeaderCard
        title="Mintlify"
        subtitle="Mintlify (YC W22) defines the modern standard for documentation. I was lucky to have worked with the great and tight-knit team to ship many new UIs as a design engineer."
      />
      <div className="grid gap-2 md:grid-cols-2">
        <HighlightCard
          image={chat}
          title="New search & chat and Mintlify widget"
        />
        <HighlightCard image={editor} title="Editor file tree" />
        <HighlightCard image={auth} title="Refreshed auth and onboarding" />
        <HighlightCard image={support} title="Dashboard support form" />
        <HighlightCard image={fonts} title="Custom fonts" />
        <HighlightCard image={footer} title="Advanced footer" />
        <HighlightCard image={gitlab} title="Gitlab configuration" />
      </div>
    </PageLayout>
  );
};
