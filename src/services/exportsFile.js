import clsx from "clsx"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import SportsEsports from '@material-ui/icons/SportsEsports';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Person from '@material-ui/icons/Person';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactSupport from '@material-ui/icons/ContactSupport';
import ExitToApp from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import {makeStyles,} from '@material-ui/core/styles'
import { Box, createMuiTheme } from "@material-ui/core";
export const drawerWidth = 240
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '40px',
    background: 'black',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  bottomMenu:{
  display: 'flex',
  padding: '0',
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
    padding: theme.spacing(6),
  },
}));
export const theme = createMuiTheme({
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
export const iconPicker = (text)=>{
    if(text === 'Home'){
        return <HomeIcon/>
    }
    if(text === 'Online'){
      return <SportsEsports/>
    }
    if(text === 'Traning'){
        return <FitnessCenter/>
    }
    if(text === 'Single'){
        return <Person/>
    }
    if(text === 'Profile'){
        return <AccountCircle/>
    }
    if(text === 'Ask us!'){
        return <ContactSupport/>
    }
    if(text === 'Disconnect'){
        return <ExitToApp/>
    }
   
  }

export const listProvider = (anchor,toggleDrawer,classes) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box className={classes.toolbar}></Box>
        <Box className={classes.drawer}>
        <Divider/>
      <List>
        {['Home','Online','Traning','Single', 'Profile','Ask us!', 'Disconnect'].map((text, index) => (
          <ListItem button component={Link} key={text} to={`/${text.toLowerCase()}`}>
            <ListItemIcon>{iconPicker(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{iconPicker(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </Box>
    </div>
  );
