import React, { Component } from 'react';

import Sidebar from 'react-sidebar';
import { withRouter } from 'react-router';
import Header from './components/header';
import Routes from './Routes';
import GlobalStyle from './globalStyle';

import SCSidebar from './components/sidebar';

import baffleBoardYW2 from './mocks/yokai-watch-2/baffle-boards';
import baffleBoardYW3 from './mocks/yokai-watch-3/baffle-boards';

import items1 from './mocks/yokai-watch-1/items';
import items2 from './mocks/yokai-watch-2/items';
import items3 from './mocks/yokai-watch-3/items';

import equipments1 from './mocks/yokai-watch-1/equipments';
import equipments2 from './mocks/yokai-watch-2/equipments';
import equipments3 from './mocks/yokai-watch-3/equipments';

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

const getYokais = async (
    gameVersion,
    yokaisGame1,
    yokaisGame2,
    yokaisGame3
) => {
    switch (gameVersion) {
        case '1':
            return yokaisGame1.default;
        case '2':
            return yokaisGame2.default;
        default:
            return yokaisGame3.default;
    }
};

const getItems = gameVersion => {
    switch (gameVersion) {
        case '1':
            return items1;
        case '2':
            return items2;
        default:
            return items3;
    }
};

const getEquipments = gameVersion => {
    switch (gameVersion) {
        case '1':
            return equipments1;
        case '2':
            return equipments2;
        default:
            return equipments3;
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
            yokais: [],
            baffleBoard: getBaffleBoard(gameVersion),
            items: getItems(gameVersion),
            equipments: getEquipments(gameVersion),
            tribe: [],
            rank: [],
            element: [],
            misc: []
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.changeGameVersion = this.changeGameVersion.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
    }

    async componentDidMount() {
        const gameVersion =
            document.location.hash.split('/')[1].split('-')[2] || '3';

        const yokaisGame1 = await import('./mocks/yokai-watch-1/yokais');

        const yokaisGame2 = await import('./mocks/yokai-watch-2/yokais');

        const yokaisGame3 = await import('./mocks/yokai-watch-3/yokais');
        const yokais = await getYokais(
            gameVersion,
            yokaisGame1,
            yokaisGame2,
            yokaisGame3
        );

        this.setState({ yokais });
    }

    onSetSidebarOpen() {
        const { sidebarOpen } = this.state;

        this.setState({ sidebarOpen: !sidebarOpen });
    }

    async changeGameVersion(gameVersion) {
        const { history } = this.props;
        const yokaisGame1 = await import('./mocks/yokai-watch-1/yokais');

        const yokaisGame2 = await import('./mocks/yokai-watch-2/yokais');

        const yokaisGame3 = await import('./mocks/yokai-watch-3/yokais');
        const yokais = getYokais(
            gameVersion,
            yokaisGame1,
            yokaisGame2,
            yokaisGame3
        );
        const baffleBoard = getBaffleBoard(gameVersion);
        const items = getItems(gameVersion);
        const equipments = getEquipments(gameVersion);

        this.setState(
            { gameVersion, yokais, baffleBoard, items, equipments },
            () => {
                history.push(`/yokai-watch-${gameVersion}`);
            }
        );
    }

    handleResetFilter() {
        this.setState({ tribe: [], rank: [], element: [], misc: [] });
    }

    handleCheckbox(event) {
        const { checked } = event.target;
        const checkboxtype = event.target.getAttribute('data-checkbox-type');
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
    }

    render() {
        const {
            sidebarOpen,
            gameVersion,
            yokais,
            baffleBoard,
            items,
            equipments,
            tribe,
            rank,
            element,
            misc
        } = this.state;
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
                        items={items}
                        equipments={equipments}
                        handleResetFilter={this.handleResetFilter}
                        handleCheckbox={this.handleCheckbox}
                        tribe={tribe}
                        rank={rank}
                        element={element}
                        misc={misc}
                    />
                </Sidebar>
            </>
        );
    }
}

export default withRouter(App);
