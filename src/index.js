import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import APP from './components/App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('root')
)
