import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import accountReducer from "./reducers/accountReducer";
import linkReducer from "./reducers/linkReducer";

const reducers = combineReducers({
	account: accountReducer,
	link: linkReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
