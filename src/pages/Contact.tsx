import React, { useRef } from 'react';
import { Container, Box, Divider, Card, CardContent, CardActions, TextField, IconButton, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import emailjs from '@emailjs/browser';
import { relative } from 'node:path/win32';

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
        position: "relative",
        width: "100%",
        minHeight: 500,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    },
    contactCard: {
        margin: "auto",
        marginTop: 100,
        marginBottom: 100,
        padding: "40px 0px 20px 0px",
        letterSpacing: "1.5px !important",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 40,
    },
    contactCardContent: {
        display: "flex",
        flexDirection: 'column',
        gap: 50,
        margin: "auto",
        width: 550,
    },
    contactCardField: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    contactCardTextField: {
        '& .MuiInput-underline': {
            "&:hover fieldset": {
                borderBottomColor: variables.red,
            },
            '&:after': {
                borderBottomColor: variables.darkyellow,
            },
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: variables.darkgrey,
            },
            '&.Mui-focused fieldset': {
                borderColor: variables.darkyellow
            },
        },
    },
    cardActions: {
        paddingTop: "30px !important",
        display: "flex",
        justifyContent: "space-evenly",
        "& > button":{
            backgroundColor: variables.white,
            color: variables.darkgrey,
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
            backgroundColor: variables.darkyellow,
            color: variables.white,
        },
    }
});

const Contact = () => {
    const classes = useStyles(theme);
    const [formStatus, setFormStatus] = React.useState('Ready')
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...');
        console.log(form.current)
        emailjs.sendForm('service_hl0jjhd', 'template_wxrbhvf', form.current, 'k3SM_BpaU2V2jILdD')
            .then((result) => {
                console.log("odbsaoba")
                setFormStatus('Sent');
            }, (error) => {
                setFormStatus('Error');
        });
    }

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
            <Card sx={{ maxWidth: 700}} className={classes.contactCard}>
                <h2>Richiesta Informazioni</h2>
                <form ref={form} onSubmit={onSubmit}>
                    <CardContent className={classes.contactCardContent}>
                        <Box className={classes.contactCardField}>
                            <span>Nome</span>
                            <TextField id="user_name" name="user_name" variant="standard" placeholder="John Doe" className={classes.contactCardTextField} />
                        </Box>
                        <Box className={classes.contactCardField}>
                            <span>E-mail</span>
                            <TextField id="user_email" name="user_email" variant="standard" placeholder="john.doe@email.com" className={classes.contactCardTextField}/>
                        </Box>
                        <Box className={classes.contactCardField}>
                            <span>Messaggio</span>
                            <TextField id="message" name="message" variant="outlined" multiline rows={4} placeholder="Oggetto email" className={classes.contactCardTextField}/>
                        </Box>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button variant="contained" endIcon={<SendIcon fontSize='large' />} onClick={onSubmit}>
                            Invia&nbsp;
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </Container>
    )
}
  
export default Contact;