import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// 

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='index'/>
        <Stack.Screen name="(routes)/signIn/index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)/add/index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)/country/index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)/owner/index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)/vehicle/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    // </ThemeProvider>
  );
}
