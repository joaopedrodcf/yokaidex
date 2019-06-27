import React, { Component } from 'react';
import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import utils from '../components/utils';

// eslint-disable-next-line func-names
const getState = function(gameVersion, changeGameVersion) {
    return { gameVersion, changeGameVersion };
};

const memoizedGetState = memoize(getState);

export const GameVersionContext = React.createContext();

export function withGameVersionContext(Element) {
    return genericWrapperComponent(GameVersionContext, Element);
}

class GameVersionProvider extends Component {
    constructor(props) {
        super(props);

        this.changeGameVersion = gameVersion => {
            this.setState({ gameVersion });
        };

        this.state = {
            gameVersion: utils.getGameVersion(),
            changeGameVersion: this.changeGameVersion
        };
    }

    render() {
        const { children } = this.props;
        const { gameVersion, changeGameVersion } = this.state;

        return (
            <GameVersionContext.Provider
                value={memoizedGetState(gameVersion, changeGameVersion)}
            >
                {children}
            </GameVersionContext.Provider>
        );
    }
}

export default GameVersionProvider;
