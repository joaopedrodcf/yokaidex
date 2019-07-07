import React from 'react';
import { withRouter } from 'react-router';
import Menu from 'react-feather/dist/icons/menu';
import ArrowLeft from 'react-feather/dist/icons/arrow-left';
import Container from './style';
import { withGameVersionContext, withSidebarContext } from '../../store';
import utils from '../utils';

function Header({ context, history }) {
    const goBack = () => {
        if (history.length > 2) {
            history.goBack();
        } else {
            history.push(`/yokai-watch-${context.gameVersion}`);
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

    const { handleSidebar, gameVersion } = context;

    return (
        <Container>
            {matchDeepLocations() ? (
                <div>
                    <div role="presentation" onClick={goBack}>
                        <ArrowLeft />
                    </div>
                </div>
            ) : (
                <div role="presentation" onClick={handleSidebar}>
                    <Menu />
                </div>
            )}
            <div>
                <h1>{getHeaderText(gameVersion)}</h1>
            </div>
        </Container>
    );
}

function areEqual(prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
}

export default withRouter(
    withGameVersionContext(withSidebarContext(React.memo(Header, areEqual)))
);
