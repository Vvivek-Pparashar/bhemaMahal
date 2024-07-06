// AllVehicle Context.js
import React, { createContext, useState } from "react";

// Create a context
export const AllVehicleContext = createContext();

// Create a provider component
export const AllVehicleProvider = ({ children }) => {
  const [allVehicle, setAllVehicle] = useState([]);

  const changeAllVehicle = (e) => setAllVehicle(e);
  const changeAllVehicleNull = (e) => setAllVehicle(() => ([]));

  return (
    <AllVehicleContext.Provider
      value={{
        allVehicle,
        changeAllVehicle,
        changeAllVehicleNull,
      }}
    >
      {children}
    </AllVehicleContext.Provider>
  );
};
