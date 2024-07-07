import { PixelRatio, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeLinearGradPress from "../../component/HomeLinearGradPress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const dp = (size) => {
  return size / PixelRatio.get();
};

const AdminHomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeLinearGradPress
        text_prop={"Add New Dealer"}
        icon_prop={"person-add-alt-1"}
        link_prop={"addDealer"}

      />

      <HomeLinearGradPress
        text_prop={"Dealer Details"}
        icon_prop={"data-usage"}
        link_prop={"dealerDetails"}
      />

      <HomeLinearGradPress
        text_prop={"Add New Vehicle"}
        icon_prop={"add-circle"}
        link_prop={"add"}
      />

      <HomeLinearGradPress
        text_prop={"Search A Vehicle"}
        icon_prop={"search"}
        link_prop={"search"}
      />

      <HomeLinearGradPress
        text_prop={"Update Vehicle Data"}
        icon_prop={"update"}
        link_prop={"update"}
      />
    </ScrollView>
  );
};

export default AdminHomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: dp(50),
    gap: wp("5%"),
    backgroundColor: "white",
    minHeight: "100%",
  },
});
