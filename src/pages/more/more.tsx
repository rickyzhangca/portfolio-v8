import ReactPlayer from 'react-player';
import { Tweet } from 'react-tweet';
import { HeaderCard, ProjectCard } from '../../components';
import { FigmaCard } from '../../components/FigmaCard';
import { Image } from '../../components/Image';
import { PageLayout } from '../../components/PageLayout';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  type BundledLanguage,
} from '../../components/ui/kibo-ui/code-block';
import afterMirror1 from './after-mirror-1.webp';
import afterMirror2 from './after-mirror-2.webp';
import afterMirror3 from './after-mirror-3.webp';
import beforeMirror from './before-mirror.webp';
import demo from './demo.webm';
import figKiwi from './fig-kiwi.webp';
import fprints from './fprints.webp';
import kiboUI from './kibo-ui.mov';
import logo0 from './logo-0.webp';
import logo1 from './logo-1.webp';
import logo2 from './logo-2.webp';
import logo3 from './logo-3.webp';
import logo4 from './logo-4.webp';
import logo5 from './logo-5.webp';
import logo6 from './logo-6.webp';
import logo7 from './logo-7.webp';
import logo8 from './logo-8.webp';
import logo9 from './logo-9.webp';
import octiconsFigma from './octicons-figma.webp';
import octiconsWeb from './octicons-web.webp';
import paopaoLogo from './paopao-logo.svg';
import paopao from './paopao.webp';
import spellbook from './spellbook.webp';
import summarySlides from './summary-slides.webp';
import svgoui from './svgoui.webp';
import twitterQuote from './twitter-quote.webp';

const KiboUI = () => (
  <ProjectCard logo={logo8} title="Kibo UI" status="Active">
    <p>
      I love design engineering, design systems and building components. So I'm
      enjoying creating components for the open source component library{' '}
      <a href="https://www.kibo-ui.com/" target="_blank" rel="noreferrer">
        Kibo UI
      </a>{' '}
      created by Vercel's engineer{' '}
      <a
        href="https://twitter.com/haydenbleasel"
        target="_blank"
        rel="noreferrer"
      >
        Hayden Bleasel
      </a>
      . More to come!
    </p>
    <div className="not-prose relative overflow-hidden rounded-xl border border-gray-200">
      <div className="absolute h-full w-full border border-white" />
      <ReactPlayer
        playing
        loop
        muted
        src={kiboUI}
        controls
        width="100%"
        height="auto"
      />
    </div>
  </ProjectCard>
);

const SVGOUI = () => (
  <ProjectCard logo={logo7} image={svgoui} title="SVGOUI" status="Maintaining">
    <p>
      When building the credit card component for Kibo UI, I had to deal with a
      number of credit card network icon SVGs. So I build a UI for SVGO to
      optimize them so I can publish them to{' '}
      <a
        href="https://www.npmjs.com/package/react-card-network-icons"
        target="_blank"
        rel="noreferrer"
      >
        <code className="rounded-lg bg-gray-200 p-1.5">
          react-card-network-icons
        </code>
      </a>
      .
    </p>
    <p>
      SVGOUI is a UI for SVG optimizer tool{' '}
      <a href="https://github.com/svg/svgo" target="_blank" rel="noreferrer">
        SVGO
      </a>
      . Comparing to the predecessor{' '}
      <a
        href="https://github.com/interlace-app/svgui"
        target="_blank"
        rel="noreferrer"
      >
        SVGOMG
      </a>
      , it runs on newer SVGO core and modern front-end stacks, has a more
      friendly UI, and packs a number of quality of life features.
    </p>
    <p>
      You can try it out{' '}
      <a href="https://svgoui.pages.dev/" target="_blank" rel="noreferrer">
        here
      </a>
      .
    </p>
  </ProjectCard>
);

const Spellbook = () => (
  <ProjectCard logo={logo4} image={spellbook} title="Spellbook" status="Active">
    <p>
      ChatGPT 4o's image generation capability had a huge leap forward in early
      2025. It is better than ever on understanding prompts and adhering to
      instructions (that is written in natural language).
    </p>
    <p>
      So I created{' '}
      <a href="https://spellbook.space" target="_blank" rel="noreferrer">
        Spellbook
      </a>
      . A platform for people to share and grab prompts that really work -
      guaranteed to reliably generate images in a well defined style for any
      given subject.
    </p>
  </ProjectCard>
);

const Fprints = () => (
  <ProjectCard
    logo={logo1}
    image={fprints}
    title="Fprints"
    status="Maintaining"
  >
    <p>
      <a
        href="https://store.steampowered.com/app/427520/Factorio/"
        target="_blank"
        rel="noreferrer"
      >
        Factorio
      </a>{' '}
      is a factory-building game where you design and build your own factories.
      Players can build complex layouts and share via encoded strings -
      blueprints.
    </p>
    <p>
      I created{' '}
      <a href="https://fprints.xyz" target="_blank" rel="noreferrer">
        Fprints
      </a>
      . A platform where players can publish their blueprints and find
      inspiration from others. It now has over 152K visits, 550+ users, and
      stores nearly 400 blueprints.
    </p>
  </ProjectCard>
);

const FigKiwiToolbox = () => (
  <ProjectCard
    logo={logo9}
    image={figKiwi}
    title="fig-kiwi-toolbox"
    status="Archived"
  >
    <p>
      In 2023, I had a vision of creating a tool that would help both designers
      and developers to make and maintain design system. Due to the closed
      ecosystem in Figma's nature, the first step I took was to crack how Figma
      encodes and decodes the data. So people can easily import/export/copy &
      paste component between tools.
    </p>
    <p>
      And{' '}
      <a
        href="https://github.com/interlace-app/fig-kiwi-toolbox"
        target="_blank"
        rel="noreferrer"
      >
        fig-kiwi-toolbox
      </a>{' '}
      was born. It reads and decodes the Figma data you have in the clipboard
      into JSON. The toolbox is greatly inspired by Sketch team's Figma file
      importer and have inspired many other developers on Reddit.
    </p>
  </ProjectCard>
);

const MirrorActualSize = () => (
  <ProjectCard logo={logo6} title="Mirror Actual Size" status="Maintaining">
    <p>
      <a href="https://www.figma.com/mirror" target="_blank" rel="noreferrer">
        Figma Mirror
      </a>{' '}
      is a useful tool for previewing and interacting with designs, but it has a
      major limitation: it always scales the content to fit the screen. This can
      be problematic when designing for IoT devices with different screen sizes,
      or when creating print materials. At Mosaic, we encountered this problem
      regularly, which made it difficult to properly prototype and test our
      designs.
    </p>
    <Image src={beforeMirror} />
    <p>
      To solve this issue, I created the Mirror Actual Size plugin for Figma.
      This plugin adds a wrapper to the content, which ensures that it is
      displayed at its actual size when mirrored to a device. For example, a
      business card will be shown at its actual size of 3.5" x 2.0" on an iPad,
      rather than being scaled to fill the screen.
    </p>
    <FigmaCard
      image={logo6}
      title="Mirror Actual Size"
      description="A Figma plugin that ensures content is displayed at its actual size when mirrored to a device."
      count="3.8k"
      href="https://www.figma.com/community/plugin/989887108667938748/mirror-actual-size"
    />
    <p>
      The Mirror Actual Size plugin has become an essential tool for us at
      Mosaic, and it has also gained over 3.2k installs on the Figma Community
      without any marketing efforts. It has proven to be a valuable addition to
      Figma Mirror, and we have received positive feedback from users who have
      tried it.
    </p>
    <div className="grid grid-cols-2 rounded-2xl border border-gray-200">
      <img src={afterMirror1} className="not-prose" />
      <img src={afterMirror2} className="not-prose" />
      <img src={afterMirror3} className="not-prose col-span-2" />
    </div>
  </ProjectCard>
);

const Slides = () => (
  <ProjectCard logo={logo5} title="Slides" status="Archived">
    <p>
      Many designers{' '}
      <a href="https://www.figma.com/mirror" target="_blank" rel="noreferrer">
        create slide decks with Figma
      </a>{' '}
      , including myself. However, one limitation of Figma is that it does not
      have built-in controls for advancing or going back through the slides.
      This means that designers have to manually add these interactions, which
      can be time-consuming, especially for decks with many slides. Furthermore,
      when slides are re-ordered, it is easy to forget to update the
      interactions, which can lead to problems when presenting.
    </p>
    <Image src={twitterQuote} className="h-64" />
    <p>
      To make Figma a more practical presentation solution, I created the Slides
      plugin. This plugin automatically adds or updates the forward and backward
      interactions to the frames that the user selects.
    </p>
    <FigmaCard
      image={logo5}
      title="Slides"
      description="Add controls (interactive, of course) to the frames so you can
                use them as slides."
      count="13.0k"
      href="https://www.figma.com/community/plugin/1050766825375940133/slides"
    />
    <p>
      This saves time and ensures that the interactions are always up-to-date,
      even when slides are re-ordered. It makes Figma the most{' '}
      <b>practical presentation solution</b>. In 2024, Figma officially
      announced that the native Figma Slides (and broke Slides...). It has been
      a great ride!
    </p>
    <div className="not-prose overflow-hidden rounded-xl border border-gray-200 bg-white">
      <ReactPlayer
        playing
        loop
        muted
        src={demo}
        playbackRate={1.6}
        width="100%"
        height="100%"
      />
    </div>
  </ProjectCard>
);

const AppleSummarySlides = () => (
  <ProjectCard logo={logo3} title="Apple summary slides" status="Active">
    <p>
      In September 2019, Apple introduced a new visual language called Bento for
      use in their events, which is characterized by a series of well-organized
      summary slides. The design community has embraced this style, and many
      people have asked for a collection of these summary slides.
    </p>
    <p>
      In response to this demand, I created a collection of Bento summary slides
      that is accessible on <a>web</a> and Figma. This collection has allowed
      over 14K designers and 30K visitors to easily access and get inspirations
      from the slides.
    </p>
    <FigmaCard
      image={logo3}
      title="Apple summary slides"
      description="This file collects every single summary slide Apple used in
                their events."
      count="14.6k"
      label="View in Community"
      href="https://www.figma.com/community/file/1150817983915754582/all-apple-event-summary-slides-2019-2024"
    />
    <img
      src={summarySlides}
      className="mt-4 rounded-xl border border-gray-200"
    />
    <p>And the community has loved it!</p>
    <div className="not-prose my-8 flex justify-center gap-3 rounded-xl border border-gray-200 bg-gray-100 px-4">
      <Tweet id="1606746044867530753" />
      <Tweet id="1607124694288986112" />
      <Tweet id="1610783724672618496" />
    </div>
  </ProjectCard>
);

const OcticonsExtended = () => (
  <ProjectCard logo={logo0} title="Octicons Extended" status="Archived">
    <p>
      As a side project, I created octicons-extended, a growing collection of
      icons that allows designers and developers to bring more variety to their
      use of octicons by GitHub.
    </p>
    <p>
      GitHub&apos;s original octicons inspired our{' '}
      <a href="https://old.rickyzhang.me/" target="_blank" rel="noreferrer">
        icon system refresh
      </a>{' '}
      at Mosaic, but we found that it has limited coverage because it is
      tailored to GitHub&apos;s specific needs. With octicons-extended, I aim to
      expand the icon selection and empower more users.
    </p>
    <p>
      As a designer and developer, I believe that both groups should have easy
      access to octicons-extended and be able to use it in their work. To make
      it accessible to a wide audience, I have made it available in the Figma
      community, where it is organized and easy to use.
    </p>
    <Image src={octiconsFigma} autoHeight />
    <p>
      I have also created a Node and React build, as well as a website that
      allows users to quickly access the full iconset and copy SVG files. By
      providing these tools, I hope to make octicons-extended a valuable
      resource for designers and developers alike.
    </p>
    <Image src={octiconsWeb} autoHeight />
    <p>
      To reduce the friction of switching from octicons to octicons-extended,
      octicons-extended fully includes the original octicons and two packages
      share the same usage.
    </p>
    <div className="not-prose overflow-hidden rounded-lg">
      <CodeBlock
        data={[
          {
            code: `// using original octicons 
import { ZapIcon } from '@primer/octicons-react';
// switching to octicons-extended 
import { ZapIcon } from 'octicons-extended-react';`,
            language: 'typescript',
            filename: 'my-component.tsx',
          },
        ]}
        defaultValue="typescript"
      >
        <CodeBlockHeader>
          <CodeBlockFiles>
            {(item) => (
              <CodeBlockFilename key={item.language} value={item.language}>
                {item.filename}
              </CodeBlockFilename>
            )}
          </CodeBlockFiles>
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem key={item.language} value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    </div>
  </ProjectCard>
);

const Paopao = () => (
  <ProjectCard
    logo={logo2}
    title="Paopao Stickers"
    image={paopao}
    status="Maintaining"
  >
    <p>
      The Paopao stickers are a popular and well-known set of stickers in
      mainland China, and they have been used to create countless memes.
      However, they were only available at a low resolution of 32x32 until...
    </p>
    <p>
      I vectorized each single Paopao sticker with vector tools in Figma! It
      enables us to remix for even more funny memes. Users can duplicate the
      stickers in the Figma Community or{' '}
      <a
        href="https://t.me/addstickers/tieba_paopao/"
        target="_blank"
        rel="noreferrer"
      >
        add the sticker set to Telegram
      </a>
    </p>
    <FigmaCard
      title="Paopao Stickers"
      description="A collection of 50 vectorized Paopao stickers"
      label="View in Community"
      image={paopaoLogo}
      count="585"
      href="https://www.figma.com/community/file/1070232689050503920"
    />
  </ProjectCard>
);

export const More = () => {
  return (
    <PageLayout>
      <HeaderCard
        title="My fun projects"
        subtitle="I spent most of my free time on side projects that speak for my passion. It's a way to build without constraints from work, and a freedom to explore latest ideas and techs."
      />
      <div className="flex flex-col gap-2">
        <KiboUI />
        <SVGOUI />
        <Spellbook />
        <Fprints />
        <FigKiwiToolbox />
        <AppleSummarySlides />
        <MirrorActualSize />
        <Slides />
        <OcticonsExtended />
        <Paopao />
      </div>
    </PageLayout>
  );
};
