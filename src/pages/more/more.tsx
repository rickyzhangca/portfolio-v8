import { CodeBlock, dracula } from 'react-code-blocks';
import ReactPlayer from 'react-player';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Image } from '../../components/Image';
import { PageLayout } from '../../components/PageLayout';
import { PluginCard } from '../../components/PluginCard';
import afterMirror1 from './after-mirror-1.webp';
import afterMirror2 from './after-mirror-2.webp';
import afterMirror3 from './after-mirror-3.webp';
import beforeMirror from './before-mirror.webp';
import demo from './demo.webm';
import figKiwi from './fig-kiwi.webp';
import logo3 from './logo-3.webp';
import logo5 from './logo-5.webp';
import logo6 from './logo-6.webp';
import octiconsFigma from './octicons-figma.webp';
import octiconsNode from './octicons-node.svg';
import octiconsReact from './octicons-react.svg';
import octiconsWeb from './octicons-web.webp';
import summarySlides from './summary-slides.webp';
import twitterQuote from './twitter-quote.webp';

const FigKiwiToolbox = () => (
  <>
    <h2>fig-kiwi-toolbox</h2>
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
    <Image src={figKiwi} className="h-[560px] bg-gray-900 p-6" />
  </>
);

const MirrorActualSize = () => (
  <>
    <h2>Mirror Actual Size</h2>
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
    <PluginCard
      image={logo6}
      title="Mirror Actual Size"
      description="A Figma plugin that ensures content is displayed at its actual size when mirrored to a device."
      count="3.2k"
      href="https://www.figma.com/community/plugin/989887108667938748/mirror-actual-size"
    />
    <p>
      The Mirror Actual Size plugin has become an essential tool for us at
      Mosaic, and it has also gained over 3.2k installs on the Figma Community
      without any marketing efforts. It has proven to be a valuable addition to
      Figma Mirror, and we have received positive feedback from users who have
      tried it.
    </p>
    <div className="grid grid-cols-2 gap-2">
      <Image src={afterMirror1} />
      <Image src={afterMirror2} />
      <Image src={afterMirror3} className="col-span-2" />
    </div>
  </>
);

const Slides = () => (
  <>
    <h2>Slides</h2>
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
    <Image src={twitterQuote} />
    <p>
      To make Figma a more practical presentation solution, I created the Slides
      plugin. This plugin automatically adds or updates the forward and backward
      interactions to the frames that the user selects.
    </p>
    <PluginCard
      image={logo5}
      title="Slides"
      description="Add controls (interactive, of course) to the frames so you can
                use them as slides."
      count="11.3k"
      href="https://www.figma.com/community/plugin/1050766825375940133/slides"
    />
    <p>
      This saves time and ensures that the interactions are always up-to-date,
      even when slides are re-ordered. It makes Figma a more{' '}
      <b>practical presentation solution</b>. In 2024, Figma officially
      announced that the native Figma Slides. It has been a great ride!
    </p>
    <div className="not-prose overflow-hidden rounded-xl border border-gray-200 bg-white">
      <ReactPlayer
        playing
        loop
        muted
        url={demo}
        playbackRate={1.6}
        width="100%"
        height="100%"
      />
    </div>
  </>
);

const AppleSummarySlides = () => (
  <>
    <h2>Apple summary slides</h2>
    <p>
      In September 2019, Apple introduced a new visual language called Bento for
      use in their events, which is characterized by a series of well-organized
      summary slides. The design community has embraced this style, and many
      people have asked for a collection of these summary slides. In response to
      this demand, I created a collection of Bento summary slides that is
      accessible from both a web browser and Figma. This collection has allowed
      over 7K designers to easily access and get inspirations from the slides.
    </p>
    <PluginCard
      image={logo3}
      title="Apple summary slides"
      description="This file collects every single summary slide Apple used in
                their events."
      count="8.4k"
      label="View in Community"
      href="https://www.figma.com/community/file/1150817983915754582/all-apple-event-summary-slides-2019-2024"
    />
    <Image src={summarySlides} className="mt-4" />
    <p>And the community has loved it!</p>
    <div className="not-prose my-8 flex justify-center gap-3 rounded-xl border border-gray-200 bg-gray-100">
      <TwitterTweetEmbed tweetId={'1606746044867530753'} />
      <TwitterTweetEmbed tweetId={'1607124694288986112'} />
      <TwitterTweetEmbed tweetId={'1602588188467396609'} />
    </div>
  </>
);

const OcticonsExtended = () => (
  <>
    <h2>octicons-extended</h2>
    <p>
      As a side project, I created octicons-extended, a growing collection of
      icons that allows designers and developers to bring more variety to their
      use of octicons by GitHub.
    </p>
    <p>
      GitHub&apos;s original octicons inspired our{' '}
      <a
        href="http://rickyzhang.me/mosaicIcons"
        target="_blank"
        rel="noreferrer"
      >
        icon system refresh
      </a>{' '}
      at Mosaic, but we found that it has limited coverage because it is
      tailored to GitHub&apos;s specific needs. With octicons-extended, I aim to
      expand the icon selection and empower more users.
    </p>
    <div></div>
    <p>
      As a designer and developer, I believe that both groups should have easy
      access to octicons-extended and be able to use it in their work. To make
      it accessible to a wide audience, I have made it available in the Figma
      community, where it is organized and easy to use.
    </p>
    <p>
      I have also created a Node and React build, as well as a website that
      allows users to quickly access the full iconset and copy SVG files. By
      providing these tools, I hope to make octicons-extended a valuable
      resource for designers and developers alike.
    </p>
    <div className="not-prose my-8 grid grid-flow-row gap-2 md:grid-flow-col md:grid-cols-4 md:grid-rows-4">
      <Image className="col-span-4 row-span-2" src={octiconsWeb} />
      <Image
        href="https://www.figma.com/community/file/1150065417044869754/octicons-extended"
        className="col-span-3 row-span-2 p-4"
        src={octiconsFigma}
      />
      <a
        href="https://www.npmjs.com/package/octicons-extended"
        target="_blank"
        className="group relative flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-2 py-8 md:col-span-1 md:row-span-1"
      >
        <img className="size-20" src={octiconsNode} />
      </a>
      <a
        href="https://www.npmjs.com/package/octicons-extended-react"
        target="_blank"
        className="group relative flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-2 py-8 md:col-span-1 md:row-span-1"
      >
        <img className="size-20" src={octiconsReact} />
      </a>
    </div>
    <p>
      To reduce the friction of switching from octicons to octicons-extended,
      octicons-extended fully includes the original octicons and two packages
      share the same usage.
    </p>
    <div className="not-prose">
      <CodeBlock
        text={`// using original octicons 
import { ZapIcon } from '@primer/octicons-react';
// switching to octicons-extended 
import { ZapIcon } from 'octicons-extended-react';`}
        language={'javascript'}
        showLineNumbers
        theme={dracula}
      />
    </div>
    <p>
      What’s happening next? I have a concrete post-v1 plan, including adding
      more icons, supporting 16px variants, and setting up an automated
      build/release pipeline.
    </p>
  </>
);

export const More = () => {
  return (
    <PageLayout>
      <h1>My fun projects</h1>
      <FigKiwiToolbox />
      <MirrorActualSize />
      <Slides />
      <AppleSummarySlides />
      <OcticonsExtended />
    </PageLayout>
  );
};
