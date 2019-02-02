import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Container from './style';

const getHeader = () => {
    if (document.location.hash.match('yokai'))
        return document.location.hash
            .split('/')[2]
            .replace('%20', ' ')
            .replace('_boss', '');
    return 'Yokaidex';
};

const Header = ({ onSetSidebarOpen }) => (
    <Container>
        {document.location.hash.match('yokai') ? (
            <Link to="/">
                <FontAwesomeIcon icon="arrow-left" />
            </Link>
        ) : (
            <FontAwesomeIcon icon="bars" onClick={onSetSidebarOpen} />
        )}
        <h5>{getHeader()}</h5>
    </Container>
);

export default Header;
