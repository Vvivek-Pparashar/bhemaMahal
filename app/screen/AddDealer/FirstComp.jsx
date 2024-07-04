import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckBox from "react-native-check-box";

import { DealerDetailContext } from "../../../context/dealerDetail";

const FirstComp = () => {
  const {
    dealerDetail,
    changeDealerName,
    changeDealerEmail,
    changeDealerMobileNo,
    changeDealerDOB,
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
    <View>
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

      {open && <DateTimePicker value={date} onChange={onChange} mode="date" />}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <Text style={styles.label}>Make This Dealer Admin?</Text>
        <CheckBox
          // style={{ flex: 1, padding: 10 }}
          isChecked={dealerDetail.admin}
          onClick={() => {
            changeDealerAdmin(!dealerDetail.admin);
          }}
        />
      </View>

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
        maxLength={10}
        value={dealerDetail.password}
        onChangeText={(text) => changeDealerPassword(text)}
      />
    </View>
  );
};

export default FirstComp;

const styles = StyleSheet.create({
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
