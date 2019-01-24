import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Container from './style';

const getHeader = () => {
    if (document.location.hash.match('yokai'))
        return document.location.hash.split('/')[2];
    return 'Yokaidex';
};

const getIcon = () => {
    if (document.location.hash.match('yokai')) return 'arrow-left';
    return 'bars';
};

const Header = () => (
    <Container>
        <Link to="/">
            <FontAwesomeIcon icon={getIcon()} />
            <h5>{getHeader()}</h5>
        </Link>
    </Container>
);

export default Header;
