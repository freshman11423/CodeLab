import { Audio } from 'expo-av';
import { Platform } from 'react-native';
import { Howl } from 'howler';

class SoundService {
  private static instance: SoundService;
  private sounds: { [key: string]: Audio.Sound } = {};
  private webSounds: { [key: string]: Howl } = {};
  private isBackgroundMuted: boolean = false;
  private isEffectsMuted: boolean = false;
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
      this.webSounds['button'] = new Howl({ src: require('../assets/sounds/button.mp3'), html5: true });
      this.webSounds['success'] = new Howl({ src: require('../assets/sounds/coorectansweer.mp3'), html5: true });
      this.webSounds['error'] = new Howl({ src: require('../assets/sounds/wrong_answer.mp3'), html5: true });
      this.webSounds['background'] = new Howl({ src: require('../assets/sounds/background.mp3'), loop: true, html5: true });
      this.webSounds['ticktock'] = new Howl({ src: require('../assets/sounds/tictack_sound.mp3'), loop: true, html5: true });
      return;
    }

    try {
      const buttonSound = new Audio.Sound();
      await buttonSound.loadAsync(require('../assets/sounds/button.mp3'));
      this.sounds['button'] = buttonSound;

      const successSound = new Audio.Sound();
      await successSound.loadAsync(require('../assets/sounds/coorectansweer.mp3'));
      this.sounds['success'] = successSound;

      const errorSound = new Audio.Sound();
      await errorSound.loadAsync(require('../assets/sounds/wrong_answer.mp3'));
      this.sounds['error'] = errorSound;

      const backgroundMusic = new Audio.Sound();
      await backgroundMusic.loadAsync(require('../assets/sounds/background.mp3'));
      this.sounds['background'] = backgroundMusic;

      const ticktockSound = new Audio.Sound();
      await ticktockSound.loadAsync(require('../assets/sounds/tictack_sound.mp3'));
      this.sounds['ticktock'] = ticktockSound;
    } catch (error) {
      console.error('Ses yükleme hatası:', error);
    }
  }

  async playSound(soundName: string) {
    if (this.isEffectsMuted) return;
    if (this.isWeb) {
      const sound = this.webSounds[soundName];
      if (sound) {
        sound.stop();
        sound.play();
      } else {
        console.warn(`Web için ses dosyası bulunamadı: ${soundName}`);
      }
      return;
    }

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
    if (this.isBackgroundMuted) return;
    if (this.isWeb) {
      const sound = this.webSounds['background'];
      if (sound) {
        sound.play();
      } else {
        console.warn('Web için arka plan müziği dosyası bulunamadı.');
      }
      return;
    }

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
    if (this.isWeb) {
      const sound = this.webSounds['background'];
      if (sound) {
        sound.stop();
      } else {
        console.warn('Web için arka plan müziği dosyası bulunamadı (durdurma).');
      }
      return;
    }

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

  async playTickTock() {
    if (this.isEffectsMuted) return;
    if (this.isWeb) {
      const sound = this.webSounds['ticktock'];
      if (sound) {
        sound.play();
      }
      return;
    }
    try {
      const sound = this.sounds['ticktock'];
      if (sound) {
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
      }
    } catch (error) {
      console.error('Ticktock sesi çalma hatası:', error);
    }
  }

  async stopTickTock() {
    if (this.isWeb) {
      const sound = this.webSounds['ticktock'];
      if (sound) {
        sound.stop();
      }
      return;
    }
    try {
      const sound = this.sounds['ticktock'];
      if (sound) {
        await sound.stopAsync();
      }
    } catch (error) {
      console.error('Ticktock sesi durdurma hatası:', error);
    }
  }

  toggleBackgroundMute() {
    this.isBackgroundMuted = !this.isBackgroundMuted;
    if (this.isBackgroundMuted) {
      this.stopBackgroundMusic();
    } else {
      this.playBackgroundMusic();
    }
    return this.isBackgroundMuted;
  }

  toggleEffectsMute() {
    this.isEffectsMuted = !this.isEffectsMuted;
    if (this.isEffectsMuted) {
      this.stopTickTock();
    }
    return this.isEffectsMuted;
  }

  isBackgroundSoundMuted(): boolean {
    return this.isBackgroundMuted;
  }

  isEffectsSoundMuted(): boolean {
    return this.isEffectsMuted;
  }

  async unloadSounds() {
    if (this.isWeb) {
      for (const sound of Object.values(this.webSounds)) {
        sound.unload && sound.unload();
      }
      this.webSounds = {};
      return;
    }
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