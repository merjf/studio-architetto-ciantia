import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import variables from '../assets/style/variable.module.scss';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    footer: {
        width: "-webkit-fill-available",
        display: "flex",
        bottom: 0,
        alignItems: "center",
        justifyContent: "space-around",
        paddingRight: 20,
        height: 150,
        padding: "0px 5px",
        backgroundColor: variables.black,
        gap: 20,
        textTransform: "uppercase",
        fontSize: "0.675rem",
    },
    block: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        "& > a > p":{
            lineHeight: "1.2rem",
        },
        "& > a":{

        },
        "& > a:hover":{
            color: variables.darkyellow
        }
    },
    logo: {
        height: 50,
        width: 65,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: variables.darkyellow,
        "&:hover":{
            fill: "red",
        }
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Box>
                <Link to={"/"}>
                    {/* <img
                        className={classes.logo}
                        src={"../assets/images/logo_simple.svg"}/> */}
                    <svg
                        className={classes.logo}
                        xmlns="http://www.w3.org/2000/svg"
                        width="30.7in" height="25.0556in"
                        viewBox="0 0 2763 2255">
                        <path id="Selection"
                                fill="none" stroke="black" stroke-width="1"
                                d="M 0.00,0.00
                                C 0.00,0.00 2763.00,0.00 2763.00,0.00
                                    2763.00,0.00 2763.00,2255.00 2763.00,2255.00
                                    2763.00,2255.00 0.00,2255.00 0.00,2255.00
                                    0.00,2255.00 0.00,0.00 0.00,0.00 Z" />
                    </svg>

                </Link>
            </Box>
            <Box className={classes.block}>
                <a href="mailto:studioarchitettociantia@gmail.com"><span>studioarchitettociantia@gmail.com</span></a>
                <a href="tel:+393701212833"><span>+39 370 1212833</span></a>
            </Box>
            <Box className={classes.block}>
                <a href="https://goo.gl/maps/6k7efoD96G3d3uRJ6">
                    <p>Piazza Armerina<br/>
                        Via Mons. la Vaccara 24<br/>
                        94015 Enna, Italy</p>
                </a>
            </Box>
            <Box className={classes.block}>
                <a href="https://www.linkedin.com/in/salvatore-ciantia-6a904699/"><span>Linkedin</span></a>
                <a href="https://www.instagram.com/salvatore_ciantia_architetto/"><span>Instagram</span></a>
                <a href="https://www.facebook.com/salvatore.ciantia.3"><span>Facebook</span></a>
            </Box>
        </footer>
    )
}

export default Footer;
