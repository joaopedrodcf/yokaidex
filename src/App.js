import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Header from './components/Header';
import SCSidebar from './components/Sidebar';
import GlobalStyle from './globalStyle';
import Routes from './Routes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        const { sidebarOpen } = this.state;
        const sidebar = <SCSidebar />;

        return (
            <>
                <GlobalStyle />
                <Sidebar
                    sidebar={sidebar}
                    open={sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: 'white' } }}
                >
                    <Header onSetSidebarOpen={this.onSetSidebarOpen} />
                    <Routes />
                </Sidebar>
            </>
        );
    }
}

export default App;
