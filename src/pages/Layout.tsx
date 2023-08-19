import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import variables from '../assets/style/variable.module.scss';
import { Box } from "@mui/material";
import { theme } from "../utils/Utils";
import ScrollToTop from "../utils/ScrollToTop";
import classnames from "classnames";

const useStyles = makeStyles({
    main: (theme:any) =>({
        maxWidth: "unset !important",
        position: "relative",
        zIndex: 2,
        backgroundColor: variables.white,
        marginBottom: 400,
        [theme?.breakpoints.down('md')]: {
            marginBottom: 570,
        },
        [theme?.breakpoints.only('xs')]: {
            marginBottom: 600,
        },
    }),
    mainLandscape: {
        [theme?.breakpoints.down('md')]: {
            marginBottom: "310px !important",
        },
    }
})

const Layout = () => {
    const classes = useStyles(theme);
    const [screenOrientationLabel, setScreenOrientationLabel] = useState((window.matchMedia("(orientation: portrait)").matches) ? 'portrait' : 'landscape');
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    const setScreenOrientation = () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            setScreenOrientationLabel('portrait')
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            setScreenOrientationLabel('landscape')
        }
    }
    window.addEventListener("resize", setScreenOrientation);

    const isMobile = () => {
        return currentWidth <= theme.breakpoints.values.sm;
    }

    const isMobileLandscapeOrientation = () => {
        return isMobile() && screenOrientationLabel === 'landscape';
    };

    return (
        <>
            <ScrollToTop>
                <Header />
                <Box className={classnames(isMobileLandscapeOrientation() ? classes.mainLandscape : "", classes.main)}>
                    <Outlet />
                </Box>
                <Footer />
            </ScrollToTop>
        </>
    )
}

export default Layout;
