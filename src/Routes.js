import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Card from './components/card';
import Main from './components/main';
import BaffleBoard from './components/baffle-board';
import AboutUs from './components/about-us';
import ItemCard from './components/item-card';
import Items from './components/items';

const history = createHistory();
history.listen(location => {
    const page = location.hash.replace('#', '');

    ReactGA.set({ page });
    ReactGA.pageview(page);
});

const getYokai = (yokais, name) => {
    if (name.includes('_boss')) {
        return yokais.find(
            yokai =>
                yokai.name === name.replace('_boss', '') &&
                yokai.tribe === 'boss'
        );
    }

    return yokais.find(yokai => yokai.name === name);
};

const getItem = (items, name) => items.find(item => item.name === name);

const getEquipment = (equipments, name) =>
    equipments.find(item => item.name === name);

class Routes extends Component {
    componentDidMount() {
        const page = window.location.hash.replace('#', '');

        ReactGA.pageview(page);
    }

    render() {
        const {
            gameVersion,
            yokais,
            baffleBoard,
            items,
            equipments
        } = this.props;

        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Main gameVersion={3} yokais={yokais} />}
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
                    path="/yokai-watch-:version/items"
                    render={() => (
                        <Items
                            gameVersion={gameVersion}
                            items={items}
                            type="items"
                        />
                    )}
                />

                <Route
                    exact
                    path="/yokai-watch-:version/equipments"
                    render={() => (
                        <Items
                            gameVersion={gameVersion}
                            items={equipments}
                            type="equipments"
                        />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/about-us"
                    render={() => <AboutUs />}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/:name"
                    render={props => (
                        <Card
                            gameVersion={gameVersion}
                            {...getYokai(yokais, props.match.params.name)}
                        />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/items/:name"
                    render={props => (
                        <ItemCard
                            gameVersion={gameVersion}
                            {...getItem(items, props.match.params.name)}
                        />
                    )}
                />

                <Route
                    exact
                    path="/yokai-watch-:version/equipments/:name"
                    render={props => (
                        <ItemCard
                            gameVersion={gameVersion}
                            {...getEquipment(
                                equipments,
                                props.match.params.name
                            )}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default Routes;
