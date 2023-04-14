import ReactDOM from 'react-dom';

import Spinner from '../Spinner';
import { Overlay } from './styles';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner spinnerSize={90} />
    </Overlay>,
    document.getElementById('loader') as HTMLElement
  );
}
