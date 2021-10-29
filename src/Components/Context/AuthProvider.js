import React from "react";
import { createContext } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import UseFirebase from "../Hooks/UseFirebase";
initializeFirebase();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allCOntext = UseFirebase();
  return (
    <AuthContext.Provider value={allCOntext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
