
kampus-etkinlik-ntawv0qp3-irem20.vercel.app

# Kampüs Etkinlikleri — Sprint 4

Bu proje, Kampüs Etkinlikleri platformunun Vite, React ve TypeScript mimarisine aktarılmış sürümüdür.

## Dosya Açıklamaları

- **`package.json`**: Proje adı, komutlar (`dev`, `build`, `preview`) ve bağımlılık listesi.
- **`package-lock.json`**: Yüklenen npm paketlerinin tam sürümleri.
- **`node_modules/`**: İndirilen paketlerin bulunduğu klasör (GitHub'a gitmez).
- **`tsconfig*.json`**: TypeScript yapılandırma ve tip denetim ayarları.
- **`vite.config.ts`**: Vite ve React eklentisi ayarları.
- **`index.html`**: Uygulamanın tek HTML dosyası (içinde `#root` div bulunur).
- **`src/main.tsx`**: React'i başlatan ve `App` bileşenini root alanına çizen giriş dosyası.
- **`src/App.tsx`**: 5 sayfanın görünümünü, sayfa geçişlerini ve arama/filtreleme durumlarını (state) yöneten ana bileşen.
- **`src/App.css`**: Uygulamanın tüm stillerini ve renk düzenini içeren CSS dosyası.
- **`src/index.css`**: Tüm sayfaya uygulanan genel sıfırlama stili.
- **`src/types/campus-event.ts`**: Etkinlik ve kategori veri tiplerini tanımlayan dosya.
- **`src/data/events.ts`**: 6 adet tipli etkinlik kaydını içeren veri dosyası.
- **`src/utils/filter-events.ts`**: Arama, kategori filtreleme ve id ile etkinlik bulma saf fonksiyonları.
- **`public/`**: Afiş görselleri ve statik dosyaların yer aldığı klasör.

## Kurulum ve Çalıştırma

bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
# Üretim derlemesi al
npm run build 

## Geliştirici
İrem Irmak Korkmaz · 2516501815
