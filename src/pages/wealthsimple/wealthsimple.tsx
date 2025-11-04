import { HeaderCard } from "../../components/header-card";
import { HighlightCard } from "../../components/highlight-card";
import { PageLayout } from "../../components/page-layout";
import darkMode from "./dark-mode.webp";
import homeGradients from "./home-gradients.webp";
import newProfileLayout from "./new-profile-layout.webp";
import snackbar from "./snackbar.webp";
import swipeable from "./swipeable.webp";
import webChart from "./web-chart.webp";
import dataViz from "./data-viz.webp";
import widget from "./widget.webp";
import ticker from "./ticker.webp";

export const Wealthsimple = () => (
  <PageLayout>
    <HeaderCard
      subtitle="Building something people love to use everyday."
      title="Wealthsimple, Design System"
    />
    <div className="grid gap-2 md:grid-cols-2">
    <HighlightCard image={ticker} title="Web rolling ticker" />
    <HighlightCard image={dataViz} title="Data viz colors" />
      <HighlightCard image={widget} title="Redesigned securities widget" />
      <HighlightCard image={webChart} title="Web chart segments + animations" />
      <HighlightCard image={homeGradients} title="Home gradients" />
      <HighlightCard image={newProfileLayout} title="New profile layout" />
      <HighlightCard image={darkMode} title="Web dark mode" />
      <HighlightCard image={swipeable} title="Swipeable components" />
      <HighlightCard image={snackbar} title="Web snackbar" />
    </div>
  </PageLayout>
);
