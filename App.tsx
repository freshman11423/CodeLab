import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Sayfaları içe aktar
import TurkeyMap from './src/components/TurkeyMap';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Home from './screens/Home';
import HowToPlay from './screens/HowToPlay';

const Stack = createNativeStackNavigator();

const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
