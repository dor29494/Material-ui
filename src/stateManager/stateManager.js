import React, { createContext, useState, useEffect } from "react";

const TriviaContext = React.createContext();
const { Provider } = TriviaContext;

const StateManager = ({ children }) => {
    const [menuSides, setMenuSides] = useState(['left', 'right', 'top', 'bottom'])
    const [boleanDirection, setBoleanDirection] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    // state = values to display
    const state = {
        menuSides,
        boleanDirection
    };
    // actions = callbacks to invoke
    const actions = {
        setMenuSides,
        setBoleanDirection,
    
    };
  
    return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
  };
  
  export { StateManager, TriviaContext };
  