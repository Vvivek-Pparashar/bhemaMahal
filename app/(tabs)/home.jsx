import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../../context/userContext";
import AdminHomeScreen from "../screen/AdminHomeScreen";
import DealerHomeScreen from "../screen/DealerHomeScreen";

const home = () => {

  const { userData } = useContext(UserDataContext);
  console.log(userData.admin);
  return (
    <View>{userData.admin ? <AdminHomeScreen /> : <DealerHomeScreen />}</View>
  );
};

export default home;

const styles = StyleSheet.create({});
