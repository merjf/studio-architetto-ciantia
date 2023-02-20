import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import variables from '../assets/style/variable.module.scss';

const useStyles = makeStyles({
    footer: {
        width: "-webkit-fill-available",
        display: "flex",
        position: "fixed",
        bottom: 0,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20,
        height: "50px",
        borderTop: "1px solid " + variables.lightgrey,
        padding: "0px 5px",
        backgroundColor: variables.black,
        zIndex: 5,
        "& > img":{
            maxHeight: 35
        }
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            {/* <Box> */}
                <img
                    src={require("../assets/images/logo_simple.png")}
                />
            {/* </Box> */}
        </footer>
    )
}

export default Footer;
