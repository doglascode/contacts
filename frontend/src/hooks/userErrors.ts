import { useState } from 'react';

interface ErrorProps {
  field: string;
  message: string;
}

export default function useErrors() {
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  function setError({ field, message }: ErrorProps) {
    const errorAlreadyExists = errors.find(error => error.field === field);

    if (!errorAlreadyExists) {
      setErrors(prevState => [...prevState, { field, message }]);
    }
  }

  function removeError(field: string) {
    setErrors(prevState => prevState.filter(error => error.field !== field));
  }

  function getMessageByFieldName(field: string) {
    return errors.find(error => error.field === field)?.message;
  }

  return { errors, setError, removeError, getMessageByFieldName };
}
