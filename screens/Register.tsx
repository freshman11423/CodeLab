import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Register({ navigation }: { navigation: any }) {
  const [playerName, setPlayerName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');

  const characters = ['😺', '🐶', '🐻', '🐼', '🦊', '🐯', '🐸', '🐵'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyuncu Adınızı Girin</Text>

      <TextInput
        style={styles.input}
        placeholder="Oyuncu Adı"
        value={playerName}
        onChangeText={setPlayerName}
      />

      <Text style={styles.title}>Karakter Seç</Text>
      <View style={styles.charactersContainer}>
        {characters.map((character, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.characterContainer,
              selectedCharacter === character && styles.selectedCharacter,
            ]}
            onPress={() => setSelectedCharacter(character)}
          >
            <Text style={styles.character}>{character}</Text>
            {selectedCharacter === character && (
              <Text style={styles.selectedLabel}>Seçildi</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          !(playerName && selectedCharacter) && styles.buttonDisabled,
        ]}
        onPress={() => {
          console.log('Oyuncu:', playerName, 'Karakter:', selectedCharacter);
          navigation.navigate('TurkeyMap');// Yönlendirme burada yapılabilir: örnek => router.push('/tabs')
        }}
        disabled={!(playerName && selectedCharacter)}
      >
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f0ff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  charactersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  characterContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    margin: 10,
    width: 60,
    height: 80,
    justifyContent: 'center',
    elevation: 2,
  },
  selectedCharacter: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  character: {
    fontSize: 28,
    textAlign: 'center',
  },
  selectedLabel: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
});
