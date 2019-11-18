import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import ScrollToTop from './components/shared/scroll-to-top';
import { ContextProvider } from './store';

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

serviceWorker.register();
