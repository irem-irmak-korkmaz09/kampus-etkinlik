import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import AdminPage from "./pages/AdminPage";
import AddEventPage from "./pages/AddEventPage";
import EditEventPage from "./pages/EditEventPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const location = useLocation();

  // Sayfa adresine (pathname) göre Header Başlığını Belirleme
  function getHeaderTitle(path: string): string {
    if (path === "/") return "Kampüs Etkinlikleri";
    if (path === "/events") return "Tüm Etkinlikler";
    if (path.startsWith("/events/")) return "Etkinlik Detayı";
    if (path === "/admin") return "Etkinlik Yönetimi";
    if (path === "/admin/new") return "Etkinlik Ekle";
    if (path.includes("/edit")) return "Etkinlik Güncelle";
    if (path === "/login") return "Giriş Yap";
    if (path === "/register") return "Kayıt Ol";
    if (path === "/forgot-password") return "Şifremi Unuttum";

    return "Sayfa Bulunamadı";
  }

  // Sayfa adresine göre Header Alt Açıklamasını Belirleme
  function getHeaderText(path: string): string | undefined {
    if (path === "/") {
      return "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.";
    }
    if (path === "/events") {
      return "Fakültemizde düzenlenen tüm etkinliklerin listesi.";
    }
    if (path === "/admin") {
      return "Etkinlik ekleme, güncelleme ve silme paneli.";
    }
    return undefined;
  }

  // Tarayıcı Sekme Başlığını (document.title) Sayfaya Göre Senkronize Etme
  useEffect(() => {
    const title = getHeaderTitle(location.pathname);
    if (location.pathname === "/") {
      document.title = "Kampüs Etkinlikleri";
    } else {
      document.title = `Kampüs Etkinlikleri - ${title}`;
    }
  }, [location.pathname]);

  return (
    <>
      <Header
        title={getHeaderTitle(location.pathname)}
        text={getHeaderText(location.pathname)}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/new" element={<AddEventPage />} />
          <Route path="/admin/:id/edit" element={<EditEventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}