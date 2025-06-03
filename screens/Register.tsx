import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
import SoundService from '../services/SoundService';

const backgroundImage = require('../assets/pexels-pixabay-235985.jpg');
const { width, height } = Dimensions.get('window');

export default function Register({ navigation }: { navigation: any }) {
  const [playerName, setPlayerName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const soundService = SoundService.getInstance();

  const characters = ['👑', '⚔️', '🛡️', '🏰', '🗡️', '🏹', '⚜️', '🎯'];

  useEffect(() => {
    // Sayfa yüklendiğinde sesleri yükle
    soundService.loadSounds();
    // Web haricinde arka plan müziğini çal
    if (Platform.OS !== 'web') {
      soundService.playBackgroundMusic(); // Arka plan müziğini çal
    }

    // Sayfa kapatıldığında sesleri temizle ve arka plan müziğini durdur
    return () => {
      soundService.unloadSounds();
      if (Platform.OS !== 'web') {
         soundService.stopBackgroundMusic(); // Arka plan müziğini durdur
      }
    };
  }, []);

  const handleCharacterSelect = (character: string) => {
    soundService.playSound('button');
    setSelectedCharacter(character);
  };

  const handleContinue = () => {
    if (playerName && selectedCharacter) {
      soundService.playSound('success');
      console.log('Oyuncu:', playerName, 'Karakter:', selectedCharacter);
      navigation.navigate('TurkeyMap');
    } else {
      soundService.playSound('error');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.topSectionsContainer}>
            <View style={styles.leftSection}>
              <Text style={styles.title}>Oyuncu Adınızı Girin</Text>
              <TextInput
                style={styles.input}
                placeholder="Oyuncu Adı"
                placeholderTextColor="#fff8e1"
                value={playerName}
                onChangeText={setPlayerName}
              />
            </View>

            <View style={styles.rightSection}>
              <Text style={styles.title}>Karakter Seç</Text>
              <View style={styles.charactersContainer}>
                {characters.map((character, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.characterContainer,
                      selectedCharacter === character && styles.selectedCharacter,
                    ]}
                    onPress={() => handleCharacterSelect(character)}
                  >
                    <Text style={styles.character}>{character}</Text>
                    {selectedCharacter === character && (
                      <Text style={styles.selectedLabel}>Seçildi</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              !(playerName && selectedCharacter) && styles.buttonDisabled,
            ]}
            onPress={handleContinue}
            disabled={!(playerName && selectedCharacter)}
          >
            <Text style={styles.buttonText}>Devam Et</Text>
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
    paddingBottom: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  topSectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 30,
  },
  leftSection: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 10,
    maxWidth: '50%',
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    maxWidth: '50%',
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4b2e1a',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  input: {
    backgroundColor: '#7b4f2c',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: width * 0.025,
    color: '#fff8e1',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    textAlign: 'center',
  },
  charactersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  characterContainer: {
    backgroundColor: '#7b4f2c',
    padding: 8,
    borderRadius: 30,
    alignItems: 'center',
    margin: 5,
    width: width * 0.07,
    height: width * 0.07,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  selectedCharacter: {
    borderWidth: 2,
    borderColor: '#fff8e1',
    backgroundColor: '#4b2e1a',
  },
  character: {
    fontSize: width * 0.03,
    textAlign: 'center',
  },
  selectedLabel: {
    fontSize: width * 0.012,
    color: '#fff8e1',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#7b4f2c',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff8e1',
    fontSize: width * 0.02,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#4b2e1a',
    opacity: 0.7,
  },
});
