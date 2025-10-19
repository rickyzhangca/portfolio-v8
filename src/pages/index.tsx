import { Mintlify } from "./mintlify/mintlify";
import { More } from "./more/more";
import { Mosaic } from "./mosaic/mosaic";
import { RBC } from "./rbc/rbc";
import { Swag } from "./swag/swag";
import { Wealthsimple } from "./wealthsimple/wealthsimple";
import { Why } from "./why/why";

export const Contents = {
  wealthsimple: <Wealthsimple />,
  mintlify: <Mintlify />,
  rbc: <RBC />,
  mosaic: <Mosaic />,
  why: <Why />,
  more: <More />,
  swag: <Swag />,
} as const;
