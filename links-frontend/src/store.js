import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import signInReducer from "./views/signIn/SignInReducer";
import signUpReducer from "./views/signUp/SignUpReducer";

const reducers = combineReducers({
	signIn: signInReducer,
	signUp: signUpReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
