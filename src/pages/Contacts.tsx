import React from 'react';
import { Container, Box, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';

const useStyles = makeStyles({
    block:{
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
    },
    contactContainer: {
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
    },
    contactBackground: {
        width: "100%",
        minHeight: 400,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
});

const Contacts = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.block)}>
            <Box className={classNames(classes.contactContainer)}>
                <Box className={classes.contactBackground}
                    sx={{backgroundImage: `url(${require("../assets/images/contatti.jpg")})`}}>
                </Box>
                <a href="mailto:studioarchitettociantia@gmail.com"><span>studioarchitettociantia@gmail.com</span></a>
                <a href="tel:+393701212833"><span>+39 370 1212833</span></a>
            </Box>
        </Container>
    )
}
  
export default Contacts;