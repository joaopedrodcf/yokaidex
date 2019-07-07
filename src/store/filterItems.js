import React, { Component } from 'react';

import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';

// eslint-disable-next-line func-names
const getState = function(name, item, handleText, handleCheckbox) {
    return { name, item, handleText, handleCheckbox };
};

const memoizedGetState = memoize(getState);

export const FilterItemsContext = React.createContext();

export function withFilterItemsContext(Element) {
    return genericWrapperComponent(
        'withFilterItemsContext',
        FilterItemsContext,
        Element
    );
}

class FilterItemsProvider extends Component {
    constructor(props) {
        super(props);

        this.handleText = event => {
            this.setState({ name: event.target.value.toLowerCase() });
        };

        this.handleCheckbox = event => {
            const { checked } = event.target;
            const nameLowerCase = event.target.name.toLowerCase();

            if (checked) {
                this.setState(state => ({
                    item: [...state.item, nameLowerCase]
                }));
            } else {
                this.setState(state => ({
                    item: state.item.filter(
                        element => element !== nameLowerCase
                    )
                }));
            }
        };

        this.state = {
            name: '',
            item: [],
            handleText: this.handleText,
            handleCheckbox: this.handleCheckbox
        };
    }

    render() {
        const { children } = this.props;
        const { name, item, handleText, handleCheckbox } = this.state;

        return (
            <FilterItemsContext.Provider
                value={memoizedGetState(name, item, handleText, handleCheckbox)}
            >
                {children}
            </FilterItemsContext.Provider>
        );
    }
}

export default FilterItemsProvider;
