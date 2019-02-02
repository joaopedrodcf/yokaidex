import React, { Component } from 'react';

import Sidebar from 'react-sidebar';
import { withRouter } from 'react-router';
import Header from './components/Header';
import Routes from './Routes';
import GlobalStyle from './globalStyle';

import SCSidebar from './components/Sidebar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            gameVersion: 3
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.changeGameVersion = this.changeGameVersion.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    changeGameVersion(gameVersion) {
        const { history } = this.props;

        this.setState({ gameVersion }, () => {
            history.push(`/home`);
        });
    }

    render() {
        const { sidebarOpen, gameVersion } = this.state;
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
                    <Routes
                        changeGameVersion={this.changeGameVersion}
                        gameVersion={gameVersion}
                    />
                </Sidebar>
            </>
        );
    }
}

export default withRouter(App);
