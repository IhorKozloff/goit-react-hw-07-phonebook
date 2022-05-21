import { useMemo, useState } from "react";
import { useGetContactsQuery } from "Redux/contactsSlice";


export const useFilteredContacts = () => {
    const { data } = useGetContactsQuery();
    const [filterValue, setfilterValue] = useState('');
  
    const filteredContacts = useMemo(() => {
      return data?.filter(item => item.name.toLowerCase().includes(filterValue)) ?? [];
    },[data, filterValue]);
  
    return {data, filterValue, setfilterValue, filteredContacts}
  
};