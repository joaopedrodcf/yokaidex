import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Menu from 'react-feather/dist/icons/menu';
import ArrowLeft from 'react-feather/dist/icons/arrow-left';
import { Wrapper } from './style';
import { GameVersionContext, SidebarContext } from '../../store';
import utils from '../utils';

// TODO: Can't be memo cause of useHistory
const Header = () => {
    const { handleSidebarOpen } = useContext(SidebarContext);
    const { gameVersion } = useContext(GameVersionContext);
    const history = useHistory();

    function goBack() {
        if (history.length > 2) {
            history.goBack();
        } else {
            history.push(`/yokai-watch-${gameVersion}`);
        }
    }

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
        <Wrapper>
            {matchDeepLocations() ? (
                <div role="presentation" onClick={goBack}>
                    <ArrowLeft />
                </div>
            ) : (
                <div role="presentation" onClick={handleSidebarOpen}>
                    <Menu />
                </div>
            )}
            <div>
                <h1>{getHeaderText(gameVersion)}</h1>
            </div>
        </Wrapper>
    );
};

export default Header;
