import { apiPost } from "../../helpers/apiHelper";

export const SIGN_UP = "SIGN_UP";

export const signUp = (data) => {
	const payload = apiPost("/auth/sign-up", data);
	return { type: SIGN_UP, payload };
};
