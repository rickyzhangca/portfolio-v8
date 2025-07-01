import { useAtom } from 'jotai';
import { atoms } from '../../atoms';

export const SwagNode = () => {
  const [, setDisplayContent] = useAtom(atoms.displayContent);

  return (
    <button type="button" onClick={() => setDisplayContent('swag')}>
      <h1>Swag Node</h1>
    </button>
  );
};
