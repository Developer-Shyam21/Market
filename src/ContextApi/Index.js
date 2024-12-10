import React, { createContext, useEffect, useState } from "react";

export const ContextsApi = createContext();

const ContextProvider = ({ children }) => {


  const LoginData = JSON.parse(localStorage.getItem("UserLoggingData"));
  const [currentType, setCurrentType] = useState(
    JSON.parse(localStorage.getItem("Type")) || {}
  );

  const ApiData = JSON.parse(localStorage.getItem("apiData"))
    console.log("my appidata are teriere:",ApiData)

  const updateState = (key, value) => {
    setCurrentType((prev) => ({ ...prev, [key]: value }));

    localStorage.setItem(
      "Type",
      JSON.stringify({ ...currentType, [key]: value })
    );
  };



  console.log("thi myt current typw", currentType.type);

  const SwitchUserData = JSON.parse(localStorage.getItem("SwicthUserData"));
  const TypeSwitch = JSON.parse(localStorage.getItem("Type"));

  return (
    <ContextsApi.Provider
      value={{
        LoginData,
        SwitchUserData,
        TypeSwitch,
        setCurrentType,
        currentType,
        updateState,
        ApiData,
      }}
    >
      {children}
    </ContextsApi.Provider>
  );
};

export default ContextProvider;
