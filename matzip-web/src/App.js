import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import styled from 'styled-components';
import TopBtn from './components/TopButton';
import Navbar from './components/Navbar';

const ImgFeed = styled.div`
    position: absolute;
    margin-top: 330px;
`;

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <ImgFeed>
        <List />
        <List />
        <List />
      </ImgFeed>
    </>
  );
}

export default App;
