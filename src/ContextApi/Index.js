import React, { createContext, useEffect, useState } from 'react'


export const ContextsApi = createContext() ;

const  ContextProvider = ({children}) => {


    const LoginData = JSON.parse(localStorage.getItem("UserLoggingData"));
    const [currentType , setCurrentType] = useState(
      JSON.parse(localStorage.getItem("Type"))
    )
    console.log(currentType.type,"currentttype")
      const updateState = (key, value) => {
        setCurrentType((prev) => ({ ...prev, [key]: value }));
        localStorage.setItem("Type", JSON.stringify({ ...currentType, [key]: value }));
      };
      

    const SwitchUserData = JSON.parse(localStorage.getItem("SwicthUserData"));
    const TypeSwitch = JSON.parse(localStorage.getItem("Type"));

  return (
  <ContextsApi.Provider value={{
   
    LoginData,
    SwitchUserData,
    TypeSwitch,
    setCurrentType,
    currentType,
    updateState
    
  }}>{children}</ContextsApi.Provider>
);
}

export default ContextProvider;
