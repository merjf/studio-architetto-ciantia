import React from 'react';
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
    workInner:{
        position: "relative",
        height: "100% !important",
        width: "100% !important",
        padding: "0px !important",
        marginBottom: 100,
    },
    workContainer: {
        display: "grid",
        margin: "0px 40px",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "1fr",
        gridColumnGap: 20,
        gridRowGap: 20,
        marginBottom: 50,
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
        backgroundColor: "rgba(0, 0, 0, 0.48)",
        opacity: 0,
        transition: "opacity .6s ease",
        color: variables.white,
        padding: 50,
        "& > h2":{
            fontWeight: 700,
        },
        "&:hover":{
            opacity: 1,
            transition: "opacity .6s ease"
        }
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
        right: 20,
    },
    projectSeparator: {
        width: 100,
        border: "3px solid white",
        borderRadius: 20,
    }
});

const Work = () => {
    const classes = useStyles(theme);

    const getProjects = () => {
        var groups:GroupModel[] = projects;
        var randomProjects: ProjectRandomGridModel[] = [], i = 0;
        for(let group of groups){
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
                // } else {
                //     randomProjects.push({
                //         id: i++,
                //         mainFolder: project.mainFolder,
                //         cover: project.cover,
                //         title: project.title,
                //         description: project.description,
                //         orientation: project.orientation,
                //         order: project.order,
                //     })
                // }
            }
        }
        randomProjects = randomProjects.sort((a, b) => a.order - b.order)
        return randomProjects;
    }

    const assignGridItemStyle = (project:ProjectModel|ProjectRandomGridModel) => {
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
        <Container className={classNames("main", classes.container)}>
            <Box className={classes.titleBox}>
                <Divider />
                <h1>Portfolio</h1>
            </Box>
            <Container className={classes.workInner} maxWidth="xl">
                <Box className={classes.workContainer}>
                    {getProjects().map((project) => {
                        return(
                            <Box className={classes.projectCard} key={project.id} sx={assignGridItemStyle(project)}>
                                <Link to={"/project/"+project.id}>
                                    <Box className={classes.projectBackground} style={{backgroundImage: `url(${require("../assets/images/work/previews/"+project.cover+".png")})`}}>
                                        <Box className={classes.projectDetails}>
                                            <h2>{project.title}</h2>
                                            <Box className={classes.projectSubtitle}>
                                                <hr className={classes.projectSeparator} />
                                                <h4>{project.place}</h4>
                                            </Box>
                                            <Box className={classes.projectViewMore}>
                                                <hr className={classes.projectSeparator} />
                                                <h4>view more</h4>
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