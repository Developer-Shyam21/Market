import React, { createContext, useState } from 'react'


export const ContextsApi = createContext() ;

const  ContextProvider = ({children}) => {

    const [registerData,setRegisterData] = useState([])
    const [loginData,setLoginData] = useState([])



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
