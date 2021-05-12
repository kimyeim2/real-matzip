import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import styled from 'styled-components';
import TopBtn from './components/TopButton';
import Navbar from './components/Navbar';
import ListTwo from './components/list2';
import ListThree from './components/list3';
import sadCat from './sad-cat.png';

const ImgFeed = styled.div`
    position: absolute;
    width: 80vw;
    margin-top: 330px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;



function App() {

  const searching = document.getElementById('search-box');

  return (
    <>
      <Navbar />
      <Header />
      <Search />
    </>
  );
}

export default App;