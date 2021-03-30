import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/contactForm';
import ContactList from 'components/ContactList/contactList';
import Filter from 'components/Filter/filter';
import s from 'app.module.css';
import Container from 'components/Container/container';
import { CSSTransition } from 'react-transition-group';
import logoTransition from 'logoTransition.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';
import { getLoading } from 'redux/contacts-selectors';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isloadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  },[dispatch])

    return (
      <Container>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={logoTransition}
        unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
          </CSSTransition>
     <ContactForm/>
        <Filter />
        {isloadingContacts && <h1>loading...</h1>}
        <ContactList/>
      </Container>
    );
  }



