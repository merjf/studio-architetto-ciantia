import React from 'react';
import { Box, Container, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import classnames from 'classnames';
import { display } from '@mui/system';

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
    },
    block:{
        margin: "auto",
        marginBottom: 30,
        [theme?.breakpoints.only('xs')]: {
            gap: 30,
        },
    },
    titleBox: {
        display: "flex",
        alignItems: "center",
        marginLeft: 20,
        marginBottom: 80,
        "& > hr":{
            width: 150,
            height: 1,
            border: "2px solid " + variables.darkyellow,
            marginRight: 15,
            [theme?.breakpoints.up('sm')]: {
                width: 150,
            },
            [theme?.breakpoints.down('md')]: {
                width: 70,
            },
        },
        "& > h1": {
            color: variables.darkgrey,
        },
        [theme?.breakpoints.only('xs')]: {
            marginBottom: 50,
        },
    },
    image: {
        justifyContent: "center",
        display: "flex",
        "& > img":{
            width: "100%",
        }
    },
    text: {
        alignItems: "center",
        display: "flex",
        padding: "0px 40px",
        textAlign: "justify",
        letterSpacing: 2,
        [theme?.breakpoints.up('xs')]: {
            padding: "0px 20px",
        },
        [theme?.breakpoints.only('xs')]: {
            padding: 0,
        },
        "& > p::first-letter": {
            fontWeight: "bold",
            fontSize: "1.9rem",
        }
    },
    aboutContainer: {
        margin: "0px 40px"
    },
    dividerText: {
        height: "2px !important",
        alignSelf: "center !important",
        background: variables.darkyellow,
        borderWidth: "2px !important",
        borderRadius: 5,
        marginRight: "15px !important",
        marginTop: "20px !important"
    }
});

const About = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>Profilo</h1>
            </Box>
            <Container className={classes.aboutContainer}>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={6} md={6} lg={6} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me.jpg")} />
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={classes.text}>
                        <p>
                            Il mio percorso formativo si orienta verso gli studi tecnici e si completa con il conseguimento della laurea in Architettura presso
                            l’Università degli Studi di Enna “Kore”, trattando in tesi di laurea il tema del recupero e restauro di un rudere dell’archeologia
                            industriale denominato “ex Istituto tecnico Industriale” nel Comune di Piazza Armerina e della valorizzazione delle tradizioni storiche,
                            folcloristiche e culinarie della città.
                        </p>
                    </Grid>
                </Grid>
                <Divider className={classnames(classes.dividerText)} flexItem
                    sx={{display: {xs: "block", sm: "none"}, margin: "10px 10px 30px 10px !important"}}/>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={8} md={8} lg={8} className={classes.text}>
                        <p>
                            Già all’interno della facoltà ho partecipato a diversi progetti e concorsi di progettazione trovandomi, inoltre, sempre a contatto con il
                            mondo del lavoro collaborando con l’impresa edile di famiglia. Ho arricchito le mie conoscenze con viaggi di istruzione e corsi di
                            formazione approfondendo i miei interessi nel campo della ricerca storica, nell’evoluzione architettonica contemporanea e nelle tecniche restauro.
                        </p>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me2.jpg")} />
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={2} md={2} lg={2} sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                        <Divider className={classnames(classes.dividerText)} flexItem/>
                    </Grid>
                    <Grid item sm={10} md={10} lg={10} className={classes.text}>
                        <p>
                            L’attività progettuale si sviluppa prevalentemente nel settore dell’abitativo, del restauro e del retail, oltre alla progettazione di installazioni
                            temporanee e allestimenti per mostre, eventi culturali e spettacoli teatrali.
                        </p>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={8} md={8} lg={8} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me3.jpg")} />
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={6} md={6} lg={6} className={classnames(classes.text)}>
                        <p>
                            Le mie esperienze lavorative più rilevanti mi hanno visto coinvolto in collaborazioni con il Comune di Piazza Armerina nella progettazione
                            e direzione dei lavori per il restauro della Basilica Cattedrale Maria SS delle Vittorie, progetto della Piazza Garibaldi e intervento di
                            riqualificazione urbana di Via Misericordia.
                        </p>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me4.jpg")} />
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={2} md={2} lg={2} sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                        <Divider className={classnames(classes.dividerText)} flexItem/>
                    </Grid>
                    <Grid item sm={10} md={10} lg={10} className={classes.text}>
                        <p>
                            Ho collaborato con lo studio di architettura KWGroup di Catania per la progettazione del
                            nuovo Hilton Hotel di Capomulini (riqualificando la struttura alberghiera dell’ex Perla Jonica), cooperando con professionisti che esercitano
                            la loro professione nel settore del lusso come la stilista Marella Ferrera, l’architetto inglese Tom Russell e il landscape designer tedesco Knud Megerle.
                        </p>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"md"}>
                    <Grid item sm={10} md={10} lg={10} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me5.jpg")} />
                    </Grid>
                </Grid>
            </Container> 
        </Container>
    )
}
  
export default About;