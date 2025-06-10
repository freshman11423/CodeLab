import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SoundService from '../services/SoundService';

const MuteButton = () => {
  const soundService = SoundService.getInstance();
  const [isBackgroundMuted, setIsBackgroundMuted] = useState(soundService.isBackgroundSoundMuted());
  const [isEffectsMuted, setIsEffectsMuted] = useState(soundService.isEffectsSoundMuted());

  const handleToggleBackgroundMute = () => {
    const muted = soundService.toggleBackgroundMute();
    setIsBackgroundMuted(muted);
  };

  const handleToggleEffectsMute = () => {
    const muted = soundService.toggleEffectsMute();
    setIsEffectsMuted(muted);
  };

  return (
    <View style={styles.muteContainer}>
      <TouchableOpacity style={styles.muteButton} onPress={handleToggleBackgroundMute}>
        <Text style={styles.muteIcon}>{isBackgroundMuted ? '🔇' : '🔊'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.muteButton} onPress={handleToggleEffectsMute}>
        <Text style={styles.muteIcon}>{isEffectsMuted ? '🔕' : '🎵'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  muteContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 10,
    flexDirection: 'row',
    gap: 8,
  },
  muteButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 8,
    marginLeft: 4,
  },
  muteIcon: {
    fontSize: 28,
  },
});

export default MuteButton; 