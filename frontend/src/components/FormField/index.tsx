import { Container } from './styles';
import Spinner from '../Spinner';

interface FormGroupProps {
  children: React.ReactNode;
  isLoading?: boolean;
  error?: string;
}

export default function FormGroup({ children, error, isLoading }: FormGroupProps) {
  return (
    <Container className="input-field">
      {children}

      {isLoading && (
        <div className="loader">
          <Spinner spinnerSize={10} />
        </div>
      )}

      {error && <small>{error}</small>}
    </Container>
  );
}
