import React from 'react';
import { SearchingWrapper, FilterField } from 'components/SearchingFilter/SearchingFilter.styled';
import { useDispatch } from "react-redux";
import { setFilter } from 'Redux/Store';

export const SearchingFilter = () => {   

    const dispatch = useDispatch();

    const onFilterField = (event) => {
        dispatch(setFilter(event.target.value))
    };

    return (
        <SearchingWrapper>
            Find contacts by Name
            <FilterField onChange={onFilterField}></FilterField>
        </SearchingWrapper>
    );
};

