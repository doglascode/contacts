import ReactDOM from 'react-dom';
import { ContactFormData } from '../../types';

import FormModal from '../../components/FormModal';
import ContactForm from '../../components/ContactForm';

import contactsService from '../../services/contactsService';

export default function CreateContact() {
  async function handleFormSubmit(contactData: ContactFormData) {
    await contactsService.createContact(contactData);
    history.back();
  }

  return ReactDOM.createPortal(
    <FormModal title="Novo Contato">
      <ContactForm
        buttonLabel="Criar Contato"
        onSubmit={handleFormSubmit}
      />
    </FormModal>,
    document.getElementById('overlay') as HTMLElement
  );
}
