import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import CheckBox from "react-native-check-box";
import DateTimePicker from "@react-native-community/datetimepicker";

const index = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    const dateString = `${day}-${month}-${year}`;

    console.log(dateString);
    setOpen(false);
    setDate(currentDate);
    setDateData(dateString);
  };

  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: "white", minHeight: "100%" }}
    >
      <Text style={{ fontSize: 20, padding: 20 }}>Vehicle Details</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Manufacture Year</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Manufacture Year"
          keyboardType="numeric"
          maxLength={4}
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
            isChecked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
        </View>

        {isChecked && (
          <View>
            {/* <Text style={styles.label}>Vehicle No.</Text> */}
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <TextInput
                style={{ ...styles.input, flex: 2 }}
                placeholder="HR"
                maxLength={2}
              />
              <TextInput
                style={{ ...styles.input, flex: 2 }}
                placeholder="31"
                maxLength={2}
                keyboardType="numeric"
              />
              <TextInput
                style={{ ...styles.input, flex: 1 }}
                placeholder="H"
                maxLength={1}
              />
              <TextInput
                style={{ ...styles.input, flex: 4 }}
                placeholder="9641"
                maxLength={4}
                keyboardType="numeric"
              />
            </View>
          </View>
        )}

        <Text style={styles.label}>chassis number</Text>
        <TextInput
          style={styles.input}
          placeholder="chassis number"
          //   keyboardType="numeric"
          maxLength={17}
        />

        <Text style={styles.label}>Service Date</Text>
        <TextInput
          style={styles.input}
          placeholder={"DD-MM-YYYY"}
          onFocus={() => setOpen(true)}
          value={dateData}
        />

        {open && (
          <DateTimePicker value={date} onChange={onChange} mode="date" />
        )}

        <Text style={styles.label}>kilometer Driven</Text>
        <TextInput
          style={styles.input}
          placeholder="kilometer Driven"
          keyboardType="numeric"
          maxLength={9}
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
              backgroundColor: "#0F3460",
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
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              previous
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#0F3460",
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
