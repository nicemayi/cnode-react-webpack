import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';

import App from './views/App';
import appState from './store/app.state';

const root = document.getElementById('root');
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const render = Component => {
    renderMethod(
        <AppContainer>
            <Provider appState={appState}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        root,
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./views/App', () => {
        const NextApp = require('./views/App').default;
        render(NextApp);
    });
}
