import { PixelRatio, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SearchLinearGradient from "../../../component/SearchLinearGradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const dp = (size) => {
  return size / PixelRatio.get();
};

const index = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchLinearGradient
        text_prop={"Search By Vehicle No."}
        icon_prop={"manage-search"}
        link_prop={"addDealer"}
      />
      <SearchLinearGradient
        text_prop={"By Insurance Company"}
        icon_prop={"content-paste-search"}
        link_prop={"addDealer"}
      />
      <SearchLinearGradient
        text_prop={"Search By Dealer Name"}
        icon_prop={"person-search"}
        link_prop={"addDealer"}
      />
      <SearchLinearGradient
        text_prop={"All Vehicle"}
        icon_prop={"search"}
        link_prop={"addDealer"}
      />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: dp(50),
    gap: wp("5%"),
    backgroundColor: "white",
    minHeight: "100%",
    paddingTop: dp(70),
  },
});
