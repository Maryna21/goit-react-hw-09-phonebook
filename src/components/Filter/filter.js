import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {CSSTransition } from 'react-transition-group';
import addTransition from 'components/ContactList/transitions/addTransition.module.css';
import s from 'components/Filter/filter.module.css';
import * as contactsAction from 'redux/contacts-actions';
import { getFilter } from 'redux/contacts-selectors';

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    const onChange = useCallback((e) => {
    dispatch(dispatch(contactsAction.changeFilter(e.target.value)))}, 
    [dispatch]);

    return (  
        <CSSTransition timeout={250} classNames={addTransition} appear={true}>
            <form className={s.filter}>
            <label className={s.label}>Find contacts by name</label>
                <input className={s.input} type="name" value={value} onChange={onChange} />
            </form>
            </CSSTransition>  
            
    )
}
Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
};


