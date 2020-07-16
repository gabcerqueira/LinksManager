import { apiPost } from "../helpers/apiHelper";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

// <--SIGN IN -->
export const signIn = (data) => {
	const payload = apiPost("/auth/sign-in", data);
	return { type: SIGN_IN, payload: payload };
};

// <--SIGN UP -->
export const signUp = (data) => {
	const payload = apiPost("/auth/sign-up", data);
	return { type: SIGN_UP, payload };
};

// <--SIGN OUT -->
export const signOut = () => {
	return { type: SIGN_OUT, payload: {} };
};
