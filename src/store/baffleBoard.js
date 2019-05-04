import React, { Component } from 'react';

import baffleBoardYW2 from '../mocks/yokai-watch-2/baffle-boards';
import baffleBoardYW3 from '../mocks/yokai-watch-3/baffle-boards';
import utils from '../components/utils';

export const BaffleBoardContext = React.createContext();

export function withBaffleBoardContext(Element) {
    return function WrapperComponent(props) {
        return (
            <BaffleBoardContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </BaffleBoardContext.Consumer>
        );
    };
}

class BaffleBoardProvider extends Component {
    constructor(props) {
        super(props);

        this.setBaffleBoard = gameVersion => {
            this.setState({
                baffleBoard: this.getBaffleBoard(gameVersion)
            });
        };

        this.getBaffleBoard = gameVersion => {
            switch (gameVersion) {
                case '1':
                    return baffleBoardYW2;
                case '2':
                    return baffleBoardYW3;
                default:
                    return undefined;
            }
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            baffleBoard: this.getBaffleBoard(utils.getGameVersion()),
            setBaffleBoard: this.setBaffleBoard
        };
    }

    render() {
        const { children } = this.props;
        const { baffleBoard, setBaffleBoard } = this.state;

        return (
            <BaffleBoardContext.Provider
                value={{ baffleBoard, setBaffleBoard }}
            >
                {children}
            </BaffleBoardContext.Provider>
        );
    }
}

export default BaffleBoardProvider;
