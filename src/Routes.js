import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Card from './pages/card';
import Main from './pages/main';
import BaffleBoard from './pages/baffle-board';
import AboutUs from './pages/about-us';
import ItemCard from './pages/item-card';
import Items from './pages/items';
import Crankakai from './pages/crankakai';
import ContactUs from './pages/contact-us';

const history = createHistory();
history.listen(location => {
    const page = location.pathname;

    ReactGA.set({ page });
    ReactGA.pageview(page);
});

class Routes extends Component {
    componentDidMount() {
        const page = window.location.pathname;

        ReactGA.pageview(page);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/yokai-watch-:version" component={Main} />
                <Route
                    exact
                    path="/yokai-watch-:version/baffle-board"
                    component={BaffleBoard}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/items"
                    component={Items}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/crank-a-kai"
                    component={Crankakai}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/about-us"
                    component={AboutUs}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/yokais/:name"
                    component={Card}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/items/:name"
                    component={ItemCard}
                />
                <Route
                    exact
                    path="/yokai-watch-:version/contact-us"
                    component={ContactUs}
                />
                <Route component={Main} />
            </Switch>
        );
    }
}

export default Routes;
