import React from "react";
import Button from "@material-ui/core/Button"

export default class Home extends React.Component {

	componentDidMount() {
		this.props.getData();
	}

	render() {
		return (
			<div>
				<Button variant="contained" color="primary">
					asd
				</Button>
				<button>asd</button>
			</div>
		);
	}
}
