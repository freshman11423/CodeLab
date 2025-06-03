import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import BackgroundLayout from '../components/BackgroundLayout';
import SoundService from '../services/SoundService';

export default function Home({ navigation }: { navigation: any }) {
  const soundService = SoundService.getInstance();

  useEffect(() => {
    soundService.playBackgroundMusic();

    return () => {
      soundService.stopBackgroundMusic();
    };
  }, []);

  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => {
            soundService.playSound('button');
            navigation.navigate('Register');
          }}>
            <Text style={styles.buttonText}>GİRİŞ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            soundService.playSound('button');
            navigation.navigate('HowToPlay');
          }}>
            <Text style={styles.buttonText}>OYUN HAKKINDA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    gap: 16,
  },
  button: {
    backgroundColor: '#7b4f2c',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff8e1',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
});


