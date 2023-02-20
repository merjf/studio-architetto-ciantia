import React from 'react';
import { Container, Box, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';

const useStyles = makeStyles({
    contactContainer: {
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
        "& > img":{
            width: "100%",
            maxHeight: 400,
        }
    },
});

const Contacts = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main")}>
            <Box className={classNames(classes.contactContainer)}>
                <img src={require("../assets/images/contatti.jpg")} />
                <a><span>studioarchitettociantia@gmail.com</span></a>
                <a href=""><span>+39 370 1212833</span></a>
            </Box>
        </Container>
    )
}
  
export default Contacts;