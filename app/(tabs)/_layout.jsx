import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const staticImage = require("../../assets/images/profile.png");
import { Entypo } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
const logo = require("../../assets/images/logo.png");

function LogoTitle() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image
        style={styles.image}
        source={logo}
        // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#2375D0" }}>
        BimaMahal
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: (props) => <LogoTitle {...props} />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ tintColor, focused }) => (
            <Entypo
              name="home"
              size={focused ? 28 : 28}
              color={focused ? "#0c53a2" : "#353635"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome
              name="user-circle-o"
              size={focused ? 28 : 28}
              color={focused ? "#0c53a2" : "#353635"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
});
