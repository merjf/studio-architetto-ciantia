import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Container } from "@mui/material";

const useStyles = makeStyles({
    main: {
        marginTop: "100px",
        marginBottom: "100px",
        textAlign: "center",
    }
})

const Layout = () => {
    const classes = useStyles();
    
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
