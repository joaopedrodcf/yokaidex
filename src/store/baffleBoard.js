import React, { Component } from 'react';

import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import baffleBoardYW2 from '../mocks/yokai-watch-2/baffle-boards';
import baffleBoardYW3 from '../mocks/yokai-watch-3/baffle-boards';
import utils from '../components/utils';

// eslint-disable-next-line func-names
const getState = function(baffleBoard, setBaffleBoard) {
    return { baffleBoard, setBaffleBoard };
};

const memoizedGetState = memoize(getState);

export const BaffleBoardContext = React.createContext();

export function withBaffleBoardContext(Element) {
    return genericWrapperComponent(
        'withBaffleBoardContext',
        BaffleBoardContext,
        Element
    );
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
                case '2':
                    return baffleBoardYW2;
                case '3':
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
                value={memoizedGetState(baffleBoard, setBaffleBoard)}
            >
                {children}
            </BaffleBoardContext.Provider>
        );
    }
}

export default BaffleBoardProvider;
