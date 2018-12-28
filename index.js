import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import HomeContainer from "./src/screens/home/container";
import DetailsContainer from "./src/screens/details/container";
import NavBar from "./src/components/navbar";
import { store } from "./src/store";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Provider store={store}>
					<Switch>
						<Route path="/" exact component={HomeContainer}></Route>
						<Route path="/details/:id" exact component={DetailsContainer} />
					</Switch>
				</Provider>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
