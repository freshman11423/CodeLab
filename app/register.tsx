import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
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
              selectedCharacter === character && styles.selectedCharacterContainer,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#e8f0fe',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  charactersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  characterContainer: {
    width: 60,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 5,
  },
  selectedCharacterContainer: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  character: {
    fontSize: 30,
  },
  selectedLabel: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 5,
    fontWeight: 'bold',
  },
});
