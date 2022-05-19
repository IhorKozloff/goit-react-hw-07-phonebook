import { SearchBar} from "components/SearchBar/SearchBar";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchingFilter } from "./SearchingFilter/SearchingFilter";
import { useDispatch } from "react-redux";
import { removeContact } from 'Redux/Store';

export const App = () =>  {


  const dispatch = useDispatch();

  const onDeleteContact = (delitingTargetId) => {
    dispatch(removeContact(delitingTargetId))
  };

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBar></SearchBar>
        
      <h1>Contacts</h1>

      <SearchingFilter/>

      <ContactsList onDeleteContact={onDeleteContact}/>
        
    </>
    
  );
};

