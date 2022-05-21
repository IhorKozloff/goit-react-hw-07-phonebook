import {ContactsForm} from 'components/Form/Form';
import { useAddContact } from 'Hooks/useAddContact';

export const SearchBar = () => {
    
    const { setNewContact } = useAddContact();

    return (
        <ContactsForm setNewContact={setNewContact}/>
    )
};