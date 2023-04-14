import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ContactProps } from '../../types';
import {
  Header,
  Container,
  ContactsList,
  ContactSearchContainer,
  ContactNotFoundContainer,
  LoadingContainer,
  ErrorContainer
} from './styles';
import ContactCard from '../../components/ContactCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Modal from '../../components/Modal';

import contactsService from '../../services/contactsService';
import sad from '../../assets/images/sad.svg';

export default function Home() {
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contactToBeDeleted, setContactToBeDeleted] = useState<null | ContactProps>(null);
  const [isDeletingContact, setIsDeletingContact] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter(contact => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    try {
      setIsLoading(true);

      const contactsList = await contactsService.listContacts();

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  }

  function handleSearchContact(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  function handleCloseDeleteModal() {
    setIsModalVisible(false);
    setContactToBeDeleted(null);
  }

  async function handleShowDeleteModal(contact: ContactProps) {
    setIsModalVisible(true);
    setContactToBeDeleted(contact);
  }

  async function handleDeleteContact() {
    try {
      setIsDeletingContact(true);

      await contactsService.deleteContact(contactToBeDeleted!._id);

      setContacts(prevState => prevState.filter(
        contact => contact._id !== contactToBeDeleted?._id
      ));
    } catch { } finally {
      setIsDeletingContact(false);
      handleCloseDeleteModal();
    }
  }

  return (
    <>
      {contacts.length > 0 && (
        <ContactSearchContainer>
          <div className="search-contact">
            <Input
              placeholder="Pesquisar contato"
              value={searchTerm}
              onChange={event => handleSearchContact(event.target.value)}
            />
          </div>
        </ContactSearchContainer>
      )}

      <Modal
        danger
        title={`Tem certeza que quer excluir o contato ${contactToBeDeleted?.name}?`}
        confirmLabel="Confirmar"
        cancelLabel="Cancelar"
        visible={isModalVisible}
        isLoading={isDeletingContact}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleDeleteContact}
      >
        <p>Não é possível recuperar o contato após ser excluído!</p>
      </Modal>

      {isLoading && (
        <LoadingContainer>
          <Spinner spinnerSize={40} />
        </LoadingContainer>
      )}

      {!isLoading && hasError && (
        <ErrorContainer>
          <img src={sad} alt="Figura representando tristeza" />

          <div className="details">
            <h1>Ocorreu um erro ao obter os seus contatos</h1>
            <Button type="button" onClick={loadContacts}>
              Tentar Novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!isLoading && !hasError && (
        <Container>
          <Header>
            {contacts.length > 0 && (
              <h1>
                {contacts.length}
                {contacts.length === 1 ? ' contato' : ' contatos'}
              </h1>
            )}

            <Link to="/novo-contato">Adicionar Contato</Link>
          </Header>

          {contacts.length > 0 ? (
            filteredContacts.length > 0 ? (
              <ContactsList>
                {filteredContacts.map((contact) => (
                  <ContactCard
                    key={contact._id}
                    contact={contact}
                    onDelete={() => handleShowDeleteModal(contact)}
                  />
                ))}
              </ContactsList>
            ) : (
              <ContactNotFoundContainer>
                <span>
                  Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
                </span>
              </ContactNotFoundContainer>
            )
          ) : (
            <ContactNotFoundContainer>
              <h1>Você não tem nenhum contato!</h1>
              <span>Adicione um novo contato clicando no botão acima</span>
            </ContactNotFoundContainer>
          )}
        </Container>
      )}
    </>
  );
}
