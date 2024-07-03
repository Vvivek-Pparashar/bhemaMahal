import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import CheckBox from "react-native-check-box";
import DateTimePicker from "@react-native-community/datetimepicker";
import { VehicleDataContext } from "../../../context/newVehicle";

const index = () => {
  const {
    vehicleData,
    changeownerName,
    changemobileNo,
    changeDOB,
    changeaadharNo,
    changehasPAN,
    changePAN,
  } = useContext(VehicleDataContext);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    const dateString = `${day}-${month}-${year}`;

    setOpen(false);
    setDate(currentDate);
    changeDOB(dateString);
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
        Dealer Details
      </Text>
      <View style={styles.container}>
        <Text style={styles.label}>Dealer Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Dealer Name"
          value={vehicleData.ownerName}
          onChangeText={(text) => changeownerName(text)}
        />

        <Text style={styles.label}>Dealer Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Dealer Email"
          value={vehicleData.ownerName}
          onChangeText={(text) => changeownerName(text)}
        />

        <Text style={styles.label}>Mobile No.</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile No."
          keyboardType="numeric"
          maxLength={10}
          value={vehicleData.mobileNo}
          onChangeText={(text) => changemobileNo(text)}
        />

        <Text style={styles.label}>D.O.B</Text>
        <TextInput
          style={styles.input}
          placeholder={"DD-MM-YYYY"}
          onFocus={() => setOpen(true)}
          value={vehicleData.DOB}
        />

        {open && (
          <DateTimePicker value={date} onChange={onChange} mode="date" />
        )}

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
              router.replace("vehicle");
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
            onPress={() => {
              router.replace("country");
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

export default index;

const styles = StyleSheet.create({
  container: {
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
