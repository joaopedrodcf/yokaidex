import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { withRouter } from 'react-router';
import Container from './style';

function Header({ onSetSidebarOpen, gameVersion, history }) {
    const goBack = () => {
        if (history.length > 2) {
            history.goBack();
        } else {
            history.push(`/yokai-watch-${gameVersion}`);
        }
    };

    const matchDeepLocations = () => {
        return (
            history.location.pathname.match(`/yokais/`) ||
            history.location.pathname.match(`/items/`) ||
            history.location.pathname.match(`/equipments/`)
        );
    };

    const getHeaderText = () => {
        if (matchDeepLocations()) {
            return history.location.pathname
                .split('/')[3]
                .replace('%20', ' ')
                .replace('%20', ' ')
                .replace('%20', ' ')
                .replace('_boss', '');
        }

        if (history.location.pathname.match(`/yokai-watch-${gameVersion}/`))
            return history.location.pathname
                .split('/')[2]
                .replace('%20', ' ')
                .replace('%20', ' ')
                .replace('%20', ' ')
                .replace('_boss', '');

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
