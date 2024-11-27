import React, { createContext, useEffect, useState } from 'react'


export const ContextsApi = createContext();

const ContextProvider = ({ children }) => {


  const LoginData = JSON.parse(localStorage.getItem("UserLoggingData"));
  const [ currentType, setCurrentType ] = useState(JSON.parse(localStorage.getItem("Type")))
  // { type : 1 }
  const updateState = (key, value) => {
    // key = "type"
    // value = 1,

    setCurrentType((prev) => ({ ...prev, [ key ]: value }));
    // { type : 1 }
    localStorage.setItem("Type", JSON.stringify({ ...currentType, [ key ]: value }));
  };

  console.log(currentType.type, ":sdddddddddddddddddddddddddddddddddddddddddd");
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
