import React from 'react';
import styled from 'styled-components';
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ArrowCircle = styled.div`
    background-color: #E4E4E4;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopBtn = () => {
    return (
        <ArrowCircle>
            <IconButton aria-label="topbtn">
                <ArrowUpwardIcon size="small" />
            </IconButton>
        </ArrowCircle>      
    );
};

export default TopBtn;