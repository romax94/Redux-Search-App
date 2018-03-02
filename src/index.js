import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import APP from './components/App';
import './App.css';

const store = configureStore();

render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('root')
)
