import { Image } from '../../components/Image';
import { PageLayout } from '../../components/PageLayout';
import auth from './auth.webp';
import chat from './chat.webp';
import editor from './editor.webp';
import support from './support.webp';

export const Mintlify = () => {
  return (
    <PageLayout>
      <h1>Mintlify</h1>
      <p>
        I joined Mintlify as a Product Designer in June 2024 and have shipped
        many new features and improvements. Here is a quick list of some of the
        projects I have worked on and shipped:
      </p>
      <div className="flex flex-col gap-4">
        <h3>New search & chat and Mintlify widget</h3>
        <Image src={chat} className="h-[520px] bg-gray-600 p-6" />
        <h3>Editor file tree</h3>
        <Image src={editor} className="h-[520px] bg-gray-600 p-6" />
        <h3>Refreshed auth and onboarding</h3>
        <Image src={auth} className="h-[520px] bg-gray-600 p-6" />
        <h3>Dashboard support form</h3>
        <Image src={support} className="h-[520px] bg-gray-600 p-6" />
      </div>
    </PageLayout>
  );
};
