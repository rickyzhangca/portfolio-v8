import { CompanyNode } from '../CompanyNode';
import logo from './MosaicLogo.webp';

export const MosaicNode = () => {
  return (
    <CompanyNode
      id="mosaic"
      company="Mosaic"
      logo={logo}
      time="2020 - 2023"
      position="UX Designer"
    />
  );
};
