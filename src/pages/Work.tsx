import React from 'react';
import { Container, Box, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';

const useStyles = makeStyles({
    block: {
        margin: "auto",
        minHeight: "100vh",
        marginTop: 100,
    },
    
});

const Work = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.block)}>
            Porfolio
        </Container>
    )
}
  
export default Work;