import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// <-- Views -->
import Home from "./views/home/Home";
import SignIn from "./views/signIn/SignIn";
import SignUp from "./views/signUp/SignUp";
import ManageLinks from "./views/manage/links/Links";
import CreateLink from "./views/manage/createLink/CreateLink";
import EditLink from "./views/manage/editLink/EditLink";

// <-- functions -->
import { initAccount } from "./actions/accountActions";

function App(props) {
	const { initAccount } = props;
	useEffect(() => {
		initAccount();
	}, [initAccount]);

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/sign-in" component={SignIn} />
					<Route exact path="/sign-up" component={SignUp} />
					<Route exact path="/manage/links" component={ManageLinks} />
					<Route exact path="/manage/links/create" component={CreateLink} />
					<Route exact path="/manage/links/edit/:id" component={EditLink} />
				</Switch>
			</Router>
		</>
	);
}
const mapStateToProps = (state) => {
	return { account: state.account.account };
};

export default connect(mapStateToProps, { initAccount })(App);
