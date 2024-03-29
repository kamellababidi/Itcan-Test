import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './cantainers/App/index';
import reset from './constants/css/reset';

// import css files
import './css/styles.css'
import './css/home-page.css'
import './css/header.css'
import './css/input.css'
import './css/button.css'
import './css/input.css'
import './css/section-header.css'
import './css/value-container.css'
import './css/service-container.css'
import './css/location-container.css'
import './css/client-container.css'
import './css/industry-container.css'
import './css/footer.css'
import './css/dashboard.css'
////////////////////////////////

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <App />
            </Provider>
            <GlobalStyle />
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
