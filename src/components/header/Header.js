/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { withRouter } from 'react-router';
import Container from './style';

const getHeader = gameVersion => {
    if (
        document.location.hash.match(`/equipments/`) ||
        document.location.hash.match(`/items/`)
    ) {
        return document.location.hash
            .split('/')[3]
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('_boss', '');
    }

    if (document.location.hash.match(`/yokai-watch-${gameVersion}/`))
        return document.location.hash
            .split('/')[2]
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('%20', ' ')
            .replace('_boss', '');

    return 'Yokaidex';
};

function Header(props) {
    const { onSetSidebarOpen, gameVersion, history } = props;

    return (
        <Container>
            {document.location.hash.match(`/yokai-watch-${gameVersion}/`) ? (
                <div>
                    <div role="presentation" onClick={history.goBack}>
                        <FontAwesomeIcon icon="arrow-left" />
                    </div>
                </div>
            ) : (
                <div role="presentation" onClick={onSetSidebarOpen}>
                    <FontAwesomeIcon icon="bars" />
                </div>
            )}
            <div>
                <h1>{getHeader(gameVersion)}</h1>
            </div>
        </Container>
    );
}

export default withRouter(Header);
