import { LINK_CREATE } from "../actions/linkActions";

const initialState = {
	link: null,
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

		default:
			return state;
	}
}

export default linkReducer;
