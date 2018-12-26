import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import multi from "redux-multi";

import homeStore from "./homeStore";

const composeEnhancer =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

export const store = createStore(homeStore,
	composeEnhancer(applyMiddleware(thunk, multi, createSagaMiddleware)));
