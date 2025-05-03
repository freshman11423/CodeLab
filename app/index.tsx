import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import DetailedTurkeyMap from '../components/DetailedTurkeyMap';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <Text style={styles.title}>Bil ve Fethet</Text>
      <Text style={styles.subtitle}>Türkiye Şehirleri</Text>
      
      <View style={styles.mapContainer}>
        <DetailedTurkeyMap />
      </View>
      
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#F0F0F0' }]} />
          <Text style={styles.legendText}>Keşfedilmemiş</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Fethedilmiş</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#F44336' }]} />
          <Text style={styles.legendText}>Kaybedilmiş</Text>
        </View>
      </View>
      
      <Text style={styles.info}>
        Bu uygulama, Türkiye'nin şehirleri hakkında soru-cevap oyunu oynamanızı sağlar.
        Haritadaki şehirleri seçerek soruları cevaplayın ve şehirleri fethedin!
      </Text>
      
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Başla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7f8c8d',
  },
  mapContainer: {
    flex: 1,
    maxHeight: 500,
    marginVertical: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  legendText: {
    fontSize: 14,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    color: '#34495e',
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 22,
  },
  startButton: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});