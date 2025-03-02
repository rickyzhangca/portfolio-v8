import { CompanyNode } from '../CompanyNode/CompanyNode';
import logo from './MintlifyLogo.webp';

export const MintlifyNode = () => {
  return (
    <CompanyNode
      id="mintlify"
      company="Mintlify"
      logo={logo}
      time="2024"
      position="Design Engineer"
    />
  );
};
