import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const YokaiCard = lazy(() => import('./pages/yokai-card'));
const Main = lazy(() => import('./pages/main'));
const BaffleBoard = lazy(() => import('./pages/baffle-board'));
const AboutUs = lazy(() => import('./pages/about-us'));
const ItemCard = lazy(() => import('./pages/item-card'));
const Items = lazy(() => import('./pages/items'));
const Crankakai = lazy(() => import('./pages/crankakai'));
const ContactUs = lazy(() => import('./pages/contact-us'));

const Routes = () => {
    return (
        // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
        <Suspense fallback={<div>Loading...</div>}>
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
                    component={YokaiCard}
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
        </Suspense>
    );
};

export default Routes;
