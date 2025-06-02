export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface City {
  cityName: string;
  questions: Question[];
}

export const cityData: City[] = [
  {
    cityName: "İstanbul",
    questions: [
      {
        questionText: "İstanbul'un en yüksek noktası neresidir?",
        options: [
          "A) Çamlıca Tepesi",
          "B) Aydos Tepesi",
          "C) Büyük Çamlıca Tepesi",
          "D) Küçük Çamlıca Tepesi"
        ],
        correctAnswer: "B) Aydos Tepesi"
      },
      {
        questionText: "İstanbul'un simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Galata Kulesi",
          "B) Ayasofya",
          "C) Topkapı Sarayı",
          "D) Sultanahmet Camii"
        ],
        correctAnswer: "A) Galata Kulesi"
      },
      {
        questionText: "İstanbul'un iki kıtayı birbirine bağlayan köprüsü hangisidir?",
        options: [
          "A) Fatih Sultan Mehmet Köprüsü",
          "B) Yavuz Sultan Selim Köprüsü",
          "C) 15 Temmuz Şehitler Köprüsü",
          "D) Galata Köprüsü"
        ],
        correctAnswer: "C) 15 Temmuz Şehitler Köprüsü"
      }
    ]
  },
  {
    cityName: "Ankara",
    questions: [
      {
        questionText: "Ankara'nın simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Anıtkabir",
          "B) Ankara Kalesi",
          "C) Hacı Bayram Camii",
          "D) Augustus Tapınağı"
        ],
        correctAnswer: "A) Anıtkabir"
      },
      {
        questionText: "Ankara'nın en ünlü yemeği hangisidir?",
        options: [
          "A) İskender",
          "B) Ankara Tava",
          "C) Beypazarı Kurusu",
          "D) Çubuk Turşusu"
        ],
        correctAnswer: "B) Ankara Tava"
      },
      {
        questionText: "Ankara'nın en yüksek noktası neresidir?",
        options: [
          "A) Elmadağ",
          "B) İdris Dağı",
          "C) Hüseyingazi Tepesi",
          "D) Çankaya Tepesi"
        ],
        correctAnswer: "A) Elmadağ"
      }
    ]
  },
  {
    cityName: "İzmir",
    questions: [
      {
        questionText: "İzmir'in simgesi olan saat kulesi hangi meydandadır?",
        options: [
          "A) Konak Meydanı",
          "B) Cumhuriyet Meydanı",
          "C) Gündoğdu Meydanı",
          "D) Alsancak Meydanı"
        ],
        correctAnswer: "A) Konak Meydanı"
      },
      {
        questionText: "İzmir'in en ünlü yemeği hangisidir?",
        options: [
          "A) İzmir Köfte",
          "B) Boyoz",
          "C) Kumru",
          "D) Çiğdem"
        ],
        correctAnswer: "B) Boyoz"
      },
      {
        questionText: "İzmir'in antik kenti hangisidir?",
        options: [
          "A) Efes",
          "B) Bergama",
          "C) Sardes",
          "D) Klazomenai"
        ],
        correctAnswer: "A) Efes"
      }
    ]
  },
  {
    cityName: "Antalya",
    questions: [
      {
        questionText: "Antalya'nın simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Yivli Minare",
          "B) Hadrian Kapısı",
          "C) Kaleiçi",
          "D) Hıdırlık Kulesi"
        ],
        correctAnswer: "A) Yivli Minare"
      },
      {
        questionText: "Antalya'nın en ünlü plajı hangisidir?",
        options: [
          "A) Konyaaltı Plajı",
          "B) Lara Plajı",
          "C) Kaputaş Plajı",
          "D) Patara Plajı"
        ],
        correctAnswer: "A) Konyaaltı Plajı"
      },
      {
        questionText: "Antalya'nın en yüksek dağı hangisidir?",
        options: [
          "A) Tahtalı Dağı",
          "B) Beydağları",
          "C) Akdağ",
          "D) Geyik Dağı"
        ],
        correctAnswer: "A) Tahtalı Dağı"
      }
    ]
  },
  {
    cityName: "Bursa",
    questions: [
      {
        questionText: "Bursa'nın simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Ulu Camii",
          "B) Yeşil Türbe",
          "C) Tophane Saat Kulesi",
          "D) Koza Han"
        ],
        correctAnswer: "A) Ulu Camii"
      },
      {
        questionText: "Bursa'nın en ünlü yemeği hangisidir?",
        options: [
          "A) İskender",
          "B) Pideli Köfte",
          "C) Cantık",
          "D) Kemalpaşa Tatlısı"
        ],
        correctAnswer: "A) İskender"
      },
      {
        questionText: "Bursa'nın en yüksek dağı hangisidir?",
        options: [
          "A) Uludağ",
          "B) Keles Dağı",
          "C) Katırlı Dağı",
          "D) Domaniç Dağı"
        ],
        correctAnswer: "A) Uludağ"
      }
    ]
  },
  {
    cityName: "Eskişehir",
    questions: [
      {
        questionText: "Eskişehir'in en ünlü çayı hangisidir?",
        options: [
          "A) Porsuk Çayı",
          "B) Sakarya Nehri",
          "C) Kızılırmak",
          "D) Fırat Nehri"
        ],
        correctAnswer: "A) Porsuk Çayı"
      },
      {
        questionText: "Eskişehir'in meşhur taşı nedir?",
        options: [
          "A) Lületaşı",
          "B) Kehribar",
          "C) Akik",
          "D) Oltu Taşı"
        ],
        correctAnswer: "A) Lületaşı"
      },
      {
        questionText: "Eskişehir'de bulunan ünlü müze hangisidir?",
        options: [
          "A) Balmumu Heykeller Müzesi",
          "B) Oyuncak Müzesi",
          "C) Arkeoloji Müzesi",
          "D) Havacılık Müzesi"
        ],
        correctAnswer: "A) Balmumu Heykeller Müzesi"
      }
    ]
  },
  {
    cityName: "Trabzon",
    questions: [
      {
        questionText: "Trabzon'un simgesi olan manastır hangisidir?",
        options: [
          "A) Sümela Manastırı",
          "B) Ayasofya Müzesi",
          "C) Vazelon Manastırı",
          "D) Kuştul Manastırı"
        ],
        correctAnswer: "A) Sümela Manastırı"
      },
      {
        questionText: "Trabzon'un en ünlü yemeği hangisidir?",
        options: [
          "A) Kuymak",
          "B) Hamsi Tava",
          "C) Akçaabat Köfte",
          "D) Kaygana"
        ],
        correctAnswer: "B) Hamsi Tava"
      },
      {
        questionText: "Trabzonspor'un renkleri nedir?",
        options: [
          "A) Sarı-Lacivert",
          "B) Kırmızı-Beyaz",
          "C) Bordo-Mavi",
          "D) Yeşil-Siyah"
        ],
        correctAnswer: "C) Bordo-Mavi"
      }
    ]
  },
  {
    cityName: "Gaziantep",
    questions: [
      {
        questionText: "Gaziantep'in en ünlü tatlısı hangisidir?",
        options: [
          "A) Baklava",
          "B) Künefe",
          "C) Kadayıf",
          "D) Şöbiyet"
        ],
        correctAnswer: "A) Baklava"
      },
      {
        questionText: "Gaziantep'in simgesi olan kale hangisidir?",
        options: [
          "A) Gaziantep Kalesi",
          "B) Rumkale",
          "C) Anavarza Kalesi",
          "D) Yılanlı Kale"
        ],
        correctAnswer: "A) Gaziantep Kalesi"
      },
      {
        questionText: "Gaziantep'in en ünlü yemeği hangisidir?",
        options: [
          "A) Beyran",
          "B) Ali Nazik",
          "C) Lahmacun",
          "D) Küşleme"
        ],
        correctAnswer: "A) Beyran"
      }
    ]
  },
  {
    cityName: "Konya",
    questions: [
      {
        questionText: "Konya'nın simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Mevlana Müzesi",
          "B) Alaeddin Camii",
          "C) İnce Minareli Medrese",
          "D) Karatay Medresesi"
        ],
        correctAnswer: "A) Mevlana Müzesi"
      },
      {
        questionText: "Konya'nın en ünlü yemeği hangisidir?",
        options: [
          "A) Etli Ekmek",
          "B) Fırın Kebabı",
          "C) Bamya Çorbası",
          "D) Tirit"
        ],
        correctAnswer: "A) Etli Ekmek"
      },
      {
        questionText: "Konya'nın en büyük gölü hangisidir?",
        options: [
          "A) Tuz Gölü",
          "B) Beyşehir Gölü",
          "C) Meke Gölü",
          "D) Acıgöl"
        ],
        correctAnswer: "B) Beyşehir Gölü"
      }
    ]
  },
  {
    cityName: "Samsun",
    questions: [
      {
        questionText: "Samsun'un simgesi olan anıt hangisidir?",
        options: [
          "A) Onur Anıtı",
          "B) Bandırma Vapuru",
          "C) Atatürk Heykeli",
          "D) İlkadım Anıtı"
        ],
        correctAnswer: "A) Onur Anıtı"
      },
      {
        questionText: "Samsun'un en ünlü yemeği hangisidir?",
        options: [
          "A) Bafra Pidesi",
          "B) Çakallı Menemeni",
          "C) Tirit",
          "D) Kaz Tiridi"
        ],
        correctAnswer: "A) Bafra Pidesi"
      },
      {
        questionText: "Samsun'un Karadeniz'e kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Atakum",
          "B) Bafra",
          "C) Terme",
          "D) Vezirköprü"
        ],
        correctAnswer: "A) Atakum"
      }
    ]
  },
  {
    cityName: "Adana",
    questions: [
      {
        questionText: "Adana'nın en ünlü yemeği hangisidir?",
        options: [
          "A) Adana Kebabı",
          "B) Şalgam",
          "C) Analı Kızlı",
          "D) Bici Bici"
        ],
        correctAnswer: "A) Adana Kebabı"
      },
      {
        questionText: "Adana'nın simgesi olan köprü hangisidir?",
        options: [
          "A) Taşköprü",
          "B) Varda Köprüsü",
          "C) Sabancı Köprüsü",
          "D) Regülatör Köprüsü"
        ],
        correctAnswer: "A) Taşköprü"
      },
      {
        questionText: "Adana'nın en büyük festivali hangisidir?",
        options: [
          "A) Portakal Çiçeği Karnavalı",
          "B) Altın Koza Film Festivali",
          "C) Sabancı Uluslararası Tiyatro Festivali",
          "D) Lezzet Festivali"
        ],
        correctAnswer: "A) Portakal Çiçeği Karnavalı"
      }
    ]
  },
  {
    cityName: "Erzurum",
    questions: [
      {
        questionText: "Erzurum'un en ünlü kış sporları merkezi hangisidir?",
        options: [
          "A) Palandöken",
          "B) Sarıkamış",
          "C) Uludağ",
          "D) Erciyes"
        ],
        correctAnswer: "A) Palandöken"
      },
      {
        questionText: "Erzurum'un meşhur çorbası hangisidir?",
        options: [
          "A) Ayran Aşı",
          "B) Tarhana",
          "C) Ezogelin",
          "D) Yayla Çorbası"
        ],
        correctAnswer: "A) Ayran Aşı"
      },
      {
        questionText: "Erzurum'un simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Çifte Minareli Medrese",
          "B) Yakutiye Medresesi",
          "C) Üç Kümbetler",
          "D) Erzurum Kalesi"
        ],
        correctAnswer: "A) Çifte Minareli Medrese"
      }
    ]
  },
  {
    cityName: "Mersin",
    questions: [
      {
        questionText: "Mersin'in simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Kızkalesi",
          "B) Mamure Kalesi",
          "C) Anamurium",
          "D) Soli Pompeiopolis"
        ],
        correctAnswer: "A) Kızkalesi"
      },
      {
        questionText: "Mersin'in en ünlü yemeği hangisidir?",
        options: [
          "A) Tantuni",
          "B) Cezerye",
          "C) Kerebiç",
          "D) Batırık"
        ],
        correctAnswer: "A) Tantuni"
      },
      {
        questionText: "Mersin'in en uzun sahil ilçesi hangisidir?",
        options: [
          "A) Silifke",
          "B) Anamur",
          "C) Erdemli",
          "D) Tarsus"
        ],
        correctAnswer: "A) Silifke"
      }
    ]
  },
  {
    cityName: "Kayseri",
    questions: [
      {
        questionText: "Kayseri'nin simgesi olan dağ hangisidir?",
        options: [
          "A) Erciyes",
          "B) Hasan Dağı",
          "C) Süphan Dağı",
          "D) Nemrut Dağı"
        ],
        correctAnswer: "A) Erciyes"
      },
      {
        questionText: "Kayseri'nin en ünlü yemeği hangisidir?",
        options: [
          "A) Mantı",
          "B) Pastırma",
          "C) Sucuk",
          "D) Yağlama"
        ],
        correctAnswer: "A) Mantı"
      },
      {
        questionText: "Kayseri'nin tarihi kapalı çarşısı hangisidir?",
        options: [
          "A) Kayseri Kapalı Çarşısı",
          "B) Bedesten",
          "C) Bakırcılar Çarşısı",
          "D) Uzun Çarşı"
        ],
        correctAnswer: "A) Kayseri Kapalı Çarşısı"
      }
    ]
  },
  {
    cityName: "Balıkesir",
    questions: [
      {
        questionText: "Balıkesir'in en ünlü tatil beldesi hangisidir?",
        options: [
          "A) Ayvalık",
          "B) Edremit",
          "C) Akçay",
          "D) Altınoluk"
        ],
        correctAnswer: "A) Ayvalık"
      },
      {
        questionText: "Balıkesir'in meşhur peyniri hangisidir?",
        options: [
          "A) Mihaliç Peyniri",
          "B) Ezine Peyniri",
          "C) Tulum Peyniri",
          "D) Kaşar Peyniri"
        ],
        correctAnswer: "A) Mihaliç Peyniri"
      },
      {
        questionText: "Balıkesir'in simgesi olan adası hangisidir?",
        options: [
          "A) Cunda Adası",
          "B) Marmara Adası",
          "C) Avşa Adası",
          "D) Paşalimanı Adası"
        ],
        correctAnswer: "A) Cunda Adası"
      }
    ]
  },
  {
    cityName: "Aydın",
    questions: [
      {
        questionText: "Aydın'ın en ünlü antik kenti hangisidir?",
        options: [
          "A) Tralleis",
          "B) Efes",
          "C) Milet",
          "D) Priene"
        ],
        correctAnswer: "A) Tralleis"
      },
      {
        questionText: "Aydın'ın en ünlü tatlısı hangisidir?",
        options: [
          "A) İncir Tatlısı",
          "B) Şambali",
          "C) Zerde",
          "D) Kabak Tatlısı"
        ],
        correctAnswer: "A) İncir Tatlısı"
      },
      {
        questionText: "Aydın'ın en bilinen turistik ilçesi hangisidir?",
        options: [
          "A) Kuşadası",
          "B) Didim",
          "C) Söke",
          "D) Nazilli"
        ],
        correctAnswer: "A) Kuşadası"
      }
    ]
  },
  {
    cityName: "Kocaeli",
    questions: [
      {
        questionText: "Kocaeli'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Gebze",
          "B) İzmit",
          "C) Körfez",
          "D) Derince"
        ],
        correctAnswer: "A) Gebze"
      },
      {
        questionText: "Kocaeli'nin Karadeniz'e kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Kandıra",
          "B) Gölcük",
          "C) Kartepe",
          "D) Başiskele"
        ],
        correctAnswer: "A) Kandıra"
      },
      {
        questionText: "Kocaeli'nin simgesi olan köprü hangisidir?",
        options: [
          "A) Osman Gazi Köprüsü",
          "B) Boğaziçi Köprüsü",
          "C) Yavuz Sultan Selim Köprüsü",
          "D) Fatih Sultan Mehmet Köprüsü"
        ],
        correctAnswer: "A) Osman Gazi Köprüsü"
      }
    ]
  },
  {
    cityName: "Van",
    questions: [
      {
        questionText: "Van'ın simgesi olan göl hangisidir?",
        options: [
          "A) Van Gölü",
          "B) Tuz Gölü",
          "C) Beyşehir Gölü",
          "D) Eğirdir Gölü"
        ],
        correctAnswer: "A) Van Gölü"
      },
      {
        questionText: "Van'ın en ünlü kedisi hangi özelliğiyle bilinir?",
        options: [
          "A) Farklı renk gözleriyle",
          "B) Uzun tüyleriyle",
          "C) Büyük kulaklarıyla",
          "D) Kısa kuyruğuyla"
        ],
        correctAnswer: "A) Farklı renk gözleriyle"
      },
      {
        questionText: "Van'ın tarihi kalesi hangisidir?",
        options: [
          "A) Van Kalesi",
          "B) Hoşap Kalesi",
          "C) Çavuştepe Kalesi",
          "D) Zernek Kalesi"
        ],
        correctAnswer: "A) Van Kalesi"
      }
    ]
  },
  {
    cityName: "Tekirdağ",
    questions: [
      {
        questionText: "Tekirdağ'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Tekirdağ Köftesi",
          "B) Hayrabolu Tatlısı",
          "C) Peynir Helvası",
          "D) Ciğer Tava"
        ],
        correctAnswer: "A) Tekirdağ Köftesi"
      },
      {
        questionText: "Tekirdağ'ın Marmara Denizi'ne kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Şarköy",
          "B) Malkara",
          "C) Hayrabolu",
          "D) Muratlı"
        ],
        correctAnswer: "A) Şarköy"
      },
      {
        questionText: "Tekirdağ'ın simgesi olan rakı fabrikası hangi ilçededir?",
        options: [
          "A) Süleymanpaşa",
          "B) Çorlu",
          "C) Çerkezköy",
          "D) Marmaraereğlisi"
        ],
        correctAnswer: "A) Süleymanpaşa"
      }
    ]
  },
  {
    cityName: "Ordu",
    questions: [
      {
        questionText: "Ordu'nun en ünlü yaylası hangisidir?",
        options: [
          "A) Perşembe Yaylası",
          "B) Çambaşı Yaylası",
          "C) Aybastı Yaylası",
          "D) Keyfalan Yaylası"
        ],
        correctAnswer: "A) Perşembe Yaylası"
      },
      {
        questionText: "Ordu'nun simgesi olan fındık hangi ilçede en çok yetişir?",
        options: [
          "A) Fatsa",
          "B) Ünye",
          "C) Altınordu",
          "D) Gölköy"
        ],
        correctAnswer: "A) Fatsa"
      },
      {
        questionText: "Ordu'nun Karadeniz'e kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Ünye",
          "B) Korgan",
          "C) Gürgentepe",
          "D) Mesudiye"
        ],
        correctAnswer: "A) Ünye"
      }
    ]
  },
  {
    cityName: "Manisa",
    questions: [
      {
        questionText: "Manisa'nın en ünlü üzümü hangisidir?",
        options: [
          "A) Sultaniye",
          "B) Boğazkere",
          "C) Öküzgözü",
          "D) Narince"
        ],
        correctAnswer: "A) Sultaniye"
      },
      {
        questionText: "Manisa'nın simgesi olan dağ hangisidir?",
        options: [
          "A) Spil Dağı",
          "B) Bozdağ",
          "C) Yuntdağı",
          "D) Murat Dağı"
        ],
        correctAnswer: "A) Spil Dağı"
      },
      {
        questionText: "Manisa'nın en ünlü festivali hangisidir?",
        options: [
          "A) Mesir Macunu Festivali",
          "B) Kiraz Festivali",
          "C) Zeytin Festivali",
          "D) Bağbozumu Festivali"
        ],
        correctAnswer: "A) Mesir Macunu Festivali"
      }
    ]
  },
  {
    cityName: "Malatya",
    questions: [
      {
        questionText: "Malatya'nın en ünlü meyvesi hangisidir?",
        options: [
          "A) Kayısı",
          "B) Elma",
          "C) Üzüm",
          "D) Şeftali"
        ],
        correctAnswer: "A) Kayısı"
      },
      {
        questionText: "Malatya'nın simgesi olan baraj hangisidir?",
        options: [
          "A) Karakaya Barajı",
          "B) Atatürk Barajı",
          "C) Keban Barajı",
          "D) Hirfanlı Barajı"
        ],
        correctAnswer: "A) Karakaya Barajı"
      },
      {
        questionText: "Malatya'nın en ünlü yemeği hangisidir?",
        options: [
          "A) Kağıt Kebabı",
          "B) Analı Kızlı",
          "C) Patlıcanlı Kebap",
          "D) Sıkma Köfte"
        ],
        correctAnswer: "A) Kağıt Kebabı"
      }
    ]
  },
  {
    cityName: "Giresun",
    questions: [
      {
        questionText: "Giresun'un en ünlü ürünü hangisidir?",
        options: [
          "A) Fındık",
          "B) Çay",
          "C) Mısır",
          "D) Elma"
        ],
        correctAnswer: "A) Fındık"
      },
      {
        questionText: "Giresun'un Karadeniz'deki adası hangisidir?",
        options: [
          "A) Giresun Adası",
          "B) Ordu Adası",
          "C) Sinop Adası",
          "D) Trabzon Adası"
        ],
        correctAnswer: "A) Giresun Adası"
      },
      {
        questionText: "Giresun'un en yüksek dağı hangisidir?",
        options: [
          "A) Karagöl Dağı",
          "B) Zigana Dağı",
          "C) Kaçkar Dağı",
          "D) Ilgaz Dağı"
        ],
        correctAnswer: "A) Karagöl Dağı"
      }
    ]
  },
  {
    cityName: "Kars",
    questions: [
      {
        questionText: "Kars'ın en ünlü kalesi hangisidir?",
        options: [
          "A) Kars Kalesi",
          "B) Ani Kalesi",
          "C) Ardahan Kalesi",
          "D) Şavşat Kalesi"
        ],
        correctAnswer: "A) Kars Kalesi"
      },
      {
        questionText: "Kars'ın en ünlü peyniri hangisidir?",
        options: [
          "A) Kars Kaşarı",
          "B) Ezine Peyniri",
          "C) Mihaliç Peyniri",
          "D) Tulum Peyniri"
        ],
        correctAnswer: "A) Kars Kaşarı"
      },
      {
        questionText: "Kars'ın en soğuk ilçesi hangisidir?",
        options: [
          "A) Sarıkamış",
          "B) Kağızman",
          "C) Digor",
          "D) Selim"
        ],
        correctAnswer: "A) Sarıkamış"
      }
    ]
  },
  {
    cityName: "Muğla",
    questions: [
      {
        questionText: "Muğla'nın en ünlü tatil beldesi hangisidir?",
        options: [
          "A) Bodrum",
          "B) Marmaris",
          "C) Fethiye",
          "D) Datça"
        ],
        correctAnswer: "A) Bodrum"
      },
      {
        questionText: "Muğla'nın simgesi olan göl hangisidir?",
        options: [
          "A) Bafa Gölü",
          "B) Salda Gölü",
          "C) Eğirdir Gölü",
          "D) Van Gölü"
        ],
        correctAnswer: "A) Bafa Gölü"
      },
      {
        questionText: "Muğla'nın en yüksek dağı hangisidir?",
        options: [
          "A) Sandras Dağı",
          "B) Babadağ",
          "C) Akdağ",
          "D) Bozdağ"
        ],
        correctAnswer: "A) Sandras Dağı"
      }
    ]
  },
  {
    cityName: "Sakarya",
    questions: [
      {
        questionText: "Sakarya'nın en büyük ilçesi hangisidir?",
        options: [
          "A) Adapazarı",
          "B) Serdivan",
          "C) Hendek",
          "D) Akyazı"
        ],
        correctAnswer: "A) Adapazarı"
      },
      {
        questionText: "Sakarya'nın simgesi olan nehir hangisidir?",
        options: [
          "A) Sakarya Nehri",
          "B) Kızılırmak",
          "C) Filyos Çayı",
          "D) Yeşilırmak"
        ],
        correctAnswer: "A) Sakarya Nehri"
      },
      {
        questionText: "Sakarya'nın en ünlü tatlısı hangisidir?",
        options: [
          "A) Kabak Tatlısı",
          "B) Ayva Tatlısı",
          "C) Fıstık Ezmesi",
          "D) Şekerpare"
        ],
        correctAnswer: "A) Kabak Tatlısı"
      }
    ]
  },
  {
    cityName: "Çanakkale",
    questions: [
      {
        questionText: "Çanakkale'nin simgesi olan antik kent hangisidir?",
        options: [
          "A) Troya",
          "B) Bergama",
          "C) Efes",
          "D) Assos"
        ],
        correctAnswer: "A) Troya"
      },
      {
        questionText: "Çanakkale Boğazı'nın diğer adı nedir?",
        options: [
          "A) Dardaneller",
          "B) Haliç",
          "C) Marmara",
          "D) Saros"
        ],
        correctAnswer: "A) Dardaneller"
      },
      {
        questionText: "Çanakkale'nin en ünlü adası hangisidir?",
        options: [
          "A) Bozcaada",
          "B) Gökçeada",
          "C) Marmara Adası",
          "D) Avşa Adası"
        ],
        correctAnswer: "A) Bozcaada"
      }
    ]
  },
  {
    cityName: "Elazığ",
    questions: [
      {
        questionText: "Elazığ'ın en ünlü gölü hangisidir?",
        options: [
          "A) Hazar Gölü",
          "B) Van Gölü",
          "C) Keban Baraj Gölü",
          "D) Eğirdir Gölü"
        ],
        correctAnswer: "A) Hazar Gölü"
      },
      {
        questionText: "Elazığ'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Harput Köftesi",
          "B) İçli Köfte",
          "C) Kaburga Dolması",
          "D) Patila"
        ],
        correctAnswer: "A) Harput Köftesi"
      },
      {
        questionText: "Elazığ'ın simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Harput Kalesi",
          "B) Elazığ Ulu Camii",
          "C) Meryem Ana Kilisesi",
          "D) Arap Baba Türbesi"
        ],
        correctAnswer: "A) Harput Kalesi"
      }
    ]
  },
  {
    cityName: "Hatay",
    questions: [
      {
        questionText: "Hatay'ın en ünlü tatlısı hangisidir?",
        options: [
          "A) Künefe",
          "B) Şıllık Tatlısı",
          "C) Haytalı",
          "D) Cevizli Sucuk"
        ],
        correctAnswer: "A) Künefe"
      },
      {
        questionText: "Hatay'ın simgesi olan mozaik müzesi hangisidir?",
        options: [
          "A) Hatay Arkeoloji Müzesi",
          "B) Zeugma Mozaik Müzesi",
          "C) Antalya Mozaik Müzesi",
          "D) İstanbul Mozaik Müzesi"
        ],
        correctAnswer: "A) Hatay Arkeoloji Müzesi"
      },
      {
        questionText: "Hatay'ın Akdeniz'e kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Samandağ",
          "B) Antakya",
          "C) Kırıkhan",
          "D) Reyhanlı"
        ],
        correctAnswer: "A) Samandağ"
      }
    ]
  },
  {
    cityName: "Şanlıurfa",
    questions: [
      {
        questionText: "Şanlıurfa'nın en ünlü yemeği hangisidir?",
        options: [
          "A) Çiğ Köfte",
          "B) Lahmacun",
          "C) Patlıcan Kebabı",
          "D) Borani"
        ],
        correctAnswer: "A) Çiğ Köfte"
      },
      {
        questionText: "Şanlıurfa'nın simgesi olan tarihi alan hangisidir?",
        options: [
          "A) Göbeklitepe",
          "B) Balıklıgöl",
          "C) Harran",
          "D) Halfeti"
        ],
        correctAnswer: "A) Göbeklitepe"
      },
      {
        questionText: "Şanlıurfa'nın en büyük ilçesi hangisidir?",
        options: [
          "A) Siverek",
          "B) Viranşehir",
          "C) Eyyübiye",
          "D) Haliliye"
        ],
        correctAnswer: "A) Siverek"
      }
    ]
  },
  {
    cityName: "Adıyaman",
    questions: [
      {
        questionText: "Adıyaman'ın en ünlü tarihi alanı hangisidir?",
        options: [
          "A) Nemrut Dağı",
          "B) Arsemia",
          "C) Cendere Köprüsü",
          "D) Perre Antik Kenti"
        ],
        correctAnswer: "A) Nemrut Dağı"
      },
      {
        questionText: "Adıyaman'ın en ünlü tatlısı hangisidir?",
        options: [
          "A) Peynirli İrmik Tatlısı",
          "B) Burma Tatlısı",
          "C) Şıllık Tatlısı",
          "D) Sütlü Nuriye"
        ],
        correctAnswer: "A) Peynirli İrmik Tatlısı"
      },
      {
        questionText: "Adıyaman'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Kahta",
          "B) Besni",
          "C) Gölbaşı",
          "D) Gerger"
        ],
        correctAnswer: "A) Kahta"
      }
    ]
  },
  {
    cityName: "Afyonkarahisar",
    questions: [
      {
        questionText: "Afyonkarahisar'ın en ünlü yiyeceği hangisidir?",
        options: [
          "A) Sucuk",
          "B) Kaymak",
          "C) Lokum",
          "D) Haşhaşlı Ekmek"
        ],
        correctAnswer: "A) Sucuk"
      },
      {
        questionText: "Afyonkarahisar'ın simgesi olan kale hangisidir?",
        options: [
          "A) Afyon Kalesi",
          "B) Sandıklı Kalesi",
          "C) Emirdağ Kalesi",
          "D) Bolvadin Kalesi"
        ],
        correctAnswer: "A) Afyon Kalesi"
      },
      {
        questionText: "Afyonkarahisar'ın en ünlü kaplıca ilçesi hangisidir?",
        options: [
          "A) Sandıklı",
          "B) Dinar",
          "C) Emirdağ",
          "D) Şuhut"
        ],
        correctAnswer: "A) Sandıklı"
      }
    ]
  },
  {
    cityName: "Amasya",
    questions: [
      {
        questionText: "Amasya'nın Yeşilırmak kenarındaki ünlü evleri ne olarak bilinir?",
        options: [
          "A) Yalıboyu Evleri",
          "B) Konaklar",
          "C) Hanlar",
          "D) Saraylar"
        ],
        correctAnswer: "A) Yalıboyu Evleri"
      },
      {
        questionText: "Amasya'nın en ünlü meyvesi hangisidir?",
        options: [
          "A) Elma",
          "B) Kiraz",
          "C) Şeftali",
          "D) Üzüm"
        ],
        correctAnswer: "A) Elma"
      },
      {
        questionText: "Amasya'nın simgesi olan kral mezarları hangi uygarlığa aittir?",
        options: [
          "A) Pontus",
          "B) Roma",
          "C) Bizans",
          "D) Hitit"
        ],
        correctAnswer: "A) Pontus"
      }
    ]
  },
  {
    cityName: "Bartın",
    questions: [
      {
        questionText: "Bartın'ın Karadeniz'e kıyısı olan ünlü ilçesi hangisidir?",
        options: [
          "A) Amasra",
          "B) Ulus",
          "C) Kurucaşile",
          "D) Kozcağız"
        ],
        correctAnswer: "A) Amasra"
      },
      {
        questionText: "Bartın'ın en ünlü festivali hangisidir?",
        options: [
          "A) Bartın Çilek Festivali",
          "B) Amasra Balık Festivali",
          "C) Ulus Fındık Festivali",
          "D) Kurucaşile Ahşap Tekne Festivali"
        ],
        correctAnswer: "A) Bartın Çilek Festivali"
      },
      {
        questionText: "Bartın'ın simgesi olan nehir hangisidir?",
        options: [
          "A) Bartın Çayı",
          "B) Filyos Çayı",
          "C) Kızılırmak",
          "D) Yeşilırmak"
        ],
        correctAnswer: "A) Bartın Çayı"
      }
    ]
  },
  {
    cityName: "Düzce",
    questions: [
      {
        questionText: "Düzce'nin en ünlü şelalesi hangisidir?",
        options: [
          "A) Samandere Şelalesi",
          "B) Güzeldere Şelalesi",
          "C) Aydınpınar Şelalesi",
          "D) Akçakoca Şelalesi"
        ],
        correctAnswer: "A) Samandere Şelalesi"
      },
      {
        questionText: "Düzce'nin Karadeniz'e kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Akçakoca",
          "B) Cumayeri",
          "C) Gölyaka",
          "D) Yığılca"
        ],
        correctAnswer: "A) Akçakoca"
      },
      {
        questionText: "Düzce'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Merkez",
          "B) Kaynaşlı",
          "C) Çilimli",
          "D) Gümüşova"
        ],
        correctAnswer: "A) Merkez"
      }
    ]
  },
  {
    cityName: "Karabük",
    questions: [
      {
        questionText: "Karabük'ün UNESCO Dünya Mirası Listesi'nde olan ilçesi hangisidir?",
        options: [
          "A) Safranbolu",
          "B) Eflani",
          "C) Yenice",
          "D) Ovacık"
        ],
        correctAnswer: "A) Safranbolu"
      },
      {
        questionText: "Karabük'ün en ünlü festivali hangisidir?",
        options: [
          "A) Safran Festivali",
          "B) Ceviz Festivali",
          "C) Fındık Festivali",
          "D) Kiraz Festivali"
        ],
        correctAnswer: "A) Safran Festivali"
      },
      {
        questionText: "Karabük'ün en büyük ilçesi hangisidir?",
        options: [
          "A) Merkez",
          "B) Safranbolu",
          "C) Eskipazar",
          "D) Yenice"
        ],
        correctAnswer: "A) Merkez"
      }
    ]
  },
  {
    cityName: "Kırklareli",
    questions: [
      {
        questionText: "Kırklareli'nin en ünlü longoz ormanı hangisidir?",
        options: [
          "A) İğneada",
          "B) Demirköy",
          "C) Vize",
          "D) Lüleburgaz"
        ],
        correctAnswer: "A) İğneada"
      },
      {
        questionText: "Kırklareli'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Lüleburgaz",
          "B) Babaeski",
          "C) Vize",
          "D) Demirköy"
        ],
        correctAnswer: "A) Lüleburgaz"
      },
      {
        questionText: "Kırklareli'nin en ünlü peyniri hangisidir?",
        options: [
          "A) Kırklareli Beyaz Peyniri",
          "B) Ezine Peyniri",
          "C) Mihaliç Peyniri",
          "D) Tulum Peyniri"
        ],
        correctAnswer: "A) Kırklareli Beyaz Peyniri"
      }
    ]
  },
  {
    cityName: "Nevşehir",
    questions: [
      {
        questionText: "Nevşehir'in en ünlü turistik bölgesi hangisidir?",
        options: [
          "A) Kapadokya",
          "B) Avanos",
          "C) Ürgüp",
          "D) Göreme"
        ],
        correctAnswer: "A) Kapadokya"
      },
      {
        questionText: "Nevşehir'in simgesi olan yer altı şehri hangisidir?",
        options: [
          "A) Derinkuyu",
          "B) Kaymaklı",
          "C) Özkonak",
          "D) Mazı"
        ],
        correctAnswer: "A) Derinkuyu"
      },
      {
        questionText: "Nevşehir'in en büyük ilçesi hangisidir?",
        options: [
          "A) Merkez",
          "B) Avanos",
          "C) Ürgüp",
          "D) Gülşehir"
        ],
        correctAnswer: "A) Merkez"
      }
    ]
  },
  {
    cityName: "Siirt",
    questions: [
      {
        questionText: "Siirt'in en ünlü yemeği hangisidir?",
        options: [
          "A) Büryan Kebabı",
          "B) Perde Pilavı",
          "C) Kitel",
          "D) Zingil Tatlısı"
        ],
        correctAnswer: "A) Büryan Kebabı"
      },
      {
        questionText: "Siirt'in en büyük ilçesi hangisidir?",
        options: [
          "A) Kurtalan",
          "B) Pervari",
          "C) Eruh",
          "D) Baykan"
        ],
        correctAnswer: "A) Kurtalan"
      },
      {
        questionText: "Siirt'in simgesi olan cami hangisidir?",
        options: [
          "A) Ulu Camii",
          "B) Alaeddin Camii",
          "C) Şeyh Muhammed Camii",
          "D) Hacı Abdülhakim Camii"
        ],
        correctAnswer: "A) Ulu Camii"
      }
    ]
  },
  {
    cityName: "Yalova",
    questions: [
      {
        questionText: "Yalova'nın en ünlü kaplıca ilçesi hangisidir?",
        options: [
          "A) Termal",
          "B) Çınarcık",
          "C) Altınova",
          "D) Armutlu"
        ],
        correctAnswer: "A) Termal"
      },
      {
        questionText: "Yalova'nın Marmara Denizi'ne kıyısı olan ilçesi hangisidir?",
        options: [
          "A) Çınarcık",
          "B) Altınova",
          "C) Armutlu",
          "D) Termal"
        ],
        correctAnswer: "A) Çınarcık"
      },
      {
        questionText: "Yalova'nın simgesi olan köşk hangisidir?",
        options: [
          "A) Yürüyen Köşk",
          "B) Atatürk Köşkü",
          "C) Çınarcık Köşkü",
          "D) Termal Köşkü"
        ],
        correctAnswer: "A) Yürüyen Köşk"
      }
    ]
  },
  {
    cityName: "Ardahan",
    questions: [
      {
        questionText: "Ardahan'ın en ünlü kalesi hangisidir?",
        options: [
          "A) Ardahan Kalesi",
          "B) Şavşat Kalesi",
          "C) Posof Kalesi",
          "D) Hanak Kalesi"
        ],
        correctAnswer: "A) Ardahan Kalesi"
      },
      {
        questionText: "Ardahan'ın en ünlü ürünü hangisidir?",
        options: [
          "A) Kaşar Peyniri",
          "B) Bal",
          "C) Fındık",
          "D) Ceviz"
        ],
        correctAnswer: "A) Kaşar Peyniri"
      },
      {
        questionText: "Ardahan'ın Gürcistan'a açılan sınır kapısı hangisidir?",
        options: [
          "A) Türkgözü",
          "B) Sarp",
          "C) Kapıkule",
          "D) Aktaş"
        ],
        correctAnswer: "A) Türkgözü"
      }
    ]
  },
  {
    cityName: "Bayburt",
    questions: [
      {
        questionText: "Bayburt'un simgesi olan kale hangisidir?",
        options: [
          "A) Bayburt Kalesi",
          "B) Aydıntepe Kalesi",
          "C) Demirözü Kalesi",
          "D) Kop Kalesi"
        ],
        correctAnswer: "A) Bayburt Kalesi"
      },
      {
        questionText: "Bayburt'un en ünlü yemeği hangisidir?",
        options: [
          "A) Lor Dolması",
          "B) Tel Helva",
          "C) Galacoş",
          "D) Tatlı Çorba"
        ],
        correctAnswer: "A) Lor Dolması"
      },
      {
        questionText: "Bayburt'un en büyük ilçesi hangisidir?",
        options: [
          "A) Merkez",
          "B) Demirözü",
          "C) Aydıntepe",
          "D) Kop"
        ],
        correctAnswer: "A) Merkez"
      }
    ]
  },
  {
    cityName: "Bilecik",
    questions: [
      {
        questionText: "Bilecik'in en ünlü tarihi yapısı hangisidir?",
        options: [
          "A) Şeyh Edebali Türbesi",
          "B) Orhan Gazi Camii",
          "C) Söğüt Ertuğrul Gazi Türbesi",
          "D) Osman Gazi Türbesi"
        ],
        correctAnswer: "A) Şeyh Edebali Türbesi"
      },
      {
        questionText: "Bilecik'in en ünlü ilçesi hangisidir?",
        options: [
          "A) Söğüt",
          "B) Bozüyük",
          "C) Osmaneli",
          "D) Pazaryeri"
        ],
        correctAnswer: "A) Söğüt"
      },
      {
        questionText: "Bilecik'in en ünlü festivali hangisidir?",
        options: [
          "A) Ertuğrul Gazi'yi Anma ve Yörük Şenlikleri",
          "B) Osmaneli Ayva Festivali",
          "C) Bozüyük Tiyatro Festivali",
          "D) Pazaryeri Kiraz Festivali"
        ],
        correctAnswer: "A) Ertuğrul Gazi'yi Anma ve Yörük Şenlikleri"
      }
    ]
  },
  {
    cityName: "Bingöl",
    questions: [
      {
        questionText: "Bingöl'ün en ünlü gölü hangisidir?",
        options: [
          "A) Yedisu Gölü",
          "B) Turna Gölü",
          "C) Çavuş Gölü",
          "D) Sülbüs Gölü"
        ],
        correctAnswer: "A) Yedisu Gölü"
      },
      {
        questionText: "Bingöl'ün en ünlü yemeği hangisidir?",
        options: [
          "A) Kiğı Çorbası",
          "B) Löl",
          "C) Mastuva",
          "D) Tutmaç Çorbası"
        ],
        correctAnswer: "A) Kiğı Çorbası"
      },
      {
        questionText: "Bingöl'ün en yüksek dağı hangisidir?",
        options: [
          "A) Şerafettin Dağı",
          "B) Hazar Dağı",
          "C) Palandöken Dağı",
          "D) Süphan Dağı"
        ],
        correctAnswer: "A) Şerafettin Dağı"
      }
    ]
  },
  {
    cityName: "Bitlis",
    questions: [
      {
        questionText: "Bitlis'in en ünlü gölü hangisidir?",
        options: [
          "A) Nemrut Krater Gölü",
          "B) Van Gölü",
          "C) Nazik Gölü",
          "D) Arin Gölü"
        ],
        correctAnswer: "A) Nemrut Krater Gölü"
      },
      {
        questionText: "Bitlis'in en ünlü yemeği hangisidir?",
        options: [
          "A) Büryan Kebabı",
          "B) Kenger",
          "C) Bitlis Köftesi",
          "D) Avşor Çorbası"
        ],
        correctAnswer: "A) Büryan Kebabı"
      },
      {
        questionText: "Bitlis'in en yüksek dağı hangisidir?",
        options: [
          "A) Süphan Dağı",
          "B) Nemrut Dağı",
          "C) Ararat Dağı",
          "D) Palandöken Dağı"
        ],
        correctAnswer: "A) Süphan Dağı"
      }
    ]
  },
  {
    cityName: "Gümüşhane",
    questions: [
      {
        questionText: "Gümüşhane'nin en ünlü mağarası hangisidir?",
        options: [
          "A) Karaca Mağarası",
          "B) Altınpınar Mağarası",
          "C) Akçakale Mağarası",
          "D) İkisu Mağarası"
        ],
        correctAnswer: "A) Karaca Mağarası"
      },
      {
        questionText: "Gümüşhane'nin en ünlü ürünü hangisidir?",
        options: [
          "A) Pestil",
          "B) Ceviz",
          "C) Fındık",
          "D) Bal"
        ],
        correctAnswer: "A) Pestil"
      },
      {
        questionText: "Gümüşhane'nin en yüksek dağı hangisidir?",
        options: [
          "A) Zigana Dağı",
          "B) Karadağ",
          "C) Gavurdağı",
          "D) Gümüşhane Dağı"
        ],
        correctAnswer: "A) Zigana Dağı"
      }
    ]
  },
  {
    cityName: "Hakkari",
    questions: [
      {
        questionText: "Hakkari'nin en yüksek dağı hangisidir?",
        options: [
          "A) Cilo Dağı",
          "B) Sümbül Dağı",
          "C) Sat Dağları",
          "D) Karadağ"
        ],
        correctAnswer: "A) Cilo Dağı"
      },
      {
        questionText: "Hakkari'nin en ünlü yemeği hangisidir?",
        options: [
          "A) Doğaba",
          "B) Kıris",
          "C) Gulul",
          "D) Kepaye"
        ],
        correctAnswer: "A) Doğaba"
      },
      {
        questionText: "Hakkari'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Yüksekova",
          "B) Şemdinli",
          "C) Çukurca",
          "D) Derecik"
        ],
        correctAnswer: "A) Yüksekova"
      }
    ]
  },
  {
    cityName: "Iğdır",
    questions: [
      {
        questionText: "Iğdır'ın en yüksek dağı hangisidir?",
        options: [
          "A) Ağrı Dağı",
          "B) Ararat Dağı",
          "C) Süphan Dağı",
          "D) Nemrut Dağı"
        ],
        correctAnswer: "A) Ağrı Dağı"
      },
      {
        questionText: "Iğdır'ın en ünlü ürünü hangisidir?",
        options: [
          "A) Kayısı",
          "B) Elma",
          "C) Üzüm",
          "D) Nar"
        ],
        correctAnswer: "A) Kayısı"
      },
      {
        questionText: "Iğdır'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Tuzluca",
          "B) Aralık",
          "C) Karakoyunlu",
          "D) Merkez"
        ],
        correctAnswer: "A) Tuzluca"
      }
    ]
  },
  {
    cityName: "Kırıkkale",
    questions: [
      {
        questionText: "Kırıkkale'nin en ünlü nehri hangisidir?",
        options: [
          "A) Kızılırmak",
          "B) Sakarya Nehri",
          "C) Yeşilırmak",
          "D) Fırat Nehri"
        ],
        correctAnswer: "A) Kızılırmak"
      },
      {
        questionText: "Kırıkkale'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Yahşihan",
          "B) Keskin",
          "C) Delice",
          "D) Bahşılı"
        ],
        correctAnswer: "A) Yahşihan"
      },
      {
        questionText: "Kırıkkale'nin simgesi olan sanayi hangisidir?",
        options: [
          "A) Silah Sanayi",
          "B) Otomotiv Sanayi",
          "C) Tekstil Sanayi",
          "D) Gıda Sanayi"
        ],
        correctAnswer: "A) Silah Sanayi"
      }
    ]
  },
  {
    cityName: "Kilis",
    questions: [
      {
        questionText: "Kilis'in en ünlü yemeği hangisidir?",
        options: [
          "A) Kilis Tava",
          "B) Oruk",
          "C) Cennet Çamuru",
          "D) Lebeniye Çorbası"
        ],
        correctAnswer: "A) Kilis Tava"
      },
      {
        questionText: "Kilis'in en büyük ilçesi hangisidir?",
        options: [
          "A) Merkez",
          "B) Musabeyli",
          "C) Polateli",
          "D) Elbeyli"
        ],
        correctAnswer: "A) Merkez"
      },
      {
        questionText: "Kilis'in Suriye'ye açılan sınır kapısı hangisidir?",
        options: [
          "A) Öncüpınar",
          "B) Cilvegözü",
          "C) Akçakale",
          "D) Nusaybin"
        ],
        correctAnswer: "A) Öncüpınar"
      }
    ]
  },
  {
    cityName: "Osmaniye",
    questions: [
      {
        questionText: "Osmaniye'nin en ünlü kalesi hangisidir?",
        options: [
          "A) Toprakkale",
          "B) Haruniye Kalesi",
          "C) Kastabala Kalesi",
          "D) Karatepe Kalesi"
        ],
        correctAnswer: "A) Toprakkale"
      },
      {
        questionText: "Osmaniye'nin en ünlü tatlısı hangisidir?",
        options: [
          "A) Yerfıstıklı Sarma",
          "B) Kabak Tatlısı",
          "C) Cevizli Sucuk",
          "D) Şıllık Tatlısı"
        ],
        correctAnswer: "A) Yerfıstıklı Sarma"
      },
      {
        questionText: "Osmaniye'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Kadirli",
          "B) Düziçi",
          "C) Bahçe",
          "D) Toprakkale"
        ],
        correctAnswer: "A) Kadirli"
      }
    ]
  },
  {
    cityName: "Uşak",
    questions: [
      {
        questionText: "Uşak'ın en ünlü halısı hangisidir?",
        options: [
          "A) Uşak Halısı",
          "B) Hereke Halısı",
          "C) Milas Halısı",
          "D) Isparta Halısı"
        ],
        correctAnswer: "A) Uşak Halısı"
      },
      {
        questionText: "Uşak'ın en ünlü tatlısı hangisidir?",
        options: [
          "A) Tarhana Tatlısı",
          "B) Cevizli Sucuk",
          "C) Tahinli Pide",
          "D) Höşmerim"
        ],
        correctAnswer: "A) Tarhana Tatlısı"
      },
      {
        questionText: "Uşak'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Banaz",
          "B) Eşme",
          "C) Sivaslı",
          "D) Ulubey"
        ],
        correctAnswer: "A) Banaz"
      }
    ]
  },
  {
    cityName: "Kırşehir",
    questions: [
      {
        questionText: "Kırşehir'in en ünlü türbesi hangisidir?",
        options: [
          "A) Ahi Evran Türbesi",
          "B) Cacabey Medresesi",
          "C) Neşet Ertaş Anıtı",
          "D) Seyfe Gölü"
        ],
        correctAnswer: "A) Ahi Evran Türbesi"
      },
      {
        questionText: "Kırşehir'in en büyük ilçesi hangisidir?",
        options: [
          "A) Kaman",
          "B) Mucur",
          "C) Akpınar",
          "D) Boztepe"
        ],
        correctAnswer: "A) Kaman"
      },
      {
        questionText: "Kırşehir'in en ünlü gölü hangisidir?",
        options: [
          "A) Seyfe Gölü",
          "B) Tuz Gölü",
          "C) Hirfanlı Barajı",
          "D) Kızılırmak"
        ],
        correctAnswer: "A) Seyfe Gölü"
      }
    ]
  },
  {
    cityName: "Tokat",
    questions: [
      {
        questionText: "Tokat'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Tokat Kebabı",
          "B) Zile Pekmezi",
          "C) Bat",
          "D) Keşkek"
        ],
        correctAnswer: "A) Tokat Kebabı"
      },
      {
        questionText: "Tokat'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Erbaa",
          "B) Niksar",
          "C) Turhal",
          "D) Zile"
        ],
        correctAnswer: "A) Erbaa"
      },
      {
        questionText: "Tokat'ın simgesi olan kale hangisidir?",
        options: [
          "A) Tokat Kalesi",
          "B) Niksar Kalesi",
          "C) Zile Kalesi",
          "D) Turhal Kalesi"
        ],
        correctAnswer: "A) Tokat Kalesi"
      }
    ]
  },
  {
    cityName: "Burdur",
    questions: [
      {
        questionText: "Burdur'un en ünlü gölü hangisidir?",
        options: [
          "A) Salda Gölü",
          "B) Burdur Gölü",
          "C) Yarışlı Gölü",
          "D) Karataş Gölü"
        ],
        correctAnswer: "A) Salda Gölü"
      },
      {
        questionText: "Burdur'un en ünlü antik kenti hangisidir?",
        options: [
          "A) Sagalassos",
          "B) Kibyra",
          "C) Boubon",
          "D) Kremna"
        ],
        correctAnswer: "A) Sagalassos"
      },
      {
        questionText: "Burdur'un en büyük ilçesi hangisidir?",
        options: [
          "A) Bucak",
          "B) Gölhisar",
          "C) Tefenni",
          "D) Yeşilova"
        ],
        correctAnswer: "A) Bucak"
      }
    ]
  },
  {
    cityName: "Çorum",
    questions: [
      {
        questionText: "Çorum'un en ünlü leblebisi hangi ilçede üretilir?",
        options: [
          "A) Osmancık",
          "B) Sungurlu",
          "C) Alaca",
          "D) İskilip"
        ],
        correctAnswer: "A) Osmancık"
      },
      {
        questionText: "Çorum'un en ünlü antik kenti hangisidir?",
        options: [
          "A) Hattuşa",
          "B) Alacahöyük",
          "C) Boğazköy",
          "D) Eskiyapar"
        ],
        correctAnswer: "A) Hattuşa"
      },
      {
        questionText: "Çorum'un en büyük ilçesi hangisidir?",
        options: [
          "A) Sungurlu",
          "B) Osmancık",
          "C) Alaca",
          "D) İskilip"
        ],
        correctAnswer: "A) Sungurlu"
      }
    ]
  },
  {
    cityName: "Mardin",
    questions: [
      {
        questionText: "Mardin'in en ünlü yapısı hangisidir?",
        options: [
          "A) Deyrulzafaran Manastırı",
          "B) Zinciriye Medresesi",
          "C) Kasımiye Medresesi",
          "D) Mardin Kalesi"
        ],
        correctAnswer: "A) Deyrulzafaran Manastırı"
      },
      {
        questionText: "Mardin'in en ünlü yemeği hangisidir?",
        options: [
          "A) Kaburga Dolması",
          "B) İkbebet",
          "C) Sembusek",
          "D) Harire Tatlısı"
        ],
        correctAnswer: "A) Kaburga Dolması"
      },
      {
        questionText: "Mardin'in en büyük ilçesi hangisidir?",
        options: [
          "A) Kızıltepe",
          "B) Midyat",
          "C) Artuklu",
          "D) Nusaybin"
        ],
        correctAnswer: "A) Kızıltepe"
      }
    ]
  },
  {
    cityName: "Niğde",
    questions: [
      {
        questionText: "Niğde'nin en ünlü dağı hangisidir?",
        options: [
          "A) Aladağlar",
          "B) Hasan Dağı",
          "C) Melendiz Dağı",
          "D) Erciyes"
        ],
        correctAnswer: "A) Aladağlar"
      },
      {
        questionText: "Niğde'nin en ünlü yemeği hangisidir?",
        options: [
          "A) Niğde Tava",
          "B) Patatesli Ekmek",
          "C) Kaymaklı",
          "D) Sulu Köfte"
        ],
        correctAnswer: "A) Niğde Tava"
      },
      {
        questionText: "Niğde'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Bor",
          "B) Çiftlik",
          "C) Ulukışla",
          "D) Altunhisar"
        ],
        correctAnswer: "A) Bor"
      }
    ]
  },
  {
    cityName: "Tunceli",
    questions: [
      {
        questionText: "Tunceli'nin en ünlü vadisi hangisidir?",
        options: [
          "A) Munzur Vadisi",
          "B) Pülümür Vadisi",
          "C) Ovacık Vadisi",
          "D) Pertek Vadisi"
        ],
        correctAnswer: "A) Munzur Vadisi"
      },
      {
        questionText: "Tunceli'nin en ünlü yemeği hangisidir?",
        options: [
          "A) Gulik",
          "B) Babuko",
          "C) Kavut",
          "D) Sırın"
        ],
        correctAnswer: "A) Gulik"
      },
      {
        questionText: "Tunceli'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Pertek",
          "B) Hozat",
          "C) Ovacık",
          "D) Mazgirt"
        ],
        correctAnswer: "A) Pertek"
      }
    ]
  },
  {
    cityName: "Aksaray",
    questions: [
      {
        questionText: "Aksaray'ın en ünlü gölü hangisidir?",
        options: [
          "A) Tuz Gölü",
          "B) Mamasın Barajı",
          "C) Acıgöl",
          "D) Eşmekaya Sazlığı"
        ],
        correctAnswer: "A) Tuz Gölü"
      },
      {
        questionText: "Aksaray'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Aksaray Tava",
          "B) Bamya Çorbası",
          "C) Katmer",
          "D) Sıkma"
        ],
        correctAnswer: "A) Aksaray Tava"
      },
      {
        questionText: "Aksaray'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Ortaköy",
          "B) Eskil",
          "C) Sultanhanı",
          "D) Gülağaç"
        ],
        correctAnswer: "A) Ortaköy"
      }
    ]
  },
  {
    cityName: "Artvin",
    questions: [
      {
        questionText: "Artvin'in en ünlü yaylası hangisidir?",
        options: [
          "A) Karagöl Yaylası",
          "B) Borçka Yaylası",
          "C) Şavşat Yaylası",
          "D) Macahel Yaylası"
        ],
        correctAnswer: "A) Karagöl Yaylası"
      },
      {
        questionText: "Artvin'in en ünlü nehri hangisidir?",
        options: [
          "A) Çoruh Nehri",
          "B) Fırtına Deresi",
          "C) Kura Nehri",
          "D) Aras Nehri"
        ],
        correctAnswer: "A) Çoruh Nehri"
      },
      {
        questionText: "Artvin'in Gürcistan'a açılan sınır kapısı hangisidir?",
        options: [
          "A) Sarp Sınır Kapısı",
          "B) Türkgözü Sınır Kapısı",
          "C) Kapıkule Sınır Kapısı",
          "D) Aktaş Sınır Kapısı"
        ],
        correctAnswer: "A) Sarp Sınır Kapısı"
      }
    ]
  },
  {
    cityName: "Edirne",
    questions: [
      {
        questionText: "Edirne'nin simgesi olan cami hangisidir?",
        options: [
          "A) Selimiye Camii",
          "B) Üç Şerefeli Camii",
          "C) Eski Camii",
          "D) Muradiye Camii"
        ],
        correctAnswer: "A) Selimiye Camii"
      },
      {
        questionText: "Edirne'nin en ünlü festivali hangisidir?",
        options: [
          "A) Kırkpınar Yağlı Güreşleri",
          "B) Kakava Şenlikleri",
          "C) Bando Festivali",
          "D) Edirne Maratonu"
        ],
        correctAnswer: "A) Kırkpınar Yağlı Güreşleri"
      },
      {
        questionText: "Edirne'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Keşan",
          "B) Uzunköprü",
          "C) Meriç",
          "D) İpsala"
        ],
        correctAnswer: "A) Keşan"
      }
    ]
  },
  {
    cityName: "Erzincan",
    questions: [
      {
        questionText: "Erzincan'ın en ünlü tatlısı hangisidir?",
        options: [
          "A) Erzincan Lokumu",
          "B) Kadayıf Dolması",
          "C) Pestil",
          "D) Sütlaç"
        ],
        correctAnswer: "A) Erzincan Lokumu"
      },
      {
        questionText: "Erzincan'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Tercan",
          "B) Üzümlü",
          "C) Refahiye",
          "D) Kemaliye"
        ],
        correctAnswer: "A) Tercan"
      },
      {
        questionText: "Erzincan'ın en ünlü vadisi hangisidir?",
        options: [
          "A) Kemaliye Kanyonu",
          "B) Munzur Vadisi",
          "C) Fırat Vadisi",
          "D) Çoruh Vadisi"
        ],
        correctAnswer: "A) Kemaliye Kanyonu"
      }
    ]
  },
  {
    cityName: "Karaman",
    questions: [
      {
        questionText: "Karaman'ın en ünlü mağarası hangisidir?",
        options: [
          "A) İncesu Mağarası",
          "B) Taşkale Mağarası",
          "C) Manazan Mağarası",
          "D) Gödet Mağarası"
        ],
        correctAnswer: "A) İncesu Mağarası"
      },
      {
        questionText: "Karaman'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Batırık",
          "B) Tandır Böreği",
          "C) Fırın Kebabı",
          "D) Arabaşı Çorbası"
        ],
        correctAnswer: "A) Batırık"
      },
      {
        questionText: "Karaman'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Ermenek",
          "B) Ayrancı",
          "C) Kazımkarabekir",
          "D) Başyayla"
        ],
        correctAnswer: "A) Ermenek"
      }
    ]
  },
  {
    cityName: "Kastamonu",
    questions: [
      {
        questionText: "Kastamonu'nun en ünlü kalesi hangisidir?",
        options: [
          "A) Kastamonu Kalesi",
          "B) İnebolu Kalesi",
          "C) Cide Kalesi",
          "D) Tosya Kalesi"
        ],
        correctAnswer: "A) Kastamonu Kalesi"
      },
      {
        questionText: "Kastamonu'nun en ünlü yemeği hangisidir?",
        options: [
          "A) Etli Ekmek",
          "B) Banduma",
          "C) Pastırma",
          "D) Cızlak"
        ],
        correctAnswer: "B) Banduma"
      },
      {
        questionText: "Kastamonu'nun en büyük ilçesi hangisidir?",
        options: [
          "A) Tosya",
          "B) Taşköprü",
          "C) Cide",
          "D) İnebolu"
        ],
        correctAnswer: "A) Tosya"
      }
    ]
  },
  {
    cityName: "Kütahya",
    questions: [
      {
        questionText: "Kütahya'nın en ünlü porseleni nedir?",
        options: [
          "A) Kütahya Çinisi",
          "B) İznik Çinisi",
          "C) Çanakkale Seramiği",
          "D) Avanos Seramiği"
        ],
        correctAnswer: "A) Kütahya Çinisi"
      },
      {
        questionText: "Kütahya'nın en büyük ilçesi hangisidir?",
        options: [
          "A) Tavşanlı",
          "B) Simav",
          "C) Gediz",
          "D) Emet"
        ],
        correctAnswer: "A) Tavşanlı"
      },
      {
        questionText: "Kütahya'nın en ünlü kalesi hangisidir?",
        options: [
          "A) Kütahya Kalesi",
          "B) Simav Kalesi",
          "C) Gediz Kalesi",
          "D) Emet Kalesi"
        ],
        correctAnswer: "A) Kütahya Kalesi"
      }
    ]
  },
  {
    cityName: "Muş",
    questions: [
      {
        questionText: "Muş'un en ünlü ovası hangisidir?",
        options: [
          "A) Muş Ovası",
          "B) Malazgirt Ovası",
          "C) Bulanık Ovası",
          "D) Patnos Ovası"
        ],
        correctAnswer: "A) Muş Ovası"
      },
      {
        questionText: "Muş'un en ünlü yemeği hangisidir?",
        options: [
          "A) Herse",
          "B) Cavbelek",
          "C) Muş Böreği",
          "D) Kenger"
        ],
        correctAnswer: "A) Herse"
      },
      {
        questionText: "Muş'un en büyük ilçesi hangisidir?",
        options: [
          "A) Bulanık",
          "B) Malazgirt",
          "C) Varto",
          "D) Hasköy"
        ],
        correctAnswer: "A) Bulanık"
      }
    ]
  },
  {
    cityName: "Rize",
    questions: [
      {
        questionText: "Rize'nin en ünlü ürünü hangisidir?",
        options: [
          "A) Çay",
          "B) Fındık",
          "C) Mısır",
          "D) Bal"
        ],
        correctAnswer: "A) Çay"
      },
      {
        questionText: "Rize'nin en ünlü yaylası hangisidir?",
        options: [
          "A) Ayder Yaylası",
          "B) Pokut Yaylası",
          "C) Elevit Yaylası",
          "D) Gito Yaylası"
        ],
        correctAnswer: "A) Ayder Yaylası"
      },
      {
        questionText: "Rize'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Ardeşen",
          "B) Pazar",
          "C) Çayeli",
          "D) Fındıklı"
        ],
        correctAnswer: "A) Ardeşen"
      }
    ]
  },
  {
    cityName: "Yozgat",
    questions: [
      {
        questionText: "Yozgat'ın en ünlü milli parkı hangisidir?",
        options: [
          "A) Yozgat Çamlığı Milli Parkı",
          "B) Sarıkaya Kaplıcaları",
          "C) Bozok Yaylası",
          "D) Sorgun Ormanları"
        ],
        correctAnswer: "A) Yozgat Çamlığı Milli Parkı"
      },
      {
        questionText: "Yozgat'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Sorgun",
          "B) Boğazlıyan",
          "C) Akdağmadeni",
          "D) Yerköy"
        ],
        correctAnswer: "A) Sorgun"
      },
      {
        questionText: "Yozgat'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Arabaşı Çorbası",
          "B) Testi Kebabı",
          "C) Madımak",
          "D) Tandır Böreği"
        ],
        correctAnswer: "A) Arabaşı Çorbası"
      }
    ]
  },
  {
    cityName: "Giresun",
    questions: [
      {
        questionText: "Giresun'un en ünlü kalesi hangisidir?",
        options: [
          "A) Giresun Kalesi",
          "B) Tirebolu Kalesi",
          "C) Espiye Kalesi",
          "D) Bulancak Kalesi"
        ],
        correctAnswer: "A) Giresun Kalesi"
      },
      {
        questionText: "Giresun'un en ünlü adası hangisidir?",
        options: [
          "A) Giresun Adası",
          "B) Ordu Adası",
          "C) Sinop Adası",
          "D) Trabzon Adası"
        ],
        correctAnswer: "A) Giresun Adası"
      },
      {
        questionText: "Giresun'un en büyük ilçesi hangisidir?",
        options: [
          "A) Bulancak",
          "B) Tirebolu",
          "C) Espiye",
          "D) Görele"
        ],
        correctAnswer: "A) Bulancak"
      }
    ]
  },
  {
    cityName: "Ağrı",
    questions: [
      {
        questionText: "Ağrı'nın simgesi olan dağ hangisidir?",
        options: [
          "A) Ağrı Dağı",
          "B) Süphan Dağı",
          "C) Nemrut Dağı",
          "D) Ararat Dağı"
        ],
        correctAnswer: "A) Ağrı Dağı"
      },
      {
        questionText: "Ağrı'nın en ünlü yemeği hangisidir?",
        options: [
          "A) Abdigör Köftesi",
          "B) Ağrı Tava",
          "C) Keşkek",
          "D) Haşıl"
        ],
        correctAnswer: "A) Abdigör Köftesi"
      },
      {
        questionText: "Ağrı'nın en büyük ilçesi hangisidir?",
        options: [
          "A) Doğubayazıt",
          "B) Patnos",
          "C) Diyadin",
          "D) Eleşkirt"
        ],
        correctAnswer: "A) Doğubayazıt"
      }
    ]
  },
  {
    cityName: "Batman",
    questions: [
      {
        questionText: "Batman'ın simgesi olan tarihi yapı hangisidir?",
        options: [
          "A) Hasankeyf",
          "B) Malabadi Köprüsü",
          "C) Zeynel Bey Türbesi",
          "D) Batman Kalesi"
        ],
        correctAnswer: "A) Hasankeyf"
      },
      {
        questionText: "Batman'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Kaburga Dolması",
          "B) Batman Tava",
          "C) İçli Köfte",
          "D) Perde Pilavı"
        ],
        correctAnswer: "A) Kaburga Dolması"
      },
      {
        questionText: "Batman'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Kozluk",
          "B) Sason",
          "C) Hasankeyf",
          "D) Gercüş"
        ],
        correctAnswer: "A) Kozluk"
      }
    ]
  },
  {
    cityName: "Bolu",
    questions: [
      {
        questionText: "Bolu'nun en ünlü yemeği hangisidir?",
        options: [
          "A) Mengen Pilavı",
          "B) Bolu Kebabı",
          "C) Paşa Pilavı",
          "D) Bolu Mantısı"
        ],
        correctAnswer: "A) Mengen Pilavı"
      },
      {
        questionText: "Bolu'nun simgesi olan dağ hangisidir?",
        options: [
          "A) Köroğlu Dağları",
          "B) Bolu Dağı",
          "C) Aladağlar",
          "D) Ilgaz Dağları"
        ],
        correctAnswer: "A) Köroğlu Dağları"
      },
      {
        questionText: "Bolu'nun en büyük ilçesi hangisidir?",
        options: [
          "A) Gerede",
          "B) Mengen",
          "C) Mudurnu",
          "D) Yeniçağa"
        ],
        correctAnswer: "A) Gerede"
      }
    ]
  },
  {
    cityName: "Denizli",
    questions: [
      {
        questionText: "Denizli'nin simgesi olan antik kent hangisidir?",
        options: [
          "A) Hierapolis",
          "B) Laodikeia",
          "C) Tripolis",
          "D) Colossae"
        ],
        correctAnswer: "A) Hierapolis"
      },
      {
        questionText: "Denizli'nin en ünlü yemeği hangisidir?",
        options: [
          "A) Denizli Kebabı",
          "B) Çaput Aşı",
          "C) Keşkek",
          "D) Arabaşı"
        ],
        correctAnswer: "A) Denizli Kebabı"
      },
      {
        questionText: "Denizli'nin en büyük ilçesi hangisidir?",
        options: [
          "A) Tavas",
          "B) Acıpayam",
          "C) Çal",
          "D) Buldan"
        ],
        correctAnswer: "A) Tavas"
      }
    ]
  },
  {
    cityName: "Diyarbakır",
    questions: [
      {
        questionText: "Diyarbakır'ın simgesi olan surlar hangi döneme aittir?",
        options: [
          "A) Roma Dönemi",
          "B) Bizans Dönemi",
          "C) Selçuklu Dönemi",
          "D) Osmanlı Dönemi"
        ],
        correctAnswer: "A) Roma Dönemi"
      },
      {
        questionText: "Diyarbakır'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Kaburga Dolması",
          "B) Meftune",
          "C) İçli Köfte",
          "D) Nuriye Tatlısı"
        ],
        correctAnswer: "A) Kaburga Dolması"
      },
      {
        questionText: "Diyarbakır'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Bismil",
          "B) Silvan",
          "C) Ergani",
          "D) Çınar"
        ],
        correctAnswer: "A) Bismil"
      }
    ]
  },
  {
    cityName: "Isparta",
    questions: [
      {
        questionText: "Isparta'nın simgesi olan çiçek hangisidir?",
        options: [
          "A) Gül",
          "B) Lale",
          "C) Karanfil",
          "D) Sümbül"
        ],
        correctAnswer: "A) Gül"
      },
      {
        questionText: "Isparta'nın en ünlü gölü hangisidir?",
        options: [
          "A) Eğirdir Gölü",
          "B) Kovada Gölü",
          "C) Beyşehir Gölü",
          "D) Burdur Gölü"
        ],
        correctAnswer: "A) Eğirdir Gölü"
      },
      {
        questionText: "Isparta'nın en büyük ilçesi hangisidir?",
        options: [
          "A) Yalvaç",
          "B) Şarkikaraağaç",
          "C) Eğirdir",
          "D) Senirkent"
        ],
        correctAnswer: "A) Yalvaç"
      }
    ]
  },
  {
    cityName: "Kahramanmaraş",
    questions: [
      {
        questionText: "Kahramanmaraş'ın simgesi olan dondurma hangi markadır?",
        options: [
          "A) Maraş Dondurması",
          "B) Mado",
          "C) Yaşar Pastanesi",
          "D) Özlem Dondurma"
        ],
        correctAnswer: "A) Maraş Dondurması"
      },
      {
        questionText: "Kahramanmaraş'ın en ünlü kalesi hangisidir?",
        options: [
          "A) Maraş Kalesi",
          "B) Germanicia",
          "C) Andırın Kalesi",
          "D) Elbistan Kalesi"
        ],
        correctAnswer: "A) Maraş Kalesi"
      },
      {
        questionText: "Kahramanmaraş'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Elbistan",
          "B) Afşin",
          "C) Pazarcık",
          "D) Göksun"
        ],
        correctAnswer: "A) Elbistan"
      }
    ]
  },
  {
    cityName: "Sinop",
    questions: [
      {
        questionText: "Sinop'un simgesi olan kale hangisidir?",
        options: [
          "A) Sinop Kalesi",
          "B) Boyabat Kalesi",
          "C) Gerze Kalesi",
          "D) Ayancık Kalesi"
        ],
        correctAnswer: "A) Sinop Kalesi"
      },
      {
        questionText: "Sinop'un en ünlü yemeği hangisidir?",
        options: [
          "A) Nokul",
          "B) Sinop Mantısı",
          "C) Mısır Çorbası",
          "D) Hamsi Tava"
        ],
        correctAnswer: "A) Nokul"
      },
      {
        questionText: "Sinop'un en büyük ilçesi hangisidir?",
        options: [
          "A) Boyabat",
          "B) Gerze",
          "C) Ayancık",
          "D) Durağan"
        ],
        correctAnswer: "A) Boyabat"
      }
    ]
  },
  {
    cityName: "Sivas",
    questions: [
      {
        questionText: "Sivas'ın simgesi olan medrese hangisidir?",
        options: [
          "A) Gök Medrese",
          "B) Çifte Minareli Medrese",
          "C) Şifaiye Medresesi",
          "D) Buruciye Medresesi"
        ],
        correctAnswer: "A) Gök Medrese"
      },
      {
        questionText: "Sivas'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Sivas Köftesi",
          "B) Madımak",
          "C) Keşkek",
          "D) Sivas Tava"
        ],
        correctAnswer: "A) Sivas Köftesi"
      },
      {
        questionText: "Sivas'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Şarkışla",
          "B) Yıldızeli",
          "C) Zara",
          "D) Suşehri"
        ],
        correctAnswer: "A) Şarkışla"
      }
    ]
  },
  {
    cityName: "Şırnak",
    questions: [
      {
        questionText: "Şırnak'ın simgesi olan dağ hangisidir?",
        options: [
          "A) Cudi Dağı",
          "B) Gabar Dağı",
          "C) Namaz Dağı",
          "D) Tanin Dağı"
        ],
        correctAnswer: "A) Cudi Dağı"
      },
      {
        questionText: "Şırnak'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Şırnak Tava",
          "B) Kıris",
          "C) Perde Pilavı",
          "D) Kaburga Dolması"
        ],
        correctAnswer: "A) Şırnak Tava"
      },
      {
        questionText: "Şırnak'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Cizre",
          "B) Silopi",
          "C) İdil",
          "D) Uludere"
        ],
        correctAnswer: "A) Cizre"
      }
    ]
  },
  {
    cityName: "Zonguldak",
    questions: [
      {
        questionText: "Zonguldak'ın simgesi olan maden hangisidir?",
        options: [
          "A) Taş Kömürü",
          "B) Demir",
          "C) Bakır",
          "D) Krom"
        ],
        correctAnswer: "A) Taş Kömürü"
      },
      {
        questionText: "Zonguldak'ın en ünlü yemeği hangisidir?",
        options: [
          "A) Uğmaç Çorbası",
          "B) Malak",
          "C) Cırık",
          "D) Zonguldak Tava"
        ],
        correctAnswer: "A) Uğmaç Çorbası"
      },
      {
        questionText: "Zonguldak'ın en büyük ilçesi hangisidir?",
        options: [
          "A) Ereğli",
          "B) Devrek",
          "C) Çaycuma",
          "D) Alaplı"
        ],
        correctAnswer: "A) Ereğli"
      }
    ]
  }
];
