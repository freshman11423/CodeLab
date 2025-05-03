import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  useEffect(() => {
    // Sayfa açılır açılmaz harita ekranına yönlendir
    router.replace('/map');
  }, []);

  return null; // Bu ekranda görünür içerik olmayacak
}
