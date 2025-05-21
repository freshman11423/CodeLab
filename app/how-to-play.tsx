import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HowToPlay() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyun Hakkında</Text>
      <Text style={styles.description}>
        Bu oyun, Türkiye'nin 81 ilini bilgi yarışmasıyla fethetmeni sağlar.
        Doğru cevaplarla şehirleri fethedersin ve harita üzerinde ilerlersin!
      </Text>
      <Button title="Geri Dön" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#B3E5FC', // açık mavi zemin
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
});
