import { PageLayout } from '../../components/page-layout';
import ricky from './ricky.webp';

export const Why = () => {
  return (
    <PageLayout>
      <div className="prose w-full max-w-full rounded-2xl bg-white p-3 text-start md:p-8">
        <div className="flex w-full items-center justify-center pt-4">
          <img
            alt="ricky"
            className="-rotate-4 h-96 rounded-xl shadow-xl"
            src={ricky}
          />
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
        <h2>What got me here?</h2>
        <p>
          The seed of blending design and engineering was planted in the school
          when I read about{' '}
          <a
            href="https://medium.com/google-design/google-maps-cb0326d165f5"
            rel="noopener noreferrer"
            target="_blank"
          >
            Prototyping a Smoother Map
          </a>{' '}
          by a Google's UX engineer. I was fascinated by the idea of being at
          the intersection of design and engineering.
        </p>
        <p>
          My journey started as a UI/UX designer at Mosaic, a 3D printing
          startup, where I tackled the challenges of creating user interfaces
          for various IoT devices.
        </p>
        <p>
          This experience ignited my curiosity about the technical aspects,
          leading me to become a UX engineer at RBC AIOps team, a design
          engineer at Mintlify, and then Wealthsimple - my dream company making
          my favorite product. The design system team enabled me to fully
          leverage my multi-disciplinary skills. It also pushed me further with
          now React Native added to my stack.
        </p>
        <p>
          I write about my experiences as a design engineer, sharing insights
          and lessons learned along the way.
        </p>
        <a
          className="flex w-full items-center justify-center rounded-xl border border-gray-200 px-2 py-6 text-center hover:bg-gray-50"
          href="https://blog.rickyzhang.me"
          rel="noreferrer"
          target="_blank"
        >
          blog.rickyzhang.me
        </a>
      </div>
      <div className="prose w-full max-w-full rounded-2xl bg-white p-3 text-start md:p-8">
        <h2>What Drives Me</h2>
        <ol>
          <li>
            <strong>Ownership on problem areas:</strong> I love being the owner
            of a problem area - structuring the plans, and leading the way to a
            solution. A good degree of ownership creates strong motivation and
            sense of accomplishment.
          </li>
          <li>
            <strong>Creating impactful tools:</strong> I love empowering others.
            Creating better UX and DX for internal teams is exciting. One of my
            proudest achievements was creating Mosaic's design system that is
            still used till today.
          </li>
          <li>
            <strong>Seeing my work being used:</strong> I love to see my work
            being used by users or other designers/engineers, and making an
            impact. At the end, a great experience is only great when it's being
            used by others.
          </li>
          <li>
            <strong>Ambitious team that keep things simple:</strong> I love
            thinking about the big picture and where we could go next. Being
            free from corporate environment allows the team to look ahead,
            discover and solve problems without attrition.
          </li>
        </ol>
      </div>
    </PageLayout>
  );
};
