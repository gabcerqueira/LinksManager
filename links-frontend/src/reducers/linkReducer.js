import {
	LINK_CREATE,
	LINK_LIST,
	LINK_GET_ONE,
	LINK_EDIT,
	LINK_TO_REMOVE,
	LINK_REMOVE,
} from "../actions/linkActions";

const initialState = {
	link: null,
	links: [],
};

function linkReducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case LINK_CREATE: {
			const response = payload ? payload.data : null;
			const link = response ? response.data : null;
			const message = response ? response.message : null;

			return { ...state, link: link, message: message };
		}
		case LINK_LIST: {
			const response = payload ? payload.data : null;
			const links = response ? response.data : null;
			const message = response ? response.message : null;

			return { ...state, links: links, message: message };
		}
		case LINK_GET_ONE: {
			const response = payload ? payload.data : null;
			const link = response ? response.data : null;
			const message = response ? response.message : null;

			return { ...state, link: link, message: message };
		}

		case LINK_EDIT: {
			const response = payload ? payload.data : null;
			const linker = response ? response.data : null;
			const message = response ? response.message : null;
			const links = state.links.map((link) =>
				link.id === linker.id ? (link = linker) : (link = link)
			);

			return { ...state, link: linker, links: links, message: message };
		}

		case LINK_TO_REMOVE: {
			return { ...state, linkToRemove: payload };
		}
		case LINK_REMOVE: {
			const links = state.links.filter(
				(link) => link.id !== state.linkToRemove.id
			);
			return { ...state, linkToRemove: null, links: links };
		}

		default:
			return state;
	}
}

export default linkReducer;
