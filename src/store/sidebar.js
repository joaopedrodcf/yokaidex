import React, { Component } from 'react';
import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';

// eslint-disable-next-line func-names
const getState = function(isSidebarOpen, handleSidebar) {
    return { isSidebarOpen, handleSidebar };
};

const memoizedGetState = memoize(getState);

export const SidebarContext = React.createContext();

export function withSidebarContext(Element) {
    return genericWrapperComponent(SidebarContext, Element);
}

class SidebarProvider extends Component {
    constructor(props) {
        super(props);

        this.handleSidebar = () => {
            this.setState(state => {
                return { isSidebarOpen: !state.isSidebarOpen };
            });
        };

        this.state = {
            isSidebarOpen: false,
            handleSidebar: this.handleSidebar
        };
    }

    render() {
        const { children } = this.props;
        const { isSidebarOpen, handleSidebar } = this.state;

        return (
            <SidebarContext.Provider
                value={memoizedGetState(isSidebarOpen, handleSidebar)}
            >
                {children}
            </SidebarContext.Provider>
        );
    }
}

export default SidebarProvider;
