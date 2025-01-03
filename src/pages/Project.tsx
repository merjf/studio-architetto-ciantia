import React, { useEffect, useState } from 'react';
import { Container, Box, Divider, ImageList, ImageListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import { useLoaderData } from 'react-router-dom';
import WindowIcon from '@mui/icons-material/Window';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import ImageCarousel from '../components/ImageCarousel';

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
        display: "flex",
        justifyContent: "space-between",
        paddingRight: 40,
        paddingBottom: 10,
    },
    titleBox: (theme:any) =>({
        position: "relative",
        alignItems: "baseline",
        display: "flex",
        marginLeft: 20,
        marginBottom: 80,
        color: variables.black,
        "& > hr":{
            border: "2.5px solid " + variables.darkyellow,
            borderRadius: 25,
            marginRight: 20,
            marginLeft: -30,
            marginTop: 17,
            [theme?.breakpoints.up('md')]: {
                width: 100,
            },
            [theme?.breakpoints.up('sm')]: {
                width: 130,
            },
            [theme?.breakpoints.down('md')]: {
                width: 100,
            },
            [theme?.breakpoints.only('xs')]: {
                position: "absolute",
                marginLeft: 0,
                marginTop: 0,
                top: 30,
                left: -20,
                width: 38,
            },
        },
        [theme?.breakpoints.down('md')]: {
            marginBottom: 20,
        },
    }),
    titleDetails: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    iconsBox: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 10,
        "& > svg": {
            cursor: "pointer",
            fill: variables.black
        },
        "& > svg:hover": {
            fill: variables.darkyellow
        }
    },
    iconSelected: {
        fill: variables.darkyellow + " !important"
    },
    imagesContainer: {
        minHeight: "100%"
    },
    imgInColumn: (theme:any) =>({
        maxHeight: "750px !important",
        objectFit: "contain !important" as any,
        [theme?.breakpoints.down('md')]: {
            maxHeight: "500px !important",
            maxWidth: "490px",
            margin: "auto"
        },
    }),
    imgInGrid: {
        [theme?.breakpoints.down('md')]: {
            cursor: "pointer",
            "&:hover":{
                opacity: 0.8,
            }
        },
    }
});

const Project = () => {
    const classes = useStyles(theme);
    const project:any = useLoaderData();

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [gridSorting, setGridSorting] = useState(false);
    const [openImageCarousel, setOpenImageCarousel] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleCloseImageCarousel = () => {
      setOpenImageCarousel(false);
    };

    useEffect(()=>{
      window.addEventListener('resize', () => setCurrentWidth(window.innerWidth))
    },[]);

    const isMobile = () => {
        return currentWidth <= theme.breakpoints.values.sm;
    }

    const isScreenMdOrBelow = () => {
        return currentWidth <= theme.breakpoints.values.md
    }

    const openDialogImage = (index:number) => {
        if(isMobile() && isScreenMdOrBelow()){
            setOpenImageCarousel(true)
            setCurrentImageIndex(index);
        }
    }

    return (
        <Container className={classNames("container", classes.container)}>
            <Box className={classes.block}>
                <Box className={classes.titleBox}>
                    <Divider />
                    <Box className={classes.titleDetails}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <span>{project.place}</span>
                    </Box>
                </Box>
            </Box>
            <Container className={classes.imagesContainer} maxWidth="xl">
                <Box className={classes.iconsBox}>
                    <WindowIcon onClick={() => setGridSorting(true)} className={gridSorting ? classes.iconSelected : ""}/>
                    <ViewAgendaIcon onClick={() => setGridSorting(false)} className={gridSorting ? "" : classes.iconSelected}/>
                </Box>
                <ImageList cols={gridSorting ? 3 : 1} rowHeight={gridSorting || isScreenMdOrBelow() ? "auto" : 760} gap={20}>
                    {typeof(project.images) === "number" && Array.from({length: project.images}, (_, i) => i + 1).map((item, index) => (
                        <ImageListItem key={item}>
                            <img
                                src={require("../assets/images/work/"+project.mainFolder+"/"+item+".webp")}
                                loading="lazy"
                                alt={project.title}
                                className={gridSorting ? classes.imgInGrid : classes.imgInColumn}
                                onClick={() => openDialogImage(index)}
                            />
                        </ImageListItem>
                    ))}
                    {Array.isArray(project.images) && project.images.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                src={gridSorting ? require("../assets/images/work/"+project.mainFolder+"/"+item[0]+".webp") : 
                                                    require("../assets/images/work/"+project.mainFolder+"/"+item[1]+".webp")}
                                alt={project.title}
                                loading="lazy"
                                className={gridSorting ? "" : classes.imgInColumn}/>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
            <ImageCarousel
                currentImageIndex={currentImageIndex}
                project={project}
                open={openImageCarousel}
                onClose={handleCloseImageCarousel}/>
        </Container>
    )
}

export default Project;