import React, { createContext, useEffect, useState } from 'react'


export const ContextsApi = createContext() ;

const  ContextProvider = ({children}) => {

    const [registerData,setRegisterData] = useState([])
    const [loginData,setLoginData] = useState([])
    const [getregisterData,setGetRegisterData] = useState();
    const [userShow,setUserShow] = useState(false);


    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      if (storedData) {
        setGetRegisterData(storedData);
      }
    }, []); 

    const LoginData = JSON.parse(localStorage.getItem("UserLoggingData"));

  return (
  <ContextsApi.Provider value={{
    registerData,
    setRegisterData,
    loginData,
    setLoginData,  
    getregisterData,
    userShow,
    setUserShow,
    LoginData
   
  }}>{children}</ContextsApi.Provider>
);
}

export default ContextProvider;
