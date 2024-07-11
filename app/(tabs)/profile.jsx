import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
const staticImage = require("../../assets/images/profile.png");
import { UserDataContext } from "../../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import ProfilePageDetailComp from "../screen/ProfilePageDetailComp";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const profile = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { userData, changeUserDataNull } = useContext(UserDataContext);

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
          gap: 20,
          alignItems: "center",
          paddingLeft: 30,
        }}
      >
        <Image
          source={staticImage}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View>
          <Text style={{ fontSize: 25, fontWeight: 500 }}>{userData.name}</Text>
          <Text style={{ fontSize: 13, letterSpacing: 0.7 }}>
            Location: {userData.city}, {userData.state}
          </Text>
        </View>
      </LinearGradient>

      <View style={{ marginBottom: 50, marginTop: 20 }}>
        <ProfilePageDetailComp
          name={new Date(userData.DOB).toLocaleString().split(",")[0]}
          place={"DOB"}
          icon={"cake"}
        />
        <ProfilePageDetailComp
          name={userData.email}
          place={"Email"}
          icon={"email"}
        />

        <ProfilePageDetailComp
          name={userData.registeredVehicle.length}
          place={"Count"}
          icon={"directions-car"}
        />

        <ProfilePageDetailComp
          name={new Date(userData.joindDate).toLocaleString().split(",")[0]}
          place={"Joining Date"}
          icon={"add-link"}
        />
      </View>

      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          AsyncStorage.clear();
          changeUserDataNull();
          router.replace("/signIn");
          // navigation.reset();
        }}
      >
        <View
          style={{
            backgroundColor: "#f72828",
            padding: 13,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: 500 }}>
            Logout
          </Text>
          <MaterialIcons
            name="logout"
            style={{ fontSize: 19, color: "white" }}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
