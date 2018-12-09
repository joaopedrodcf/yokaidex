import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './style';

const Header = () => (
    <Container>
        <FontAwesomeIcon icon="bars" />
        <h5>Yokaidex</h5>
    </Container>
);

export default Header;
