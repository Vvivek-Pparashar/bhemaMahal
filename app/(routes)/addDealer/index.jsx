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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";

import { DealerDetailContext } from "../../../context/dealerDetail";
const index = () => {
  const {
    dealerDetail,
    changeDealerName,
    changeDealerEmail,
    changeDealerMobileNo,
    changeDealerCity,
    changeDealerDOB,
    changeDealerState,
    changeDealerPassword,
    changeDealerAdmin,
    changeDealerUserName,
  } = useContext(DealerDetailContext);

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
    changeDealerDOB(dateString);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
      <KeyboardAwareScrollView style={{ padding: 20 }}>
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
            value={dealerDetail.name}
            onChangeText={(text) => changeDealerName(text)}
          />

          <Text style={styles.label}>Dealer Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Dealer Email"
            value={dealerDetail.email}
            onChangeText={(text) => changeDealerEmail(text)}
          />

          <Text style={styles.label}>Mobile No.</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile No."
            keyboardType="numeric"
            maxLength={10}
            value={dealerDetail.mobileNo}
            onChangeText={(text) => changeDealerMobileNo(text)}
          />

          <Text style={styles.label}>D.O.B</Text>
          <TextInput
            style={styles.input}
            placeholder={"DD-MM-YYYY"}
            onFocus={() => setOpen(true)}
            value={dealerDetail.DOB}
          />

          {open && (
            <DateTimePicker value={date} onChange={onChange} mode="date" />
          )}

          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter User Name"
            value={dealerDetail.username}
            onChangeText={(text) => changeDealerUserName(text)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            keyboardType="numeric"
            maxLength={10}
            value={dealerDetail.password}
            onChangeText={(text) => changeDealerPassword(text)}
          />
          {/* </KeyboardAvoidingView> */}
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
                router.replace("home");
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
                router.replace("home");
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
