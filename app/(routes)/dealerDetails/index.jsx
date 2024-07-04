import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";

const index = () => {
  const [allDealers, setAllDealers] = useState([]);
  useEffect(() => {
    const functio = async () => {
      try {
        const response = await axios.get(
          "http://192.168.29.251:3000/get-Dealers"
        );
        let data = [];
        let count = response.data.length;

        console.log("count", count);

        for (let i = 0; i < count; i++) {
          let temp = response.data[i];
          data.push([
            i + 1,
            temp.name,
            0,
            temp.mobileNo,
            temp.email,
            temp.DOB.toLocaleString().split(",")[0],
            temp.admin ? "Onwer" : "Dealer",
            temp.city,
            temp.state,
          ]);
        }
        setAllDealers(data);

        console.log(response.data);
      } catch (error) {
        console.log("error fetching posts", error);
      }
    };

    functio();
  }, []);
  const state = {
    tableHead: [
      "Sr No.",
      "Name",
      "Count",
      "MobileNo.",
      "Email",
      "DOB",
      "Access Dealer",
      "City",
      "State",
    ],
    widthArr: [70, 200, 70, 150, 300, 150, 130, 130, 130],
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={state.tableHead}
              style={styles.head}
              widthArr={state.widthArr}
              textStyle={styles.text}
            />
            <Rows
              data={allDealers}
              widthArr={state.widthArr}
              textStyle={styles.text}
            />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
