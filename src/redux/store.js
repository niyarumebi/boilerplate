import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(createSagaMiddleware));

sagaMiddleware.run(sagas);

export default store;