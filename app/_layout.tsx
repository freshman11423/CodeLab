import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    MedievalSharp: require('../assets/fonts/MedievalSharp-Regular.ttf'),
    UnifrakturCook: require('../assets/fonts/UnifrakturCook-Regular.ttf'), // ✅ yeni satır
  });
  
  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
<Stack>
  <Stack.Screen name="index" options={{ title: 'Ana Sayfa' }} />
  <Stack.Screen name="login" options={{ title: 'Giriş Yap' }} />
  <Stack.Screen name="register" options={{ title: 'Kayıt Ol' }} />
  <Stack.Screen name="profile" options={{ title: 'Profil' }} />
  <Stack.Screen name="*not-found" />
</Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
