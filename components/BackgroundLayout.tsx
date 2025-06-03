import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

type BackgroundLayoutProps = {
  children: React.ReactNode;
};

const backgroundImage = require('../assets/fetih-clean.png');

export default function BackgroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
