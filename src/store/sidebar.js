import React, { Component } from 'react';

export const SidebarContext = React.createContext();

export function withSidebarContext(Element) {
    return function WrapperComponent(props) {
        return (
            <SidebarContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </SidebarContext.Consumer>
        );
    };
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
                value={{
                    isSidebarOpen,
                    handleSidebar
                }}
            >
                {children}
            </SidebarContext.Provider>
        );
    }
}

export default SidebarProvider;
