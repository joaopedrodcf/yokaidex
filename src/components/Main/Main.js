import React from 'react';

import Downshift from 'downshift';

const items = [
    {
        name: 'Pandle',
        class: 'Brave',
        rank: 'E',
        element: 'Fire',
        favoriteFood: 'Rice Balls',
        evolution: 'Lv. 18 → Undy'
    },
    {
        name: 'Undy',
        class: 'Brave',
        rank: 'C',
        element: 'Fire',
        favoriteFood: 'Rice Balls',
        evolution: null
    },
    {
        name: 'Tanbo',
        class: 'Brave',
        rank: 'B',
        element: 'Earth',
        favoriteFood: 'Rice Balls',
        evolution: null
    }
];

const isOpen = true;

const Main = () => (
    <div>
        <form>
            <div>
                <h5>Find your yokai:</h5>
            </div>
            <div>
                <Downshift
                    onChange={selection =>
                        alert(`You selected ${selection.value}`)
                    }
                    itemToString={item => (item ? item.name : '')}
                >
                    {({
                        getInputProps,
                        getItemProps,
                        getMenuProps,
                        inputValue,
                        highlightedIndex,
                        selectedItem
                    }) => (
                        <div>
                            <input {...getInputProps()} />
                            <ul {...getMenuProps()}>
                                {isOpen
                                    ? items
                                          .filter(
                                              item =>
                                                  !inputValue ||
                                                  item.name.includes(inputValue)
                                          )
                                          .map((item, index) => (
                                              <li
                                                  {...getItemProps({
                                                      key: item.name,
                                                      index,
                                                      item,
                                                      style: {
                                                          backgroundColor:
                                                              highlightedIndex ===
                                                              index
                                                                  ? 'lightgray'
                                                                  : 'white',
                                                          fontWeight:
                                                              selectedItem ===
                                                              item
                                                                  ? 'bold'
                                                                  : 'normal'
                                                      }
                                                  })}
                                              >
                                                  {item.name}
                                              </li>
                                          ))
                                    : null}
                            </ul>
                        </div>
                    )}
                </Downshift>
            </div>
        </form>
    </div>
);

export default Main;
