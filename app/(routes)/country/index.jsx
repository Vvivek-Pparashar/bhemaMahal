import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
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

const App = () => {
  const { vehicleData, changeState, changeCity, changePincode } =
    useContext(VehicleDataContext);

  const BASE_URL = "https://api.countrystatecity.in/v1";
  const API_KEY = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==";
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
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
        setStateData(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        setCityData(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: "white", minHeight: "100%" }}
    >
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
        <TextInput editable={false} selectTextOnFocus={false} value={vehicleData.country} style={[styles.input,]}/>
        <Text style={styles.label}>State</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select state" : "..."}
          searchPlaceholder="Search..."
          value={vehicleData.state}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            // setState(item.value);
            handleCity(item.value);
            setStateName(item.label);
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
          data={cityData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select city" : "..."}
          searchPlaceholder="Search..."
          value={vehicleData.city}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            // setCity(item.value);
            setCityName(item.label);
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
              console.log(
                `You have selected\nCountry: ${vehicleData.country}\nState: ${vehicleData.state}\nCity: ${vehicleData.city}`
              );
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
              console.log(
                `You have selected\nCountry: ${vehicleData.country}\nState: ${vehicleData.state}\nCity: ${vehicleData.city}`
              );

              router.replace("(tabs)/home");
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
    color:"black",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
