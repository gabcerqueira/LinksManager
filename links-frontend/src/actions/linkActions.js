import { apiPost } from "../helpers/apiHelper";

export const LINK_CREATE = "LINK_CREATE";

// <--SIGN IN -->
export const linkCreate = (data) => {
	const isSocial = !!data.isSocial;

	const payload = apiPost("/link", { ...data, isSocial });

	return { type: LINK_CREATE, payload: payload };
};
