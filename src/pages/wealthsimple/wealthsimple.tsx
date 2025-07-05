import { HeaderCard } from '../../components/header-card';
import { HighlightCard } from '../../components/highlight-card';
import { PageLayout } from '../../components/page-layout';
import darkMode from './dark-mode.webp';
import homeGradients from './home-gradients.webp';
import newProfileLayout from './new-profile-layout.webp';
import snackbar from './snackbar.webp';

export const Wealthsimple = () => {
  return (
    <PageLayout>
      <HeaderCard
        subtitle="Building something people love to use everyday."
        title="Wealthsimple, Design System"
      />
      <div className="grid gap-2 md:grid-cols-2">
        <HighlightCard image={homeGradients} title="Home gradients" />
        <HighlightCard image={newProfileLayout} title="New profile layout" />
        <HighlightCard image={darkMode} title="Web dark mode" />
        <HighlightCard image={snackbar} title="Web snackbar" />
      </div>
    </PageLayout>
  );
};
