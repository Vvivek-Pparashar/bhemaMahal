import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import { router } from "expo-router";

////////////////////////////
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
//   LanguageSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

const index = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: "white", minHeight: "100%" }}
    >
      <Text style={{ fontSize: 20, padding: 20 }}>ADD Vechile here</Text>
      <View style={styles.container}>
        {/* ///////////////////////////////////// */}
        <Text style={styles.label}>Vehicle Type</Text>
        <View
          style={{
            borderWidth: 1,
            // borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: "2 wheeler", value: "2 wheeler" },
              { label: "4 wheeler", value: "4 wheeler" },
              {
                label: "Woods Carying vechile",
                value: "Woods Carying vechile",
              },
              { label: "Passanger", value: "Passanger" },
              { label: "Miscellaneous", value: "Miscellaneous" },
            ]}
            placeholder={{
              label: "Select vehicle type",
              value: null,
            }}
          />
        </View>

        <Text style={styles.label}>Company</Text>
        <TextInput style={styles.input} placeholder="Enter Vehicle Company" />

        <Text style={styles.label}>Modal</Text>
        <TextInput style={styles.input} placeholder="Enter Vehicle Modal" />

        <Text style={styles.label}>Variant</Text>
        <TextInput style={styles.input} placeholder="Enter Vehicle Variant" />
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
              backgroundColor: "red",
              padding: 20,
              borderRadius: 15,
              alignItems: "center",
              flex: 1,
            }}
            onPress={() => {
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
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0F3460",
              padding: 20,
              borderRadius: 15,
              alignItems: "center",
              flex: 1,
            }}
            onPress={() => {
              router.replace("vehicle");
            }}
          >
            <Text
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 4,
//     color: "black",
//     paddingRight: 30,
//     marginBottom: 20,
//   },
//   inputAndroid: {
//     fontSize: 16,
//     // paddingHorizontal: 5,
//     // paddingVertical: 8,
//     //   borderWidth: 1,
//     //   borderColor: 'black',
//     borderRadius: 8,
//     color: "black",
//     // paddingRight: 20,
//     // marginBottom: 20,
//   },
// });
