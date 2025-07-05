import { CompanyNode } from '../company-node/company-node';
import logo from './mosaic-logo.webp';

export const MosaicNode = () => {
  return (
    <CompanyNode
      company="Mosaic"
      id="mosaic"
      logo={logo}
      position="UX Designer"
      time="2020 - 2023"
    />
  );
};
