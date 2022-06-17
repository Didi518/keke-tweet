import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Modale Commentaires</h1>
      {open && <h1>La modale est ouverte</h1>}
    </div>
  );
}
