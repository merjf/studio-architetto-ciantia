import React, { useRef } from 'react';
import { Container, Box, Divider, Card, CardContent, CardActions, TextField, IconButton, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { LoadingButton } from '@mui/lab';
import emailjs from '@emailjs/browser';
import { relative } from 'node:path/win32';

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
        [theme?.breakpoints.down('md')]: {
            paddingTop: "100px !important",
            marginTop: 0
        },
    },
    block:{
        margin: "auto",
        marginBottom: 50,
    },
    titleBox: (theme:any) =>({
        display: "flex",
        marginLeft: 20,
        marginBottom: 80,
        alignItems: "baseline",
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
        [theme?.breakpoints.only('xs')]: {
            marginBottom: 0,
        },
    },
    contactCardContent: {
        display: "flex",
        flexDirection: 'column',
        gap: 50,
        margin: "auto",
        width: 550,
        [theme?.breakpoints.down('md')]: {
            width: "70%",
        },
        [theme?.breakpoints.only('md')]: {
            width: "80%",
        },  
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
        position: "relative",
    },
    sendButton: {
        backgroundColor: variables.white + " !important",
        color: variables.darkgrey + " !important",
        boxShadow: "0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5)",
            outline: "none",
        "& > svg": {
            fill: variables.darkgrey + " !important",
        },
        "&:hover":{
            backgroundColor: variables.darkyellow + " !important",
            color: variables.white + " !important",
        },
        "&.focusVisible":{
            boxShadow: "0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5)",
            outline: "none",
        },
        "&.Mui-disabled": {
            color: variables.midgrey + " !important",
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12) !important",
        },
        "&.MuiButton-containedError": {
            backgroundColor: variables.white,
            color: variables.darkgrey + " !important",
            "& > span > svg": {
                backgroundColor: variables.red,
                borderRadius: "50%",
                fill: variables.white,
            },
        },
        "&.MuiButton-containedSuccess": {
            backgroundColor: variables.white,
            color: variables.darkgrey + " !important",
            "& > span > svg": {
                backgroundColor: variables.green,
                borderRadius: "50%",
                fill: variables.white,
            },
        },
    },
    clearButton: {
        bottom: -10,
        right: -220,
        "& > svg": {
            fill: variables.darkgrey,
        },
        "&:hover": {
            backgroundColor: variables.darkyellow + " !important",
            "& > svg": {
                fill: variables.white,
            },   
        }
    }
});

const Contact = () => {
    const classes = useStyles(theme);
    const form = useRef();
    const [formStatus, setFormStatus] = React.useState('ready');
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userMessage, setUserMessage] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('submitting');
        setTimeout(() => {
            // setFormStatus('sent');
            emailjs.sendForm('service_hl0jjhd', 'template_wxrbhvf', form.current, 'k3SM_BpaU2V2jILdD')
                .then((result) => {
                    setFormStatus('sent');
                }, (error) => {
                    setFormStatus('error');
            });
        }, 2500);
    }

    const getStatus = () => {
        switch(formStatus){
            case 'ready':
                return 'Invia'
            case 'submitting':
                return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
            case 'sent':
                return 'Messaggio Inviato'
            case 'error':
                return 'Errore, riprova'
            default: 
                return 'Invia'
        }
    }

    const getSendButtonColor = () => {
        switch(formStatus){
            case 'sent':
                return 'success'
            case 'error':
                return 'error'
            default: 
                return 'inherit'
        }
    }

    const clearForm = () => {
        setUserName('');
        setUserEmail('');
        setUserMessage('');
        setFormStatus('ready');
    }

    const getIcon = () => {
        switch(formStatus){
            case 'ready':
                return <SendIcon fontSize='large' />
            case 'sent':
                return <CheckIcon fontSize='large' />
            case 'error':
                return <CloseIcon fontSize='large' />
            default: 
                return <></>
        }
    }

    const isSendButtonDisabled = () => {
        if(userName !== '' && userEmail !== '' && userMessage !== ''){
            return formStatus === 'sent' || formStatus === 'error'   
        }
        return true;
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
            <form ref={form} onSubmit={onSubmit}>
                <Card sx={{ maxWidth: {xs: 370, sm: 500, md: 700} }} className={classes.contactCard}>
                    <h2>Richiesta Informazioni</h2>
                        <CardContent className={classes.contactCardContent}>
                            <Box className={classes.contactCardField}>
                                <span>Nome</span>
                                <TextField id="user_name" name="user_name" variant="standard" value={userName} onChange={(event) => setUserName(event.target.value)} placeholder="John Doe" className={classes.contactCardTextField} />
                            </Box>
                            <Box className={classes.contactCardField}>
                                <span>E-mail</span>
                                <TextField id="user_email" name="user_email" type="email" variant="standard" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} placeholder="john.doe@email.com" className={classes.contactCardTextField}/>
                            </Box>
                            <Box className={classes.contactCardField}>
                                <span>Messaggio</span>
                                <TextField id="message" name="message" variant="outlined" multiline rows={4} value={userMessage} onChange={(event) => setUserMessage(event.target.value)} placeholder="Oggetto email" className={classes.contactCardTextField}/>
                            </Box>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <LoadingButton className={classes.sendButton} disabled={isSendButtonDisabled()} onClick={onSubmit} color={getSendButtonColor()} endIcon={getIcon()} loading={formStatus === 'submitting'} variant="contained">
                                <span>{getStatus()}</span>
                            </LoadingButton>
                            {(formStatus === 'sent' || formStatus === 'error') &&
                                <IconButton onClick={clearForm} className={classes.clearButton} sx={{position: "absolute !important"}}>
                                    <CleaningServicesIcon />
                                </IconButton>
                            }
                        </CardActions>
                    </Card>
                </form>
        </Container>
    )
}

export default Contact;