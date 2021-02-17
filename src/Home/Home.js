import React ,{useState, useContext} from "react"

import {listProvider} from "../services/exportsFile"
import {TriviaContext} from "../stateManager/stateManager"

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import 'fontsource-roboto';


import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Toolbar from "@material-ui/core/Toolbar"
import Iconbutton from "@material-ui/core/Iconbutton"
import AppBar from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu"

import HomeIcon from "@material-ui/icons/Home"
import GameIcon from "@material-ui/icons/Games"
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useStyles} from "../services/exportsFile"
import { Box, FormHelperText } from "@material-ui/core";

function Home() {
 let classes = useStyles()

  return (
    <div className="Home">Here Home!
   

    </div>
  );
}

export default Home;
