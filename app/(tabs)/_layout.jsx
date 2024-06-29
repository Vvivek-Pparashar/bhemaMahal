import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
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
              size={focused ? 33 : 28}
              color={focused ? "blue" : "black"}
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
              size={focused ? 33 : 28}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
