import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import "react-native-reanimated";
const logo = require("../assets/images/logo.png");

// import { useColorScheme } from '@/hooks/useColorScheme';

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
        S&V
      </Text>
    </View>
  );
}

//

// engine no.
// adhar card
// insurance company
// expiry date

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(routes)/signIn/index"
        options={{
          headerBackVisible: false,
          // header:false,
          headerShown:false,

          headerTitle: (props) => <LogoTitle {...props} />
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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
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
