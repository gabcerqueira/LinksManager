import { useEffect } from "react";
import { tokenHandler } from "../../helpers/tokenHelper";
import { getToken } from "../../helpers/accountHelper";
import { connect } from "react-redux";
import { getFreshToken } from "../../actions/accountActions";

const TokenRefresher = (props) => {
	const { getFreshToken } = props;
	const TRESHOLD = 90;
	const calculate = () => {
		const token = getToken();

		const expires = tokenHandler(token);
		const secondsToExpire = expires - Date.now() / 1000;

		return secondsToExpire;
	};

	useEffect(() => {
		const secondsToExpire = calculate() - TRESHOLD;
		const id = setTimeout(getFreshToken, secondsToExpire * 1000);

		return () => clearTimeout(id);
	}, [getFreshToken]);

	//setInterval(calculate, 1000);
	return null;
};
const mapStateToProps = (state) => {
	return { account: state.account.account };
};

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);
