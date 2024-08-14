import { Mintlify } from './mintlify/Mintlify';
import { Mosaic } from './mosaic/Mosaic';
import { RBC } from './rbc/RBC';
import { Why } from './why/why';

export const Contents = {
  mintlify: <Mintlify />,
  rbc: <RBC />,
  mosaic: <Mosaic />,
  why: <Why />,
} as const;
