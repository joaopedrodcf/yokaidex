/* eslint-disable react/destructuring-assignment */
import React, { useState, useReducer } from 'react';
import yokaisGame1 from '../mocks/yokai-watch-1/yokais';
import yokaisGame2 from '../mocks/yokai-watch-2/yokais';
import yokaisGame3 from '../mocks/yokai-watch-3/yokais';
import utils from '../components/utils';

export const YokaisContext = React.createContext();

const filterYokais = (yokais, filterName, filterFilters) => {
    return yokais.filter((yokai) => {
        let aux = true;

        const filters = {
            tribe: filterFilters.tribe,
            rank: filterFilters.rank,
            element: filterFilters.element,
        };

        if (!yokai.name.toLowerCase().includes(filterName)) {
            return false;
        }

        Object.keys(filters).forEach((el) => {
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

const getYokais = (gameVersion) => {
    switch (gameVersion) {
        case '1':
            return yokaisGame1;
        case '2':
            return yokaisGame2;
        default:
            return yokaisGame3;
    }
};

const initialStateCheckboxes = {
    tribe: [],
    rank: [],
    element: [],
    misc: [],
    types: [],
};

const reducerCheckboxes = (state, { name, value }) => {
    return {
        ...state,
        [name]: value,
    };
};

const YokaisProvider = ({ children }) => {
    const [yokais, setYokais] = useState(getYokais(utils.useGameVersion()));
    const [initialYokais, setInitialYokais] = useState(
        getYokais(utils.useGameVersion())
    );
    const [name, setName] = useState('');

    const [checkboxes, dispatchCheckboxes] = useReducer(
        reducerCheckboxes,
        initialStateCheckboxes
    );

    const { tribe, rank, element, misc, types } = checkboxes;

    const changeYokais = (gameVersion) => {
        setYokais(getYokais(gameVersion));
        setInitialYokais(getYokais(gameVersion));
    };

    const getYokai = (yokaiName) => {
        if (yokaiName.includes('_boss')) {
            return initialYokais.find(
                (yokai) =>
                    yokai.tribe.toLowerCase() === 'boss' &&
                    utils.uniformizeNames(yokai.name, 'boss') ===
                        utils.uniformizeNames(name)
            );
        }

        return initialYokais.find(
            (yokai) =>
                utils.uniformizeNames(yokai.name) ===
                utils.uniformizeNames(yokaiName)
        );
    };

    const handleResetFilter = () => {
        setName('');

        dispatchCheckboxes({ name: 'tribe', value: [] });
        dispatchCheckboxes({ name: 'rank', value: [] });
        dispatchCheckboxes({ name: 'element', value: [] });
        dispatchCheckboxes({ name: 'misc', value: [] });
        dispatchCheckboxes({ name: 'types', value: [] });
        setYokais(initialYokais);
    };

    const handleCheckbox = (event) => {
        const { checked } = event.target;
        const checkboxtype = event.target.getAttribute('data-checkbox-type');
        const nameLowerCase = event.target.name.toLowerCase();

        let newCheckboxType;

        if (checked) {
            newCheckboxType = [...checkboxes[checkboxtype], nameLowerCase];
        } else {
            newCheckboxType = checkboxes[checkboxtype].filter(
                (x) => x !== nameLowerCase
            );
        }

        const filters = {
            tribe,
            rank,
            element,
            misc,
            types,
            [checkboxtype]: newCheckboxType,
        };

        const filteredYokais = filterYokais(initialYokais, name, filters);

        dispatchCheckboxes({ name: checkboxtype, value: newCheckboxType });
        setYokais(filteredYokais);
    };

    const handleText = (event) => {
        const newName = event.target.value.toLowerCase();

        const filters = {
            tribe,
            rank,
            element,
            misc,
            types,
        };

        const filteredYokais = filterYokais(initialYokais, newName, filters);

        setName(newName);
        setYokais(filteredYokais);
    };

    return (
        <YokaisContext.Provider
            value={{
                yokais,
                changeYokais,
                getYokai,
                tribe,
                rank,
                element,
                misc,
                types,
                name,
                handleResetFilter,
                handleCheckbox,
                handleText,
            }}
        >
            {children}
        </YokaisContext.Provider>
    );
};

export default YokaisProvider;
