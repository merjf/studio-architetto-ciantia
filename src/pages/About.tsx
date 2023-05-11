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
        alignSelf: "center",
        width: "100%",
        [theme?.breakpoints.down('md')]: {
            flexDirection: "column !important",
            gap: 50,
            "& > div": {
                width: "100%",
                margin: "auto",
                maxWidth: "80%"
            }
        },
        [theme?.breakpoints.only('xs')]: {
            margin: "30px 0px 0px 0px",
            "& > div": {
                maxWidth: "100%"
            }
        },
    },
    blockImageOnly:{
        [theme?.breakpoints.down('md')]: {
            "& > div": {
                maxWidth: "100%"
            }
        },
    },
    aboutContainer: {
        margin: "0px 40px 0px 50px",
        display: "flex !important",
        gap: 50,
        flexDirection: "column",
        [theme?.breakpoints.only('xs')]: {
            gap: 50,
            padding: "0px !important"
        },
    },
    titleBox: {
        display: "flex",
        alignItems: "baseline",
        marginLeft: 20,
        marginBottom: 80,
        "& > hr":{
            border: "2.5px solid " + variables.darkyellow,
            borderRadius: 25,
            marginRight: 20,
            marginLeft: -30,
            marginTop: 17,
            [theme?.breakpoints.up('sm')]: {
                width: 130,
            },
            [theme?.breakpoints.down('md')]: {
                width: 100,
            },
            [theme?.breakpoints.only('xs')]: {
                width: 80,
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
            [theme?.breakpoints.up('md')]: {
                "&.darkborder": {
                    border: "2px solid " + variables.darkgrey,
                },
                "&.lightborder": {
                    border: "2px solid " + variables.darkgrey,
                },
            },
        }
    },
    imageWide:  {
        position: "relative",
        height: "100%",
        minHeight: 600,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        [theme?.breakpoints.down('md')]: {
            backgroundSize: "cover",
        }
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
            fontSize: "2.5rem",
            marginLeft: -2,
            lineHeight: 1,
        },
        "& > p > a:hover":{
            textDecoration: "underline"
        }
    },
    textOnly: {
        position: "relative",
        padding: "0px 80px",
        [theme?.breakpoints.down('md')]: {
            padding: "0px 20px",
        }
    },
    textPicReversed: {
        [theme?.breakpoints.down('md')]: {
            flexDirection: "column-reverse !important"
        }
    },
    textNextPic: {
        padding: "0px 50px",
        [theme?.breakpoints.up('md')]: {
            padding: "0px 50px",
        },
        [theme?.breakpoints.down('md')]: {
            padding: "0px 20px",
        },
        [theme?.breakpoints.only('xs')]: {
            padding: "0px 20px",
        },
    },
    divider: {
        width: 180,
        height: "3px !important",
        alignSelf: "center !important",
        background: variables.darkyellow,
        borderWidth: "1px !important",
        borderRadius: 10,
    },
    dividerText: {
        position: "absolute",
        height: "3px !important",
        alignSelf: "flex-end !important",
        background: variables.darkyellow,
        borderWidth: "1px !important",
        borderRadius: 10,
        width: 70,
        top: 31,
        left: 0,
        [theme?.breakpoints.down('md')]: {
            display: "none",
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
                            l’<a href="https://unikore.it/" target="_blank"><b>Università degli Studi di Enna “Kore”</b></a>, trattando in tesi di laurea il tema del recupero e restauro di un rudere dell’archeologia
                            industriale denominato “ex Istituto tecnico Industriale” nel Comune di Piazza Armerina e della valorizzazione delle tradizioni storiche,
                            folcloristiche e culinarie della città.
                        </p>
                    </Grid>
                </Grid>
                <Divider className={classnames(classes.divider)} flexItem sx={{display: {xs: "block", md: "none"} }}/>
                <Grid container className={classnames(classes.block, classes.textPicReversed)} maxWidth={"md"} justifyContent="center" alignItems="center" columnSpacing={{xs: 0, sm: 2}}>
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
                <Grid container className={classnames(classes.block, classes.blockImageOnly)} maxWidth={"lg"} justifyContent="center" alignItems="center" columnSpacing={{xs: 0, sm: 4}}>
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
                <Divider className={classnames(classes.divider)} flexItem sx={{display: {xs: "block", md: "none"} }}/>
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
                <Grid container className={classnames(classes.block, classes.blockImageOnly)} maxWidth={"lg"}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box sx={{backgroundImage: `url(${require("../assets/images/me5.jpg")})`}} className={classnames(classes.imageWide)}></Box>
                    </Grid>
                </Grid>
                <Grid container className={classes.block} maxWidth={"lg"} justifyContent="center">
                    <Grid item sm={12} md={12} lg={12} className={classnames(classes.text, classes.textOnly)}>
                        <Divider className={classnames(classes.dividerText)}/>
                        <p>
                            Ho collaborato con lo studio di architettura <a href="https://kwg-architects.com/"><b>KWGroup</b></a> di Catania per la progettazione del
                            nuovo <a href="https://www.hiltonhotels.it/"><b>Hilton Hotel</b></a> di Capomulini (riqualificando la struttura alberghiera dell’ex Perla Jonica), cooperando con professionisti che esercitano
                            la loro professione nel settore del lusso come la stilista Marella Ferrera, l’architetto inglese Tom Russell e il landscape designer tedesco Knud Megerle.
                        </p>
                    </Grid>
                </Grid>
                <Divider className={classnames(classes.divider)} flexItem sx={{display: {xs: "block", md: "none"} }}/>
            </Container> 
        </Container>
    )
}
  
export default About;