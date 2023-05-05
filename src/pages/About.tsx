import React from 'react';
import { Box, Container, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import classnames from 'classnames';
import { Parallax } from 'react-scroll-parallax';

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
    },
    block:{
        margin: "auto !important",
        [theme?.breakpoints.only('xs')]: {
            gap: 30,
            margin: "30px 0px 0px 0px",
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
            border: "3px solid " + variables.darkyellow,
            borderRadius: 25,
            marginRight: 15,
            [theme?.breakpoints.up('sm')]: {
                width: 150,
            },
            [theme?.breakpoints.down('md')]: {
                width: 70,
            },
        },
        "& > h1": {
            color: variables.black,
        },
        [theme?.breakpoints.only('xs')]: {
            marginBottom: 35,
        },
    },
    image: {
        justifyContent: "center",
        display: "flex",
        "& > img":{
            width: "100%",
            "&.darkborder": {
                border: "7px solid " + variables.darkgrey,
            },
            "&.lightborder": {
                border: "7px solid " + variables.midgrey,
            },
        }
    },
    imageWide:  {
        position: "relative",
        height: "100%",
        minHeight: 700,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    text: {
        alignItems: "center",
        display: "flex",
        textAlign: "justify",
        letterSpacing: 1.5,
        lineHeight: 1.5,
        padding: "0px 20px",
        fontSize: "1.2rem",
        "& > p::first-letter": {
            fontWeight: "bold",
            fontSize: "3.25rem",
            marginLeft: -2,
            lineHeight: 1,
        },
        "& > p > a:hover":{
            textDecoration: "underline"
        }
    },
    textOnly: {
        position: "relative"  
    },
    textNextPic: {
        padding: "0px 50px",
        [theme?.breakpoints.up('xs')]: {
            padding: "0px 50px",
        },
        [theme?.breakpoints.only('xs')]: {
            padding: "0px 20px",
        },
    },
    aboutContainer: {
        margin: "0px 40px 50px 50px",
        display: "flex !important",
        gap: 50,
        flexDirection: "column",
        [theme?.breakpoints.only('xs')]: {
            gap: 0,
            padding: "0px !important"
        },
    },
    dividerText: {
        position: "absolute",
        height: "2px !important",
        alignSelf: "flex-end !important",
        background: variables.darkyellow,
        borderWidth: "1px !important",
        borderRadius: 10,
        width: 80,
        top: 40,
        left: -90,
        [theme?.breakpoints.only('xs')]: {
            width: "50%",
            marginTop: "40px !important",
        },
    },
    dividerTextPic: {
        margin: "0px !important"
    }
});

const About = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("container", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>Profilo</h1>
            </Box>
            <Container className={classes.aboutContainer}>
                <Grid container className={classes.block} maxWidth={"lg"} justifyContent="center" alignItems="center" columnSpacing={{xs: 0, sm: 4}}>
                    <Grid item sm={4} md={4} lg={4} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me.jpg")} className={"darkborder"}/>
                    </Grid>
                    <Grid item sm={7} md={7} lg={7} className={classnames(classes.text, classes.textNextPic)}>
                        <p>
                            Il mio percorso formativo si orienta verso gli studi tecnici e si completa con il conseguimento della laurea in Architettura presso
                            l’<a href="https://unikore.it/" target="_blank"><i><b>Università degli Studi di Enna “Kore”</b></i></a>, trattando in tesi di laurea il tema del recupero e restauro di un rudere dell’archeologia
                            industriale denominato “ex Istituto tecnico Industriale” nel Comune di Piazza Armerina e della valorizzazione delle tradizioni storiche,
                            folcloristiche e culinarie della città.
                        </p>
                    </Grid>
                </Grid>
                <Divider className={classnames(classes.dividerText)} flexItem
                    sx={{display: {xs: "block", sm: "none"} }}/>
                <Grid container className={classes.block} maxWidth={"md"} justifyContent="center" alignItems="center" columnSpacing={{xs: 0, sm: 2}}>
                    <Grid item sm={7} md={7} lg={7} className={classnames(classes.text, classes.textNextPic)}>
                        <p>
                            Già all’interno della facoltà ho partecipato a diversi progetti e concorsi di progettazione trovandomi, inoltre, sempre a contatto con il
                            mondo del lavoro collaborando con l’impresa edile di famiglia. Ho arricchito le mie conoscenze con viaggi di istruzione e corsi di
                            formazione approfondendo i miei interessi nel campo della ricerca storica, nell’evoluzione architettonica contemporanea e nelle tecniche restauro.
                        </p>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me2.jpg")} className={"lightborder"}/>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"xl"} justifyContent="center" alignItems="center" columnSpacing={{xs: 0, sm: 4}}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box sx={{backgroundImage: `url(${require("../assets/images/me3.jpg")})`}} className={classnames(classes.imageWide)}></Box>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"lg"} justifyContent="center">
                    <Grid item sm={12} md={12} lg={12} className={classnames(classes.text, classes.textOnly)}>
                        <Divider className={classnames(classes.dividerText)}/>
                        <p>
                            L’attività progettuale si sviluppa prevalentemente nel settore dell’abitativo, del restauro e del retail, oltre alla progettazione di installazioni
                            temporanee e allestimenti per mostre, eventi culturali e spettacoli teatrali.
                        </p>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"lg"} justifyContent="center" alignItems="center" columnSpacing={{xs: 0, sm: 4}}>
                    <Grid item sm={4} md={4} lg={4} className={classnames(classes.image)}>
                        <img src={require("../assets/images/me4.jpg")} className={"lightborder"}/>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={classnames(classes.text, classes.textNextPic)}>
                        <p>
                            Le mie esperienze lavorative più rilevanti mi hanno visto coinvolto in collaborazioni con il Comune di Piazza Armerina nella progettazione
                            e direzione dei lavori per il restauro della Basilica Cattedrale Maria SS delle Vittorie, progetto della Piazza Garibaldi e intervento di
                            riqualificazione urbana di Via Misericordia.
                        </p>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"lg"}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box sx={{backgroundImage: `url(${require("../assets/images/me5.jpg")})`}} className={classnames(classes.imageWide)}></Box>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"lg"}>
                    <Grid item sm={12} md={12} lg={12} className={classnames(classes.text, classes.textOnly)}>
                        <Divider className={classnames(classes.dividerText)}/>
                        <p>
                            Ho collaborato con lo studio di architettura <b><i>KWGroup</i></b> di Catania per la progettazione del
                            nuovo <b><i>Hilton Hotel</i></b> di Capomulini (riqualificando la struttura alberghiera dell’ex Perla Jonica), cooperando con professionisti che esercitano
                            la loro professione nel settore del lusso come la stilista Marella Ferrera, l’architetto inglese Tom Russell e il landscape designer tedesco Knud Megerle.
                        </p>
                    </Grid>
                </Grid>
            </Container> 
        </Container>
    )
}
  
export default About;