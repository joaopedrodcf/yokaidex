/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import yokaisGame1 from '../mocks/yokai-watch-1/yokais';
import yokaisGame2 from '../mocks/yokai-watch-2/yokais';
import yokaisGame3 from '../mocks/yokai-watch-3/yokais';
import utils from '../components/utils';

const filterYokais = (yokais, filterName, filterFilters) => {
    return yokais.filter(yokai => {
        let aux = true;

        const filters = {
            tribe: filterFilters.tribe,
            rank: filterFilters.rank,
            element: filterFilters.element
        };

        if (!yokai.name.toLowerCase().includes(filterName)) {
            return false;
        }

        Object.keys(filters).forEach(el => {
            if (
                filters[el].length > 0 &&
                !filters[el].includes(yokai[el].toLowerCase())
            ) {
                aux = false;
            }
        });

        if (
            filterFilters.misc.includes('has evolution') &&
            !yokai.evolutionIndexes
        ) {
            return false;
        }

        if (filterFilters.misc.includes('crank-a-kai') && !yokai.crankakai) {
            return false;
        }

        if (
            filterFilters.types.includes('legendary') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('legendary')))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes('rare') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('rare')))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes('classic') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('classic')))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes('deva') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('deva')))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes("'merican legendary") &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes("'merican legendary")))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes("'merican") &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes("'merican")))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes('legendary mystery') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('legendary mystery')))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes('treasure') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('treasure')))
        ) {
            return false;
        }

        if (
            filterFilters.types.includes('pioneer') &&
            (yokai.type === undefined ||
                (yokai.type && !yokai.type.includes('pioneer')))
        ) {
            return false;
        }

        return aux;
    });
};

// eslint-disable-next-line func-names
const getState = function(
    yokais,
    setYokais,
    getYokai,
    tribe,
    rank,
    element,
    misc,
    types,
    name,
    handleResetFilter,
    handleCheckbox,
    handleText
) {
    return {
        yokais,
        setYokais,
        getYokai,
        tribe,
        rank,
        element,
        misc,
        types,
        name,
        handleResetFilter,
        handleCheckbox,
        handleText
    };
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
                yokais: this.getYokais(gameVersion),
                initialYokais: this.getYokais(gameVersion)
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
            const { initialYokais } = this.state;

            if (name.includes('_boss')) {
                return initialYokais.find(
                    yokai =>
                        yokai.tribe.toLowerCase() === 'boss' &&
                        utils.uniformizeNames(yokai.name, 'boss') ===
                            utils.uniformizeNames(name)
                );
            }

            return initialYokais.find(
                yokai =>
                    utils.uniformizeNames(yokai.name) ===
                    utils.uniformizeNames(name)
            );
        };

        this.handleResetFilter = () => {
            const { initialYokais } = this.state;
            this.setState({
                name: '',
                tribe: [],
                rank: [],
                element: [],
                misc: [],
                types: [],
                yokais: initialYokais
            });
        };

        this.handleCheckbox = event => {
            const { checked } = event.target;
            const checkboxtype = event.target.getAttribute(
                'data-checkbox-type'
            );
            const nameLowerCase = event.target.name.toLowerCase();
            const {
                initialYokais,
                name,
                tribe,
                rank,
                element,
                misc,
                types
            } = this.state;

            let newCheckboxType;

            if (checked) {
                newCheckboxType = [...this.state[checkboxtype], nameLowerCase];
            } else {
                newCheckboxType = this.state[checkboxtype].filter(
                    x => x !== nameLowerCase
                );
            }

            const filters = {
                tribe,
                rank,
                element,
                misc,
                types,
                [checkboxtype]: newCheckboxType
            };

            const filteredYokais = filterYokais(initialYokais, name, filters);

            this.setState({
                [checkboxtype]: newCheckboxType,
                yokais: filteredYokais
            });
        };

        this.handleText = event => {
            const {
                initialYokais,
                tribe,
                rank,
                element,
                misc,
                types
            } = this.state;
            const newName = event.target.value.toLowerCase();

            const filters = {
                tribe,
                rank,
                element,
                misc,
                types
            };

            const filteredYokais = filterYokais(
                initialYokais,
                newName,
                filters
            );

            this.setState({ name: newName, yokais: filteredYokais });
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            yokais: this.getYokais(utils.getGameVersion()),
            initialYokais: this.getYokais(utils.getGameVersion()),
            setYokais: this.setYokais,
            getYokai: this.getYokai,
            name: '',
            tribe: [],
            rank: [],
            element: [],
            misc: [],
            types: [],
            handleResetFilter: this.handleResetFilter,
            handleCheckbox: this.handleCheckbox,
            handleText: this.handleText
        };
    }

    render() {
        const { children } = this.props;
        const {
            yokais,
            setYokais,
            getYokai,
            tribe,
            rank,
            element,
            misc,
            types,
            name,
            handleResetFilter,
            handleCheckbox,
            handleText
        } = this.state;

        return (
            <YokaisContext.Provider
                value={memoizedGetState(
                    yokais,
                    setYokais,
                    getYokai,
                    tribe,
                    rank,
                    element,
                    misc,
                    types,
                    name,
                    handleResetFilter,
                    handleCheckbox,
                    handleText
                )}
            >
                {children}
            </YokaisContext.Provider>
        );
    }
}

export default YokaisProvider;
