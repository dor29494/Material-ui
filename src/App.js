import React,{useState} from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TestField from "@material-ui/core/TextField"

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {green, orange} from '@material-ui/core/colors'
import 'fontsource-roboto';


import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import Toolbar from "@material-ui/core/Toolbar"
import Iconbutton from "@material-ui/core/Iconbutton"
import AppBar from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu"
import InboxIcon from "@material-ui/icons/Inbox"

import HomeIcon from "@material-ui/icons/Home"
import GameIcon from "@material-ui/icons/Games"
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import './App.css';
import { FormHelperText } from "@material-ui/core";

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const iconPicker = (text)=>{
  if(text === 'בית'){
    return <HomeIcon/>
  }
  if(text === 'אונליין'){
    return <GameIcon/>
  }
  // switch(text) {
  //   case text === 'בית':
  //     console.log('switchCase')
  //     return <HomeIcon/>
  //     break;
  //   case text === 'אונליין':
  //     return <GameIcon/>
  //     break;
  //   case text === 'יחיד':
  //     // code block
  //     break;
  //   case text === 'פרופיל':
  //     // code block
  //     break;
  //   case text === 'שלח שאלה':
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }
}

function App() {
 let classes = useStyles()
 const [mobileOpen, setMobileOpen] = useState(false);
const handleDrawerToggle = (e)=>{
  console.log('here')
}

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['בית','אונליין','אימון','יחיד', 'פרופיל','שלח שאלה', 'התנתק']
        .map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{iconPicker(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const theme = createMuiTheme({
    direction: 'rtl',
    typography: {
        h3: {
            fontSize: 36,
            marginBottom: 15,
        },
        h6:{ fontSize: 22,
        marginRight: '20px',
        color: 'black'}
        ,
    },
})

  return (
    <>
    <ThemeProvider 
    theme={theme}>
    <div className="App">
         <Container maxWidth="sm">
       <AppBar dir="rtl" position="sticky">
         <Toolbar>
           <Iconbutton
           aria-label="open drawer"
           edge="start">
             <MenuIcon
             onClick={handleDrawerToggle}/>
           </Iconbutton>
           <Typography variant="h6">
             טריוויה - אונליין
             </Typography>
         </Toolbar>
       </AppBar>
         </Container>
    </div>
    </ThemeProvider>

    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default App;
