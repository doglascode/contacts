import { useState, useImperativeHandle, forwardRef } from 'react';

import { ContactProps } from '../../types';
import ContactIcon from '../../components/ContactIcon';
import FormField from '../FormField';
import Input from '../../components/Input';
import Button from '../../components/Button';

import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/userErrors';

interface FormProps {
  buttonLabel: string;
  onSubmit: (contactData: {
    name: string;
    email: string;
    phone: string;
    category: string;
    image?: File | string;
  }) => void;
}

interface FormRefProps {
  setFieldsValues: (contact: ContactProps) => void;
}

const apiServer = import.meta.env.VITE_API_SERVER;

export default forwardRef<FormRefProps, FormProps>((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState<string | File>('');
  const { setError, removeError, getMessageByFieldName } = useErrors();

  useImperativeHandle(ref, () => ({
    setFieldsValues: (contact: ContactProps) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setCategory(contact.category ?? '');
      setPhone(contact.phone ? formatPhone(contact.phone) : '');
      setImage(
        contact.imagePath ?
          `${apiServer}/uploads/${contact.imagePath}` :
          ''
      );
    }
  }), []);

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    setIsSubmitting(true);
    props.onSubmit({ name, email, phone, category, image });
    setIsSubmitting(false);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      return setError({
        field: 'email',
        message: 'Insira um email válido para o contato'
      });
    }

    removeError('email');
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);

    if (!event.target.value) {
      return setError({
        field: 'name',
        message: 'Insira um nome para o contato'
      });
    }

    removeError('name');
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.files?.[0] as File);
  }

  return (
    <form className="form" onSubmit={handleFormSubmit} ref={
      ref as React.LegacyRef<HTMLFormElement>
    }>
      <FormField error={getMessageByFieldName('name')}>
        <Input
          placeholder="Nome (obrigatório)"
          value={name}
          disabled={isSubmitting}
          onChange={handleNameChange}
        />
      </FormField>

      <FormField error={getMessageByFieldName('email')}>
        <Input
          placeholder="Email"
          value={email}
          disabled={isSubmitting}
          onChange={handleEmailChange}
        />
      </FormField>

      <FormField>
        <Input
          placeholder="Categoria"
          value={category}
          disabled={isSubmitting}
          onChange={handleCategoryChange}
        />
      </FormField>

      <FormField>
        <Input
          placeholder="Número"
          value={phone}
          maxLength={15}
          disabled={isSubmitting}
          onChange={handlePhoneChange}
        />
      </FormField>

      <FormField isLoading={isSubmitting}>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <ContactIcon name={name} image={image} size={32} />
      </FormField>

      <Button type="submit">{props.buttonLabel}</Button>
    </form>
  );
});
