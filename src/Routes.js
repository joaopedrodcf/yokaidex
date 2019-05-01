import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Card from './pages/card';
import Main from './pages/main';
import BaffleBoard from './pages/baffle-board';
import AboutUs from './pages/about-us';
import ItemCard from './pages/item-card';
import Items from './pages/items';
import utils from './components/utils';

const history = createHistory();
history.listen(location => {
    const page = location.pathname;

    ReactGA.set({ page });
    ReactGA.pageview(page);
});

const getYokai = (yokais, name) => {
    if (name.includes('_boss')) {
        return yokais.find(
            yokai =>
                yokai.tribe.toLowerCase() === 'boss' &&
                utils.uniformizeNames(yokai.name, 'boss') ===
                    utils.uniformizeNames(name)
        );
    }

    return yokais.find(
        yokai =>
            utils.uniformizeNames(yokai.name) === utils.uniformizeNames(name)
    );
};

const getItem = (items, name) =>
    items.find(
        item => utils.uniformizeNames(item.name) === utils.uniformizeNames(name)
    );

const getEquipment = (equipments, name) =>
    equipments.find(
        item => utils.uniformizeNames(item.name) === utils.uniformizeNames(name)
    );

class Routes extends Component {
    componentDidMount() {
        const page = window.location.pathname;

        ReactGA.pageview(page);
    }

    render() {
        const {
            gameVersion,
            yokais,
            baffleBoard,
            items,
            equipments,
            handleResetFilter,
            handleCheckbox,
            tribe,
            rank,
            element,
            misc
        } = this.props;

        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Main
                            gameVersion={3}
                            yokais={yokais}
                            handleResetFilter={handleResetFilter}
                            handleCheckbox={handleCheckbox}
                            tribe={tribe}
                            rank={rank}
                            element={element}
                            misc={misc}
                        />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch-:version"
                    render={() => (
                        <Main
                            gameVersion={gameVersion}
                            yokais={yokais}
                            handleResetFilter={handleResetFilter}
                            handleCheckbox={handleCheckbox}
                            tribe={tribe}
                            rank={rank}
                            element={element}
                            misc={misc}
                        />
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

                {/* Just for now to be retrocompatible with the old version of the route */}
                <Route
                    exact
                    path="/yokai-watch-:version/:name"
                    render={props => (
                        <Redirect
                            to={`/yokai-watch-${
                                props.match.params.version
                            }/yokais/${props.match.params.name}`}
                        />
                    )}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/yokais/:name"
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
