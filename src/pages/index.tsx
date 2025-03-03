import { Mintlify } from './mintlify/Mintlify';
import { More } from './more/more';
import { Mosaic } from './mosaic/Mosaic';
import { RBC } from './rbc/RBC';
import { Wealthsimple } from './wealthsimple/Wealthsimple';
import { Why } from './why/why';

export const Contents = {
  wealthsimple: <Wealthsimple />,
  mintlify: <Mintlify />,
  rbc: <RBC />,
  mosaic: <Mosaic />,
  why: <Why />,
  more: <More />,
} as const;
