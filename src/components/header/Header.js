import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { withRouter } from 'react-router';
import Container from './style';
import utils from '../utils';

function Header({ onSetSidebarOpen, gameVersion, history }) {
    const goBack = () => {
        if (history.length > 2) {
            history.goBack();
        } else {
            history.push(`/yokai-watch-${gameVersion}`);
        }
    };

    const matchDeepLocations = () => {
        return history.location.pathname.split('/').length === 4;
    };

    const getHeaderText = () => {
        if (matchDeepLocations()) {
            return utils.capitalize(
                history.location.pathname
                    .split('/')[3]
                    .replace(/_/g, ' ')
                    .replace(/boss/g, '')
            );
        }

        if (history.location.pathname.split('/').length === 3)
            return utils.capitalize(history.location.pathname.split('/')[2]);

        return 'Yokaidex';
    };

    return (
        <Container>
            {matchDeepLocations() ? (
                <div>
                    <div role="presentation" onClick={goBack}>
                        <FontAwesomeIcon icon="arrow-left" />
                    </div>
                </div>
            ) : (
                <div role="presentation" onClick={onSetSidebarOpen}>
                    <FontAwesomeIcon icon="bars" />
                </div>
            )}
            <div>
                <h1>{getHeaderText(gameVersion)}</h1>
            </div>
        </Container>
    );
}

export default withRouter(Header);
