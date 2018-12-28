import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

import LinearIndeterminate from "../../components/linearIndeterminate";
import CardDetails from "./components/cardDetails";

export default class Details extends React.Component {
	onRenderItems() {
		const { img_fanart_1, img_fanart_2, img_fanart_3, img_fanart_4 } = this.props.data.metadata;
		const imgFanarts = [img_fanart_1, img_fanart_2, img_fanart_3, img_fanart_4]

		return (
			imgFanarts.map(imgFan => {
				return <img src={imgFan} style={{ maxHeight: "529px", maxWidth: "960px" }} />
			})
		);
	}

	goBack = () => {
		this.props.history.goBack();
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getDataByUudi(id);
	}

	componentWillUnmount() {
		this.props.cleanState();
	}

	render() {
		const { goBack } = this;
		const { loading, loaded, data } = this.props;

		if (loading) {
			return (
				<div style={{ marginTop: "10px" }}>
					<LinearIndeterminate />
				</div>
			);
		}

		return (
			<div style={{ padding: "10px" }}>
				<Grid container >
					<Grid item xs={12} md={12}>
						<Paper style={{ minHeight: "529px", width: "100%", textAlign: "right", position: "relative", backgroundColor: "#141414" }} >
							<CardDetails data={data} goBack={goBack} />
							<div>
								<AliceCarousel
									dotsDisabled
									buttonsDisabled
									mouseDragEnabled
									swipeDisabled
									fadeOutAnimation
									autoPlay
									autoPlayInterval={5000}
									stopAutoPlayOnHover={false}
									items={this.onRenderItems()}
								/>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}