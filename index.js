import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import homeContainer from "./src/screens/home/container";
import NavBar from "./src/components/navbar";
import { store } from "./src/store";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Provider store={store}>
					<Route path="/" exact component={homeContainer}></Route>
					<Route path="/details/:id" component={() => <div>hola mundo</div>} />
				</Provider>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
