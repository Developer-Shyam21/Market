import React, { createContext, useEffect, useState } from 'react'


export const ContextsApi = createContext() ;

const  ContextProvider = ({children}) => {

    const [registerData,setRegisterData] = useState([])
    const [loginData,setLoginData] = useState([])

    console.log("my loginData are",registerData)
  return (
  <ContextsApi.Provider value={{
    registerData,
    setRegisterData,
    loginData,
    setLoginData,  
  }}>{children}</ContextsApi.Provider>
);
}

export default ContextProvider;
