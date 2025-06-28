import { CompanyNode } from '../company-node/company-node';
import logo from './rbc-logo.webp';

export const RBCNode = () => {
  return (
    // biome-ignore lint/nursery/useUniqueElementIds: is unique company node id
    <CompanyNode
      id="rbc"
      company="RBC"
      logo={logo}
      time="2023 - 2024"
      position="UX Engineer"
    />
  );
};
