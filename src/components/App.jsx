import { AppWrapper } from "components/App.styled";
import { SearchBar} from "components/SearchBar/SearchBar";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchingFilter } from "./SearchingFilter/SearchingFilter";

import { useFilteredContacts } from 'Hooks/useFilteredContacts'




export const App = () =>  {

  const  {filterValue, setfilterValue, filteredContacts} = useFilteredContacts(); 

  return (
      <AppWrapper>
        <h1>Phonebook</h1>
        <SearchBar></SearchBar>
          
        <h1>Contacts</h1>

        <SearchingFilter onFilterField={setfilterValue}/>

        <ContactsList filterValue={filterValue} data={filteredContacts}/>
      </AppWrapper>
  );
};

