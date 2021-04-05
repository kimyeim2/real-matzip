import React from 'react';
import styled from 'styled-components';
import imgfile from '../kkobookchip.png';

const ImgItem = styled.img`
    width: 256px;
    height: 256px;
    border: 1px solid #707070;
    margin-right: 2px;
`;

const ListItem = () => {
    return (
        <ImgItem src={imgfile}/>
    );
};

export default ListItem;