import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { CounterProvider } from "../context/newVehicle";

const index = () => {
  return (
    <View>
      <Redirect href={"owner"} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
