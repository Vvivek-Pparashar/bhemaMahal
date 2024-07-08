import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FirstComp from "../../screen/AddDealer/FirstComp";
import SecondComp from "../../screen/AddDealer/SecondComp";
import { DealerDetailContext } from "../../../context/dealerDetail";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
const index = () => {
  const { dealerDetail, changeSetToNull } = useContext(DealerDetailContext);
  const [loading, setLoading] = useState(false);

  const onPressAddDealer = () => {
    if (
      !dealerDetail.username ||
      !dealerDetail.password ||
      !dealerDetail.city ||
      !dealerDetail.state ||
      !dealerDetail.DOB ||
      !dealerDetail.email ||
      !dealerDetail.name ||
      !dealerDetail.mobileNo
    ) {
      Alert.alert(
        "Fill All Columns",
        `Empty Columns List \n${dealerDetail.name ? "" : "\nName"}${
          dealerDetail.mobileNo ? "" : "\nMobileNo"
        }${dealerDetail.email ? "" : "\nEmail"}${
          dealerDetail.DOB ? "" : "\nDOB"
        }${dealerDetail.username ? "" : "\nUsername"}${
          dealerDetail.password ? "" : "\nPassword"
        }${dealerDetail.state ? "" : "\nState"}${
          dealerDetail.city ? "" : "\nCity"
        }  `
      );
    } else {
      setLoading(true);
      axios
        .post("https://bima-mahalserver.vercel.app/register", dealerDetail)
        .then((response) => {
          changeSetToNull();
          setLoading(false);
          router.replace("home");
        })
        .catch((error) => {
          console.log("error creating post", error);
          setLoading(false);
          Alert.alert("Error", "NetWork Problem");
        });
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <ScrollView>
        <KeyboardAwareScrollView style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Dealer Details
          </Text>
          <View style={styles.container}>
            {/* ///////// First Component /////////// */}
            <FirstComp />
            {/* ///////// Second Component ////////// */}
            <SecondComp />
            {/* ///////// Buttons ////////// */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#f72828",
                  padding: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  flex: 1,
                }}
                onPress={() => {
                  changeSetToNull();
                  router.replace("home");
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  Clear
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#9acd32",
                  padding: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  flex: 1,
                }}
                onPress={() => onPressAddDealer()}
              >
                <Text
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
