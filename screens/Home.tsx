import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import BackgroundLayout from '../components/BackgroundLayout';


export default function Home({ navigation }: { navigation: any }) {

  return (
    <BackgroundLayout>
      <View style={styles.container}>
        <Text style={styles.title}>FETİH</Text>
        <Text style={styles.subtitle}>Savaş meydanı artık bilgiyle kuruluyor</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>GİRİŞ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HowToPlay')}>
          <Text style={styles.buttonText}>OYUN HAKKINDA</Text>
        </TouchableOpacity>
      </View>
    </BackgroundLayout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
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
    backgroundColor: '#7b4f2c', // açık kahve
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginVertical: 8,
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


