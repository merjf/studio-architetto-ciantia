import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { theme } from '../utils/Utils';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "transparent !important",
        boxShadow: "unset !important"
    },
    toolbar: {
        width: "100%",
        margin: "auto",
        marginLeft: 100,
        justifyContent: "center",
        minHeight: "45px !important",
        gap: 50,
    },
    toolbarItem: {
        borderRadius: "5px",
        padding: 8,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        "&:hover": {
            backgroundColor: variables.lightgrey,
            color: variables.lightyellow,
        }
    },
    logoItem: {
        fontSize: "1rem",
        fontWeight: 700,
        paddingLeft: 5,
        letterSpacing: 1,
    },
})

const Header = () => {
    const classes = useStyles(theme);

    const menuItems = [{
        link: "/about",
        label: "About",
    },{
        link: "/work",
        label: "Work"
    },{
        link: "/contact",
        label: "Contact"
    }]

    return (
        <Box>
            <AppBar position="fixed" component="nav" className={classes.navbar}>
                <Toolbar className={classes.toolbar} disableGutters>
                    {menuItems.map((item) => {
                        return (
                            <Link to={item.link} key={item.link}>
                                <span className={classnames(classes.toolbarItem, classes.logoItem)}>
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
