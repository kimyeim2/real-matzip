import React, { useState } from 'react';
import { IconButton } from "@material-ui/core";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = styled.input`
    border-color: transparent;
    width: 350px;
    height: 30px;
`;
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

    const [inputBox, setInputBox] = useState("");

    return (
        <>
            <SearchSec>
                <SearchBox 
                    onChange={(e) => {
                        setInputBox(e.target.value);
                    }}
                    placeholder="#홍대맛집"/>
                <IconButton 
                    aria-label="search" size="small">
                    <SearchIcon />
                </IconButton>
            </SearchSec>
        </>
    );
};

const ImgFeed = styled.div`
    position: absolute;
    margin-top: 330px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Search;