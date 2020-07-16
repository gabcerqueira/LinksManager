import { SIGN_UP } from "./SignUpActions";
import {
	setAccount,
	setToken,
	setRefreshToken,
} from "../../helpers/accountHelper";

const initialState = {
	account: null,
};

function signUpReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGN_UP:
			const response = payload ? payload.data : null;

			const account = response ? response.data : null;
			const metadata = response ? response.metadata : null;

			const token = metadata ? metadata.token : null;
			const refreshToken = metadata ? metadata.refreshToken : null;

			if (account) setAccount(account);
			if (token) setToken(token);
			if (refreshToken) setRefreshToken(refreshToken);

			return { ...initialState, account: account };

		default:
			return state;
	}
}

export default signUpReducer;
