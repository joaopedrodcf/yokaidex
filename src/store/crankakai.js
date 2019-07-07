import React, { Component } from 'react';

import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import crankakai1 from '../mocks/yokai-watch-1/crankakai';
import crankakai2 from '../mocks/yokai-watch-2/crankakai';
import crankakai3 from '../mocks/yokai-watch-3/crankakai';
import utils from '../components/utils';

// eslint-disable-next-line func-names
const getState = function(crankakais, setCrankakais, getCrankakai) {
    return { crankakais, setCrankakais, getCrankakai };
};

const memoizedGetState = memoize(getState);

export const CrankakaisContext = React.createContext();

export function withCrankakaisContext(Element) {
    return genericWrapperComponent(
        'withCrankakaisContext',
        CrankakaisContext,
        Element
    );
}

class CrankakaisProvider extends Component {
    constructor(props) {
        super(props);

        this.setCrankakais = gameVersion => {
            this.setState({
                crankakais: this.getCrankakais(gameVersion)
            });
        };

        this.getCrankakais = gameVersion => {
            switch (gameVersion) {
                case '1':
                    return crankakai1;
                case '2':
                    return crankakai2;
                default:
                    return crankakai3;
            }
        };

        this.getCrankakai = crankakaiIndexes => {
            if (crankakaiIndexes === undefined) {
                return;
            }

            const crankakaisArray = [];
            const { crankakais } = this.state;

            crankakaiIndexes.forEach(item => {
                crankakaisArray.push(crankakais[item]);
            });

            // eslint-disable-next-line
            return crankakaisArray;
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            crankakais: this.getCrankakais(utils.getGameVersion()),
            setCrankakais: this.setCrankakais,
            getCrankakai: this.getCrankakai
        };
    }

    render() {
        const { children } = this.props;
        const { crankakais, setCrankakais, getCrankakai } = this.state;

        return (
            <CrankakaisContext.Provider
                value={memoizedGetState(
                    crankakais,
                    setCrankakais,
                    getCrankakai
                )}
            >
                {children}
            </CrankakaisContext.Provider>
        );
    }
}

export default CrankakaisProvider;
