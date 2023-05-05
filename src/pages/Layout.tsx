import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import variables from '../assets/style/variable.module.scss';
import { Box } from "@mui/material";
import { theme } from "../utils/Utils";

const useStyles = makeStyles({
    main: (theme:any) =>({
        maxWidth: "unset !important",
        position: "relative",
        zIndex: 2,
        backgroundColor: variables.white,
        marginBottom: "400px !important",
        [theme?.breakpoints.down('md')]: {
            marginBottom: "570px !important",
        },
        [theme?.breakpoints.only('xs')]: {
            marginBottom: "600px !important",
        },
    })
})

const Layout = () => {
    const classes = useStyles(theme);
    
    return (
        <>
            <Header />
            <Box className={classes.main}>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}

export default Layout;
