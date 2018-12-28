import React from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";
import Fab from "@material-ui/core/Fab";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

import CardVideo from "./components/cardVideo";

const responsive = {
	0: {
		items: 1
	},
	1024: {
		items: 2
	}
}

const stagePadding = {
	paddingLeft: 56,
	paddingRight: 0
}

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentIndex: 0
		}
	}

	onSlideChanged = (e) => {
		this.setState({ currentIndex: e.item });
	}

	slideNext = () => {
		this.setState({ currentIndex: this.state.currentIndex + 1 })
	}

	slidePrev = () => {
		this.setState({ currentIndex: this.state.currentIndex - 1 })
	}

	_onRenderItems() {
		return this.props.data.map(d => {
			//debugger;
			return (
				<CardVideo data={d} />
			)
		});
	}

	componentDidMount() {
		this.props.getData();
	}

	render() {


		return (
			<div style={{ position: "relative", marginTop: "10px" }}>
				<div style={{ position: "absolute", zIndex: 1, top: "40%", left: "5px" }} >
					<Fab color="primary" onClick={() => this.slidePrev()}>
						<ArrowBackIos />
					</Fab>
				</div>
				<div>
					<AliceCarousel
						dotsDisabled
						buttonsDisabled
						mouseDragEnabled
						swipeDisabled

						stagePadding={stagePadding}
						responsive={responsive}
						slideToIndex={this.state.currentIndex}
						items={this._onRenderItems()}

						onSlideChanged={this.onSlideChanged}
					/>
				</div>
				<div style={{ position: "absolute", zIndex: 1, top: "40%", right: "5px" }} >
					<Fab color="primary" onClick={() => this.slideNext()}>
						<ArrowForwardIos />
					</Fab>
				</div>
			</div>
		);
	}
}