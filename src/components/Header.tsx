import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { theme } from '../utils/Utils';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: variables.white + " !important",
        borderBottom: "2px solid " + variables.lightgrey,
        boxShadow: "unset !important"
    },
    toolbar: {
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    leftContainer: {
        flexGrow: 1,
    },
    toolbarItem: {
        borderRadius: "5px",
        padding: 8,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        "&:hover": {
            backgroundColor: variables.lightgrey,
            color: variables.lightblue,
        }
    },
    logoItem: {
        fontSize: "1.2rem",
        fontWeight: 700,
        paddingLeft: 5,
        letterSpacing: 1,
    },
})

const Header = () => {
    const classes = useStyles(theme);

    return (
        <Box>
            <AppBar position="relative" component="nav" className={classes.navbar}>
                <Toolbar className={classes.toolbar} disableGutters>
                    <Box component="div" className={classes.leftContainer} sx={{ display: { xs: 'block' } }}>
                        <Link to="/">
                            <span className={classnames(classes.toolbarItem, classes.logoItem)}>
                                Template
                            </span>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
