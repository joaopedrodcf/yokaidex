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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            gameVersion: 3,
            yokais: yokaisGame3
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

        let yokais;
        switch (gameVersion) {
            case '1':
                yokais = yokaisGame1;
                break;
            case '2':
                yokais = yokaisGame2;
                break;
            default:
                yokais = yokaisGame3;
                break;
        }

        this.setState({ gameVersion, yokais }, () => {
            history.push(`/yokai-watch/${gameVersion}`);
        });
    }

    render() {
        const { sidebarOpen, gameVersion, yokais } = this.state;
        const sidebar = (
            <SCSidebar changeGameVersion={this.changeGameVersion} />
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
                    <Header onSetSidebarOpen={this.onSetSidebarOpen} />
                    <Routes gameVersion={gameVersion} yokais={yokais} />
                </Sidebar>
            </>
        );
    }
}

export default withRouter(App);
