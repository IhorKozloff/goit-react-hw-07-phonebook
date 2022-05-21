import {ContactsForm} from 'components/Form/Form';
import React, { useState, useEffect } from "react";
import { useGetContactsQuery, useAddContactMutation } from "Redux/contactsSlice";

export const SearchBar = () => {
    const [newContact, setNewContact] = useState('');
    const { data } = useGetContactsQuery('', {skip: newContact === ''});


    const [addContact] = useAddContactMutation();


    useEffect(() => {
        if (!data || newContact === '') {
            return
        }

        const existingContact = data.find(item => item.name.toLowerCase() === newContact.name.toLowerCase())

        if (existingContact) {
            alert(`${newContact.name} is already in contacts`);
        } else {
            try {
                addContact(newContact);
            } catch (error) {
                console.log(error)
            }
        }

        return setNewContact('');
    },[addContact, data, newContact])


    return (
        <ContactsForm setNewContact={setNewContact}/>
    )
};