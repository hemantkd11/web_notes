import React, { createContext, useContext, useEffect, useState } from "react";

export const Authcontex = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   const [user, setUser] = useState(() => {
  //     return localStorage.getItem("User") || "Guest";
  //   });
  //   useEffect(() => {
  //     if (user) {
  //       localStorage.setItem("User", user);
  //     }
  //   });
  return (
    <Authcontex.Provider value={{ user, setUser }}>
      {children}
    </Authcontex.Provider>
  );
};

export const useStateValue = () => useContext(Authcontex);
