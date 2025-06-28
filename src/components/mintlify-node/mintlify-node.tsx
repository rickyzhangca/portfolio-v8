import { CompanyNode } from '../company-node/company-node';
import logo from './mintlify-logo.webp';

export const MintlifyNode = () => {
  return (
    // biome-ignore lint/nursery/useUniqueElementIds: is unique company node id
    <CompanyNode
      id="mintlify"
      company="Mintlify"
      logo={logo}
      time="2024"
      position="Design Engineer"
    />
  );
};
