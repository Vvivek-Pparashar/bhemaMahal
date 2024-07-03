import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from "react-native";
import React from "react";
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

const HomeLinearGradPress = ({ text_prop, icon_prop, link_prop }) => {
  return (
    <View>
      <Pressable onPress={() => router.navigate(`${link_prop}`)}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#c1dfc4", "#deecdd"]}
          style={styles.linear_gradient_lg}
        >
          <View style={styles.lg_view}>
            <MaterialIcons
              name={icon_prop}
              size={26}
              style={styles.icon_color}
            />
            <Text style={styles.lg_v_text}>{text_prop}</Text>
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
    </View>
  );
};

export default HomeLinearGradPress;

const styles = StyleSheet.create({
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
