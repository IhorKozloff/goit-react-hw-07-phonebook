import {ContactsForm} from 'components/Form/Form';

import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addContacts } from 'Redux/Store';


export const SearchBar = () => {

    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState('');


    useEffect(() => {
        if (newContact === '') {
            return
        }
        dispatch(addContacts(newContact))
    },[dispatch, newContact]);

    return (
        <ContactsForm setNewContact={setNewContact}/>
    )
};