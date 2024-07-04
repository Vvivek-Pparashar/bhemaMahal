// DealerDetail Context.js
import React, { createContext, useState } from "react";

// Create a context
export const DealerDetailContext = createContext();

const base = {
  name: "",
  mobileNo: "",
  email: "",
  DOB: "",
  state: "",
  city: "",
  password: "",
  admin: false,
  username: "",
};

// Create a provider component
export const DealerDetailProvider = ({ children }) => {
  const [dealerDetail, setDealerDetail] = useState({});

  //// Change Name
  const changeDealerName = (e) =>
    setDealerDetail((data) => ({ ...data, name: e }));

  //// Change Email
  const changeDealerEmail = (e) =>
    setDealerDetail((data) => ({ ...data, email: e }));

  //// Change Mobile No
  const changeDealerMobileNo = (e) =>
    setDealerDetail((data) => ({ ...data, mobileNo: e }));

  //// Change DOB
  const changeDealerDOB = (e) =>
    setDealerDetail((data) => ({ ...data, DOB: e }));

  //// Change City
  const changeDealerCity = (e) =>
    setDealerDetail((data) => ({ ...data, city: e }));

  //// Change State
  const changeDealerState = (e) =>
    setDealerDetail((data) => ({ ...data, state: e }));

  //// Change Password
  const changeDealerPassword = (e) =>
    setDealerDetail((data) => ({ ...data, password: e }));

  //// Change Password
  const changeDealerUserName = (e) =>
    setDealerDetail((data) => ({ ...data, username: e }));

  //// Change Password
  const changeDealerAdmin = (e) =>
    setDealerDetail((data) => ({ ...data, admin: e }));

  //// Set To Null

  const changeSetToNull = () => setDealerDetail({...base});

  return (
    <DealerDetailContext.Provider
      value={{
        dealerDetail,
        changeDealerName,
        changeDealerEmail,
        changeDealerMobileNo,
        changeDealerCity,
        changeDealerDOB,
        changeDealerState,
        changeDealerPassword,
        changeDealerAdmin,
        changeDealerUserName,
        changeSetToNull
      }}
    >
      {children}
    </DealerDetailContext.Provider>
  );
};
