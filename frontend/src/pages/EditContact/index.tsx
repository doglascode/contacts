import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { ContactFormData, ContactProps } from '../../types';
import FormModal from '../../components/FormModal';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

import contactsService from '../../services/contactsService';

interface ContactFormRefProps {
  setFieldsValues: (contact: ContactProps) => void;
}

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef<ContactFormRefProps>(null);

  const { id } = useParams() as { id: string };

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await contactsService.getContactById(id);

        setContactName(contact.name);
        contactFormRef.current?.setFieldsValues(contact);
        setIsLoading(false);
      } catch {
        history.back();
        setIsLoading(false);
      }
    }

    loadContact();
  }, [id]);

  async function handleFormSubmit(contactData: ContactFormData) {
    await contactsService.updateContact(id, contactData);
    history.back();
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <FormModal title={`Editar ${contactName}`}>
        <ContactForm
          ref={contactFormRef}
          buttonLabel="Editar Contato"
          onSubmit={handleFormSubmit}
        />
      </FormModal>
    </>
  );
}
