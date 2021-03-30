import PropTypes from 'prop-types';
import shortid from 'shortid';
import React, { useState, useCallback } from 'react';
import s from 'components/ContactForm/contactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';
import Error from 'components/Error/error';
import { getAllContacts, getName } from 'redux/contacts-selectors';
// import { toast } from 'react-toastify';

// const mapStateToProps = (state) => ({
//   contacts: getAllContacts(state),
// });
         
// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ name, number }) => dispatch(contactsOperations.addContact({ name, number})),
// });

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

   const loginInputId = shortid.generate();
   
  const handleNameChange = useCallback(
    event => {
    setName(event.currentTarget.value);
  }, []);

  const handleNumberChange = useCallback(
    event => {
    setNumber(event.currentTarget.value);
  },[]);

  const handleSubmit = event => {
      event.preventDefault();
  
      if (contacts.find(contact => contact.name === name)) {
      
        setError(true)
    
        return setTimeout(() => setError(false), 500);
       }
      dispatch(contactsOperations.addContact({ name, number }))
      setName('');
    setNumber('');
    };
 
    return (
              <>
              <form className={s.contactForm}
                onSubmit={handleSubmit}>
                <label className={s.labelForm} htmlFor={loginInputId}>Name</label>
                <input className={s.inputForm} type="text" name="name" id={loginInputId} value={name} onChange={handleNameChange}/>
                <label className={s.labelForm} htmlFor={loginInputId}>Number</label>
                <input className={s.inputForm}  type="tel" name="number" id={loginInputId} value={number} onChange={handleNumberChange}/>
                <button className={s.buttonContactForm} type="submit">Add contact</button>
              </form>
              { error && <Error /> } 
    </>
            );
          }

          ContactForm.propTypes = {
            handleSubmit: PropTypes.func,
            onAddContact: PropTypes.func,
            loginInputId: PropTypes.func,
            name: PropTypes.string,
            number: PropTypes.number,
          };


  
