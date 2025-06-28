import { CompanyNode } from '../company-node/company-node';
import logo from './ws-logo.webp';

export const WSNode = () => {
  return (
    // biome-ignore lint/nursery/useUniqueElementIds: is unique company node id
    <CompanyNode
      id="wealthsimple"
      company="Wealthsimple"
      logo={logo}
      time="2024 - Present"
      position="Design Engineer"
    />
  );
};
