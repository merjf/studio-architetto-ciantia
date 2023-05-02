import React, { useRef } from 'react';
import { Container, Box, Divider, Card, CardContent, CardActions, TextField, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import emailjs from '@emailjs/browser';

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
            border: "2px solid " + variables.darkyellow,
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
        letterSpacing: "1.5px !important",
    },
    cardActions: {
        paddingTop: "30px !important",
        display: "flex",
        justifyContent: "space-evenly",
        "& > button":{
            "& > svg": {
                fill: variables.darkgrey,
                cursor: "pointer"
            },
            "&.active":{
                backgroundColor: "transparent",
                // "& > svg > span":{
                //     backgroundColor: "transparent",
                // },
            },
            "&.focusVisible":{
                boxShadow: "0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5)",
                outline: "none",
            },
        },
        "& > button:hover":{
            backgroundColor: variables.white,
            "& > svg": {
                fill: variables.darkyellow
            }
        },
    }
});

const Contact = () => {
    const classes = useStyles(theme);
    const [formStatus, setFormStatus] = React.useState('Send')
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...');
        emailjs.sendForm('service_hl0jjhd', 'template_wxrbhvf', form.current, 'k3SM_BpaU2V2jILdD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    }

    // const cleanForm = (e) => {
    //     form.current.reset();
    // }

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
                <form ref={form} onSubmit={onSubmit}>
                    <CardContent className={classes.contactCardContent}>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <span>Nome</span>
                            <TextField id="user_name" name="user_name" variant="standard" placeholder="John Doe" />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <span>E-mail</span>
                            <TextField id="user_email" name="user_email" variant="standard" placeholder="john.doe@email.com"/>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <span>Messaggio</span>
                            <TextField id="message" name="message" variant="standard" multiline rows={4} placeholder="Oggetto email"/>
                        </Box>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <IconButton aria-label="Clear form" type="reset" >
                            <DeleteIcon fontSize='large' />
                        </IconButton>
                        <IconButton aria-label="Send email" type="submit">
                            <SendIcon fontSize='large'/>
                        </IconButton>
                    </CardActions>
                </form>
            </Card>
        </Container>
    )
}
  
export default Contact;