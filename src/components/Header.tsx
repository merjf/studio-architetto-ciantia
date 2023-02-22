import React from "react";
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import variables from '../assets/style/variable.module.scss';
import classnames from "classnames";
import { theme } from '../utils/Utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "transparent !important",
        boxShadow: "unset !important"
    },
    toolbar: {
        width: "100%",
        margin: "auto",
        marginLeft: 250,
        justifyContent: "flex-start",
        minHeight: "45px !important",
        gap: 50,
    },
    toolbarItem: {
        borderRadius: "5px",
        padding: 8,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        "&:hover": {
            backgroundColor: variables.lightgrey,
            color: variables.lightyellow,
        }
    },
    logoItem: {
        fontSize: "1rem",
        fontWeight: 700,
        paddingLeft: 5,
        letterSpacing: 1,
    },
})

const Header = () => {
    const classes = useStyles(theme);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const isMenuItemSelected = () => {
        return true;
    }

    const menuItems = [{
        link: "/",
        label: "Architetto Salvatore Ciantia",
        icon: ""
    },{
        link: "/about",
        label: "About",
    },{
        link: "/work",
        label: "Work"
    },{
        link: "/contact",
        label: "Contact"
    }]

    return (
        <Box>
            <AppBar position="fixed" component="nav" className={classes.navbar}>
                <Toolbar className={classes.toolbar} disableGutters sx={{ display: { xs: 'none', md: 'flex' }}}>
                    {menuItems.map((item) => {
                        return (
                            <Link to={item.link} key={item.link}>
                                <span className={classnames(classes.toolbarItem, classes.logoItem)}>
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </Toolbar>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    sx={{ display: { xs: 'flex', md: 'none' }}}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                    },
                    }}
                >
                    {menuItems.map((item) => (
                    <MenuItem key={item.link} selected={isMenuItemSelected()} onClick={handleMenuClose}>
                        {item.label}
                    </MenuItem>
                    ))}
                </Menu>
            </AppBar>
        </Box>
    )
}

export default Header;
