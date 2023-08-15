import React, { useEffect, useState } from 'react';
import { Container, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import { GroupModel, ProjectModel, ProjectRandomGridModel, theme } from '../utils/Utils';
import classNames from 'classnames';
import projects from '../assets/data/projects'

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
        alignItems: "baseline",
        marginLeft: 20,
        marginBottom: 80,
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
            color: variables.black,
        }
    }),
    workInner:{
        position: "relative",
        height: "100% !important",
        width: "100% !important",
        padding: "0px !important",
        marginBottom: 100,
        [theme?.breakpoints.only('xs')]: {
            marginBottom: 0,
        },
    },
    workContainer: {
        display: "grid",
        margin: "0px 40px",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "1fr",
        // gridColumnGap: 20,
        // gridRowGap: 20,
        marginBottom: 50,
        [theme?.breakpoints.down('md')]: {
            margin: "0px 10px",
            gridTemplateColumns: "1fr",
            gridAutoRows: "1fr",
        },
    },
    projectCard:{
        position: "relative",
        boxSizing: "border-box",
        minHeight: 390,
    },
    projectBackground: {
        textDecoration: "none",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxHeight: "inherit",
        display: "block",
        position: "relative",
    },
    projectDetails: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.38)",
        opacity: 0,
        WebkitTransition: "opacity .6s ease",
        MozTransition: "opacity .6s ease",
        transition: "opacity .6s ease",
        color: variables.white,
        padding: 50,
        "& > h2":{
            fontWeight: 700,
        },
        "&:hover":{
            opacity: 1,
            WebkitTransition: "opacity .6s ease",
            MozTransition: "opacity .6s ease",
            transition: "opacity .6s ease",
            "& > div:last-child > hr":{
                width: 70
            },
            "& > div:last-child": {
                transform: "translateX(-25px)"
            }
        },
        [theme?.breakpoints.only('xs')]: {
            padding: 20,
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.28)",
        },
    },
    projectSubtitle: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
        marginTop: 20,
        "& > h4": {
            fontWeight: 500,
        },
    },
    projectViewMore: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
        position: "absolute",
        bottom: 20,
        right: 0,
        WebkitTransition: "all .4s ease-in-out",
        MozTransition: "all .4s ease-in-out",
        transition: "all .4s ease-in-out",
        [theme?.breakpoints.only('xs')]: {
            right: 10,
        },
    },
    projectSeparator: {
        width: 120,
        border: "2px solid white",
        borderRadius: 20,
        [theme?.breakpoints.only('xs')]: {
            width: 90,
        },
    },
    projectSeparatorViewMore: {
        width: 1,
        border: "2px solid white",
        borderRadius: 20,
        WebkitTransition: "width .5s ease",
        MozTransition: "width .5s ease",
        transition: "width .5s ease",
        [theme?.breakpoints.only('xs')]: {
            width: 40,
        },
    }
});

const Work = () => {
    const classes = useStyles(theme);

    const [currentWidth, setCurrentWidth]= useState(window.innerWidth);

    useEffect(()=>{
      window.addEventListener('resize', () => setCurrentWidth(window.innerWidth))
    },[]);
  
    const getProjects = () => {
        var groups:GroupModel[] = projects;
        var randomProjects: ProjectRandomGridModel[] = [], i = 0;
        for(let group of groups){
            if(group.type !== 'miscellaneous'){
                for(let project of group.projects){
                    if((project as any).mainFolder !== undefined){
                        randomProjects.push({
                            id: (project as any).id,
                            mainFolder: (project as any).mainFolder,
                            cover: (project as any).cover,
                            title: (project as any).title,
                            description: (project as any).description,
                            orientation: (project as any).orientation,
                            place: (project as any).city,
                            order: (project as any).order,
                        })
                    }
                }
            } else {
                for(let subgroup of group.projects){
                    randomProjects.push({
                        id: (subgroup as any).id,
                        mainFolder: (subgroup as any).projects[0].mainFolder,
                        cover: (subgroup as any).cover,
                        title: (subgroup as any).name,
                        description: (subgroup as any).description,
                        orientation: (subgroup as any).orientation,
                        place: (subgroup as any).city,
                        order: (subgroup as any).order,
                    })
                }
            }
        }
        randomProjects = randomProjects.sort((a, b) => a.order - b.order)
        return randomProjects;
    }

    const assignGridPosition = (project:ProjectModel|ProjectRandomGridModel) => {
        if(currentWidth <= theme.breakpoints.values.md){
            return {
                gridColumn: "auto/span 1",
                gridRow: "auto/span 1"
            }
        }
        switch(project.orientation) {
            case "square":
                return {
                    gridColumn: "auto/span 1",
                    gridRow: "auto/span 1"
                }
            case "horizontal":
               return {
                    gridColumn: "auto/span 2",
                    gridRow: "auto/span 1"
                }
            case "vertical":
                return {
                    gridColumn: "auto/span 1",
                    gridRow: "auto/span 2"
                }
            case "wide":
                return {
                    gridColumn: "auto/span 3",
                    gridRow: "auto/span 1"
                }
        }
    }
    
    return (
        <Container className={classNames("container", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>Portfolio</h1>
            </Box>
            <Container className={classes.workInner} maxWidth="xl">
                <Box className={classes.workContainer}>
                    {getProjects().map((project) => {
                        return(
                            <Box className={classes.projectCard} key={project.id} sx={assignGridPosition(project)}>
                                <Link to={"/project/"+project.id}>
                                    <Box className={classes.projectBackground} style={{backgroundImage: `url(${require("../assets/images/previews/"+project.cover+".png")})`}}>
                                        <Box className={classes.projectDetails}>
                                            <h2>{project.title}</h2>
                                            <Box className={classes.projectSubtitle}>
                                                <hr className={classes.projectSeparator} />
                                                <h4>{project.place}</h4>
                                            </Box>
                                            <Box className={classes.projectViewMore}>
                                                <hr className={classes.projectSeparatorViewMore} />
                                                <h4>più dettagli</h4>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </Container>
    )
}
  
export default Work;