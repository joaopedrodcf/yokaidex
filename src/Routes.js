import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Card from './components/card';
import Main from './components/main';
import yokaisGame1 from './mocks/yokai-watch-1/yokais';
import yokaisGame2 from './mocks/yokai-watch-2/yokais';
import yokaisGame3 from './mocks/yokai-watch-3/yokais';
import BaffleBoard from './components/baffle-board';
import baffleBoardYW2 from './mocks/yokai-watch-2/baffle-boards';
import baffleBoardYW3 from './mocks/yokai-watch-3/baffle-boards';

const history = createHistory();
history.listen(location => {
    const page = location.hash.replace('#', '');

    ReactGA.set({ page });
    ReactGA.pageview(page);
});

const getYokai = (name, version) => {
    let yokais;
    switch (version) {
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

    if (name.includes('_boss')) {
        return yokais.find(
            yokai =>
                yokai.name === name.replace('_boss', '') &&
                yokai.tribe === 'boss'
        );
    }

    return yokais.find(yokai => yokai.name === name);
};

const getBaffleBoard = gameVersion => {
    if (gameVersion === '2') {
        return baffleBoardYW2;
    }

    return baffleBoardYW3;
};

class Routes extends Component {
    componentDidMount() {
        const page = window.location.hash.replace('#', '');

        ReactGA.pageview(page);
    }

    render() {
        const { gameVersion, yokais } = this.props;
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Main gameVersion={gameVersion} yokais={yokais} />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch/:version"
                    render={() => (
                        <Main gameVersion={gameVersion} yokais={yokais} />
                    )}
                />
                <Route
                    exact
                    path="/baffle-board"
                    render={() => (
                        <BaffleBoard
                            baffleBoard={getBaffleBoard(gameVersion)}
                        />
                    )}
                />
                <Route
                    exact
                    path="/yokai/:name"
                    render={props => (
                        <Card
                            {...getYokai(props.match.params.name, gameVersion)}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default Routes;
