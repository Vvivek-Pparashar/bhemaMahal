// vehicleData Context.js
import React, { createContext, useState } from "react";

// Create a context
export const VehicleDataContext = createContext();

// Create a provider component
const base = {
  company: "",
  modal: "",
  variant: "",
  MYear: "",
  PVNo: false,
  PVNo1: "",
  PVNo2: "",
  PVNo3: "",
  PVNo4: "",
  engineNo: "",
  chassisNo: "",
  ic: "",
  ied: "",
  serviceData: "",
  kmDriven: "",
  ownerName: "",
  mobileNo: "",
  DOB: "",
  aadharNo: "",
  hasPAN: false,
  PAN: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
};
export const VehicleDataProvider = ({ children }) => {
  const [vehicleData, setvehicleData] = useState({ ...base });

  ////////////////////////////////////////////
  ////////////// FIRST PAGE //////////////////
  ////////////////////////////////////////////

  //// changeCompany
  const changeCompany = (e) =>
    setvehicleData((data) => ({ ...data, company: e }));
  //// changeModal
  const changeModal = (e) => setvehicleData((data) => ({ ...data, modal: e }));
  //// changeVariant
  const changeVariant = (e) =>
    setvehicleData((data) => ({ ...data, variant: e }));

  ////////////////////////////////////////////
  ////////////// SECOND PAGE /////////////////
  ////////////////////////////////////////////

  const changeMYear = (e) => setvehicleData((data) => ({ ...data, MYear: e }));
  //// changePVNo
  const changePVNo = (e) => setvehicleData((data) => ({ ...data, PVNo: e }));
  //// changePVNo1
  const changePVNo1 = (e) => setvehicleData((data) => ({ ...data, PVNo1: e }));
  //// changePVNo2
  const changePVNo2 = (e) => setvehicleData((data) => ({ ...data, PVNo2: e }));
  //// changePVNo3
  const changePVNo3 = (e) => setvehicleData((data) => ({ ...data, PVNo3: e }));
  //// changePVNo4
  const changePVNo4 = (e) => setvehicleData((data) => ({ ...data, PVNo4: e }));
  //// change engineNo
  const changeengineNo = (e) =>
    setvehicleData((data) => ({ ...data, engineNo: e }));
  //// change chassisNo
  const changechassisNo = (e) =>
    setvehicleData((data) => ({ ...data, chassisNo: e }));
  //// change ic
  const changeic = (e) => setvehicleData((data) => ({ ...data, ic: e }));
  //// change ied
  const changeied = (e) => setvehicleData((data) => ({ ...data, ied: e }));
  //// change serviceData
  const changeserviceData = (e) =>
    setvehicleData((data) => ({ ...data, serviceData: e }));
  //// change kmDriven
  const changekmDriven = (e) =>
    setvehicleData((data) => ({ ...data, kmDriven: e }));

  ////////////////////////////////////////////
  ////////////// THIRD PAGE //////////////////
  ////////////////////////////////////////////

  //// change ownerName
  const changeownerName = (e) =>
    setvehicleData((data) => ({ ...data, ownerName: e }));

  //// change mobileNo
  const changemobileNo = (e) =>
    setvehicleData((data) => ({ ...data, mobileNo: e }));

  //// change DOB
  const changeDOB = (e) => setvehicleData((data) => ({ ...data, DOB: e }));

  //// change aadharNo
  const changeaadharNo = (e) =>
    setvehicleData((data) => ({ ...data, aadharNo: e }));

  //// change hasPAN
  const changehasPAN = (e) =>
    setvehicleData((data) => ({ ...data, hasPAN: e }));

  //// change PAN
  const changePAN = (e) => setvehicleData((data) => ({ ...data, PAN: e }));

  ////////////////////////////////////////////
  ////////////// FORTH PAGE //////////////////
  ////////////////////////////////////////////

  return (
    <VehicleDataContext.Provider
      value={{
        vehicleData,
        changeCompany,
        changeModal,
        changeVariant,
        changeMYear,
        changePVNo,
        changePVNo1,
        changePVNo2,
        changePVNo3,
        changePVNo4,
        changeengineNo,
        changechassisNo,
        changeic,
        changeied,
        changeserviceData,
        changekmDriven,
        changeownerName,
        changemobileNo,
        changeDOB,
        changeaadharNo,
        changehasPAN,
        changePAN
      }}
    >
      {children}
    </VehicleDataContext.Provider>
  );
};
