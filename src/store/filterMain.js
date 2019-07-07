import React, { Component } from 'react';

import memoize from 'fast-memoize';

import genericWrapperComponent from './genericWrapperComponent';

// eslint-disable-next-line func-names
const getState = function(
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

export const FilterMainContext = React.createContext();

export function withFilterMainContext(Element) {
    return genericWrapperComponent(FilterMainContext, Element);
}

class FilterMainProvider extends Component {
    constructor(props) {
        super(props);

        this.handleResetFilter = () => {
            this.setState({
                name: '',
                tribe: [],
                rank: [],
                element: [],
                misc: [],
                types: []
            });
        };

        this.handleCheckbox = event => {
            const { checked } = event.target;
            const checkboxtype = event.target.getAttribute(
                'data-checkbox-type'
            );
            const nameLowerCase = event.target.name.toLowerCase();

            if (checked) {
                this.setState(state => ({
                    [checkboxtype]: [...state[checkboxtype], nameLowerCase]
                }));
            } else {
                this.setState(state => ({
                    [checkboxtype]: state[checkboxtype].filter(
                        element => element !== nameLowerCase
                    )
                }));
            }
        };

        this.handleText = event => {
            this.setState({ name: event.target.value.toLowerCase() });
        };

        this.state = {
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
            <FilterMainContext.Provider
                value={memoizedGetState(
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
            </FilterMainContext.Provider>
        );
    }
}

export default FilterMainProvider;
