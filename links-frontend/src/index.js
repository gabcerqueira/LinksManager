import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/main.scss";
import TokenRefresher from "./Components/tokenRefresher/TokenRefresher";

ReactDOM.render(
	<Provider store={store}>
		<TokenRefresher />
		<App />
	</Provider>,
	document.getElementById("root")
);
