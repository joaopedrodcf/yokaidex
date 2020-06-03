import React, { useState } from 'react';
import items1 from '../mocks/yokai-watch-1/items';
import items2 from '../mocks/yokai-watch-2/items';
import items3 from '../mocks/yokai-watch-3/items';
import equipments1 from '../mocks/yokai-watch-1/equipments';
import equipments2 from '../mocks/yokai-watch-2/equipments';
import equipments3 from '../mocks/yokai-watch-3/equipments';
import utils from '../components/utils';

export const ItemsContext = React.createContext();

const filterItems = (items, filterName, selectedFilterItems) => {
    return items.filter((item) => {
        let aux = true;

        const filters = {
            item: selectedFilterItems,
        };

        if (!item.name.toLowerCase().includes(filterName)) {
            return false;
        }

        Object.keys(filters).forEach((type) => {
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

const getItems = (gameVersion) => {
    switch (gameVersion) {
        case '1':
            return [...items1, ...equipments1];
        case '2':
            return [...items2, ...equipments2];
        default:
            return [...items3, ...equipments3];
    }
};

const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState(getItems(utils.getGameVersion()));
    const [initialItems, setInitialItems] = useState(
        getItems(utils.getGameVersion())
    );
    const [name, setName] = useState('');
    const [selectedFilterItems, setSelectedFilterItems] = useState([]);

    const changeItems = (gameVersion) => {
        setItems(getItems(gameVersion));
        setInitialItems(getItems(gameVersion));
    };

    const getItem = (itemName) => {
        return initialItems.find(
            (item) =>
                utils.uniformizeNames(item.name) ===
                utils.uniformizeNames(itemName)
        );
    };

    const handleText = (event) => {
        const newName = event.target.value.toLowerCase();

        const filteredItems = filterItems(
            initialItems,
            newName,
            selectedFilterItems
        );

        setName(newName);
        setItems(filteredItems);
    };

    const handleCheckbox = (event) => {
        const { checked } = event.target;
        const nameLowerCase = event.target.name.toLowerCase();

        let newSelectedFilterItems;
        if (checked) {
            newSelectedFilterItems = [...selectedFilterItems, nameLowerCase];
        } else {
            newSelectedFilterItems = selectedFilterItems.filter(
                (element) => element !== nameLowerCase
            );
        }

        const filteredItems = filterItems(
            initialItems,
            name,
            newSelectedFilterItems
        );

        setSelectedFilterItems(newSelectedFilterItems);
        setItems(filteredItems);
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                changeItems,
                getItem,
                name,
                selectedFilterItems,
                handleText,
                handleCheckbox,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export default ItemsProvider;
