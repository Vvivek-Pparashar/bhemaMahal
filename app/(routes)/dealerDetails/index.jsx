import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Table, Row, Rows } from "react-native-table-component";

const index = () => {
  const state = {
    tableHead: [
      "Sr No.",
      "Name",
      "Count",
      "MobileNo.",
      "Email",
      "DOB",
      "Admin Access",
      "City",
      "State",
    ],
    tableData: [["1", "2", "3", "4", "5", "6", "7", "8", "9"]],
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff", width: 1050 },
  text: { margin: 6 },
});
