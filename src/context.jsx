import React, { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{name: 'John', role: 'student'}}>
    {children}
  </AppContext.Provider>
}

export { AppContext, AppProvider }