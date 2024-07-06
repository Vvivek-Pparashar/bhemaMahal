import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { router } from "expo-router";
import { VehicleDataContext } from "../../../context/newVehicle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { VehicleCountryContext } from "../../../context/vehicleCountry";

const App = () => {
  const {
    vehicleData,
    changeState,
    changeCity,
    changeCityValue,
    changeStateValue,
    changePincode,
  } = useContext(VehicleDataContext);

  const { vehicleCountry, changeStateValueLabel, changeCityValueLabel } =
    useContext(VehicleCountryContext);

  const BASE_URL = "https://api.countrystatecity.in/v1";
  const API_KEY = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==";

  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (vehicleCountry.stateValueLabel == "") {
      var config = {
        method: "get",
        url: `${BASE_URL}/countries/IN/states`,
        headers: {
          "X-CSCAPI-KEY": API_KEY,
        },
      };

      axios(config)
        .then(function (response) {
          var count = Object.keys(response.data).length;
          let stateArray = [];
          for (var i = 0; i < count; i++) {
            stateArray.push({
              value: response.data[i].iso2,
              label: response.data[i].name,
            });
          }
          changeStateValueLabel(stateArray);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const handleCity = (stateCode) => {
    var config = {
      method: "get",
      url: `${BASE_URL}/countries/IN/states/${stateCode}/cities`,
      headers: {
        "X-CSCAPI-KEY": API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        changeCityValueLabel(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleNextClick = () => {
    if (!vehicleData.state || !vehicleData.city || !vehicleData.pincode) {
      Alert.alert(
        "Fill All Columns",
        `Empty Columns List\n${vehicleData.state ? "" : "\nState"}${
          vehicleData.city ? "" : "\nCity"
        }${vehicleData.pincode ? "" : "\nPinCode"}`
      );
    } else {
      router.replace("(tabs)/home");
    }
  };

  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: "white", minHeight: "100%" }}
    >
      <ScrollView>
        <KeyboardAwareScrollView>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Add Address Details
          </Text>
          <View style={styles.container}>
            <Text style={styles.label}>Country</Text>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              value={vehicleData.country}
              style={[styles.input]}
            />
            <Text style={styles.label}>State</Text>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={vehicleCountry.stateValueLabel}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select state" : "..."}
              searchPlaceholder="Search..."
              value={vehicleData.stateValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                changeStateValue(item.value);
                handleCity(item.value);
                setIsFocus(false);
                changeState(item.label);
              }}
            />
            <Text style={styles.label}>City</Text>

            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={vehicleCountry.cityValueLabel}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select city" : "..."}
              searchPlaceholder="Search..."
              value={vehicleData.cityValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                changeCityValue(item.value);
                setIsFocus(false);
                changeCity(item.label);
              }}
            />
            <Text style={styles.label}>PinCode</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your PinCode"
              value={vehicleData.pincode}
              keyboardType="number-pad"
              onChangeText={(text) => changePincode(text)}
            />
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
                  backgroundColor: "#DFE0E2",
                  padding: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  flex: 1,
                }}
                onPress={() => {
                  router.replace("owner");
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  Back
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
                onPress={() => {
                  handleNextClick();
                }}
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    color: "black",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
