import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";
import { AllVehicleContext } from "../../../context/allVehicle";
import insuranceList from "../../../assets/data/insuranceList";
import { Dropdown } from "react-native-element-dropdown";
import { exportDataToExcel } from "../../../component/exportDataToExcel";
import { arraysToObject } from "../../../component/arrayToObejct";

const index = () => {
  const { allVehicle } = useContext(AllVehicleContext);
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
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
  useEffect(() => {
    let count = allVehicle.length;

    const temp = [];

    for (let i = 0; i < count; i++) {
      let row = allVehicle[i];

      if (value == row.ic) {
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
        Insurance Company :-
      </Text>

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
        value={value}
        data={insuranceList}
        onChange={(item) => setValue(item.value)}
      />

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
