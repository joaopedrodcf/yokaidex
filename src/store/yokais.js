import React, { Component } from 'react';

import yokaisGame1 from '../mocks/yokai-watch-1/yokais';
import yokaisGame2 from '../mocks/yokai-watch-2/yokais';
import yokaisGame3 from '../mocks/yokai-watch-3/yokais';
import utils from '../components/utils';

export const YokaisContext = React.createContext();

export function withYokaisContext(Element) {
    return function WrapperComponent(props) {
        return (
            <YokaisContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </YokaisContext.Consumer>
        );
    };
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
            <YokaisContext.Provider value={{ yokais, setYokais, getYokai }}>
                {children}
            </YokaisContext.Provider>
        );
    }
}

export default YokaisProvider;
