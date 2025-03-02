import { CompanyNode } from '../CompanyNode';
import logo from './RBCLogo.webp';

export const RBCNode = () => {
  return (
    <CompanyNode
      id="rbc"
      company="RBC"
      logo={logo}
      time="2023 - 2024"
      position="UX Engineer"
    />
  );
};
