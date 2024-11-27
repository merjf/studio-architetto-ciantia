import React, { useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Divider, Collapse, ListItem, ListItemButton, List, Grid, Slide, useScrollTrigger } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { theme } from '../utils/Utils';
import MenuIcon from '@mui/icons-material/Menu';
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
            WebkitTransition: "opacity .2s ease-out",
            MozTransition: "opacity .2s ease-out",
            transition: "opacity .2s ease-out",
            [theme?.breakpoints.only('xs')]: {
                opacity: "1 !important",
            },
            [theme?.breakpoints.down('md')]: {
                opacity: "1 !important",
            },
        },
        "& a": {
            WebkitTransition: "color .2s ease-out",
            MozTransition: "color .2s ease-out",
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
            color: variables.darkyellow,   
        }
    },
    toolbarItemSelected: {
        color: variables.black
    },
    toolbarItemSelectedMain: {
        color: variables.white
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
    menubarOpen: {
        background: variables.white + " !important",
    },
    menubar: (theme:any) =>({
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 5px 0px 15px",
        background: "transparent",
        WebkitTransition: "background .5s ease-in-out",
        MozTransition: "background .5s ease-in-out",
        transition: "background .5s ease-in-out",
    }),
    menubarButton: {
        color: variables.white,
    },
    menubarButtonOpen: {
        color: variables.midgrey,
    },
    menubarItem:{

    },
    menubarLogo: {
        height: 40,
        width: 55,
        "& > path":{
            fill: variables.midgrey
        },
        "&:hover":{
            "& > path":{
                fill: variables.darkyellow,   
            }
        }
    },
    collapse: {
        color: variables.darkgrey,
        width: "100%",
        backgroundColor: variables.white,
        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
    drawerMenu: {
        overflow: "hidden",
        flexDirection: "column",
        alignItems: "start",
        height: 0,
        position: "absolute",
        width: "100%",
        paddingTop: 65,
        zIndex: -1,
        backgroundColor: "transparent",
        WebkitTransition: " all .5s ease",
        MozTransition: " all .5s ease",
        transition: "all .5s ease",
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
        [theme?.breakpoints.up('xs')]: {
            display: "none"
        },
        [theme?.breakpoints.down('sm')]: {
            display: "flex"
        },
    },
    drawerMenuOpen: {
        height: 225,
        backgroundColor: variables.white,
        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
    drawerMenuItem: {
        color: variables.darkgrey,
        "& > .Mui-selected":{
            backgroundColor: variables.darkyellow + " !important",
            color: variables.white,
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
                                                                color: variables.black + " !important",
                                                                borderBottom: "1px solid " + variables.lightgrey});
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [menuClosedOutside, setMenuClosedOutside] = useState(false);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const menubarCollapseRef = useRef(null);

    const isHome = () => {
        return window.location.pathname.length === 1;
    }

    const isMobile = () => {
        return currentWidth <= theme.breakpoints.values.sm;
    }

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
    if(isMobile()){
        useOutsideAlerter(menubarCollapseRef);
    }

    const isMenuItemSelected = (item) => {
        if(item === "/"){
            return window.location.pathname === item
        }
        return (window.location.pathname.includes("project") && item === "/work") || window.location.pathname.includes(item)
    }

    useEffect(() => {
        if(isHome() && !menuExpanded){
            setNavbarStyle({backgroundColor: "transparent !important",
                            color: variables.white + " !important",
                            borderBottom: "unset"})
        } else {
            setNavbarStyle({backgroundColor: variables.white + " !important",
                            color: variables.midgrey + " !important",
                            borderBottom: "1px solid " + variables.lightgrey
            })
        }
    }, [navigate, menuExpanded])

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
            <Slide appear={false} direction="down" in={!trigger && !isMobile()}>
                {children}
            </Slide>
        );
    }

    return (
        <Box>
            <HideOnScroll>
                <AppBar position="fixed" component="nav" className={classes.navbar}
                    sx={{backgroundColor: menuExpanded && isHome() ? 'transparent' : navbarStyle.backgroundColor, color: navbarStyle.color, borderBottom: menuExpanded && isHome() ? 'none' : navbarStyle.borderBottom, display: { xs: 'none', sm: 'block', md: 'flex' }}}>
                    <Toolbar className={classes.toolbar} disableGutters>
                        <Grid container maxWidth={"lg"}>
                            <Grid item xs={6} md={6} lg={6} className={classes.toolbarBox}>
                                <Link to={"/"} key={"/"} onClick={() => changeLocation('/')} className={classnames(classes.toolbarItem, isMenuItemSelected("/") ? [classes.toolbarItemSelected, classes.toolbarItemSelectedMain] : "")}>
                                    A
                                    <span style={{opacity: isMenuItemSelected("/") ? 1 : 0}}>
                                        rchitetto&nbsp;
                                    </span>
                                    S 
                                    <span style={{opacity: isMenuItemSelected("/") ? 1 : 0}}>
                                        alvatore&nbsp;
                                    </span>
                                    C 
                                    <span style={{opacity: isMenuItemSelected("/") ? 1 : 0}}>
                                        iantia
                                    </span>
                                </Link>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className={classnames(classes.toolbarRightItems, classes.toolbarBox)}>
                                {menuItems.filter(item => item.displayedForToolbar ).map((item) => {
                                    return (
                                        <Link to={item.link} onClick={() => changeLocation(item.link)} key={"desktop-" + item.link} className={classnames(classes.toolbarItem, isMenuItemSelected(item.link) ? classes.toolbarItemSelected : "")}>
                                            {item.capitalLetter}
                                            <span style={{opacity: isMenuItemSelected(item.link) ? 1 : 0}}>
                                                {item.label}
                                            </span>
                                        </Link>
                                    )
                                })}
                                <Link to={"/"} key={"/"} onClick={() => changeLocation("/")}>
                                    <Logo menuExpanded={false}/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <AppBar position="fixed" component="nav" className={classes.navbar} 
                sx={{backgroundColor: menuExpanded && isHome() ? 'transparent' : navbarStyle.backgroundColor, color: navbarStyle.color, borderBottom: menuExpanded && isHome() ? 'none' : navbarStyle.borderBottom, display: { xs: 'flex', sm: 'none' }}}>
                    <Box className ={classnames(classes.menubar)} id={"menubar"}>
                        <Box className={classnames(classes.toolbarItem, classes.toolbarBox)} id={"menubar"}>
                            <Link to={"/"} key={"/"} onClick={() => changeLocation("/")}>
                                <Logo menuExpanded={menuExpanded}/>
                            </Link>
                        </Box>
                        <IconButton disableRipple aria-label="Menu" id={"menubar"} aria-haspopup="true" onClick={handleMenuExpandClick}>
                            <MenuIcon fontSize="large" className={classnames(classes.menubarButton, menuExpanded || !isHome() ? classes.menubarButtonOpen : "")} id={"menubar"}/>
                        </IconButton>
                    </Box>
                    <Box id={"menubar"} className={classnames(menuExpanded ? classes.drawerMenuOpen : '', classes.drawerMenu)} ref={menubarCollapseRef}>
                        <List>
                            {menuItems.map((item) => (
                                <Link key={item.link} to={item.link} onClick={() => changeLocation(item.link)}>
                                    <ListItem disablePadding className={classes.drawerMenuItem}>
                                        <ListItemButton onClick={handleMenuExpandClick} selected={isMenuItemSelected(item.link)}>
                                            {item.capitalLetter}{item.label}
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
            </AppBar>
        </Box>
    )
}

export default Header;
