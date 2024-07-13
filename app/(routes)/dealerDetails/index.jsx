import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

const index = () => {
  const [allDealers, setAllDealers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const functio = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://bima-mahalserver.vercel.app/get-Dealers"
        );
        let data = [];
        let count = response.data.length;

        for (let i = 0; i < count; i++) {
          let temp = response.data[i];
          let date = new Date(temp.DOB);
          data.push([
            i + 1,
            temp.name,
            temp.registeredVehicle.length,
            temp.mobileNo,
            temp.email,
            date.toLocaleString().split(",")[0],
            temp.admin ? "Onwer" : "Dealer",
            temp.city,
            temp.state,
          ]);
        }
        setAllDealers(data);
        setLoading(false);
      } catch (error) {
        console.log("error fetching posts", error);
        setLoading(false);
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
      "Access",
      "City",
      "State",
    ],
    widthArr: [70, 200, 70, 150, 300, 150, 130, 130, 130],
  };
  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
          fontWeight: "condensedBold",
        }}
      >
        All Dealers :-
      </Text>
      <ScrollView horizontal={true}>
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
                data={allDealers}
                widthArr={state.widthArr}
                textStyle={{ ...styles.text }}
              />
            </Table>
          </ScrollView>
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
  spinnerTextStyle: {
    color: "#FFF",
  },
});
