import React, { Component } from 'react';
import items1 from '../mocks/yokai-watch-1/items';
import items2 from '../mocks/yokai-watch-2/items';
import items3 from '../mocks/yokai-watch-3/items';

import equipments1 from '../mocks/yokai-watch-1/equipments';
import equipments2 from '../mocks/yokai-watch-2/equipments';
import equipments3 from '../mocks/yokai-watch-3/equipments';

import utils from '../components/utils';

export const ItemsContext = React.createContext();

export function withItemsContext(Element) {
    return function WrapperComponent(props) {
        return (
            <ItemsContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </ItemsContext.Consumer>
        );
    };
}

class ItemsProvider extends Component {
    constructor(props) {
        super(props);

        this.setItems = gameVersion => {
            switch (gameVersion) {
                case '1':
                    this.setState({
                        items: [...items1, ...equipments1]
                    });
                    break;
                case '2':
                    this.setState({
                        items: [...items2, ...equipments2]
                    });
                    break;
                default:
                    this.setState({
                        items: [...items3, ...equipments3]
                    });
                    break;
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
            items: items3,
            setItems: this.setItems,
            getItem: this.getItem
        };
    }

    componentDidMount() {
        this.setItems(utils.getGameVersion());
    }

    render() {
        const { children } = this.props;
        const { items, setItems, getItem } = this.state;

        return (
            <ItemsContext.Provider value={{ items, setItems, getItem }}>
                {children}
            </ItemsContext.Provider>
        );
    }
}

export default ItemsProvider;
