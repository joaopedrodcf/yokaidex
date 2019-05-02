import React, { Component } from 'react';
import utils from '../components/utils';

export const GameVersionContext = React.createContext();

export function withGameVersionContext(Element) {
    return function WrapperComponent(props) {
        return (
            <GameVersionContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </GameVersionContext.Consumer>
        );
    };
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
                value={{ gameVersion, changeGameVersion }}
            >
                {children}
            </GameVersionContext.Provider>
        );
    }
}

export default GameVersionProvider;
