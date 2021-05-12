import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    font-size: 48px;
    width: 200px;
    height: 100px;
    text-align: center;
    position: absolute;
    margin-top: 100px;
`;

const Header = () => {
    return (
        <Banner>
            진짜 맛집
        </Banner>
    );
};

export default Header;