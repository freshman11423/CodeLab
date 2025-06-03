import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { cityData } from '../components/data/cityData';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1215); // 20 minutes and 15 seconds
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0); // Add score state
  // Her şehir için cevapları ve tamamlanma durumunu tutan state
  const [cityAnswers, setCityAnswers] = useState<{ [city: string]: { answers: (string | null)[], completed: boolean } }>(() => {
    const initial: { [city: string]: { answers: (string | null)[], completed: boolean } } = {};
    cityData.forEach(city => {
      initial[city.cityName] = { answers: Array(city.questions.length).fill(null), completed: false };
    });
    return initial;
  });

  // cityAnswers'ın cityData ile her zaman uyumlu olmasını sağla
  useEffect(() => {
    setCityAnswers(prev => {
      const updated = { ...prev };
      cityData.forEach(city => {
        if (
          !updated[city.cityName] ||
          !Array.isArray(updated[city.cityName].answers) ||
          updated[city.cityName].answers.length !== city.questions.length
        ) {
          updated[city.cityName] = { answers: Array(city.questions.length).fill(null), completed: false };
        }
      });
      return updated;
    });
  }, [cityData]);

  // Timer effect - runs continuously once game starts
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGameStarted && !isGameOver && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isGameStarted, isGameOver]);

  // Format time display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    if (!isGameStarted) {
      setIsGameStarted(true);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (!selectedCity) return;
    const cityEntry = cityData.find(c => c.cityName === selectedCity);
    if (!cityEntry) return;
    // Eğer şehir tamamlandıysa cevap değişmesin
    if (cityAnswers[selectedCity].completed) return;
    setCityAnswers(prev => {
      const updated = { ...prev };
      const answers = [...updated[selectedCity].answers];
      answers[currentQuestionIndex] = answer;
      // Tüm sorular cevaplandıysa completed=true
      const completed = answers.every(a => a !== null);
      updated[selectedCity] = { answers, completed };
      return updated;
    });

    // Update score based on correct/incorrect answer
    if (answer === cityEntry.questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 10);
    } else {
      setScore(prev => prev - 5); // Allow negative scores
    }
  };

  const handleNextQuestion = () => {
    if (!selectedCity) return;
    const cityEntry = cityData.find(c => c.cityName === selectedCity);
    if (!cityEntry) return;
    if (currentQuestionIndex < cityEntry.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBackToCities = () => {
    setSelectedCity(null);
    setCurrentQuestionIndex(0);
    setIsGameOver(false);
  };
  
  // Şehirler ekranı
  if (!selectedCity) {
    // Veri tamamen yüklenmediyse boş ekran vermemesi için kontrol
    if (!cityData || cityData.length === 0 || !cityAnswers) {
      return (
        <View style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.title}>Veriler yükleniyor...</Text>
          </View>
        </View>
      );
    }
  
    const cityAnswersKeys = Object.keys(cityAnswers);
    const isDataConsistent = cityData.every(city => cityAnswersKeys.includes(city.cityName));
    if (!isDataConsistent) {
      return (
        <View style={styles.background}>
          <View style={styles.container}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>Bir hata oluştu: cityAnswers ile cityData eşleşmiyor.</Text>
            <TouchableOpacity style={styles.nextButton} onPress={() => {
              // Sorun varsa verileri sıfırla (çok nadir gerekir ama koruma amaçlı)
              setCityAnswers(() => {
                const initial: typeof cityAnswers = {};
                cityData.forEach(city => {
                  initial[city.cityName] = { answers: Array(city.questions.length).fill(null), completed: false };
                });
                return initial;
              });
            }}>
              <Text style={styles.nextButtonText}>Yeniden Dene</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Puan: {score}</Text>
          </View>
          <TouchableOpacity 
            style={styles.endGameButton}
            onPress={() => {
              // Oyunu bitir ve GameOver sayfasına git
              navigation.navigate('GameOver', { score });
            }}
          >
            <Text style={styles.endGameButtonText}>Oyunu Bitir</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Lütfen bir şehir seçin:</Text>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={true}>
            {cityData.map((city) => (
              <TouchableOpacity
                key={city.cityName}
                style={styles.cityButton}
                onPress={() => handleCitySelect(city.cityName)}
              >
                <Text style={styles.cityButtonText}>
                  {city.cityName} {cityAnswers[city.cityName]?.completed ? '⭐' : ''}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }

  // Şehir ve soru verisi
  const cityEntry = cityData.find(c => c.cityName === selectedCity);
  if (!cityEntry) {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text>Bu şehir için soru bulunamadı veya yüklenemedi.</Text>
        </View>
      </View>
    );
  }
  const answers = cityAnswers[selectedCity].answers;
  const completed = cityAnswers[selectedCity].completed;
  const currentQuestion = cityEntry.questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === cityEntry.questions.length - 1;

  // Eğer şehir tamamlandıysa, sadece cevapları ve doğru/yanlışları göster, tıklanamaz olsun
  if (completed) {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Puan: {score}</Text>
          </View>
          <Text style={styles.title}>{selectedCity} - Tüm Soruların Cevapları</Text>
          <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            {cityEntry.questions.map((q, idx) => (
              <View key={idx} style={{ width: '100%', marginBottom: 12 }}>
                <Text style={styles.question}>{q.questionText}</Text>
                {q.options.map((answer, i) => (
                  <View
                    key={i}
                    style={[
                      styles.answer,
                      answers[idx] && {
                        backgroundColor:
                          answer === q.correctAnswer
                            ? '#bfa76f'
                            : answers[idx] === answer
                              ? '#c97a6d'
                              : '#f5ecd7',
                      },
                    ]}
                  >
                    <Text style={styles.answerText}>{answer}</Text>
                  </View>
                ))}
                <Text style={{ color: answers[idx] === q.correctAnswer ? '#388e3c' : '#c62828', fontWeight: 'bold', marginTop: 2 }}>
                  {answers[idx] === q.correctAnswer ? 'Doğru' : `Yanlış (Doğru: ${q.correctAnswer})`}
                </Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.nextButton} onPress={handleBackToCities}>
            <Text style={styles.nextButtonText}>Şehirlere Dön</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Add score display to the question screen
  if (selectedCity && !completed) {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Puan: {score}</Text>
          </View>
          <Text style={styles.timerText}>Kalan Süre: {formatTime(timeLeft)}</Text>
          {isGameOver ? (
            <View style={styles.gameOverContainer}>
              <Text style={styles.gameOverText}>Süre Doldu!</Text>
              <TouchableOpacity style={styles.nextButton} onPress={handleBackToCities}>
                <Text style={styles.nextButtonText}>Şehirlere Dön</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.question}>{currentQuestion.questionText}</Text>
              <View style={styles.answersContainer}>
                {currentQuestion.options.map((answer, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.answer,
                      selectedAnswer && {
                        backgroundColor:
                          answer === currentQuestion.correctAnswer
                            ? '#bfa76f'
                            : selectedAnswer === answer
                              ? '#c97a6d'
                              : '#f5ecd7',
                      },
                    ]}
                    onPress={() => handleAnswerSelect(answer)}
                    disabled={selectedAnswer !== null || isGameOver}
                  >
                    <Text style={styles.answerText}>{answer}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              
              <TouchableOpacity
                style={styles.nextButton}
                onPress={isLastQuestion ? handleBackToCities : handleNextQuestion}
              >
                <Text style={styles.nextButtonText}>
                  {isLastQuestion ? 'Şehirlere Dön' : 'Sonraki Soru'}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }

  // Normal soru çözme ekranı
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.question}>{currentQuestion.questionText}</Text>
        <View style={styles.answersContainer}>
          {currentQuestion.options.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.answer,
                selectedAnswer && {
                  backgroundColor:
                    answer === currentQuestion.correctAnswer
                      ? '#bfa76f'
                      : selectedAnswer === answer
                        ? '#c97a6d'
                        : '#f5ecd7',
                },
              ]}
              onPress={() => handleAnswerSelect(answer)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedAnswer && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={isLastQuestion ? handleBackToCities : handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {isLastQuestion ? 'Şehirlere Dön' : 'Sonraki Soru'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#e2c799', // Eski kağıt tonu
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(245, 236, 215, 0.85)', // Krem, hafif şeffaf
    borderRadius: 20,
    margin: 10,
    shadowColor: '#a67c52',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#7c5c29', // Koyu kahverengi
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  cityButton: {
    backgroundColor: '#bfa76f', // Açık kahverengi
    padding: 12,
    marginVertical: 7,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#a67c52',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cityButtonText: {
    fontSize: 17,
    color: '#4e3b15', // Koyu kahverengi
    fontWeight: 'bold',
  },
  question: {
    fontSize: 19,
    marginBottom: 20,
    textAlign: 'center',
    color: '#7c5c29',
    fontWeight: 'bold',
  },
  answersContainer: {
    width: '100%',
  },
  answer: {
    padding: 15,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#bfa76f',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f5ecd7', // Krem
    elevation: 1,
    shadowColor: '#a67c52',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  answerText: {
    fontSize: 16,
    color: '#4e3b15',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#a67c52', // Koyu kahverengi
    padding: 15,
    borderRadius: 8,
    marginTop: 22,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#7c5c29',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  nextButtonText: {
    color: '#fff8e1', // Açık krem
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  timerText: {
    fontSize: 20,
    color: '#7c5c29',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  gameOverContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  gameOverText: {
    fontSize: 24,
    color: '#c62828',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#bfa76f',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  endGameButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#c62828', // Kırmızı ton
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  endGameButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
