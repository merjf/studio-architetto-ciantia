import React from 'react';
import { Container, Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import { useLoaderData } from 'react-router-dom';

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
});

const Project = () => {
    const classes = useStyles(theme);
    const project:any = useLoaderData();

    return (
        <Container className={classNames("main", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>{project.title}</h1>
            </Box>

        </Container>
    )
}

export default Project;