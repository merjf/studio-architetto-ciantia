import React, { useEffect, useState } from 'react';
import { Container, Box, Divider, ImageList, ImageListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { theme } from '../utils/Utils';
import classNames from 'classnames';
import { useLoaderData } from 'react-router-dom';
import WindowIcon from '@mui/icons-material/Window';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        margin: "auto",
        marginTop: 100,
    },
    block:{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: 40,
        paddingBottom: 10,
    },
    titleBox: (theme:any) =>({
        display: "flex",
        alignItems: "center",
        marginLeft: 20,
        marginBottom: 80,
        color: variables.black,
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
    imagesContainer: {

    },
    imgInColumn: {
        maxHeight: "750px !important"
    }
});

const Project = () => {
    const classes = useStyles(theme);
    const project:any = useLoaderData();

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [gridSorting, setGridSorting] = useState(false);

    useEffect(()=>{
      window.addEventListener('resize', () => setCurrentWidth(window.innerWidth))
    },[]);

    const isGridContainer = () => {
        return currentWidth > theme.breakpoints.values.md
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
                    <WindowIcon onClick={() => setGridSorting(true)} />
                    <ViewAgendaIcon onClick={() => setGridSorting(false)} />
                </Box>
                <ImageList cols={gridSorting ? 3 : 1} rowHeight={gridSorting ? "auto" : 760} gap={20}>
                    {Array.from({length: project.images}, (_, i) => i + 1).map((item) => (
                        <ImageListItem key={item}>
                            <img
                                src={require("../assets/images/work/"+project.mainFolder+"/"+item+".jpg")}
                                srcSet={require("../assets/images/work/"+project.mainFolder+"/"+item+".jpg")}
                                alt={project.title}
                                loading="lazy"
                                className={gridSorting ? "" : classes.imgInColumn}
                            />
                        </ImageListItem>
                    ))}
                    </ImageList>
            </Container>
        </Container>
    )
}

export default Project;