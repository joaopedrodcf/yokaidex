import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Card from './components/card';
import Main from './components/main';
import yokaisGame1 from './mocks/yokai-watch-1/yokais';
import yokaisGame2 from './mocks/yokai-watch-2/yokais';
import yokaisGame3 from './mocks/yokai-watch-3/yokais';
import BaffleBoard from './components/baffle-board';

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

class Routes extends Component {
    componentDidMount() {
        const page = window.location.hash.replace('#', '');

        ReactGA.pageview(page);
    }

    render() {
        const { gameVersion, yokais, baffleBoard } = this.props;
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/yokai-watch-3" />}
                />
                <Route
                    exact
                    path="/yokai-watch-:version"
                    render={() => (
                        <Main gameVersion={gameVersion} yokais={yokais} />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/baffle-board"
                    render={() => (
                        <BaffleBoard
                            gameVersion={gameVersion}
                            baffleBoard={baffleBoard}
                        />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/:name"
                    render={props => (
                        <Card
                            gameVersion={gameVersion}
                            {...getYokai(props.match.params.name, gameVersion)}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default Routes;
