import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Sayfaları içe aktar
import TurkeyMap from './src/components/TurkeyMap';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Home from './screens/Home';
import HowToPlay from './screens/HowToPlay';
import SoundService from './services/SoundService';
import GameOver from './screens/GameOver';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const soundService = SoundService.getInstance();
    soundService.loadSounds();

    // Optional: Add cleanup to unload sounds when the app unmounts
    // return () => {
    //   soundService.unloadSounds();
    // };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Anasayfa'}}
        />
        <Stack.Screen
          name="TurkeyMap"
          component={TurkeyMap}
          options={{
            title: 'Şehrini Seç',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Devam Et' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Kayıt Ol' }}
        />
        <Stack.Screen
          name="HowToPlay"
          component={HowToPlay}
          options={{ title: 'Oyun Hakkında' }}
        />
        <Stack.Screen
          name="GameOver"
          component={GameOver}
          options={{ title: 'Oyun Bitti' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
