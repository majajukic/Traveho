import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';//keeps track of a global state (store) that can then be accessed from anywhere in the app.
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
