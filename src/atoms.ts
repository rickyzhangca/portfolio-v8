import { atom } from 'jotai';
import { Contents } from './pages';

const currentDraggingNode = atom<string>('');
const displayContent = atom<keyof typeof Contents | null>(null);

export const atoms = {
  currentDraggingNode,
  displayContent,
};
