import React from 'react';
import { SearchingWrapper, FilterField } from 'components/SearchingFilter/SearchingFilter.styled';


export const SearchingFilter = ({onFilterField}) => {   

   

    return (
        <SearchingWrapper>
            Find contacts by Name
            <FilterField onChange={onFilterField}></FilterField>
        </SearchingWrapper>
    );
};

