**1\. Ürün Vizyonu ve Kapsamının Netleştirilmesi**


A. Ürün Vizyonu:

"Kullanıcıların Türkiye’nin 81 ilini bilgi yarışmasıyla fethederek öğrenmesini sağlayan interaktif bir mobil uygulama."


B. Temel Özellikler (MVP - Minimum Viable Product):

✔ Kullanıcı giriş/kayıt
✔ Türkiye haritası üzerinden il seçimi
✔ İllere özel soru-cevap mekaniği
✔ Doğru cevapta şehrin fethedilmesi (renk değişimi)
✔ Skor takip sistemi

2\. Teknolojik Altyapı Kararları :

Frontend; kullanıcının gördüğü ve etkileşimde bulunduğu kısımdır. Örneğin:

Butonlar, haritalar, soru ekranları gibi her şey frontend’in işidir.

Bizim projemizde telefon uygulaması olacağı için React Native kullanacağız.


React Native (iOS & Android için cross-platform);  

??mobil uygulama yapma aracıdır.Facebook tarafından geliştirildi.JavaScript ile hem Android hem iOS uygulaması yazmayı sağlar.Tek bir kod yazarsın, iki işletim sisteminde de çalışır.Instagram, Facebook, Tesla gibi uygulamalar da React Native kullanıyor.

Nasıl Çalışır?

Klasik bir web sitesi yapmıyoruz, gerçek bir mobil uygulama yapıyoruz.

Kodlar JavaScript ile yazılır, ama telefon bunu native (doğal) bir uygulama gibi çalıştırır


React Navigation (Sayfalar Arası Geçiş)

Uygulamada menüler, soru ekranları, profil sayfası olacak.

Bunlar arasında geçiş yapmak için kullanılır.


Redux Toolkit (State Yönetimi)

State = Uygulamanın hafızası (Örneğin: "Hangi şehir seçildi?", "Skor kaç?")

Redux, bu bilgileri merkezde tutar ve her yerden ulaşılmasını sağlar.


Axios (API iletişimi);sunuculardan veri çekmek için kullanılır.

Backend (Sunucu Tarafı) Nedir?

Backend, uygulamanın görünmeyen kısmıdır. Örneğin:

Kullanıcı girişi yapınca şifreyi kontrol eden sistem.

Soruların veritabanından çekilmesi.

Skorların kaydedilmesi.

Kimlik Doğrulama: Firebase Auth

Veritabanı: Firebase Firestore (NoSQL) veya MongoDB

API: Node.js + Express.js

Firebase (Backend Servisleri)

Google’ın sunduğu hazır sistemler:

Firebase Auth → Kullanıcı giriş/kayıt işlemleri.

Firestore → Veritabanı (kullanıcı skorları, fethedilen şehirler).

Hosting → Uygulamayı yayınlama.(ilk etapta gerekli değil!)

Node.js + Express.js (Özel API Yazmak)

Kendi sunucumuzu yazmak istersek kullanırız.


Veritabanı (Data Saklama)

Firebase Firestore (NoSQL)

JSON formatında veri saklar.++MongoDB (Alternatif)


Harita Sistemleri

react-native-maps (Google Maps Entegrasyonu)

Telefonda Türkiye haritasını göstermek için.Firebase’e benzer, ancak daha esnek.

Diğer Araçlar:

Version Control: GitHub/GitLab

CI/CD: GitHub Actions (Otomatik deploy)

Proje Yönetimi: Trello/Jira (Scrum tahtası)

3\. Ürün Backlog'unun Oluşturulması (User Story'ler) :Scrum’da işler User Story’lere bölünür. Örnekler:


Kullanıcı Yönetimi:

"Kullanıcı olarak, email ve şifreyle kayıt olabilmeliyim."

"Kullanıcı olarak, giriş yaptığımda profil sayfamı görebilmeliyim."


Oyun Mekaniği:

"Kullanıcı olarak, haritadan bir il seçebilmeliyim."

"Kullanıcı olarak, seçtiğim il ile ilgili bir soru görmeliyim."

"Kullanıcı olarak, doğru cevap verdiğimde o il fethedilmeli ve haritada renk değişmeli."


Skor ve İlerleme:

"Kullanıcı olarak, fethedilen şehirlerimin listesini görebilmeliyim."

"Kullanıcı olarak, toplam skorumu görebilmeliyim."


4\. Tasarım ve Kullanıcı Arayüzü Planlaması :

Wireframe Çizimleri (Figma/Adobe XD)

- Ana Sayfa: Harita + Kullanıcı bilgileri
- Soru Ekranı: Soru metni + 4 şık
- Profil Sayfası: Fethedilen şehirler listesi

UI/UX Prensipleri:

- Renk Paleti: Türk bayrağı renkleri (kırmızı, beyaz)
- Harita Tasarımı: Fethedilen şehirler farklı renkte (yeşil)
- Animasyonlar: Fetih anında hafif bir parlama efekti

**Özet:**  

**Teknoloji Neden Seçildi?**

Amaç                                            Kullanılacak Teknoloji,                 Alternatifler

Mobil Uygulama Yazma                             React Native,                            Flutter

Kullanıcı Girişi                                 Firebase Auth,                        JWT + Node.js

Veritabanı                                       Firestore,                                MongoDB

Harita Görüntüleme                               react-native-maps,                        Leaflet

Tasarım                                          Figma,                                    Adobe XD


**Sonuç: Nasıl Çalışacak?**

1. Kullanıcı uygulamayı açar (React Native).
2. Giriş yapar (Firebase Auth).
3. Haritadan bir il seçer (react-native-maps).
4. Soru gelir (Firestore’dan çekilir).
5. Doğru cevap verirse şehir fethedilir (Redux state güncelleme).
6. Skor kaydedilir (Firestore’a yazılır).
