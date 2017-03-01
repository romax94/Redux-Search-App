import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import APP from './App';
import './index.css';



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('root')
);
