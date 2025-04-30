import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keşfet</Text>

      <View style={styles.mapPlaceholder}>
        <Text style={{ color: '#888' }}>[Harita buraya gelecek]</Text>
      </View>

      <Text style={styles.subtitle}>Şehirler</Text>

      <ScrollView style={styles.cityList}>
        {cities.map((city, index) => (
          <View key={index} style={styles.cityItem}>
            <Text>{city}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapPlaceholder: {
    height: 180,
    backgroundColor: '#eef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  cityList: {
    flex: 1,
  },
  cityItem: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
