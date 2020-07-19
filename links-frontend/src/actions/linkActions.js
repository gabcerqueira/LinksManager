import { apiPost, apiGet, apiPut, apiDelete } from "../helpers/apiHelper";

export const LINK_CREATE = "LINK_CREATE";
export const LINK_LIST = "LINK_LIST";
export const LINK_GET_ONE = "LINK_GET_ONE";
export const LINK_EDIT = "LINK_EDIT";
export const LINK_TO_REMOVE = "LINK_TO_REMOVE";
export const LINK_REMOVE = "LINK_REMOVE";

export const linkCreate = (data) => {
	const isSocial = !!data.isSocial;

	const payload = apiPost("/link", { ...data, isSocial });

	return { type: LINK_CREATE, payload: payload };
};

export const linkList = () => {
	const payload = apiGet("/link");

	return { type: LINK_LIST, payload: payload };
};

export const linkGet = (id) => {
	const payload = apiGet(`/link/edit/${id}`);
	return { type: LINK_GET_ONE, payload: payload };
};

export const linkEdit = (id, data) => {
	const isSocial = !!data.isSocial;
	const payload = apiPut(`/link/edit/${id}`, { ...data, isSocial });
	return { type: LINK_EDIT, payload: payload };
};

export const linkRemove = (link) => {
	const payload = apiDelete(`/link/${link.id}`);
	return { type: LINK_REMOVE, payload: payload };
};

export const setLinkToRemove = (link) => {
	return { type: LINK_TO_REMOVE, payload: link };
};
