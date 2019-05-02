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
            switch (gameVersion) {
                case '1':
                    this.setState({
                        yokais: yokaisGame1
                    });
                    break;
                case '2':
                    this.setState({
                        yokais: yokaisGame2
                    });
                    break;
                default:
                    this.setState({
                        yokais: yokaisGame3
                    });
                    break;
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
            yokais: yokaisGame3,
            setYokais: this.setYokais,
            getYokai: this.getYokai
        };
    }

    componentDidMount() {
        this.setYokais(utils.getGameVersion());
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
