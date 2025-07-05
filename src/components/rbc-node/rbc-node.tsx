import { CompanyNode } from '../company-node/company-node';
import logo from './rbc-logo.webp';

export const RBCNode = () => {
  return (
    <CompanyNode
      company="RBC"
      id="rbc"
      logo={logo}
      position="UX Engineer"
      time="2023 - 2024"
    />
  );
};
