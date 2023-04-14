import ReactDOM from 'react-dom';

import { Overlay, Container, Actions } from './styles';
import Button from '../Button';

interface ModalProps {
  title: string;
  danger?: boolean;
  children?: React.ReactNode;
  visible: boolean;
  isLoading?: boolean;
  cancelLabel: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Modal(props: ModalProps) {
  const {
    children,
    visible,
    title,
    danger,
    cancelLabel,
    confirmLabel,
    isLoading,
    onCancel,
    onConfirm
  } = props;

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-content">
          {children}
        </div>

        <Actions>
          <Button
            type="button"
            disabled={isLoading}
            className="btn-cancel"
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>

          <Button
            type="button"
            isLoading={isLoading}
            className="btn-confirm"
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </Actions>
      </Container>
    </Overlay>,
    document.getElementById('overlay') as HTMLElement
  );
}
