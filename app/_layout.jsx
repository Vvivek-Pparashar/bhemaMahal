import { Image, StyleSheet, Text, View } from "react-native";
import { VehicleDataProvider } from "../context/newVehicle";
import { UserDataProvider } from "../context/userContext";
import { Stack } from "expo-router";
import { DealerDetailProvider } from "../context/dealerDetail";
import { VehicleCountryProvider } from "../context/vehicleCountry";

const logo = require("../assets/images/logo.png");

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
      <Image style={styles.image} source={logo} />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#2375D0" }}>
        BimaMahal
      </Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <VehicleDataProvider>
      <UserDataProvider>
        <DealerDetailProvider>
          <VehicleCountryProvider>
            <Stack>
              <Stack.Screen name="index" />
              <Stack.Screen
                name="(routes)/signIn/index"
                options={{
                  headerBackVisible: false,
                  headerShown: false,

                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen
                name="(routes)/add/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen
                name="(routes)/country/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen
                name="(routes)/owner/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen
                name="(routes)/vehicle/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen
                name="(routes)/update/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen
                name="(routes)/addDealer/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />

              <Stack.Screen
                name="(routes)/dealerDetails/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />

              <Stack.Screen
                name="(routes)/search/index"
                options={{
                  headerBackVisible: false,
                  headerTitle: (props) => <LogoTitle {...props} />,
                }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </VehicleCountryProvider>
        </DealerDetailProvider>
      </UserDataProvider>
    </VehicleDataProvider>
    // </ThemeProvider>
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
