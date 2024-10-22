// This context is used for storing the user data so that we dont have to get it from async storage..

// UserData Context.js
import React, { createContext, useState } from "react";

// Create a context
export const UserDataContext = createContext();

// Create a provider component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const changeUserData = (e) => setUserData({...e});  
  const changeUserDataNull = (e) => setUserData(() => ({}));

  return (
    <UserDataContext.Provider
      value={{
        userData,
        changeUserData,
        changeUserDataNull,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
