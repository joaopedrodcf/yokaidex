import React, { Component } from 'react';
import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import items1 from '../mocks/yokai-watch-1/items';
import items2 from '../mocks/yokai-watch-2/items';
import items3 from '../mocks/yokai-watch-3/items';

import equipments1 from '../mocks/yokai-watch-1/equipments';
import equipments2 from '../mocks/yokai-watch-2/equipments';
import equipments3 from '../mocks/yokai-watch-3/equipments';
import utils from '../components/utils';

const filterItems = (items, filterName, selectedFilterItems) => {
    return items.filter(item => {
        let aux = true;

        const filters = {
            item: selectedFilterItems
        };

        if (!item.name.toLowerCase().includes(filterName)) {
            return false;
        }

        Object.keys(filters).forEach(type => {
            if (
                filters[type].length > 0 &&
                !filters[type].includes(item.type.toLowerCase())
            ) {
                aux = false;
            }
        });

        return aux;
    });
};

// eslint-disable-next-line func-names
const getState = function(
    items,
    setItems,
    getItem,
    name,
    selectedFilterItems,
    handleText,
    handleCheckbox
) {
    return {
        items,
        setItems,
        getItem,
        name,
        selectedFilterItems,
        handleText,
        handleCheckbox
    };
};

const memoizedGetState = memoize(getState);

export const ItemsContext = React.createContext();

export function withItemsContext(Element) {
    return genericWrapperComponent('withItemsContext', ItemsContext, Element);
}

class ItemsProvider extends Component {
    constructor(props) {
        super(props);

        this.setItems = gameVersion => {
            this.setState({
                items: this.getItems(gameVersion),
                initialItems: this.getItems(gameVersion)
            });
        };

        this.getItems = gameVersion => {
            switch (gameVersion) {
                case '1':
                    return [...items1, ...equipments1];
                case '2':
                    return [...items2, ...equipments2];
                default:
                    return [...items3, ...equipments3];
            }
        };

        this.getItem = name => {
            const { initialItems } = this.state;

            return initialItems.find(
                item =>
                    utils.uniformizeNames(item.name) ===
                    utils.uniformizeNames(name)
            );
        };

        this.handleText = event => {
            const { selectedFilterItems, initialItems } = this.state;
            const newName = event.target.value.toLowerCase();

            const filteredItems = filterItems(
                initialItems,
                newName,
                selectedFilterItems
            );

            this.setState({ name: newName, items: filteredItems });
        };

        this.handleCheckbox = event => {
            const { checked } = event.target;
            const nameLowerCase = event.target.name.toLowerCase();
            const { selectedFilterItems, initialItems, name } = this.state;

            let newSelectedFilterItems;
            if (checked) {
                newSelectedFilterItems = [
                    ...selectedFilterItems,
                    nameLowerCase
                ];
            } else {
                newSelectedFilterItems = selectedFilterItems.filter(
                    element => element !== nameLowerCase
                );
            }

            const filteredItems = filterItems(
                initialItems,
                name,
                newSelectedFilterItems
            );

            this.setState({
                selectedFilterItems: newSelectedFilterItems,
                items: filteredItems
            });
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            items: this.getItems(utils.getGameVersion()),
            initialItems: this.getItems(utils.getGameVersion()),
            setItems: this.setItems,
            getItem: this.getItem,
            name: '',
            selectedFilterItems: [],
            handleText: this.handleText,
            handleCheckbox: this.handleCheckbox
        };
    }

    render() {
        const { children } = this.props;
        const {
            items,
            setItems,
            getItem,
            name,
            selectedFilterItems,
            handleText,
            handleCheckbox
        } = this.state;

        return (
            <ItemsContext.Provider
                value={memoizedGetState(
                    items,
                    setItems,
                    getItem,
                    name,
                    selectedFilterItems,
                    handleText,
                    handleCheckbox
                )}
            >
                {children}
            </ItemsContext.Provider>
        );
    }
}

export default ItemsProvider;
