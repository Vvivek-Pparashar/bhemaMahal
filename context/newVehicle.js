// vehicleData Context.js
import React, { createContext, useState } from "react";

// Create a context
export const VehicleDataContext = createContext();

// Create a provider component
const base = {
  type: "",
  company: "",
  modal: "",
  variant: "",
  MYear: "",
  hasPVNo: false,
  PVNo1: "",
  PVNo2: "",
  PVNo3: "",
  PVNo4: "",
  engineNo: "",
  chassisNo: "",
  ic: "",
  ied: "",
  serviceDate: "",
  kmDriven: "",
  ownerName: "",
  mobileNo: "",
  DOB: "",
  aadharNo: "",
  hasPAN: false,
  PAN: "",
  country: "India",
  state: "",
  city: "",
  cityValue: "",
  stateValue: "",
  pincode: "",
  createdBy : "",
};

export const VehicleDataProvider = ({ children }) => {
  const [vehicleData, setvehicleData] = useState({ ...base });

  ////////////////////////////////////////////
  ////////////// FIRST PAGE //////////////////
  ////////////////////////////////////////////
  //// change Type
  const changeType = (e) => setvehicleData((data) => ({ ...data, type: e }));

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
  const changehasPVNo = (e) =>
    setvehicleData((data) => ({ ...data, hasPVNo: e }));
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
  const changeserviceDate = (e) =>
    setvehicleData((data) => ({ ...data, serviceDate: e }));
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

  //// change Country
  const changeCountry = (e) =>
    setvehicleData((data) => ({ ...data, country: e }));

  //// change State
  const changeState = (e) => setvehicleData((data) => ({ ...data, state: e }));

  //// change City
  const changeCity = (e) => setvehicleData((data) => ({ ...data, city: e }));

  //// change StateValue
  const changeStateValue = (e) =>
    setvehicleData((data) => ({ ...data, stateValue: e }));

  //// change CityValue
  const changeCityValue = (e) =>
    setvehicleData((data) => ({ ...data, cityValue: e }));
  //// change PinCode
  const changePincode = (e) =>
    setvehicleData((data) => ({ ...data, pincode: e }));

    //// change createdBy
    const changeCreatedBy = (e) =>
      setvehicleData((data) => ({ ...data, createdBy: e }));

  return (
    <VehicleDataContext.Provider
      value={{
        vehicleData,
        changeType,
        changeCompany,
        changeModal,
        changeVariant,
        changeMYear,
        changehasPVNo,
        changePVNo1,
        changePVNo2,
        changePVNo3,
        changePVNo4,
        changeengineNo,
        changechassisNo,
        changeic,
        changeied,
        changeserviceDate,
        changekmDriven,
        changeownerName,
        changemobileNo,
        changeDOB,
        changeaadharNo,
        changehasPAN,
        changePAN,
        changeCountry,
        changeState,
        changeCity,
        changeCityValue,
        changeStateValue,
        changePincode,
        changeCreatedBy
      }}
    >
      {children}
    </VehicleDataContext.Provider>
  );
};
