import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import RNPickerSelect from "react-native-picker-select";
import { router } from "expo-router";
import { VehicleDataContext } from "../../../../context/newVehicle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserDataContext } from "../../../../context/userContext";

const index = () => {
  const {
    vehicleData,
    changeType,
    changeCompany,
    changeModal,
    changeVariant,
    changeCreatedBy,
  } = useContext(VehicleDataContext);
  const { userData } = useContext(UserDataContext);

  const handleClick = () => {
    if (
      !vehicleData.type ||
      !vehicleData.company ||
      !vehicleData.modal ||
      !vehicleData.variant
    ) {
      Alert.alert(
        "Fill All Columns",
        `Empty Columns List\n${vehicleData.type ? "" : "\ntype"}${
          vehicleData.company ? "" : "\ncompany"
        }${vehicleData.modal ? "" : "\nmodal"}${
          vehicleData.variant ? "" : "\nvariant"
        }`
      );
    } else {
      changeCreatedBy(userData._id);
      console.log(userData._id)
      router.replace("vehicle");
      console.log(userData)
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
            ADD Vehicle Type
          </Text>
          <View style={styles.container}>
            <Text style={styles.label}>Vehicle Type</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 5,
                marginBottom: 20,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => changeType(value)}
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
                  value: vehicleData.type,
                }}
              />
            </View>

            <Text style={styles.label}>Company</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Vehicle Company"
              value={vehicleData.company}
              onChangeText={(text) => changeCompany(text)}
            />

            <Text style={styles.label}>Modal</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Vehicle Modal"
              value={vehicleData.modal}
              onChangeText={(text) => changeModal(text)}
            />

            <Text style={styles.label}>Variant</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Vehicle Variant"
              value={vehicleData.variant}
              onChangeText={(text) => changeVariant(text)}
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
                  backgroundColor: "#f72828",
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
                  Cancel
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
                  handleClick();
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
