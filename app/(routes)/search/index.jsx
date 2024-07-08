import { PixelRatio, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import SearchLinearGradient from "../../../component/SearchLinearGradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AllVehicleContext } from "../../../context/allVehicle";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

const dp = (size) => {
  return size / PixelRatio.get();
};

const index = () => {
  const { allVehicle, changeAllVehicle } = useContext(AllVehicleContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const functio = async () => {
      try {
        const response = await axios.get(
          "https://bima-mahalserver.vercel.app/all-vehicles"
        );

        console.log("fdfsdf");
        changeAllVehicle(response.data);
        console.log("allData", allVehicle);
        setLoading(false);
      } catch (error) {
        console.log("error fetching posts", error);
        setLoading(false);
      }
    };

    functio();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <SearchLinearGradient
        text_prop={"Search By Vehicle No."}
        icon_prop={"manage-search"}
        link_prop={"searchByVehicleNo"}
      />
      <SearchLinearGradient
        text_prop={"Search By Owner Name."}
        icon_prop={"saved-search"}
        link_prop={"searchByOwnerName"}
      />
      <SearchLinearGradient
        text_prop={"By Insurance Company"}
        icon_prop={"content-paste-search"}
        link_prop={"searchByCompany"}
      />
      <SearchLinearGradient
        text_prop={"Search By Dealer Name"}
        icon_prop={"person-search"}
        link_prop={"searchByDealer"}
      />
      <SearchLinearGradient
        text_prop={"All Vehicle"}
        icon_prop={"search"}
        link_prop={"searchAllVehicle"}
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
  spinnerTextStyle: {
    color: "#FFF",
  },
});
