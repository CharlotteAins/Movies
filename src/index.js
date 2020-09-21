import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import {rootReducer} from './redux/rootReducer';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
