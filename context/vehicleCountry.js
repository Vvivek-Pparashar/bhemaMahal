// This context is used to store the context of country in add vehicle, so that we dont have to fetch the api again and again, here the all label and values are store of state and cities.

// VehicleCountry Context.js
import React, { createContext, useState } from "react";

// Create a context
export const VehicleCountryContext = createContext();

// Create a provider component

const base = { stateValueLabel: [], cityValueLabel: [] };
export const VehicleCountryProvider = ({ children }) => {
  const [vehicleCountry, setVehicleCountry] = useState({ ...base });

  //// change stateValueLabel
  const changeStateValueLabel = (e) =>
    setVehicleCountry((data) => ({ ...data, stateValueLabel: e }));
  //// change cityValueLabel
  const changeCityValueLabel = (e) =>
    setVehicleCountry((data) => ({ ...data, cityValueLabel: e }));

  return (
    <VehicleCountryContext.Provider
      value={{
        vehicleCountry,
        changeStateValueLabel,
        changeCityValueLabel,
      }}
    >
      {children}
    </VehicleCountryContext.Provider>
  );
};
