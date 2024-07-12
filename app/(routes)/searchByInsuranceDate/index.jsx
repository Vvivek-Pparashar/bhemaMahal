import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";
import { AllVehicleContext } from "../../../context/allVehicle";
import DateTimePicker from "@react-native-community/datetimepicker";
import { exportDataToExcel } from "../../../component/exportDataToExcel";
import { arraysToObject } from "../../../component/arrayToObejct";

const index = () => {
  const { allVehicle } = useContext(AllVehicleContext);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [exportData, setExportData] = useState([]);

  const state = {
    tableHead: [
      "Sr No.",
      "Date Of Regestration",
      "Dealer",
      "Type",
      "Modal",
      "Company",
      "Variant",
      "Manufacture. Year",
      "Vehicle No.",
      "Engine No.",
      "Chassis No.",
      "Insurance Company",
      "Insurance Expiry",
      "Service Date",
      "KM Driven",
      "Owner Name",
      "Mobile No",
      "DOB",
      "Aadhar No",
      "PanCard No",
      "State",
      "City",
      "Pincode",
    ],
    widthArr: [
      70, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
      200, 200, 200, 200, 200, 200, 200, 200,
    ],
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    setOpen(false);
    setDate(currentDate);
    setValue(currentDate);
  };

  useEffect(() => {
    let count = allVehicle.length;

    const temp = [];

    for (let i = 0; i < count; i++) {
      let row = allVehicle[i];

      if (
        value &&
        value.toLocaleString().split(",")[0] ==
          new Date(row.ied).toLocaleString().split(",")[0]
      ) {
        temp.push([
          i + 1,
          new Date(row.createdAt).toLocaleString().split(",")[0],
          row.createdBy.name,
          row.type,
          row.modal,
          row.company,
          row.variant,
          row.MYear,
          row.hasPVNo ? row.PVNo : "Temporary",
          row.engineNo,
          row.chassisNo,
          row.ic,
          new Date(row.ied).toLocaleString().split(",")[0],
          new Date(row.serviceDate).toLocaleString().split(",")[0],
          row.kmDriven,
          row.ownerName,
          row.mobileNo,
          new Date(row.DOB).toLocaleString().split(",")[0],
          row.aadharNo,
          row.hasPAN ? row.PAN : "NO",
          row.state,
          row.city,
          row.pincode,
        ]);
      }
    }

    setData(temp);
    setExportData(arraysToObject(state.tableHead, temp));
  }, [value]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
          fontWeight: "condensedBold",
        }}
      >
        Insurance Expiry Date :-
      </Text>

      <TextInput
        style={styles.input}
        placeholder={"DD-MM-YYYY"}
        onTouchStart={() => setOpen(true)}
        value={value ? value.toLocaleString().split(",")[0] : ""}
      />

      {open && <DateTimePicker value={date} onChange={onChange} mode="date" />}

      {exportData.length != 0 ? (
        <Button
          title="Export to Excel"
          onPress={() => exportDataToExcel(exportData)}
        />
      ) : (
        ""
      )}

      {data.length == 0 ? (
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Nothing Found!!!
        </Text>
      ) : (
        <ScrollView horizontal={true} style={{ marginTop: 20 }}>
          <View>
            <ScrollView>
              <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
                <Row
                  data={state.tableHead}
                  style={styles.head}
                  widthArr={state.widthArr}
                  textStyle={styles.text}
                />
                <Rows
                  data={data}
                  widthArr={state.widthArr}
                  textStyle={styles.text}
                />
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
