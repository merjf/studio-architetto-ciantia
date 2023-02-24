import React from 'react';
import { Container, Grid } from "@mui/material";
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
        margin: "auto !important"
    },
    image: {
        justifyContent: "center",
        display: "flex",
        "& > img":{
            height: 280
        }
    },
    text: {
        // alignItems: "center",
        // display: "flex"
        marginTop: "40px !important",
    }
});

const About = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.container)}>
            <Grid container className={classes.block} maxWidth={"lg"}>
                <Grid item sm={4} md={4} lg={4} className={classes.image}>
                    <img src={require("../assets/images/me.jpg")} />
                </Grid>
                <Grid item sm={8} md={8} lg={8} className={classes.text}>
                    <p>
                        Il mio percorso formativo si orienta verso gli studi tecnici e si completa con il conseguimento della laurea in Architettura presso
                        l’Università degli Studi di Enna “Kore”, trattando in tesi di laurea il tema del recupero e restauro di un rudere dell’archeologia
                        industriale denominato “ex Istituto tecnico Industriale” nel Comune di Piazza Armerina e della valorizzazione delle tradizioni storiche,
                        folcloristiche e culinarie della città.
                    </p>
                </Grid>
                <Grid item sm={8} md={8} lg={8} className={classes.text}>
                    <p>
                        Il mio percorso formativo si orienta verso gli studi tecnici e si completa con il conseguimento della laurea in Architettura presso
                        l’Università degli Studi di Enna “Kore”, trattando in tesi di laurea il tema del recupero e restauro di un rudere dell’archeologia
                        industriale denominato “ex Istituto tecnico Industriale” nel Comune di Piazza Armerina e della valorizzazione delle tradizioni storiche,
                        folcloristiche e culinarie della città.
                    </p>
                </Grid>
                <Grid item sm={4} md={4} lg={4} className={classes.image}>
                    <img src={require("../assets/images/me.jpg")} />
                </Grid>
            </Grid>
        </Container>
    )
}
  
export default About;