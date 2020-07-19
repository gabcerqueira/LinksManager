import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
		<div className="App">
			<Router>
				<Link to="/manage/links/create">Link to create</Link>
				<Link to="/manage/links/edit">Link to edit</Link>
				<Link to="/manage/links">Link to manage links</Link>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/sign-in" component={SignIn} />
					<Route exact path="/sign-up" component={SignUp} />
					<Route exact path="/manage/links" component={ManageLinks} />
					<Route exact path="/manage/links/create" component={CreateLink} />
					<Route exact path="/manage/links/edit" component={EditLink} />
				</Switch>
			</Router>
		</div>
	);
}
const mapStateToProps = (state) => {
	return { account: state.account.account };
};

export default connect(mapStateToProps, { initAccount })(App);
