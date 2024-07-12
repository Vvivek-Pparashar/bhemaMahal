import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Table, Col, Cols, TableWrapper } from "react-native-table-component";
import { AllVehicleContext } from "../../../context/allVehicle";
import { exportDataToExcel } from "../../../component/exportDataToExcel";
import { arraysToObject } from "../../../component/arrayToObejct";

const index = () => {
  const { allVehicle } = useContext(AllVehicleContext);
  const [data, setData] = useState([]);
  const [one1, setOne1] = useState("");
  const [one2, setOne2] = useState("");
  const [one3, setOne3] = useState("");
  const [one4, setOne4] = useState("");
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

    let PVNo = `${one1}-${one2}${one3}-${one4}`;

    for (let i = 0; i < count; i++) {
      let row = allVehicle[i];

      if (row.PVNo == PVNo) {
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
  }, [one1, one2, one3, one4]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
          fontWeight: "condensedBold",
        }}
      >
        Search By Vehicle Number :-
      </Text>

      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <TextInput
          style={{ ...styles.input, flex: 2 }}
          placeholder="HR"
          maxLength={2}
          value={one1}
          onChangeText={(text) => setOne1(text)}
        />
        <TextInput
          style={{ ...styles.input, flex: 2 }}
          placeholder="31"
          maxLength={2}
          keyboardType="numeric"
          value={one2}
          onChangeText={(text) => setOne2(text)}
        />
        <TextInput
          style={{ ...styles.input, flex: 1 }}
          placeholder="H"
          maxLength={1}
          value={one3}
          onChangeText={(text) => setOne3(text)}
        />
        <TextInput
          style={{ ...styles.input, flex: 4 }}
          placeholder="9641"
          maxLength={4}
          keyboardType="numeric"
          value={one4}
          onChangeText={(text) => setOne4(text)}
        />
      </View>

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
        <ScrollView style={{ marginTop: 20 }}>
          <View>
            <ScrollView horizontal={true}>
              <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
                <TableWrapper style={styles.wrapper}>
                  <Col
                    data={state.tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Cols
                    data={data}
                    style={styles.row}
                    textStyle={styles.text}
                  />
                </TableWrapper>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },

  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  tableBorder: { borderWidth: 1, borderColor: "#C1C0B9" },
  wrapper: { flexDirection: "row" },
  head: { height: 1250, backgroundColor: "#f1f8ff", width: 200 },
  row: { height: 1250, width: 250 },
  text: { margin: 6 },
});
