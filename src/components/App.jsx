import { AppWrapper } from "components/App.styled";
import { SearchBar} from "components/SearchBar/SearchBar";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchingFilter } from "./SearchingFilter/SearchingFilter";
import { useState } from "react";
import { useGetContactsQuery } from "Redux/contactsSlice";


export const App = () =>  {

  const { data } = useGetContactsQuery()
 
  const [filterValue, setfilterValue] = useState('');

  const onFilterField = (event) => {
      console.log(event.target.value)
      setfilterValue(event.target.value.toLowerCase())
  };

  return (
      <AppWrapper>
        <h1>Phonebook</h1>
        <SearchBar></SearchBar>
          
        <h1>Contacts</h1>

        <SearchingFilter onFilterField={onFilterField}/>

        <ContactsList filterValue={filterValue} data={data}/>
      </AppWrapper>
  );
};

