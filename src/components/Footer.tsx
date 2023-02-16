import React from "react";
import { Box, Divider, Link } from "@mui/material";
import { LinkedIn, GitHub, AlternateEmail, Instagram } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import variables from '../assets/style/variable.module.scss';

const useStyles = makeStyles({
    footer: {
        width: "-webkit-fill-available",
        display: "flex",
        position: "fixed",
        bottom: 0,
        alignItems: "center",
        height: "50px",
        borderTop: "1px solid " + variables.lightgrey,
        padding: "0px 5px",
        backgroundColor: variables.white,
        zIndex: 5,
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Box>
                <span>© 2023 - Template</span>
            </Box>
        </footer>
    )
}

export default Footer;
