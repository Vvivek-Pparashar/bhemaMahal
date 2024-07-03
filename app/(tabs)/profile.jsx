import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
const staticImage = require("../../assets/images/profile.png");
import { UserDataContext } from "../../context/userContext";

const profile = () => {
  const { userData } = useContext(UserDataContext);
  
  return (
    <View style={{ backgroundColor: "white", minHeight: "100%", padding: 20 }}>
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
            {userData.name}
          </Text>
          <Text style={{ fontSize: 13, letterSpacing: 0.7,  }}>
            Location: {userData.city}, {userData.state}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
