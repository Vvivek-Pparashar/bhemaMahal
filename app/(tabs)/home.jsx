import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Navigator } from "expo-router";

const index = () => {
  return (
    <ScrollView contentContainerStyle={styles.view22}>
      {/* <View style={styles.view22}> */}
      {/* <View style={styles.view_home}> */}
      <Link
        href={"add"}
        //  style={{backgroundColor:"blue", height:"100%", display:"flex"}}
        style={styles.view_home}
      >
        <Text style={{ textAlign: "center" }}>Vivke</Text>
      </Link>
      {/* </View> */}

      <TouchableOpacity>
        <View style={styles.view_home}>
          <Text style={{ textAlign: "center" }}>Vivke</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.view_home}>
        <Text style={{ textAlign: "center" }}>Vivke</Text>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  view22: {
    backgroundColor: "white",
    width: "100%",
    gap: 20,
    // backgroundColor: "blue",
    minHeight: "100%",
    // height: "100%",
    // flex:1,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  view_home: {
    // flex: 1,
    width: 200,
    height: 200,
    backgroundColor: "red",
    // margin: "auto",
    // marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
