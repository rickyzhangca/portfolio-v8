import { CompanyNode } from '../company-node/company-node';
import logo from './mosaic-logo.webp';

export const MosaicNode = () => {
  return (
    // biome-ignore lint/nursery/useUniqueElementIds: is unique company node id
    <CompanyNode
      id="mosaic"
      company="Mosaic"
      logo={logo}
      time="2020 - 2023"
      position="UX Designer"
    />
  );
};
