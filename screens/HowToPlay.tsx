import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Platform } from 'react-native';
import SoundService from '../services/SoundService';

const backgroundImage = require('../assets/pexels-pixabay-235985.jpg');

export default function HowToPlay({ navigation }: { navigation: any }) {
  const soundService = SoundService.getInstance();

  useEffect(() => {
    soundService.playBackgroundMusic();

    return () => {
      soundService.stopBackgroundMusic();
    };
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Oyun Hakkında</Text>
          <Text style={styles.description}>
            Türkiye'nin 81 ili seni bekliyor! Her bir il bir kale,her soru bir meydan savaşı...
            Bir ili seç, karşına çıkan soruyu doğru bil ve şehri fethet.
            Bilginle ilerle, stratejinle yayıl,hedefin tüm ülkeyi egemenliğin altına almak!
            FETİH YOLCULUĞUNA HAZIR MISIN!!
            
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            soundService.playSound('button');
            navigation.goBack();
          }}>
            <Text style={styles.buttonText}>GERİ DÖN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 40,
    color: '#4b2e1a',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#3a2b1a',
  },
  button: {
    backgroundColor: '#7b4f2c',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginTop: 16,
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
