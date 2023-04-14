import api from '../utils/api';

import { ContactFormData } from '../types';

class ContactsService {
  async listContacts() {
    const response = await api.get('/contacts');

    return response.data;
  }

  async getContactById(id: string) {
    const response = await api.get(`/contacts/${id}`);

    return response.data;
  }

  createContact(contact: ContactFormData) {
    const body = new FormData();

    Object.entries(contact).forEach(([key, value]) => {
      if (value) {
        body.append(key, value);
      }
    });

    return api.post('/contacts', body);
  }

  updateContact(id: string, contact: ContactFormData) {
    const body = new FormData();

    Object.entries(contact).forEach(([key, value]) => {
      if (value) {
        body.append(key, value);
      }
    });

    return api.put(`/contacts/${id}`, body);
  }

  deleteContact(id: string) {
    return api.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
