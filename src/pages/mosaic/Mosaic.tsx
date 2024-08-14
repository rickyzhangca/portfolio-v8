import { PageLayout } from '../../components/PageLayout';
import designSystemBackground from './design-system-background.webp';
import designSystem from './design-system.png';
import iconsBackground from './icons-background.webp';
import icons from './icons.webp';
import searchBackground from './search-background.webp';
import search from './search.webp';

export const Mosaic = () => {
  return (
    <PageLayout>
      <h1>Mosaic</h1>
      While I am transferring the contents to this new portfolio, please click
      the content below to view them in the previous site ;-)
      <div className="flex flex-col gap-4">
        <h3>Architecting and Building a Multi-device Design System</h3>
        <a
          className="not-prose relative flex h-[480px] items-center justify-center rounded-xl bg-cover transition hover:z-10 hover:scale-105"
          href="https://bd1e0efc.portfolio-ck9.pages.dev/designSystem"
          target="_blank"
          style={{ backgroundImage: `url(${designSystemBackground})` }}
        >
          <img src={designSystem} className="h-5/6" />
        </a>
        <h3>Designing Global Search Experience</h3>
        <a
          className="not-prose relative flex h-[480px] items-center justify-center rounded-xl bg-cover transition hover:z-10 hover:scale-105"
          href="https://bd1e0efc.portfolio-ck9.pages.dev/globalSearch"
          target="_blank"
          style={{ backgroundImage: `url(${searchBackground})` }}
        >
          <img src={search} className="h-5/6" />
        </a>
        <h3>Refreshing Mosaic's Icon System</h3>
        <a
          className="not-prose relative flex h-[480px] items-center justify-center rounded-xl bg-cover transition hover:z-10 hover:scale-105"
          href="https://bd1e0efc.portfolio-ck9.pages.dev/mosaicIcons"
          target="_blank"
          style={{ backgroundImage: `url(${iconsBackground})` }}
        >
          <img src={icons} className="w-5/6" />
        </a>
      </div>
    </PageLayout>
  );
};
