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
        Owner Details
      </Text>
      <View style={styles.container}>
        <Text style={styles.label}>Owner Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
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

        <Text style={styles.label}>Aadhar Card</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your Aadhar CARD"
          value={vehicleData.aadharNo}
          keyboardType="number-pad"
          maxLength={12}
          onChangeText={(text) => changeaadharNo(text)}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <Text style={styles.label}>Does Owner Have PAN Card?</Text>
          <CheckBox
            // style={{ flex: 1, padding: 10 }}
            isChecked={vehicleData.hasPAN}
            onClick={() => {
              changehasPAN(!vehicleData.hasPAN);
            }}
          />
        </View>

        {vehicleData.hasPAN && (
          <View> 
            <Text style={styles.label}>PAN Card</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your PAN CARD"
              value={vehicleData.PAN}
              onChangeText={(text) => changePAN(text.toUpperCase())}
              maxLength={10}
            />
          </View>
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
              backgroundColor: "#DFE0E2",
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
                color: "black",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#2375D0",
              padding: 20,
              borderRadius: 15,
              alignItems: "center",
              //   marginTop: 20,
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
    // padding: 20,
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
