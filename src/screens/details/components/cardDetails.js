import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PopoverDetails from "../components/popoverDetails";

const styles = {
    card: {
        minWidth: 275,
        position: "absolute",
        zIndex: 1000,
        height: "100%",
        width: "70%",
        background: "linear-gradient(to right, black, transparent)",
        textAlign: "left",
        boxShadow: "none"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: "white"
    },
    pos: {
        marginTop: 20,
        color: "white",
        maxWidth: "400px"
    },
    chipRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

const SimpleCard = ({ data }) => {
    const { cast, countries, short_summary, genres, metadata } = data;

    return (
        <Card style={styles.card}>
            <CardContent>
                <Typography variant="h3" component="h2" style={{ color: "white" }} >
                    {metadata.titulo_internacional}
                </Typography>
                <Typography component="p" style={styles.pos}>
                    {short_summary}
                </Typography>
                <Typography variant="h6" component="h2" style={styles.pos}>
                    Generos:
                </Typography>
                <Typography component="p" style={{ color: "white" }}>
                    {genres}
                </Typography>
                <Typography variant="h6" component="h2" style={styles.pos}>
                    País:
                </Typography>
                <Typography component="p" style={{ color: "white" }}>
                    {countries}
                </Typography>
                <Typography variant="h6" component="h2" style={styles.pos}>
                    Reparto:
                </Typography>
                <Typography component="div" style={styles.chipRoot}>
                    {cast.map((c, index) => {
                        return (
                            <PopoverDetails key={index} index={index} data={c} />
                        )
                    })}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}

export default SimpleCard;