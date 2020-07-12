import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<h1>Links</h1>
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/sign-in">Sign in</Link>
						</li>
						<li>
							<Link to="/sign-up">Sign Up</Link>
						</li>
						<li>
							<Link to="/manage/links/create">Create Link</Link>
						</li>
					</ul>
				</div>
				<Switch>
					<Route exact path="/sign-in">
						<h1>Sign In</h1>
					</Route>
					<Route exact path="/sign-up">
						<h1>Sign Up</h1>
					</Route>
					<Route exact path="/manage/links/create">
						<h1>Create Link</h1>
					</Route>
					<Route exact path="/manage/links/edit">
						<h1>Edit link</h1>
					</Route>
					<Route exact path="/manage/links">
						<h1>Links</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
