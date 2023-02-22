import React from 'react';
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';

const useStyles = makeStyles({
    block: {
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
    },
    
});

const About = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.block)}>
            About
        </Container>
    )
}
  
export default About;