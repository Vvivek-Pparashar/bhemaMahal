import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ProfilePageDetailComp = ({ name, icon, place }) => {
  return (
    <View style={styles.cnt}>
      <MaterialIcons name={icon} style={styles.icon} />
      {/* <Text style={{...styles.text, marginRight:20}}>{place}</Text> */}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default ProfilePageDetailComp;

const styles = StyleSheet.create({
  cnt: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth:1,
    borderColor:"#DADADC",
    alignItems:"center",
    paddingVertical: 20
  },

  icon: {
    marginLeft:10,
    fontSize: 27,
    color:"#5b626b",
    marginRight:20
  },

  text: {
    fontSize: 17,
    color:"#5b626b"
  },
});
