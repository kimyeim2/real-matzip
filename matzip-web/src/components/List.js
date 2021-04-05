import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const ListBox = styled.div`
    width:770px;
    height:256px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`;

const List = () => {
    return (
        <ListBox>
            <ListItem />
            <ListItem />
            <ListItem />
        </ListBox>
    );
};

export default List;