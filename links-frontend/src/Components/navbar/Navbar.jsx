import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/accountActions";

function Navbar(props) {
	const { signOut, account } = props;

	if (!account) {
		return <Redirect to="/sign-in" />;
	}

	const signOutHandler = (e) => {
		e.preventDefault();
		signOut();
	};
	return (
		<nav className="navbar navbar-expand-lg bg-primary text-light">
			<div className="container d-flex w-100 justify content-around">
				<div>
					<span>
						<i className="fas fa-arrow-left fa-2x">
							<Link to="/">BACK</Link>
						</i>
					</span>
				</div>

				<div>
					<span>
						<i className="fab fa-staylinked fa-3x text-white">LinkIn</i>
					</span>
				</div>

				<div>
					<span>
						<button className="btn btn-clear" onClick={signOutHandler}>
							<i className="fas fa-sign-out-alt fa-2x text-white">EXIT</i>
						</button>
					</span>
				</div>
			</div>
		</nav>
	);
}

const mapStateToProps = (state) => {
	return { account: state.account.account };
};

export default connect(mapStateToProps, { signOut })(Navbar);
