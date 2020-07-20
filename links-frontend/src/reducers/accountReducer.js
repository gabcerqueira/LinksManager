import {
	SIGN_IN,
	SIGN_UP,
	SIGN_OUT,
	INIT_ACCOUNT,
	REFRESH_TOKEN,
} from "../actions/accountActions";
import {
	setAccount,
	removeAccount,
	removeToken,
	removeRefreshToken,
	setToken,
	setRefreshToken,
	getAccount,
} from "../helpers/accountHelper";

const initialState = {
	account: null,
};

function accountReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGN_IN:
		case SIGN_UP:
			const response = payload ? payload.data : null;
			const account = response ? response.data : null;
			const metadata = response ? response.metadata : null;

			const token = metadata ? metadata.token : null;
			const refreshToken = metadata ? metadata.refreshToken : null;

			if (account) setAccount(account);
			if (token) setToken(token);
			if (refreshToken) setRefreshToken(refreshToken);

			return { ...state, account: account };

		case SIGN_OUT: {
			removeAccount();
			removeToken();
			removeRefreshToken();
			return { ...state, account: null };
		}

		case INIT_ACCOUNT: {
			const account = getAccount();

			return { ...state, account: account };
		}
		case REFRESH_TOKEN: {
			const response = payload ? payload.data : null;
			const metadata = response ? response.metadata : null;
			const token = metadata ? metadata.token : null;

			if (token) setToken(token);
			return state;
		}

		default:
			return state;
	}
}

export default accountReducer;
