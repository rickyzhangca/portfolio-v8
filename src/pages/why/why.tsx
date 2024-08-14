import { PageLayout } from '../../components/PageLayout';
import ricky from './ricky.webp';

export const Why = () => {
  return (
    <PageLayout>
      <h1 className="w-full text-center">Designer Who Codes</h1>
      <div className="flex w-full items-center justify-center">
        <img src={ricky} className="h-96 -rotate-6 rounded-xl shadow-xl" />
      </div>
      <section>
        <h2>My Journey: From UI/UX to Design Engineering</h2>
        <p>
          Hey there! I'm Ricky, a design engineer at Mintlify. My journey
          started as a UI/UX designer at Mosaic, a 3D printing startup, where I
          tackled the challenges of creating user interfaces for various IoT
          devices. This experience ignited my curiosity about the technical
          aspects, leading me to become a UX engineer at RBC AIOps team, and
          eventually, a design engineer at Mintlify.
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
        <h3>What Drives Me</h3>
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
            <strong>Pushing Boundaries:</strong> At RBC, I worked on AI-driven
            operations tools, reimagining traditional workflows with my hybrid
            approach.
          </li>
        </ol>
      </section>
      <section>
        <h2>How This Approach Helps Teams</h2>
        <h3>Bridging the Gap</h3>
        <p>
          As a design engineer, I act as a translator, helping both designers
          and engineers understand each other better.
        </p>
        <h3>Faster, Better, Stronger</h3>
        <ol>
          <li>
            <strong>Rapid Prototyping:</strong> My dual skill set allows me to
            quickly turn ideas into testable concepts.
          </li>
          <li>
            <strong>Quality Boost:</strong> I focus on details that make
            products feel polished, from smooth animations to efficient code.
          </li>
          <li>
            <strong>Tools and Systems:</strong> The design system I created
            became a valuable resource for both designers and developers.
          </li>
        </ol>
      </section>
      <section>
        <h2>Collaborative Workflow and Responsibilities</h2>
        <p>
          As a design engineer, my role bridges design and engineering,
          fostering collaboration throughout the product development process:
        </p>
        <ol>
          <li>
            <strong>Idea Validation and Prototyping:</strong> I work with
            designers to rapidly transform concepts into functional prototypes,
            considering both aesthetics and technical feasibility.
          </li>
          <li>
            <strong>Iterative Design Process:</strong> Collaborating in both
            Figma and code, I help push design boundaries while ensuring
            technical viability.
          </li>
          <li>
            <strong>Engineering Consultation:</strong> I advise on
            implementation costs, component reusability, and web-specific
            interactions.
          </li>
          <li>
            <strong>Quality Implementation:</strong> Working with engineers, I
            focus on creating reusable components, optimizing performance, and
            ensuring accessibility.
          </li>
          <li>
            <strong>Design Systems Development:</strong> I contribute to
            building cohesive design systems that streamline work for both
            designers and developers.
          </li>
        </ol>
        <p>
          This collaborative approach ensures that our final products not only
          look great but also perform exceptionally well, maintaining design
          integrity while proactively addressing technical challenges.
        </p>
      </section>
      <section>
        <h2>Sharing Knowledge and Giving Back</h2>
        <p>I'm passionate about helping others in the tech community. I've:</p>
        <ul>
          <li>
            Mentored professionals and students in various industry programs
          </li>
          <li>
            Judged design competitions like the Product Design Sprint at Western
            University
          </li>
          <li>Created Figma plugins used by over 15,000 people</li>
          <li>Published design resources accessed by 8,600 users</li>
        </ul>
      </section>
      <section>
        <h2>Learn more</h2>
        <p>
          Check out the projects I've contributed to in the rest of my
          portfolio! And don't hesitate to reach out if you'd like to chat about
          design engineering, design systems, or anything else.
        </p>
      </section>
    </PageLayout>
  );
};
