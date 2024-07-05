import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { DealerDetailContext } from "../../../context/dealerDetail";

const SecondComp = () => {
  const {
    dealerDetail,
    changeDealerState,
    changeDealerCity,
    changeDealerStateValue,
    changeDealerCityValue,
  } = useContext(DealerDetailContext);

  const BASE_URL = "https://api.countrystatecity.in/v1";
  const API_KEY = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==";

  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
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
        if (dealerDetail.cityValue) handleCity(dealerDetail.stateValue);
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
    <View>
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
        value={dealerDetail.stateValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          changeDealerStateValue(item.value);
          handleCity(item.value);
          setIsFocus(false);
          changeDealerState(item.label);
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
        placeholder={!isFocus ? "Select city..." : "..."}
        searchPlaceholder="Search..."
        value={dealerDetail.cityValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          changeDealerCityValue(item.value);
          setIsFocus(false);
          changeDealerCity(item.label);
        }}
      />
    </View>
  );
};

export default SecondComp;

const styles = StyleSheet.create({
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
