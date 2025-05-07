import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Sayfaları içe aktar
import TurkeyMap from './src/components/TurkeyMap';
import Login from './app/login';
import Register from './app/register';
import Profile from './app/profile';
import Home from './app/index';

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
            title: 'Türkiye Haritası',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Giriş Yap' }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Kayıt Ol' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
