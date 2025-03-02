import { CompanyNode } from '../CompanyNode';
import logo from './WealthsimpleLogo.webp';

export const WSNode = () => {
  return (
    <CompanyNode
      id="wealthsimple"
      company="Wealthsimple"
      logo={logo}
      time="2024 - Present"
      position="Design Engineer"
    />
  );
};
