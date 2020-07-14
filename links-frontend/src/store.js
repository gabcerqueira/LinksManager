import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import signInReducer from "./views/signIn/SignInReducer";

const reducers = combineReducers({
	signIn: signInReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
