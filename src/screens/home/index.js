import React from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			galleryItems: [1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),
			responsive: {
				0: {
					items: 1
				},
				1024: {
					items: 2
				}
			}
		}
	}

	componentDidMount() {
		this.props.getData();
	}

	render() {
		const handleOnDragStart = e => e.preventDefault()

		return (
			<AliceCarousel mouseDragEnabled items={this.state.galleryItems} responsive={this.state.responsive} />
		);
	}
}


/*
				<img src="/img1" onDragStart={handleOnDragStart} className="yours-custom-class" />
				<img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
				<img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
				<img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
				<img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />

*/