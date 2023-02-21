import React from 'react';
import { Box, Button, Container } from '@mui/material';
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
        [theme?.breakpoints.up('xl')]: {
            height: "100vh",
            width: "100%",
        },
        [theme?.breakpoints.up('md')]: {
            height: "100vh",
            width: "100%",
        },
        [theme?.breakpoints.down('xs')]: {
            height: "100vh",
        },
    }),
    arrowIcons: {
        fontSize: "3.275rem !important",
        color: variables.white + " !important",
        "&:hover": {
            color: variables.white + " !important",
        },
        "&:click": {
            
        }
    },
    logoContainer: {
        position: "absolute",
        top: "38%",
        zIndex: 2,
        left: 50,
    },
    logo: (theme:any) =>({
        [theme?.breakpoints.up('xl')]: {
            height: 160,
            // width: 100,
        },
        [theme?.breakpoints.up('md')]: {
            height: 160,
            // width: 100,
        },
        [theme?.breakpoints.down('xs')]: {
            height: 160,
            // width: 100,
        },
    }),
});

const Home = () => {
    const classes = useStyles(theme);

    return (
        <Container className={classNames("main", classes.block)}>
            <Carousel
                className={classes.carouselContainer}
                navButtonsAlwaysVisible
                autoPlay={false}
                indicators={false}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: "transparent",
                        borderRadius: 2,
                        margin: 0
                    }
                }} 
                navButtonsWrapperProps={{
                    style: {
                        // top: 'unset',
                        // height: "unset"
                    }
                }}
                sx={{height: {xs: 320, sm: 380, md: "100vh"}}}
                NextIcon={<KeyboardArrowRightIcon className={classes.arrowIcons}/>}
                PrevIcon={<KeyboardArrowLeftIcon className={classes.arrowIcons}/>} >
                {Array.from({length: 5}, (_, i) => i + 1).map((index) => (
                    <Box key={index} className={classes.carouselImage}
                        sx={{ backgroundImage: `url(${require("../assets/images/home/" + index + ".jpg")})`}}>
                    </Box>
                ))}
            </Carousel>
            <Box className={classes.logoContainer}>
                <img
                    className={classes.logo}
                    src={require("../assets/images/logo.png")}/>
            </Box>
        </Container>
    )
}

export default Home;