# Kampüs Etkinlikleri - Express REST API (Sprint 7)
 Sunucu http://localhost:3000 adresinde çalışır.

 REST Sözleşmesi
 Method  Endpoint    Amaç                            Başarılı
 GET	/health	     Sunucu durumunu kontrol et	     200 OK
 GET	/events  	 Tüm etkinlikleri listele	     200 OK
 GET	/events/:id	 Tek etkinlik detayını getir     200 OK
 POST	/events	     Yeni etkinlik oluştur	         201 Created
 PATCH	/events/:id	 Etkinlik güncelle	             200 OK
 DELETE	/events/:id	 Etkinlik sil	                 204 No Content

 Tüm hata yanıtları şu formattadır:
 JSON
 {
  "error": {
    "message": "Hata açıklaması"
  }
}