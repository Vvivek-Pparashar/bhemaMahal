import {
  Button,
  SafeAreaView,
  ScrollView,
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
  // const [isChecked, setIsChecked] = useState(false);
  const [dateED, setDateED] = useState(new Date());
  const [openED, setOpenED] = useState(false);

  // for service
  const [dateSD, setDateSD] = useState(new Date());
  const [openSD, setOpenSD] = useState(false);

  const {
    vehicleData,
    changeMYear,
    changePVNo,
    changePVNo1,
    changePVNo2,
    changePVNo3,
    changePVNo4,
    changeengineNo,
    changechassisNo,
    changeic,
    changeied,
    changeserviceData,
    changekmDriven,
  } = useContext(VehicleDataContext);

  const onChangeED = (event, selectedDate) => {
    const currentDate = selectedDate;

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    const dateString = `${day}-${month}-${year}`;

    console.log(dateString);

    setOpenED(false);
    setDateED(currentDate);
    changeied(dateString);
  };

  const onChangeSD = (event, selectedDate) => {
    const currentDate = selectedDate;

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    const dateString = `${day}-${month}-${year}`;

    setOpenSD(false);
    setDateSD(currentDate);
    changeserviceData(dateString);
  };

  return (
    <ScrollView>
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
          Vehicle Details
        </Text>
        <View style={styles.container}>
          <Text style={styles.label}>Manufacture Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Manufacture Year"
            keyboardType="numeric"
            maxLength={4}
            value={vehicleData.MYear}
            onChangeText={(text) => changeMYear(text)}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginBottom: 20,
            }}
          >
            <Text style={styles.label}>Permanent Vehicle No?</Text>
            <CheckBox
              // style={{ flex: 1, padding: 10 }}
              isChecked={vehicleData.PVNo}
              onClick={() => {
                changePVNo(!vehicleData.PVNo);
              }}
            />
          </View>

          {vehicleData.PVNo && (
            <View>
              {/* <Text style={styles.label}>Vehicle No.</Text> */}
              <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                <TextInput
                  style={{ ...styles.input, flex: 2 }}
                  placeholder="HR"
                  maxLength={2}
                  value={vehicleData.PVNo1}
                  onChangeText={(text) => changePVNo1(text)}
                />
                <TextInput
                  style={{ ...styles.input, flex: 2 }}
                  placeholder="31"
                  maxLength={2}
                  keyboardType="numeric"
                  value={vehicleData.PVNo2}
                  onChangeText={(text) => changePVNo2(text)}
                />
                <TextInput
                  style={{ ...styles.input, flex: 1 }}
                  placeholder="H"
                  maxLength={1}
                  value={vehicleData.PVNo3}
                  onChangeText={(text) => changePVNo3(text)}
                />
                <TextInput
                  style={{ ...styles.input, flex: 4 }}
                  placeholder="9641"
                  maxLength={4}
                  keyboardType="numeric"
                  value={vehicleData.PVNo4}
                  onChangeText={(text) => changePVNo4(text)}
                />
              </View>
            </View>
          )}

          <Text style={styles.label}>Engine number</Text>
          <TextInput
            style={styles.input}
            placeholder="Engine number"
            maxLength={17}
            value={vehicleData.engineNo}
            onChangeText={(text) => changeengineNo(text)}
          />

          <Text style={styles.label}>chassis number</Text>
          <TextInput
            style={styles.input}
            placeholder="chassis number"
            maxLength={17}
            value={vehicleData.chassisNo}
            onChangeText={(text) => changechassisNo(text)}
          />

          <Text style={styles.label}>Insurance Company</Text>
          <TextInput
            style={styles.input}
            placeholder="Insurance Company"
            maxLength={17}
            value={vehicleData.ic}
            onChangeText={(text) => changeic(text)}
          />

          <Text style={styles.label}>Insurance Expiry Date</Text>
          <TextInput
            style={styles.input}
            placeholder={"DD-MM-YYYY"}
            onFocus={() => setOpenED(true)}
            value={vehicleData.ied}

          />

          {openED && (
            <DateTimePicker value={dateED} onChange={onChangeED} mode="date" />
          )}

          <Text style={styles.label}>Service Date</Text>
          <TextInput
            style={styles.input}
            placeholder={"DD-MM-YYYY"}
            onFocus={() => setOpenSD(true)}
            value={vehicleData.serviceData}
          />

          {openSD && (
            <DateTimePicker value={dateSD} onChange={onChangeSD} mode="date" />
          )}

          <Text style={styles.label}>kilometer Driven</Text>
          <TextInput
            style={styles.input}
            placeholder="kilometer Driven"
            keyboardType="numeric"
            maxLength={9}
            value={vehicleData.kmDriven}
            onChangeText={(text) => changekmDriven(text)}
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
                router.replace("add");
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
                router.replace("owner");
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
    </ScrollView>
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
