import React from 'react';
import styled from 'styled-components';
import { IconButton } from "@material-ui/core";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const Nav = styled.div`
    width: 100vw;
    height: 40px;
    position: fiexd;
    padding-left: 30px;
    background: white;
    box-shadow: 0px 3px 4px #707070;
    display: flex;
    align-items: center;
`;

const Navbar = () => {
    return (
        <Nav>
            <IconButton>
                <HomeRoundedIcon />
            </IconButton>
        </Nav>
    );
};

export default Navbar;