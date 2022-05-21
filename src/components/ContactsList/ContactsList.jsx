import React from 'react';
import { ContactsItem } from "components/ContactsItem/ContactsItem";



export const ContactsList = ({data}) => {

    return <ul>
        {
           data !== [] && data.map(item => {
                
                    return (
                        <ContactsItem key={item.id} 
                            id={item.id} 
                            name={item.name}
                            phone={item.phone}
                        />
                    )
               
              
            })
        }
    </ul>
};
