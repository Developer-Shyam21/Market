import React, { createContext, useEffect, useState } from 'react'


export const ContextsApi = createContext() ;

const  ContextProvider = ({children}) => {

    const [registerData,setRegisterData] = useState([])
    const [loginData,setLoginData] = useState([])
    const [getregisterData,setGetRegisterData] = useState();
    const [userShow,setUserShow] = useState();

    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      if (storedData) {
        setGetRegisterData(storedData);
      }
    }, []); 

  return (
  <ContextsApi.Provider value={{
    registerData,
    setRegisterData,
    loginData,
    setLoginData,  
    getregisterData,
    userShow,
    setUserShow

  }}>{children}</ContextsApi.Provider>
);
}

export default ContextProvider;
