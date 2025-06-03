import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type GameOverScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GameOver'>;

export default function GameOver() {
  const navigation = useNavigation<GameOverScreenNavigationProp>();
  const route = useRoute();
  const finalScore = route.params?.score || 0;
  const isSuccessful = finalScore >= 1000;

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Oyun Bitti!</Text>
        <Text style={[styles.message, isSuccessful ? styles.successMessage : styles.failureMessage]}>
          {isSuccessful ? 'Tebrikler! Fetih başarıyla tamamlandı!' : 'Fetih başarısız oldu!'}
        </Text>
        <Text style={styles.scoreText}>Toplam Puanınız: {finalScore}</Text>
        <Text style={styles.infoText}>Bilgi: 1000 puan ve üstünde yaparsanız fetih başarılı olur.</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Ana Sayfaya Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e2c799',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(245, 236, 215, 0.85)',
    borderRadius: 20,
    margin: 10,
    shadowColor: '#a67c52',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7c5c29',
    marginBottom: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  successMessage: {
    color: '#2e7d32', // Koyu yeşil
  },
  failureMessage: {
    color: '#c62828', // Koyu kırmızı
  },
  scoreText: {
    fontSize: 24,
    color: '#4e3b15',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: '#7c5c29',
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#a67c52',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#7c5c29',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff8e1',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 