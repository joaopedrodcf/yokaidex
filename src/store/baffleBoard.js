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
            switch (gameVersion) {
                case '2':
                    this.setState({
                        baffleBoard: baffleBoardYW2
                    });
                    break;
                case '3':
                    this.setState({
                        baffleBoard: baffleBoardYW3
                    });
                    break;
                default:
                    break;
            }
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            baffleBoard: baffleBoardYW3,
            setBaffleBoard: this.setBaffleBoard
        };
    }

    componentDidMount() {
        this.setBaffleBoard(utils.getGameVersion());
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
