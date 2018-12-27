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
				<div>
					<NavBar />
					<Link to="/" title="asd">Home</Link>
					<Link to="/details/" title="asd">Details</Link>
				</div>
				<Provider store={store}>
					<Route path="/" exact component={homeContainer}></Route>
					<Route path="/details/" component={() => <div>hola mundo</div>} />
				</Provider>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
