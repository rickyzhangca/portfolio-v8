import { HeaderCard } from '../../components/HeaderCard';
import { HighlightCard } from '../../components/HighlightCard';
import { PageLayout } from '../../components/PageLayout';
import darkMode from './dark-mode.webp';
import snackbar from './snackbar.webp';
import newProfileLayout from './new-profile-layout.webp';
import homeGradients from './home-gradients.webp';

export const Wealthsimple = () => {
  return (
    <PageLayout>
      <HeaderCard
        title="Wealthsimple, Design System"
        subtitle="Building something people love to use everyday."
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
