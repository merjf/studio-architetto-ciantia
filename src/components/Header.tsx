import React, { useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Divider, Collapse, ListItem, ListItemButton, List, Grid, Slide, useScrollTrigger } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { theme } from '../utils/Utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo";

const useStyles = makeStyles({
    navbar: {
        boxShadow: "unset !important",
        "&:hover": {
            "& span":{
                opacity: 1 + " !important",
            },
        },
        "& span": {
            opacity: 0,
            transition: "opacity .2s ease-out",
            [theme?.breakpoints.only('xs')]: {
                opacity: "1 !important",
            },
        },
        "& a": {
            transition: "color .2s ease-out"
        }
    },
    toolbar: {
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        minHeight: "60px !important",
        fontWeight: 700,
        textTransform: "uppercase",
        [theme?.breakpoints.down('md')]: {
            gap: 10,
            margin: "auto"
        },
        "& > .MuiGrid-container": {
            justifyContent: "space-around",
        }
    },
    toolbarBox:{
        display: "flex",
        alignItems: "center",
        flexBasis: "unset !important",
    },
    toolbarItem: {
        borderRadius: "5px",
        padding: "1rem 0px",
        fontSize: "1.1rem",
        letterSpacing: 3.5,
        [theme?.breakpoints.down('lg')]: {
            fontSize: ".9rem",
            letterSpacing: 2.5,
        },
        [theme?.breakpoints.down('md')]: {
            fontSize: ".9rem",
            letterSpacing: 2,
        },
        "&:hover":{
            color: variables.red,   
        }
    },
    toolbarRightItems: {
        [theme?.breakpoints.up('lg')]: {
            gap: 90,
        },
        [theme?.breakpoints.down('xl')]: {
            gap: 50,
        },
        [theme?.breakpoints.down('md')]: {
            gap: 10,
        },
        "& > a:last-child":{
            [theme?.breakpoints.up('sm')]: {
                marginLeft: 30,
            },
            [theme?.breakpoints.up('lg')]: {
                marginLeft: 70,
            },
            [theme?.breakpoints.down('md')]: {
                display: "none"
            },
        }
    },
    menubar: (theme:any) =>({
        justifyContent: "space-between",
        padding: "0px 5px 0px 15px",
        [theme?.breakpoints.up('xs')]: {
            display: "none"
        },
        [theme?.breakpoints.down('sm')]: {
            display: "flex"
        },
    }),
    menubarItem:{

    },
    menubarLogo: {
        height: 40,
        width: 55,
        "& > path":{
            fill: variables.darkgrey
        },
        "&:hover":{
            "& > path":{
                fill: variables.red,   
            }
        }
    },
    collapse: {
        color: variables.darkgrey,
        width: "100%",
        backgroundColor: variables.white,
        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
    drawer: {
        padding: "0px 3px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        "& > .MuiList-root":{
            padding: "0px",
        },
        "& > ul": {
            width: "100%",
            "& > a": {
                "& > li": {
                    margin: "3px 0px",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    letterSpacing: 1
                }
            }
        },
    },
    drawerItem: {
        "&:hover": {
            backgroundColor: variables.lightgrey,
            color: variables.lightblue,
        }
    },
})

interface NavbarStyle{
    backgroundColor: string;
    color: string;
    borderBottom: string;
}

const menuItems = [{
    link: "/",
    capitalLetter: "H",
    label: "ome",
    displayedForToolbar: false
},{
    link: "/about",
    capitalLetter: "P",
    label: "rofilo",
    displayedForToolbar: true
},{
    link: "/work",
    capitalLetter: "L",
    label: "avori",
    displayedForToolbar: true
},{
    link: "/contact",
    capitalLetter: "C",
    label: "ontatti",
    displayedForToolbar: true
}]

const Header = () => {
    const navigate = useNavigate();
    const classes = useStyles(theme);
    const [navbarStyle, setNavbarStyle] = useState<NavbarStyle>({backgroundColor: variables.white + " !important",
                                                                color: variables.darkgrey + " !important",
                                                                borderBottom: "1px solid " + variables.lightgrey});
    const [menuExpanded, setMenuExpanded] = React.useState(false);
    const [menuClosedOutside, setMenuClosedOutside] = React.useState(false);
    const menubarCollapseRef = useRef(null);

    const handleMenuExpandClick = () => {
        if(!menuClosedOutside){
            setMenuClosedOutside(false)
        }
        setMenuExpanded(!menuExpanded);
    };
    
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if(event.target.parentNode.id !== "menubar"){
                        setMenuClosedOutside(true)
                        setMenuExpanded(false)
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(menubarCollapseRef);

    const isMenuItemSelected = (item) => {
        if(item === "/"){
            return window.location.pathname === item
        }
        return (window.location.pathname.includes("project") && item === "/work") || window.location.pathname.includes(item)
    }

    useEffect(() => {
        if(window.location.pathname.length === 1){
            setNavbarStyle({backgroundColor: "transparent !important",
                            color: variables.white + " !important",
                            borderBottom: "unset"})
        } else {
            setNavbarStyle({backgroundColor: variables.white + " !important",
                            color: variables.darkgrey + " !important",
                            borderBottom: "1px solid " + variables.lightgrey
            })
        }
    }, [navigate])

    const changeLocation = (placeToGo) => {
        navigate(placeToGo, { replace: true });
        window.location.reload();
    }

    function HideOnScroll(props: any) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
      }

    return (
        <Box>
            <HideOnScroll>
                <AppBar position="fixed" component="nav" className={classes.navbar} sx={{backgroundColor: navbarStyle.backgroundColor, color: navbarStyle.color, borderBottom: navbarStyle.borderBottom}}>
                    <Toolbar className={classes.toolbar} disableGutters sx={{ display: { xs: 'none', sm: 'flex' }}}>
                        <Grid container maxWidth={"lg"}>
                            <Grid item xs={6} md={6} lg={6} className={classes.toolbarBox}>
                                <Link to={"/"} key={"/"} onClick={() => changeLocation('/')} className={classnames(classes.toolbarItem)}>
                                    A
                                    <span>
                                        rchitetto&nbsp;
                                    </span>
                                    S 
                                    <span>
                                        alvatore&nbsp;
                                    </span>
                                    C 
                                    <span>
                                        iantia
                                    </span>
                                </Link>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classnames(classes.toolbarRightItems, classes.toolbarBox)}>
                                {menuItems.filter(item => item.displayedForToolbar ).map((item) => {
                                    return (
                                        <Link to={item.link} onClick={() => changeLocation(item.link)} key={item.link} className={classnames(classes.toolbarItem)}>
                                            {item.capitalLetter}
                                            <span style={{opacity: isMenuItemSelected(item.link) ? 1 : 0}}>
                                                {item.label}
                                            </span>
                                        </Link>
                                    )
                                })}
                                <Link to={"/"} key={"/"} onClick={() => changeLocation("/")}>
                                   <Logo />
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                    <Box className={classes.menubar} id={"menubar"}>
                        <Box className={classnames(classes.toolbarItem, classes.toolbarBox)} id={"menubar"}>
                            <Logo />
                        </Box>
                        <IconButton disableRipple aria-label="more" id="menubar" aria-haspopup="true" onClick={handleMenuExpandClick}>
                            <MoreVertIcon id="menubar"/>
                        </IconButton>
                    </Box>
                    <Collapse in={menuExpanded} timeout="auto" unmountOnExit className={classes.collapse}>
                            <Box className={classnames(classes.drawer)} ref={menubarCollapseRef}>
                                <List>
                                    {menuItems.map((item) => (
                                        <Link key={item.link} to={item.link} onClick={() => changeLocation(item.link)}>
                                            <ListItem disablePadding className={classes.drawerItem}>
                                                <ListItemButton onClick={handleMenuExpandClick} selected={isMenuItemSelected(item.link)}>
                                                    {item.capitalLetter}{item.label}
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Box>
                    </Collapse>
                </AppBar>
            </HideOnScroll>
        </Box>
    )
}

export default Header;
