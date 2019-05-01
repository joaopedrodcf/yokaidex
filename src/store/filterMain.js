import React, { Component } from 'react';

export const FilterMainContext = React.createContext();

export function withFilterMainContext(Element) {
    return function WrapperComponent(props) {
        return (
            <FilterMainContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </FilterMainContext.Consumer>
        );
    };
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
                misc: []
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
            tribe: [],
            rank: [],
            element: [],
            misc: [],
            name: '',
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
            name,
            handleResetFilter,
            handleCheckbox,
            handleText
        } = this.state;

        return (
            <FilterMainContext.Provider
                value={{
                    tribe,
                    rank,
                    element,
                    misc,
                    name,
                    handleResetFilter,
                    handleCheckbox,
                    handleText
                }}
            >
                {children}
            </FilterMainContext.Provider>
        );
    }
}

export default FilterMainProvider;
