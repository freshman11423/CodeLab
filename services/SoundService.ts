import { Audio } from 'expo-av';
import { Platform } from 'react-native';

class SoundService {
  private static instance: SoundService;
  private sounds: { [key: string]: Audio.Sound } = {};
  private isMuted: boolean = false;
  private isWeb: boolean = Platform.OS === 'web';

  private constructor() {}

  static getInstance(): SoundService {
    if (!SoundService.instance) {
      SoundService.instance = new SoundService();
    }
    return SoundService.instance;
  }

  async loadSounds() {
    if (this.isWeb) {
      console.log('Web platformunda ses desteği devre dışı');
      return;
    }

    try {
      // Ses dosyalarını yükle
      const buttonSound = new Audio.Sound();
      await buttonSound.loadAsync(require('../assets/sounds/button.mp3'));
      this.sounds['button'] = buttonSound;

      const successSound = new Audio.Sound();
      await successSound.loadAsync(require('../assets/sounds/success.mp3'));
      this.sounds['success'] = successSound;

      const errorSound = new Audio.Sound();
      await errorSound.loadAsync(require('../assets/sounds/error.mp3'));
      this.sounds['error'] = errorSound;

      // Arka plan müziği yükleme kısmı geri getirildi
      const backgroundMusic = new Audio.Sound();
      await backgroundMusic.loadAsync(require('../assets/sounds/background.mp3'));
      this.sounds['background'] = backgroundMusic;
    } catch (error) {
      console.error('Ses yükleme hatası:', error);
    }
  }

  async playSound(soundName: string) {
    if (this.isMuted || this.isWeb) return;

    try {
      const sound = this.sounds[soundName];
      if (sound) {
        await sound.replayAsync();
      } else {
        console.warn(`Ses dosyası bulunamadı: ${soundName}`);
      }
    } catch (error) {
      console.error('Ses çalma hatası:', error);
    }
  }

  async playBackgroundMusic() {
    if (this.isMuted || this.isWeb) return;

    try {
      const sound = this.sounds['background'];
      if (sound) {
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
      } else {
        console.warn('Arka plan müziği dosyası bulunamadı.');
      }
    } catch (error) {
      console.error('Arka plan müziği çalma hatası:', error);
    }
  }

  async stopBackgroundMusic() {
    if (this.isWeb) return;

    try {
      const sound = this.sounds['background'];
      if (sound) {
        await sound.stopAsync();
      } else {
        console.warn('Arka plan müziği dosyası bulunamadı (durdurma).');
      }
    } catch (error) {
      console.error('Arka plan müziği durdurma hatası:', error);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBackgroundMusic();
    } else {
      this.playBackgroundMusic();
    }
    return this.isMuted;
  }

  isSoundMuted(): boolean {
    return this.isMuted;
  }

  async unloadSounds() {
    if (this.isWeb) return;

    try {
      for (const sound of Object.values(this.sounds)) {
        await sound.unloadAsync();
      }
      this.sounds = {};
    } catch (error) {
      console.error('Ses kaldırma hatası:', error);
    }
  }
}

export default SoundService; 