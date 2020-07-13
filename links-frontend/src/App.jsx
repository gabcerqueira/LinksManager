import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// <-- Views -->
import Home from "./views/home/Home";
import SignIn from "./views/signIn/SignIn";
import SignUp from "./views/signUp/SignUp";
import ManageLinks from "./views/manage/links/Links";
import CreateLink from "./views/manage/createLink/CreateLink";
import EditLink from "./views/manage/editLink/EditLink";

function App() {
	return (
		<div className="App">
			<Router>
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

export default App;
