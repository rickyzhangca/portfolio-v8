import { PageLayout } from '../../components/PageLayout';
import ricky from './ricky.webp';

export const Why = () => {
  return (
    <PageLayout>
      <div className="prose w-full max-w-full rounded-2xl bg-white p-3 text-start md:p-8">
        <div className="mb-12 flex w-full items-center justify-center">
          <img src={ricky} className="h-96 -rotate-6 rounded-xl shadow-xl" />
        </div>
        <h1 className="w-full text-center">Designer Who Codes</h1>
        <section>
          <h2>My Journey: From UI/UX to Design Engineering</h2>
          <p>
            Hey there! I'm Ricky, a design engineer at Wealthsimple on design
            system team. My journey started as a UI/UX designer at Mosaic, a 3D
            printing startup, where I tackled the challenges of creating user
            interfaces for various IoT devices.
          </p>
          <p>
            This experience ignited my curiosity about the technical aspects,
            leading me to become a UX engineer at RBC AIOps team, and
            eventually, a design engineer at Mintlify, then Wealthsimple - my
            dream company making my favorite product.
          </p>
        </section>
        <section>
          <h2>The Magic of Blending Design and Engineering</h2>
          <p>
            As a design engineer, I wear two hats – designer and coder. The seed
            was planted when I read about{' '}
            <a
              href="https://medium.com/google-design/google-maps-cb0326d165f5"
              target="_blank"
            >
              Prototyping a Smoother Map
            </a>{' '}
            when I was in school. I was fascinated by the idea of being at the
            intersection of design and engineering.
          </p>
        </section>
        <section>
          <h2>What Drives Me</h2>
          <ol>
            <li>
              <strong>Solving Complex Problems:</strong> At Mosaic, I designed
              UIs that could scale across various IoT devices with different
              screen sizes and pixel densities.
            </li>
            <li>
              <strong>Creating Impactful Tools:</strong> One of my proudest
              achievements was creating a comprehensive design system that
              standardized design elements and streamlined the development
              process.
            </li>
            <li>
              <strong>See my work being used:</strong> I love to see my work
              being used by others and making an impact. At the end, a great
              experience is only great when it's being used by others.
            </li>
          </ol>
        </section>
      </div>
    </PageLayout>
  );
};
