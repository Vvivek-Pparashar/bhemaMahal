import { StyleSheet, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <View>
      <Redirect href={"country"} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
