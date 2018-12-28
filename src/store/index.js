import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import multi from "redux-multi";

import homeStore from "./homeStore";
import detailsStore from "./detailsStore";

import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ homeStore, detailsStore })

const composeEnhancer =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

export const store = createStore(reducers,
	composeEnhancer(applyMiddleware(thunk, multi, sagaMiddleware)));

sagaMiddleware.run(rootSaga);