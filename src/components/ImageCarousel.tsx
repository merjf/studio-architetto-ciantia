import React from 'react';
import { makeStyles } from '@mui/styles';
import { theme } from "../utils/Utils";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { Box, Container, Dialog } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import classNames from 'classnames';

const useStyles = makeStyles({
    dialogCarousel: {
        width: "100vw",
        margin: 0,
        "& > .MuiDialog-container > .MuiDialog-paper":{
            backgroundColor: variables.trasparent,
            boxShadow: "none",
            border: "unset",
            transition: "none",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
        }
    },
    carouselBox: {
        minWidth: window.innerWidth-20,
        height: "auto !important",
        "& > div:first-child":{
            height: window.innerHeight/2+40,
        },
        "& > div > div > div > div > div":{
            height: "100%",
        }
    },
    carouselImage: (theme:any) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundColor: variables.trasparent,
        height: "100%"
    }),
})

interface ImageCarouselProps{
    currentImageIndex: number;
    project: any;
    open: boolean;
    onClose: () => void;
}

const ImageCarousel = (props: ImageCarouselProps) => {
    const classes = useStyles(theme);

    const { onClose, open } = props;

    const handleClose = () => {
      onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} className={classes.dialogCarousel}>
            <Carousel
                className={classes.carouselBox}
                navButtonsAlwaysVisible={false}
                autoPlay={false}
                indicators={false}
                fullHeightHover={false}
                index={props.currentImageIndex}
                sx={{height: "100vh"}}>
                {Array.from({length: props.project.images}, (_, i) => i + 1).map((item, index) => (
                    <Box key={index} className={classes.carouselImage}
                        sx={{ backgroundImage: `url(${require("../assets/images/work/"+props.project.mainFolder+"/"+item+".webp")})`}}>
                    </Box>
                ))}
            </Carousel>
        </Dialog>
    )
}
export default ImageCarousel;