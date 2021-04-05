import React from 'react';
import { IconButton } from "@material-ui/core";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = styled.input`
    border-color: transparent;
    width: 350px;
    height: 30px;
`;
/*width: 350px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #707070;
    padding-left: 20px;
    */
const SearchBtn = styled.button`
    border-color: transparent;
    background-color: white;
`;
/*
    width: 57px;
    height: 35px;
    background-color: #D6EAF8;
    border: 1px solid transparent;
    box-shadow: 0px 2px 3px #707070;
    border-radius: 11px;
    margin-left: 10px;
    font-family: 'SDSamliphopangche_Basic';
    font-size: 15px;*/

const SearchSec = styled.div`
  position: absolute;
  padding-left: 17px;
  padding-right: 10px;
  margin-top: 200px;
  display: flex;
  align-items: center;
  border: 1px solid #707070;
  border-radius: 12px;
`;

const Search = () => {
    return (
        <SearchSec>
            <SearchBox placeholder="#홍대맛집"/>
            <IconButton aria-label="search" size="small">
                <SearchIcon />
            </IconButton>
        </SearchSec>
    );
};

export default Search;