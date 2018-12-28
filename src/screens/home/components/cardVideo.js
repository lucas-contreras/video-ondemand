import React from "react";
import { pure } from "recompose";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow"

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    content: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        bottom: 0
    }
};

const formatString = (value) => {
    const totalWords = value.split(/\s/g);
    const newPrhase = totalWords.filter((t, index) => index <= 14).map((t, index, self) => {
        if (index == self.length - 1) {
            return "...";
        } else {
            return t;
        }
    });

    return newPrhase.join(" ");
}

const CardVideo = (props) => {
    const { uuid, metadata, short_summary } = props.data;
    const { img_large, img_medium, img_tv, titulo_internacional } = metadata

    return (
        <Card style={styles.card}>
            <CardActionArea onClick={() => props.redirectToDetails(uuid)} onDragStart={e => e.preventDefault()}>
                <CardMedia
                    style={styles.media}
                    image={img_tv}
                    title={titulo_internacional}
                >
                    <CardContent style={styles.content}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ color: "white" }}>
                            {titulo_internacional}
                            <PlayArrowIcon />
                        </Typography>
                        <Typography component="p" style={{ color: "white" }}>
                            {formatString(short_summary)}
                        </Typography>
                    </CardContent>
                </CardMedia>
            </CardActionArea>
        </Card>
    );
}

const EnhanceCard = pure(CardVideo);

export default EnhanceCard;