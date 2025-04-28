import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CityQuizScreen() {
  const { city } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        {city} Şehri için Quiz Sayfası
      </Text>
    </View>
  );
}
