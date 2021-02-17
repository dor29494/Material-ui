import React,{useState,useContext} from "react"
import {TriviaContext} from "./stateManager/stateManager"
import Home from "./Home/Home"
import Online from "./Online/Online"
import {useStyles,listProvider,theme} from "./services/exportsFile"
import { BrowserRouter as Router, Switch, Route ,useHistory, Link} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core/styles'
import {Container,AppBar,Toolbar,Typography,Drawer} from '@material-ui/core'
import Iconbutton from "@material-ui/core/Iconbutton"
import MenuIcon from "@material-ui/icons/Menu"
import './App.css';




function App() {
  let classes = useStyles()
  const {
    menuSides,
    boleanDirection,
    setBoleanDirection,
  } = useContext(TriviaContext);
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setBoleanDirection({ ...boleanDirection, [anchor]: open });
  };

  return (
    <div className="App">
       <ThemeProvider 
    theme={theme}
    className={classes.root}>
         <Container maxWidth="sm">
       <AppBar position="sticky">
         <Toolbar>
           <Iconbutton
           onClick={toggleDrawer(menuSides[1], true)}
           aria-label="open drawer"
           edge="start">
             <MenuIcon
             />
           </Iconbutton>
           <Typography variant="h6">
             Trivo
             </Typography>
         </Toolbar>
       </AppBar>
       <div>
      {menuSides.map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={boleanDirection[anchor]} onClose={toggleDrawer(anchor, false)}>
            {listProvider(anchor,toggleDrawer,classes)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
 
</Container>
</ThemeProvider>



{/* Switch Routers! */}
        <Switch>
          <Route path="/online">
            <Online />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
