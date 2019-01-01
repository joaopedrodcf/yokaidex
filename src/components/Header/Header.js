import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Container from './style';

const Header = () => (
    <Container>
        <FontAwesomeIcon icon="bars" />
        <Link to="/">
            <h5>Yokaidex</h5>
        </Link>
    </Container>
);

export default Header;
