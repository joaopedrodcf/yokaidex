import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import App from './App';

import ScrollToTop from './components/shared/scroll-to-top';
import { ContextProvider } from './store';

ReactGA.initialize('UA-134596491-1');
ReactGA.set({ anonymizeIp: true });

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
