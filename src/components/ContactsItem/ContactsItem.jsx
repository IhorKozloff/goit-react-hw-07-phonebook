import React from 'react';
import PropTypes from 'prop-types';
import { ContactActionBtn, ContactItem, ContactNumber, ContactName  } from 'components/ContactsItem/ContactsItem.styled';
import { useRemoveContactMutation } from "Redux/contactsSlice";

export const ContactsItem = ({ id, name, phone }) => {

const [removeContact, { isLoading }] = useRemoveContactMutation();

    return (
        <ContactItem  key={id} id={id}>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{phone}</ContactNumber>
            <ContactActionBtn type="button" disabled={isLoading} onClick={() => {
               removeContact(id);
            }}>
                Delete
            </ContactActionBtn>
        </ContactItem >
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired, 
};