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
import { LinearGradient } from "expo-linear-gradient";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const index = () => {
  return (
    <ScrollView contentContainerStyle={styles.cnt}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#c1dfc4", "#deecdd"]}
        style={styles.lg}
      >
        <Link href={"add"}>
          <View style={styles.lg_l_v}>
            <MaterialIcons
              name="add-to-queue"
              size={26}
              style={{ color: "#353635" }}
            />
            <Text style={styles.lg_l_v_text}>Add New Vehicle</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="minus"
                size={30}
                style={{ color: "#353635" }}
              />
              <MaterialCommunityIcons
                name="arrow-right"
                size={30}
                style={{ marginLeft: -14, color: "#353635" }}
              />
            </View>
          </View>
        </Link>
      </LinearGradient>

      {/* background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#cfd9df", "#e2ebf0"]}
        style={styles.lg}
      >
        <Link href={"add"}>
          <View style={styles.lg_l_v}>
            <MaterialIcons
              name="search"
              size={26}
              style={{ color: "#353635" }}
            />
            <Text style={styles.lg_l_v_text}>Search a vechile</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="minus"
                size={30}
                style={{ color: "#353635" }}
              />
              <MaterialCommunityIcons
                name="arrow-right"
                size={30}
                style={{ marginLeft: -14, color: "#353635" }}
              />
            </View>
          </View>
        </Link>
      </LinearGradient>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#cfd9df", "#e2ebf0"]}
        style={styles.lg}
      >
        <Link href={"add"}>
          <View style={styles.lg_l_v}>
            <MaterialIcons
              name="update"
              size={26}
              style={{ color: "#353635" }}
            />
            <Text style={styles.lg_l_v_text}>Update Service Date</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="minus"
                size={30}
                style={{ color: "#353635" }}
              />
              <MaterialCommunityIcons
                name="arrow-right"
                size={30}
                style={{ marginLeft: -14, color: "#353635" }}
              />
            </View>
          </View>
        </Link>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  cnt: {
    display: "flex",
    padding: 20,
    gap: 20,
    backgroundColor: "white",
    minHeight: "100%",
  },
  lg: { borderRadius: 15 },

  lg_l_v: {
    height: 150,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingLeft: 30,
    alignItems: "center",
  },

  lg_l_v_text: { fontSize: 22, color: "#353635" },
});

// background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
