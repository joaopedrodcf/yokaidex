import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faWindowClose,
    faBars,
    faHeart,
    faShareAlt,
    faUserCircle,
    faHome,
    faEnvelope,
    faPen,
    faArrowUp,
    faArrowDown,
    faArrowRight,
    faChevronDown,
    faChevronUp,
    faTrashAlt,
    faArrowLeft,
    faFilter,
    faSearch,
    faPlus,
    faEquals,
    faListUl,
    faHandsHelping,
    faDragon,
    faCat,
    faDog
} from '@fortawesome/free-solid-svg-icons';

import { HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import App from './App';

import ScrollToTop from './components/shared/scroll-to-top';

library.add(
    fab,
    faBars,
    faWindowClose,
    faHeart,
    faShareAlt,
    faUserCircle,
    faHome,
    faEnvelope,
    faPen,
    faArrowUp,
    faArrowDown,
    faArrowRight,
    faArrowLeft,
    faChevronDown,
    faChevronUp,
    faTrashAlt,
    faFilter,
    faSearch,
    faPlus,
    faEquals,
    faListUl,
    faHandsHelping,
    faDragon,
    faCat,
    faDragon,
    faDog
);

ReactGA.initialize('UA-134596491-1');
ReactGA.set({ anonymizeIp: true });

ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
