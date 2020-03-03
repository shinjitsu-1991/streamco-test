import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "redux/rootReducer";
import { watcherSaga } from "redux/rootSaga";

const sagaMiddleware = createSagaMiddleware();

// const reduxDevTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
