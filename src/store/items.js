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

// eslint-disable-next-line func-names
const getState = function(items, setItems, getItem) {
    return { items, setItems, getItem };
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
                items: this.getItems(gameVersion)
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
            const { items } = this.state;

            return items.find(
                item =>
                    utils.uniformizeNames(item.name) ===
                    utils.uniformizeNames(name)
            );
        };

        this.state = {
            // this needs to be based on the state of gameVersion
            items: this.getItems(utils.getGameVersion()),
            setItems: this.setItems,
            getItem: this.getItem
        };
    }

    render() {
        const { children } = this.props;
        const { items, setItems, getItem } = this.state;

        return (
            <ItemsContext.Provider
                value={memoizedGetState(items, setItems, getItem)}
            >
                {children}
            </ItemsContext.Provider>
        );
    }
}

export default ItemsProvider;
