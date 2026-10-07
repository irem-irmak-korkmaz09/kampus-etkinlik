# Kampüs Etkinlikleri

Kampüsteki seminer, atölye ve sosyal etkinlikleri tek bir yerden takip etmeyi, yeni etkinlik eklemeyi ve mevcut etkinlikleri güncellemeyi sağlayan bir web uygulaması.

## Canlı Adres

https://kampus-etkinlik-sprint3-git-main-irem20.vercel.app/

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa: uygulama tanıtımı, yaklaşan ve tüm etkinlikler (kart görünümü) |
| `etkinlik-detay.html` | Etkinliklerin afişi, tarih/yer/kategori/kontenjan bilgisi, ayrıntılı açıklama |
| `etkinlik-ekle.html` | Yeni etkinlik eklemek için form |
| `etkinlik-guncelle.html` | Mevcut bir etkinliği güncellemek için, alanları dolu gelen aynı form |

## Sprint Geçmişi

### Sprint 1 — HTML İskeleti
- Semantic HTML etiketleri (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Sayfalar arası bağlantılar
- Etkinlik listesi (tablo yapısı)
- Etkinlik ekleme ve güncelleme formları
- CSS ve JavaScript kullanılmadı

### Sprint 2 — CSS ve Responsive Tasarım
- `css/numaran.css` dosyası eklendi, öğrenci numarasına göre renk ve font ayarlandı
- Tablo yapısı kaldırıldı, etkinlikler `section` içinde `article` kartlara dönüştürüldü
- Mobile-first yaklaşım: telefonda tek sütun, geniş ekranda çok sütunlu kart görünümü
- Etkinlik detay sayfasında afiş ve künye bilgisi; telefonda alt alta, geniş ekranda yan yana
- Form alanlarına görünür `label` ve `required` doğrulama eklendi

 ## Geliştirici

İrem Irmak Korkmaz · 2516501815
