https://kampus-etkinlik

# Kampüs Etkinlikleri

Kampüsteki seminer, atölye ve sosyal etkinlikleri tek bir yerden takip etmeyi, yeni etkinlik eklemeyi ve mevcut etkinlikleri güncellemeyi sağlayan bir web uygulaması.

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa: tarihi en yakın 2 etkinlik |
| `etkinlikler.html` | Tüm etkinlikler, arama ve kategori filtresi |
| `etkinlik-detay.html` | `?id=` parametresiyle açılan etkinlik detayı: afiş, künye, açıklama |
| `etkinlik-ekle.html` | Yeni etkinlik eklemek için form |
| `etkinlik-guncelle.html` | Detay sayfasındaki "Bu etkinliği güncelle" butonuyla açılan, alanları dolu gelen form |

## Sprint Geçmişi

### Sprint 1 — HTML İskeleti
- Semantic HTML etiketleri (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Sayfalar arası bağlantılar, etkinlik listesi, formlar
- CSS ve JavaScript kullanılmadı

### Sprint 2 — CSS ve Responsive Tasarım
- `css/2516501815.css` dosyası eklendi, öğrenci numarasına göre renk ve font ayarlandı
- Tablo yapısı kaldırıldı, etkinlikler `section` içinde `article` kartlara dönüştürüldü
- Mobile-first yaklaşım: telefonda tek sütun, geniş ekranda çok sütunlu kart görünümü

### Sprint 3 — JavaScript ve DOM
- Tüm etkinlik verisi `js/data.js` içinde tek bir dizide tutuluyor (6 etkinlik)
- Kartlar artık elle yazılmıyor, `event-list.js` veriden üretiyor
- `etkinlikler.html`'de arama kutusu ve kategori filtresi birlikte çalışıyor
- `etkinlik-detay.html`, adres çubuğundaki `?id=` değerine göre doğru etkinliği `event-detail.js` ile gösteriyor; geçersiz id'de hata kutusu çıkıyor
- `etkinlik-ekle.html` ve `etkinlik-guncelle.html`, aynı `event-form.js` modülünü kullanıyor; form gönderiminde tarayıcı yenilenmeden kendi hata/başarı mesajını gösteriyor
- Nav'dan "Güncelle" linki kaldırıldı; güncelleme sayfasına yalnızca detay sayfasındaki "Bu etkinliği güncelle" butonuyla gidiliyor
- `localStorage`, framework veya jQuery kullanılmadı; veri bu sprintte kalıcı kaydedilmiyor

## Geliştirici

İrem Irmak Korkmaz · 2516501815