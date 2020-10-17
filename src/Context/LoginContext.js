import React, { useState, createContext } from "react";

export const LoginContext = createContext();

const isLogin = localStorage.getItem("isLogin");

export const LoginProvider = (props) => {
  const [login, setLogin] = useState(isLogin);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {props.children}
    </LoginContext.Provider>
  );
};
