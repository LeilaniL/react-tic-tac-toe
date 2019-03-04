import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SquaresReducer from './reducers/SquaresReducer'

const store = createStore(SquaresReducer);

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
