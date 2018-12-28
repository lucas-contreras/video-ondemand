import React from "react";
import CircularIndeterminate from "../../components/circularIndeterminate";
import LinearIndeterminate from "../../components/linearIndeterminate";

export default class Details extends React.Component {

	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.getDataByUudi(id);
	}

	componentWillUnmount(){
		this.props.cleanState();
	}

	render() {
		const { loading, loaded } = this.props;

		if (loading) {
			return (
				<div style={{ marginTop: "10px" }}>
					<LinearIndeterminate />
				</div>
			);
		}

		return (
			<div>
				holaaaaaaaaaaaaaaaaaaaaaaaaaa
			</div>
		);
	}
}