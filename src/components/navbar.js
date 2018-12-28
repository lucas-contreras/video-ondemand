import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const NavBar = (props) => {
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" style={styles.grow}>
                        Video Ondemand
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
