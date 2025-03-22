import { PageLayout } from '../../components/PageLayout';
import ricky from './ricky.webp';

export const Why = () => {
  return (
    <PageLayout>
      <div className="prose w-full max-w-full rounded-2xl bg-white p-3 text-start md:p-8">
        <div className="flex w-full items-center justify-center pt-4">
          <img src={ricky} className="h-96 -rotate-4 rounded-xl shadow-xl" />
        </div>
        <h2 className="font-semibold text-gray-400">
          I'm a <span className="text-gray-950">design engineer</span>{' '}
          specializing in <span className="text-gray-950">design systems</span>,
          passionate about{' '}
          <span className="text-gray-950">fintech and dev tools</span>. I help{' '}
          <span className="text-gray-950">
            engineers and designers move faster together
          </span>{' '}
          by creating ready-to-go components. My approach is{' '}
          <span className="text-gray-950">optimizing composition</span>,
          crafting details, and being open, passion driven. I thrive in{' '}
          <span className="text-gray-950">collaborative environments</span>{' '}
          where I have <span className="text-gray-950">ownership</span> over
          some topics.
        </h2>
      </div>
      <div className="prose w-full max-w-full rounded-2xl bg-white p-3 text-start md:p-8">
        <h2>Designer who codes</h2>
        <p>
          My journey started as a UI/UX designer at Mosaic, a 3D printing
          startup, where I tackled the challenges of creating user interfaces
          for various IoT devices.
        </p>
        <p>
          This experience ignited my curiosity about the technical aspects,
          leading me to become a UX engineer at RBC AIOps team, and eventually,
          a design engineer at Mintlify, then Wealthsimple - my dream company
          making my favorite product.
        </p>
        <p>
          The seed of blending design and engineering was planted in the school
          when I read about{' '}
          <a
            href="https://medium.com/google-design/google-maps-cb0326d165f5"
            target="_blank"
          >
            Prototyping a Smoother Map
          </a>
          by a Google's UX engineer. I was fascinated by the idea of being at
          the intersection of design and engineering.
        </p>
      </div>
      <div className="prose w-full max-w-full rounded-2xl bg-white p-3 text-start md:p-8">
        <h2>What Drives Me</h2>
        <ol>
          <li>
            <strong>Solving Complex Problems:</strong> At Mosaic, I designed UIs
            that could scale across various IoT devices with different screen
            sizes and pixel densities.
          </li>
          <li>
            <strong>Creating Impactful Tools:</strong> One of my proudest
            achievements was creating a comprehensive design system that
            standardized design elements and streamlined the development
            process.
          </li>
          <li>
            <strong>See my work being used:</strong> I love to see my work being
            used by others and making an impact. At the end, a great experience
            is only great when it's being used by others.
          </li>
        </ol>
      </div>
    </PageLayout>
  );
};
