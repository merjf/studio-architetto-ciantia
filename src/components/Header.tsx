import React, { useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Divider, Collapse, ListItem, ListItemButton, List, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { theme } from '../utils/Utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

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
    toolbarLogo: {
        height: 30,
        width: 45,
        "&:hover":{
            "& > path":{
                fill: variables.red,   
            }
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
    const isHome = () => {
        return window.location.pathname.length === 1;
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

    return (
        <Box>
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
                                <svg
                                    className={classnames(classes.toolbarLogo)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="233.934mm" height="190.924mm"
                                    viewBox="0 0 2763 2255">
                                <path id="Selection"
                                    fill={isHome() ? variables.white : variables.darkgrey}
                                        stroke="white" strokeWidth="1"
                                        d="M 35.00,2219.00
                                        C 35.00,2219.00 35.00,724.00 35.00,724.00
                                            35.00,722.28 34.86,718.91 35.57,717.41
                                            36.75,714.93 47.15,709.27 50.00,707.62
                                            50.00,707.62 95.00,681.55 95.00,681.55
                                            95.00,681.55 234.00,599.42 234.00,599.42
                                            234.00,599.42 288.00,568.00 288.00,568.00
                                            288.00,568.00 347.00,533.55 347.00,533.55
                                            347.00,533.55 362.00,524.23 362.00,524.23
                                            362.00,524.23 381.00,513.55 381.00,513.55
                                            381.00,513.55 595.00,387.86 595.00,387.86
                                            595.00,387.86 645.00,358.01 645.00,358.01
                                            645.00,358.01 792.00,271.67 792.00,271.67
                                            792.00,271.67 821.91,254.62 821.91,254.62
                                            821.91,254.62 828.09,250.49 828.09,250.49
                                            828.09,250.49 861.28,231.00 861.28,231.00
                                            861.28,231.00 879.99,220.42 879.99,220.42
                                            879.99,220.42 887.17,215.52 887.17,215.52
                                            887.17,215.52 910.00,202.79 910.00,202.79
                                            910.00,202.79 956.00,175.25 956.00,175.25
                                            956.00,175.25 970.00,167.57 970.00,167.57
                                            970.00,167.57 1003.00,148.18 1003.00,148.18
                                            1003.00,148.18 1017.00,139.34 1017.00,139.34
                                            1017.00,139.34 1025.00,135.28 1025.00,135.28
                                            1025.00,135.28 1044.01,123.62 1044.01,123.62
                                            1044.01,123.62 1088.00,97.91 1088.00,97.91
                                            1088.00,97.91 1139.72,67.64 1139.72,67.64
                                            1139.72,67.64 1183.00,42.55 1183.00,42.55
                                            1189.05,38.97 1195.50,33.35 1203.00,35.68
                                            1206.00,36.62 1211.92,40.36 1215.00,42.07
                                            1215.00,42.07 1243.00,58.41 1243.00,58.41
                                            1243.00,58.41 1295.00,88.09 1295.00,88.09
                                            1295.00,88.09 1303.00,93.28 1303.00,93.28
                                            1303.00,93.28 1322.96,104.34 1322.96,104.34
                                            1322.96,104.34 1374.00,134.13 1374.00,134.13
                                            1374.00,134.13 1384.00,139.35 1384.00,139.35
                                            1384.00,139.35 1401.00,149.86 1401.00,149.86
                                            1401.00,149.86 1417.56,158.74 1417.56,158.74
                                            1417.56,158.74 1433.00,168.34 1433.00,168.34
                                            1433.00,168.34 1456.00,181.09 1456.00,181.09
                                            1456.00,181.09 1495.00,204.26 1495.00,204.26
                                            1495.00,204.26 1514.00,214.67 1514.00,214.67
                                            1514.00,214.67 1534.00,226.67 1534.00,226.67
                                            1534.00,226.67 1547.72,234.07 1547.72,234.07
                                            1547.72,234.07 1555.00,239.08 1555.00,239.08
                                            1555.00,239.08 1575.91,250.49 1575.91,250.49
                                            1575.91,250.49 1653.00,295.71 1653.00,295.71
                                            1653.00,295.71 1675.72,308.13 1675.72,308.13
                                            1675.72,308.13 1715.09,331.70 1715.09,331.70
                                            1715.09,331.70 1735.00,342.67 1735.00,342.67
                                            1735.00,342.67 1744.00,348.41 1744.00,348.41
                                            1744.00,348.41 1767.00,361.09 1767.00,361.09
                                            1767.00,361.09 1784.00,371.57 1784.00,371.57
                                            1784.00,371.57 1863.00,416.87 1863.00,416.87
                                            1863.00,416.87 1872.00,422.66 1872.00,422.66
                                            1872.00,422.66 2105.00,557.35 2105.00,557.35
                                            2105.00,557.35 2219.00,623.57 2219.00,623.57
                                            2219.00,623.57 2317.00,680.27 2317.00,680.27
                                            2317.00,680.27 2365.42,708.20 2365.42,708.20
                                            2378.38,716.42 2380.98,714.40 2381.00,726.00
                                            2381.00,726.00 2381.00,1754.00 2381.00,1754.00
                                            2381.00,1754.00 2209.00,1754.00 2209.00,1754.00
                                            2209.00,1754.00 2164.00,1754.00 2164.00,1754.00
                                            2156.20,1753.86 2157.01,1750.86 2157.01,1744.00
                                            2157.01,1744.00 2157.01,867.00 2157.01,867.00
                                            2157.01,867.00 2157.01,861.00 2157.01,861.00
                                            2156.58,853.63 2149.45,852.19 2144.00,849.05
                                            2144.00,849.05 2106.00,826.80 2106.00,826.80
                                            2106.00,826.80 2072.09,807.34 2072.09,807.34
                                            2072.09,807.34 2063.99,802.01 2063.99,802.01
                                            2063.99,802.01 2048.00,792.99 2048.00,792.99
                                            2048.00,792.99 2030.00,782.09 2030.00,782.09
                                            2030.00,782.09 2013.01,772.79 2013.01,772.79
                                            2013.01,772.79 2005.83,768.02 2005.83,768.02
                                            2005.83,768.02 1977.00,751.81 1977.00,751.81
                                            1977.00,751.81 1969.00,746.58 1969.00,746.58
                                            1969.00,746.58 1941.00,730.57 1941.00,730.57
                                            1941.00,730.57 1917.58,717.00 1917.58,717.00
                                            1917.58,717.00 1856.00,681.22 1856.00,681.22
                                            1856.00,681.22 1848.00,676.06 1848.00,676.06
                                            1848.00,676.06 1797.00,646.83 1797.00,646.83
                                            1797.00,646.83 1778.00,635.14 1778.00,635.14
                                            1778.00,635.14 1726.00,605.28 1726.00,605.28
                                            1726.00,605.28 1684.00,580.23 1684.00,580.23
                                            1684.00,580.23 1666.00,570.29 1666.00,570.29
                                            1666.00,570.29 1425.00,429.57 1425.00,429.57
                                            1425.00,429.57 1405.83,417.88 1405.83,417.88
                                            1405.83,417.88 1353.01,387.57 1353.01,387.57
                                            1353.01,387.57 1345.83,382.88 1345.83,382.88
                                            1345.83,382.88 1326.00,371.69 1326.00,371.69
                                            1326.00,371.69 1267.00,337.41 1267.00,337.41
                                            1267.00,337.41 1225.00,312.77 1225.00,312.77
                                            1221.22,310.55 1209.56,302.92 1206.00,302.21
                                            1201.32,301.27 1191.04,308.52 1187.00,311.06
                                            1187.00,311.06 1159.00,326.95 1159.00,326.95
                                            1159.00,326.95 1141.00,337.77 1141.00,337.77
                                            1141.00,337.77 1094.09,364.46 1094.09,364.46
                                            1094.09,364.46 960.00,442.34 960.00,442.34
                                            960.00,442.34 844.00,509.14 844.00,509.14
                                            844.00,509.14 706.00,589.33 706.00,589.33
                                            706.00,589.33 685.00,600.87 685.00,600.87
                                            685.00,600.87 643.00,625.57 643.00,625.57
                                            643.00,625.57 546.00,681.67 546.00,681.67
                                            546.00,681.67 492.00,712.45 492.00,712.45
                                            492.00,712.45 430.00,748.23 430.00,748.23
                                            430.00,748.23 376.00,779.83 376.00,779.83
                                            376.00,779.83 353.00,793.13 353.00,793.13
                                            353.00,793.13 334.00,803.67 334.00,803.67
                                            334.00,803.67 276.00,837.24 276.00,837.24
                                            268.63,841.26 258.84,848.71 251.00,851.00
                                            252.99,862.10 252.00,901.13 252.00,915.00
                                            252.00,915.00 252.00,1036.00 252.00,1036.00
                                            252.00,1036.00 252.00,1415.00 252.00,1415.00
                                            252.00,1415.00 252.00,1794.00 252.00,1794.00
                                            252.00,1794.00 252.00,1915.00 252.00,1915.00
                                            252.00,1928.87 252.99,1967.90 251.00,1979.00
                                            251.00,1979.00 1922.00,1979.00 1922.00,1979.00
                                            1922.00,1979.00 2468.00,1979.00 2468.00,1979.00
                                            2468.00,1979.00 2646.00,1979.00 2646.00,1979.00
                                            2646.00,1979.00 2703.00,1979.00 2703.00,1979.00
                                            2703.00,1979.00 2740.00,1978.00 2740.00,1978.00
                                            2739.96,1988.99 2736.82,1988.62 2731.05,1997.09
                                            2731.05,1997.09 2706.88,2032.00 2706.88,2032.00
                                            2706.88,2032.00 2628.32,2145.58 2628.32,2145.58
                                            2628.32,2145.58 2619.62,2157.00 2619.62,2157.00
                                            2619.62,2157.00 2611.05,2170.00 2611.05,2170.00
                                            2611.05,2170.00 2605.04,2178.00 2605.04,2178.00
                                            2605.04,2178.00 2587.86,2203.00 2587.86,2203.00
                                            2584.93,2207.07 2579.35,2213.06 2579.00,2218.00
                                            2579.00,2218.00 2546.00,2219.00 2546.00,2219.00
                                            2546.00,2219.00 2489.00,2219.00 2489.00,2219.00
                                            2489.00,2219.00 2311.00,2219.00 2311.00,2219.00
                                            2311.00,2219.00 1758.00,2219.00 1758.00,2219.00
                                            1758.00,2219.00 35.00,2219.00 35.00,2219.00 Z" />
                                </svg>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Box className={classes.menubar} id={"menubar"}>
                    <Box className={classnames(classes.toolbarItem, classes.toolbarBox)} onClick={handleMenuExpandClick}  id={"menubar"}>
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
        </Box>
    )
}

export default Header;
