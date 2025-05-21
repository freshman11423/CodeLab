# 🚀 Sprint 1 Raporu

## 🔎 Sprint Hedefi
Bu sprintin amacı, uygulamanın temel iskeletini oluşturmak ve ana işlevleri oturtmaktı.  
Belirlenen hedefler:
- Kullanıcı kayıt/giriş altyapısı oluşturmak
- Türkiye haritasını 81 il ile göstermek
- Sayfalar arası temel yönlendirme ve butonları hazırlamak

---

## ✅ Gerçekleşenler
- **App.tsx**: Ana dosya olarak yapılandırıldı. Alt sayfalar (index, register, profile) bu ana dosya üzerinden yönetiliyor.
- **Ana Sayfa**:  
  - İlk açılışta ana ekran karşımıza çıkıyor.  
  - **Haritaya Git** butonuyla kullanıcı harita ekranına yönleniyor.
- **Harita Ekranı (Explore)**:  
  - 81 ili içeren Türkiye SVG haritası entegre edildi.  
  - 3 buton eklendi:  
    - **Profil** → profile.tsx  
    - **Giriş Yap** → index.tsx  
    - **Kayıt Ol** → register.tsx
- **Register Sayfası**:  
  - Oyuncu adı girişi  
  - Karakter seçimi (ikonlar)  
  - Devam Et butonu hazırlandı.

---

## 💪 Takım Katkıları
- **Scrum Master (Aybüke TÜrk): Ana dosya bağlantıları, register.tsx tasarımı,Layout ve router kontrolleri,genel yapının kontrolü.
- **Takım Üyeleri**:  
  - Meral Kölemen: Harita entegrasyonu  
  - Zeynep Değer:81 il için soru veri tabanı hazırlığı
  - Emine Gülmez :index.tsx (anasayfa) dosya yapısı oluşturma

---

## 🚧 Karşılaşılan Sorunlar
- Harita oluşturma sürecinde teknik sorunlar yaşandı:
  - SVG entegrasyonu
  - Dosya yapısında React Native'de web uyumu için ana dosyaya bağlama ihtiyacı oldu
- GitHub senkronizasyonunda gecikmeler yaşandı.

---

## 🔁 Devredenler
- **Profile & Index Sayfaları**: Şu an için boş durumda, sonraki sprintte işlevsel hale getirilecek.
- **Harita üzerine şehir bazlı etkileşimler**: Sprint 2 için planlandı.

