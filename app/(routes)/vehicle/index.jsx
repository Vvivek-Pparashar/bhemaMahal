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
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import CheckBox from "react-native-check-box";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import { VehicleDataContext } from "../../../context/newVehicle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import insuranceList from "../../../assets/data/insuranceList";

const index = () => {
  const [dateED, setDateED] = useState(new Date());
  const [openED, setOpenED] = useState(false);

  // for service
  const [dateSD, setDateSD] = useState(new Date());
  const [openSD, setOpenSD] = useState(false);

  const {
    vehicleData,
    changeMYear,
    changehasPVNo,
    changePVNo1,
    changePVNo2,
    changePVNo3,
    changePVNo4,
    changeengineNo,
    changechassisNo,
    changeic,
    changeied,
    changeserviceDate,
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
    changeied(currentDate);
  };

  const onChangeSD = (event, selectedDate) => {
    const currentDate = selectedDate;

    setOpenSD(false);
    setDateSD(currentDate);
    changeserviceDate(currentDate);
  };

  const handleNextClick = () => {
    if (
      !vehicleData.MYear ||
      !vehicleData.engineNo ||
      !vehicleData.chassisNo ||
      !vehicleData.ic ||
      !vehicleData.ied ||
      !vehicleData.serviceDate ||
      !vehicleData.kmDriven
    ) {
      Alert.alert(
        "Fill All Columns",
        `Empty Columns List\n${vehicleData.MYear ? "" : "\nManufacture Year"}${
          vehicleData.engineNo ? "" : "\nEngine No."
        }${vehicleData.chassisNo ? "" : "\nChassis No."}${
          vehicleData.ic ? "" : "\nInsurance Company"
        }${vehicleData.ied ? "" : "\nInsurance Expiry Date"}${
          vehicleData.serviceDate ? "" : "\nService Date."
        }${vehicleData.kmDriven ? "" : "\nKiloMeter Driven"}`
      );
    } else {
      if (vehicleData.hasPVNo) {
        if (
          !vehicleData.PVNo1 ||
          !vehicleData.PVNo2 ||
          !vehicleData.PVNo3 ||
          !vehicleData.PVNo4
        ) {
          Alert.alert("Fill All Columns", "Fill Vechile No.");
        } else {
          router.replace("owner");
        }
      } else {
        router.replace("owner");
      }
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
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
                isChecked={vehicleData.hasPVNo}
                onClick={() => {
                  changehasPVNo(!vehicleData.hasPVNo);
                }}
              />
            </View>

            {vehicleData.hasPVNo && (
              <View>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 20 }}
                >
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

            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={"Insurance Company"}
              searchPlaceholder="Search..."
              value={vehicleData.ic}
              data={insuranceList}
              onChange={(item) => changeic(item.value)}
            />

            <Text style={styles.label}>Insurance Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder={"DD-MM-YYYY"}
              onFocus={() => setOpenED(true)}
              value={vehicleData.ied.toLocaleString().split(",")[0]}
            />

            {openED && (
              <DateTimePicker
                value={dateED}
                onChange={onChangeED}
                mode="date"
              />
            )}

            <Text style={styles.label}>Service Date</Text>
            <TextInput
              style={styles.input}
              placeholder={"DD-MM-YYYY"}
              onFocus={() => setOpenSD(true)}
              value={vehicleData.serviceDate.toLocaleString().split(",")[0]}
            />

            {openSD && (
              <DateTimePicker
                value={dateSD}
                onChange={onChangeSD}
                mode="date"
              />
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
                  Next
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

  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
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
});
