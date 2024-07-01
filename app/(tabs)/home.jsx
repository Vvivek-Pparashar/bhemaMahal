import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const dp = (size) => {
  return size / PixelRatio.get();
};

const index = () => {
  // useEffect(()=>{
  //   console.log(PixelRatio.get());
  // }, [])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => router.navigate("add")}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#c1dfc4", "#deecdd"]}
          style={styles.linear_gradient_lg}
        >
          <View style={styles.lg_view}>
            <MaterialIcons name="home" size={30} style={styles.icon_color} />
            <Text style={styles.lg_v_text}>Add New Vehicle</Text>
            <View style={styles.lg_view_view}>
              <MaterialCommunityIcons
                name="minus"
                size={25}
                style={styles.icon_color}
              />
              <MaterialCommunityIcons
                name="arrow-right"
                size={25}
                style={{ marginLeft: -14, color: "#353635" }}
              />
            </View>
          </View>
        </LinearGradient>
      </Pressable>

      <Pressable onPress={() => router.navigate("add")}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#cfd9df", "#e2ebf0"]}
          style={styles.linear_gradient_lg}
        >
          <View style={styles.lg_view}>
            <MaterialIcons name="search" size={26} style={styles.icon_color} />
            <Text style={styles.lg_v_text}>Search a vechile</Text>
            <View style={styles.lg_view_view}>
              <MaterialCommunityIcons
                name="minus"
                size={26}
                style={styles.icon_color}
              />
              <MaterialCommunityIcons
                name="arrow-right"
                size={26}
                style={{ marginLeft: -14, color: "#353635" }}
              />
            </View>
          </View>
        </LinearGradient>
      </Pressable>

      <Pressable onPress={() => router.navigate("add")}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#cfd9df", "#e2ebf0"]}
          style={styles.linear_gradient_lg}
        >
          <View style={styles.lg_view}>
            <MaterialIcons name="update" size={26} style={styles.icon_color} />
            <Text style={styles.lg_v_text}>Update Service Date</Text>
            <View style={styles.lg_view_view}>
              <MaterialCommunityIcons
                name="minus"
                size={26}
                style={styles.icon_color}
              />
              <MaterialCommunityIcons
                name="arrow-right"
                size={26}
                style={{ marginLeft: -14, color: "#353635" }}
              />
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: dp(50),
    gap: wp("5%"),
    backgroundColor: "white",
    minHeight: "100%",
  },

  linear_gradient_lg: { borderRadius: 15 },

  lg_view: {
    height: 150,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: wp("4%"),
    paddingLeft: wp("7%"),
    paddingRight: wp("5%"),
    alignItems: "center",
    position: "relative",
    flex: 1,
  },

  lg_v_text: { fontSize: dp(50), color: "#353635" },

  lg_view_view: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 4,
  },

  icon_color: { color: "#353635" },
});

// background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
