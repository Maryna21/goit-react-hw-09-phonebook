import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import s from 'components/ContactList/contactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import  addTransition from 'components/ContactList/transitions/addTransition.module.css';
import Cross from 'svg/cross';
import contactsOperations from 'redux/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts-selectors';

// const mapStateToProps = (state) => ({
// contacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
// });

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

const onDeleteContact = useCallback(
    (id) => dispatch(contactsOperations.deleteContact(id)),
    [dispatch]
  )
 
    return (
      <TransitionGroup component="ul" className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={addTransition} appear={true} unmountOnExit>
            <li className={s.item}>
              <div>{name}</div>
              <div className={s.number}>{number}</div>
              <button className={s.buttonDelete} type="button" onClick={()=> onDeleteContact(id)}><Cross />
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    }),
  )
};







