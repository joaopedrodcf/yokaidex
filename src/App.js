import React, { Component } from 'react';

import Sidebar from 'react-sidebar';
import { withRouter } from 'react-router';
import Header from './components/header';
import Routes from './Routes';
import GlobalStyle from './globalStyle';

import SCSidebar from './components/sidebar';

import yokaisGame1 from './mocks/yokai-watch-1/yokais';
import yokaisGame2 from './mocks/yokai-watch-2/yokais';
import yokaisGame3 from './mocks/yokai-watch-3/yokais';

import baffleBoardYW2 from './mocks/yokai-watch-2/baffle-boards';
import baffleBoardYW3 from './mocks/yokai-watch-3/baffle-boards';

const getBaffleBoard = gameVersion => {
    switch (gameVersion) {
        case '2':
            return baffleBoardYW2;
        case '3':
            return baffleBoardYW3;
        default:
            return undefined;
    }
};

const getYokais = gameVersion => {
    switch (gameVersion) {
        case '1':
            return yokaisGame1;
        case '2':
            return yokaisGame2;
        default:
            return yokaisGame3;
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        const gameVersion =
            document.location.hash.split('/')[1].split('-')[2] || '3';

        this.state = {
            sidebarOpen: false,
            gameVersion,
            yokais: getYokais(gameVersion),
            baffleBoard: getBaffleBoard(gameVersion)
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.changeGameVersion = this.changeGameVersion.bind(this);
    }

    onSetSidebarOpen() {
        const { sidebarOpen } = this.state;

        this.setState({ sidebarOpen: !sidebarOpen });
    }

    changeGameVersion(gameVersion) {
        const { history } = this.props;

        const yokais = getYokais(gameVersion);
        const baffleBoard = getBaffleBoard(gameVersion);

        this.setState({ gameVersion, yokais, baffleBoard }, () => {
            history.push(`/yokai-watch-${gameVersion}`);
        });
    }

    render() {
        const { sidebarOpen, gameVersion, yokais, baffleBoard } = this.state;
        const sidebar = (
            <SCSidebar
                changeGameVersion={this.changeGameVersion}
                gameVersion={gameVersion}
            />
        );

        return (
            <>
                <GlobalStyle />
                <Sidebar
                    sidebar={sidebar}
                    open={sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: { background: 'white', position: 'fixed' },
                        root: {
                            overflow: 'initial'
                        },
                        content: {
                            overflowY: 'initial'
                        }
                    }}
                >
                    <Header
                        gameVersion={gameVersion}
                        onSetSidebarOpen={this.onSetSidebarOpen}
                    />
                    <Routes
                        gameVersion={gameVersion}
                        baffleBoard={baffleBoard}
                        yokais={yokais}
                    />
                </Sidebar>
            </>
        );
    }
}

export default withRouter(App);
