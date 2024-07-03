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
        text_prop={"Dealer Report"}
        icon_prop={"data-usage"}
        link_prop={"add"}
      />

      <HomeLinearGradPress
        text_prop={"Add New Vehicle"}
        icon_prop={"add-circle"}
      />

      <HomeLinearGradPress
        text_prop={"Search A Vehicle"}
        icon_prop={"search"}
        link_prop={"add"}
      />

      <HomeLinearGradPress
        text_prop={"Update service Date"}
        icon_prop={"update"}
        link_prop={"add"}
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
