import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import variables from '../assets/style/variable.module.scss';

const useStyles = makeStyles({
    block: {
       
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={"main"}>
            
        </Container>
    )
}

export default Home;