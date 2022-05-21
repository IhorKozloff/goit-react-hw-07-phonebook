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
        const onAddContacts = async (contact) => {
            try {
                await addContact(contact);
            } catch (error) {
                console.log(error)
            }
        }



        if (existingContact) {
            alert(`${newContact.name} is already in contacts`);
        } else {
            onAddContacts(newContact)
        }

        return setNewContact('');
    },[addContact, data, newContact])


    return (
        <ContactsForm setNewContact={setNewContact}/>
    )
};