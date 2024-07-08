import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDataContext } from "../../../context/userContext";
import Spinner from "react-native-loading-spinner-overlay";

const index = () => {
  const { userData, changeUserData } = useContext(UserDataContext);

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userData");
        if (token) {
          setTimeout(() => {
            changeUserData(JSON.parse(token));
            router.replace("/(tabs)/home");
          }, 400);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    setLoading(true);
    const user = {
      username: username,
      password: password,
    };

    axios
      .post("https://bima-mahalserver.vercel.app/login", user)
      .then((response) => {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(response.data));
        changeUserData(response.data);
        router.replace("/(tabs)/home");
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert(`Error`, error.response.data.err);
      });
  };
  return (
    <ScrollView style={{ minHeight: "100%", backgroundColor: "white" }}>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", minHeight: "100%" }}
      >
        <View style={{ marginTop: 50 }}>
          <Image
            style={{ width: 250, height: 300, resizeMode: "contain" }}
            source={require("@/assets/images/sign_in.png")}
          />
        </View>

        <KeyboardAvoidingView>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }}>
              Login to Your Account
            </Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
              <TextInput
                value={username}
                onChangeText={(text) => setusername(text)}
                placeholderTextColor={"gray"}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: 16,
                }}
                placeholder="enter your username"
              />
            </View>

            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <AntDesign
                  style={{ marginLeft: 8 }}
                  name="lock"
                  size={24}
                  color="gray"
                />
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor={"gray"}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="enter your Password"
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text>Keep me logged in</Text>
              <Text style={{ fontWeight: "500", color: "#007FFF" }}>
                Forgot Password
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 45 }} />

          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
              }}
            >
              Login
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});
