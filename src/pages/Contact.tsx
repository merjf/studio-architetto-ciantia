import React from 'react';
import { Container, Box, Grid, Link, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
    },
    block:{
        margin: "auto",
        marginBottom: 50,
    },
    titleBox: (theme:any) =>({
        display: "flex",
        alignItems: "center",
        marginLeft: 20,
        marginBottom: 80,
        "& > hr":{
            width: 150,
            height: 1,
            border: "2px solid " + variables.red,
            marginRight: 15,
            [theme?.breakpoints.up('sm')]: {
                width: 150,
            },
            [theme?.breakpoints.down('md')]: {
                width: 100,
            },
        },
        "& > h1": {
            color: variables.darkgrey,
        }
    }),
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
    },
});

const Contact = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>Contatti</h1>
            </Box>
            <Box className={classNames(classes.contactContainer)}>
                <Box className={classes.contactBackground}
                    sx={{backgroundImage: `url(${require("../assets/images/contatti.jpg")})`}}>
                </Box>
            </Box>
        </Container>
    )
}
  
export default Contact;