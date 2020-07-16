import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "./SignInActions";

function SignIn(props) {
	const { signIn, account } = props;

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		const data = { email: email, password: password };
		signIn(data);
	};

	if (account) {
		return <Redirect to="/manage/links" />;
	}

	return (
		<div className="container h-100 pt-5">
			<h1 className="mx-auto">Sign In</h1>
			<div className="d-flex flex-column h-100">
				<form onSubmit={submitHandler}>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							className="form-control"
						/>
					</div>
					<div>
						<button className="btn btn-primary btn-round">Submit</button>
					</div>
				</form>
				<div className="container text-center fixed-bottom pb-5">
					<div className="text-muted">Don't have an Account ?</div>
					<Link to="/sign-up">Sign Up</Link>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { account: state.signIn.account };
};

export default connect(mapStateToProps, { signIn })(SignIn);
