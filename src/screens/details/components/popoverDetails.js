import React from "react";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Chip from '@material-ui/core/Chip';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default class SimplePopover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { anchorEl } = this.state;
        const { index, data } = this.props;
        const namePopover = `popper-detail-${index}`;

        const open = Boolean(anchorEl);

        return (
            <div>
                <Chip
                    aria-owns={open ? namePopover : undefined}
                    aria-haspopup="true"
                    label={data.name}
                    onClick={this.handleClick}
                />

                <Popover
                    id={namePopover}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center", }}
                    transformOrigin={{ vertical: "top", horizontal: "center", }}
                >
                    <Typography component="div">
                        <Card >
                            <CardActionArea>
                                <CardMedia style={{ height: "120px" }} image={data.image} />
                                <CardContent>
                                    <Typography component="div" >
                                        Personaje: {data.character}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Typography>
                </Popover>
            </div>
        );
    }
}