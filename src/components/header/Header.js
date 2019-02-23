/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Container from './style';

const getHeader = () => {
    if (document.location.hash.match('yokai'))
        return document.location.hash
            .split('/')[2]
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('_boss', '');
    return 'Yokaidex';
};

const Header = ({ onSetSidebarOpen }) => (
    <Container>
        {document.location.hash.match('yokai') ? (
            <div>
                <Link to="/home">
                    <FontAwesomeIcon icon="arrow-left" />
                </Link>
            </div>
        ) : (
            <div role="presentation" onClick={onSetSidebarOpen}>
                <FontAwesomeIcon icon="bars" />
            </div>
        )}
        <div>
            <h5>{getHeader()}</h5>
        </div>
    </Container>
);

export default Header;
