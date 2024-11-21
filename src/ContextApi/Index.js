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
    const getRegisterData = [
      { email: "admin@gmail.com", password: "admin123", type: 1 }, // Admin
      { email: "user@gmail.com", password: "user123", type: 2 }, // Regular User
    ];
    
    const login = (email, password) => {
      const loggingUser = getRegisterData.find(
        (user) => user.email === email && user.password === password
      );
  
      if (loggingUser) {
        setLoginData(loggingUser); // Update state
        localStorage.setItem("UserLoggingData", JSON.stringify(loggingUser)); // Save to localStorage
        return { success: true, user: loggingUser };
      }
      return { success: false, message: "Invalid email or password" };
    };
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
    LoginData,
    getRegisterData,
    login
    
    
   
  }}>{children}</ContextsApi.Provider>
);
}

export default ContextProvider;
