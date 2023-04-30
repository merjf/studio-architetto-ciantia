import React from 'react';
import { Container, Box, Divider, Card, CardContent, CardActions, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

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
    contactCard: {
        margin: "auto",
        marginTop: 100,
        marginBottom: 100,
        padding: "40px 0px 20px 0px",
    },
    contactCardContent: {
        display: "flex",
        flexDirection: 'column',
        gap: 50,
        margin: "auto",
        width: 550,
    },
    cardActions: {
        paddingTop: "30px !important",
        display: "flex",
        justifyContent: "space-evenly",
        "& > svg":{
            fill: variables.darkgrey,
            cursor: "pointer"
        },
        "& > svg:hover":{
            fill: variables.red
        }
    }
});

const Contact = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("container", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>Contatti</h1>
            </Box>
            <Box className={classNames(classes.contactContainer)}>
                <Box className={classes.contactBackground}
                    sx={{backgroundImage: `url(${require("../assets/images/contatti.jpg")})`}}>
                </Box>
            </Box>
            <Card sx={{ maxWidth: 900}} className={classes.contactCard}>
                <CardContent className={classes.contactCardContent}>
                    <Box sx={{display: "flex", gap: 10}}>
                        <Box>
                            <span>Nome</span>
                            <TextField id="standard-basic" variant="standard" />
                        </Box>
                        <Box>
                            <span>Cognome</span>
                            <TextField id="standard-basic" variant="standard" />
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                        <span>E-mail</span>
                        <TextField id="standard-basic" variant="standard" />
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column"}}>
                        <span>Oggetto</span>
                        <TextField id="standard-basic" variant="standard" multiline rows={4} />
                    </Box>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <DeleteIcon fontSize='large' />
                    <SendIcon fontSize='large' />
                </CardActions>
            </Card>
        </Container>
    )
}
  
export default Contact;