import React, { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registerdata")) || []
  );

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("userlogged"))
  );

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedUser,
        setLoggedUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};