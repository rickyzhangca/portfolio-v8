import { atom } from 'jotai';

const currentDraggingNode = atom<string>('');

export const atoms = {
  currentDraggingNode,
};
