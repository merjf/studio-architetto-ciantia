import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../utils/Utils';
import variables from '../assets/style/variable.module.scss';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import classNames from 'classnames';

const useStyles = makeStyles({
    block: {
    },
    carouselContainer: {

    },
    carouselImage: (theme:any) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: variables.black,
        [theme?.breakpoints.up('xl')]: {
            height: "100vh",
            width: "100%",
        },
        [theme?.breakpoints.up('sm')]: {
            height: "100vh",
            width: "100%",
        },
        [theme?.breakpoints.down('sm')]: {
            height: "100vh",
        },
    }),
    imageOverlay: {
        backgroundColor: variables.black,
        opacity: 0.2,
        width: "100%"
    },
    arrowButton: {
       "&.MuiButtonBase-root:hover":{
            opacity: 1 + "!important",
       }
    },
    arrowIcons: {
        fontSize: "4.275rem !important",
        color: variables.white + " !important",
        "&:hover": {
            color: variables.darkyellow + " !important",
        }
    },
    logoContainer: (theme:any) =>({
        position: "absolute",
        zIndex: 2,
        right: 0,
        transitionProperty: "bottom, top, right",
        transitionTimingFunction: "linear",
        transitionDuration: "2s, 2s, 2s",
    }),
    logo: (theme:any) =>({
        height: "auto",
        [theme?.breakpoints.up('xl')]: {
            height: 230,
            width: "80%",
        },
        [theme?.breakpoints.up('md')]: {
            height: 190,
            width: "80%",
        },
        [theme?.breakpoints.down('md')]: {
            height: 160,
            width: 100,
        },
        "& > path":{
            transitionProperty: "fill",
            transitionTimingFunction: "ease-in-out",
            transitionDuration: "0.5s",
        }
    }),
});

interface LogoPosition{
    top: number | string;
    bottom: number | string;
}

const Home = () => {
    const classes = useStyles(theme);

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [startingIndex, setStartingIndex] = useState(1); 

    useEffect(()=>{
        window.addEventListener('resize', () => setCurrentWidth(window.innerWidth))
        if(currentWidth <= theme.breakpoints.values.sm){
            setStartingIndex(6);
        }
    },[]);

    return (
        <Container className={classNames("container-home", classes.block)}>
            <Carousel
                className={classes.carouselContainer}
                navButtonsAlwaysVisible
                autoPlay={false}
                indicators={false}
                fullHeightHover={false}
                navButtonsProps={{
                    className: classes.arrowButton,
                    style: {
                        backgroundColor: "transparent",
                        borderRadius: 2,
                        margin: 0
                    }
                }} 
                navButtonsWrapperProps={{
                    style: {
                        display: currentWidth <= theme.breakpoints.values.sm ? 'none' : 'block'
                        // top: 'unset',
                        // height: "unset"
                    }
                }}
                sx={{height: "100vh"}}
                NextIcon={<KeyboardArrowRightIcon className={classes.arrowIcons}/>}
                PrevIcon={<KeyboardArrowLeftIcon className={classes.arrowIcons}/>} >
                {Array.from({length: 6}, (_, i) => i + 1).map((index) => (
                    <Box key={index} className={classes.carouselImage}
                        sx={{ backgroundImage: `url(${require("../assets/images/home/" + (index + startingIndex) + ".jpg")})`}}>
                            <Box className={classes.imageOverlay}/>
                    </Box>
                ))}
            </Carousel>
        </Container>
    )
}

export default Home;