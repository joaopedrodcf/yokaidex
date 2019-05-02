import React, { Component } from 'react';

export const FilterItemsContext = React.createContext();

export function withFilterItemsContext(Element) {
    return function WrapperComponent(props) {
        return (
            <FilterItemsContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </FilterItemsContext.Consumer>
        );
    };
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
                value={{
                    name,
                    item,
                    handleText,
                    handleCheckbox
                }}
            >
                {children}
            </FilterItemsContext.Provider>
        );
    }
}

export default FilterItemsProvider;
