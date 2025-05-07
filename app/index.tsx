import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Anasayfa</Text>
      <Button
        title="Haritaya Git"
        onPress={() => navigation.navigate('TurkeyMap')}
      />
    </View>
  );
}
