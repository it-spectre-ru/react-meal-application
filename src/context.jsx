import React, { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider values='hello'>
    {children}
  </AppContext.Provider>
}

export { AppContext, AppProvider }