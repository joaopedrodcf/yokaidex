import React, { Component } from 'react';

import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import yokaisGame1 from '../mocks/yokai-watch-1/yokais';
import yokaisGame2 from '../mocks/yokai-watch-2/yokais';
import yokaisGame3 from '../mocks/yokai-watch-3/yokais';
import utils from '../components/utils';

// eslint-disable-next-line func-names
const getState = function(yokais, setYokais, getYokai) {
    return { yokais, setYokais, getYokai };
};

const memoizedGetState = memoize(getState);

export const YokaisContext = React.createContext();

export function withYokaisContext(Element) {
    return genericWrapperComponent('withYokaisContext', YokaisContext, Element);
}

class YokaisProvider extends Component {
    constructor(props) {
        super(props);

        this.setYokais = gameVersion => {
            this.setState({
                yokais: this.getYokais(gameVersion)
            });
        };

        this.getYokais = gameVersion => {
            switch (gameVersion) {
                case '1':
                    return yokaisGame1;
                case '2':
                    return yokaisGame2;
                default:
                    return yokaisGame3;
            }
        };

        this.getYokai = name => {
            const { yokais } = this.state;

            if (name.includes('_boss')) {
                return yokais.find(
                    yokai =>
                        yokai.tribe.toLowerCase() === 'boss' &&
                        utils.uniformizeNames(yokai.name, 'boss') ===
                            utils.uniformizeNames(name)
                );
            }

            return yokais.find(
                yokai =>
                    utils.uniformizeNames(yokai.name) ===
                    utils.uniformizeNames(name)
            );
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            yokais: this.getYokais(utils.getGameVersion()),
            setYokais: this.setYokais,
            getYokai: this.getYokai
        };
    }

    render() {
        const { children } = this.props;
        const { yokais, setYokais, getYokai } = this.state;

        return (
            <YokaisContext.Provider
                value={memoizedGetState(yokais, setYokais, getYokai)}
            >
                {children}
            </YokaisContext.Provider>
        );
    }
}

export default YokaisProvider;
