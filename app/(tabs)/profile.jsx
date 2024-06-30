import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
const staticImage = require("../../assets/images/profile.png");

const profile = () => {
  return (
    <View style={{ backgroundColor: "white", minHeight: "100%", padding: 20 }}>
      {/* background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%); */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#c1dfc4", "#8ec5fc"]}
        style={{
          height: 150,
          borderRadius: 15,
          display: "flex",
          flexDirection: "row",
          gap:20,
          // justifyContent:"center",
          alignItems:"center",
          paddingLeft:30
        }}
      >
        {/* Your content here */}
        <Image
          source={staticImage}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View>
          <Text style={{ fontSize: 25, fontWeight: 500, }}>
            Vivek Parashar
          </Text>
          <Text style={{ fontSize: 13, letterSpacing: 0.7,  }}>
            Location: Jind, Haryana
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
