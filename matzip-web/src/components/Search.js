import React, { useState } from 'react';
import { IconButton } from "@material-ui/core";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ListThree from './list3';
import sadCat from '../sad-cat.png';
import kkobook from '../kkobookchip.png';

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
    const [feedList, setFeedList] = useState([]);

    const removeSpace = (string) => {
        return string.replace(/ /g, '');
    }

    const clearFeed = (elementID) => {
        if (document.getElementById('welcome').innerHTML!=null) {
            document.getElementById('welcome').innerHTML = "";
        }
    }

    const onclick = ()  => {
        if (inputBox != 0) {
            clearFeed('welcome');
            setFeedList([
                <ListThree keyword={inputBox} />
            ]);
            localStorage.clear();
            localStorage.setItem('keyword', inputBox);
        }
    }

    return (
        <>
            <SearchSec>
                <SearchBox id="search-box" 
                    onChange={(e) => {
                        setInputBox(e.target.value);
                    }}
                    placeholder="#홍대맛집"/>
                <IconButton 
                    aria-label="search" size="small"
                    onClick={(e) => {
                        onclick();
                    }}
                    >
                    <SearchIcon />
                </IconButton>
            </SearchSec>
            <ImgFeed id="welcome">
                <h2>어 서 오 세 요 ・ ・ ・</h2>
                <img src={kkobook} width="200" height="200" />
            </ImgFeed>
            <ImgFeed id="imgFeed">
                {feedList}
            </ImgFeed>
        </>
    );
};

const ImgFeed = styled.div`
    position: absolute;
    width: 80vw;
    margin-top: 330px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Search;