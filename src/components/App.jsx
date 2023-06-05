import { MdOutlineContactPhone } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';

import { Container, PageTitle, SectionTitle } from './App.module.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getContacts } from './API/API.js';

const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <PageTitle>
        Phonebook <MdOutlineContactPhone />
      </PageTitle>
      <ContactForm></ContactForm>

      {contacts.length !== 0 ? (
        <>
          <SectionTitle>
            Contacts <FcContacts></FcContacts>
          </SectionTitle>
          <Filter></Filter>
          <ContactList></ContactList>
        </>
      ) : (
        false
      )}
    </Container>
  );
};

export { App };
