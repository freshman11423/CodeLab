import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BackgroundLayout from '../components/BackgroundLayout';
import SoundService from '../services/SoundService';
import MuteButton from '../components/MuteButton';

export default function Home({ navigation }: { navigation: any }) {
  const soundService = SoundService.getInstance();
  const route = useRoute();
  const [playerName, setPlayerName] = useState('Misafir');
  const [selectedCharacter, setSelectedCharacter] = useState('Kaşif');

  // Register ekranından gelen parametreleri al
  useEffect(() => {
    if (route.params) {
      const { playerName: newPlayerName, selectedCharacter: newSelectedCharacter } = route.params as any;
      if (newPlayerName) setPlayerName(newPlayerName);
      if (newSelectedCharacter) setSelectedCharacter(newSelectedCharacter);
    }
  }, [route.params]);

  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <MuteButton />
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
        <TouchableOpacity 
          style={[styles.button, styles.mapButton]} 
          onPress={() => {
            soundService.playSound('button');
            navigation.navigate('TurkeyMap', {
              playerName,
              selectedCharacter
            });
          }}
        >
          <Text style={styles.buttonText}>TÜRKİYE HARİTASI</Text>
        </TouchableOpacity>
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
    paddingBottom: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    gap: 16,
  },
  title: {
    fontSize: 54,
    fontWeight: '900',
    color: '#4b2e1a', // koyu kahve
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#3a2b1a',
    marginBottom: 30,
    textAlign: 'center',
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
  mapButton: {
    marginTop: 16,
    backgroundColor: '#8b5e3c',
  },
  buttonText: {
    color: '#fff8e1',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
            

