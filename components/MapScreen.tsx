import { View, Text, Platform, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapScreen() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>📵 Harita sadece mobil cihazlarda çalışır</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 38.9637,
          longitude: 35.2433,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
