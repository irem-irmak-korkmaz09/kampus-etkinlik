import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { CampusEvent } from "./types/campus-event";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

type PageName = "home" | "events" | "detail" | "add" | "update";

function formatTarih(dateStr: string) {
  if (!dateStr) return "";
  const [gun, ay, yil] = dateStr.split("-");
  const tarih = new Date(Number(yil), Number(ay) - 1, Number(gun));
  return tarih.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectedEvent = selectedId ? findEventById(events, selectedId) : undefined;

  useEffect(() => {
    if (page === "detail" && selectedEvent) {
      document.title = `Kampüs Etkinlikleri - ${selectedEvent.title}`;
    } else {
      document.title = "Kampüs Etkinlikleri";
    }
  }, [page, selectedEvent]);

  function go(nextPage: PageName, id: string | null = null) {
    setPage(nextPage);
    setSelectedId(id);
  }

  const upcomingEvents = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  const filteredEvents = filterByCategory(searchEvents(events, searchText), selectedCategory);

  function renderCard(event: CampusEvent) {
    return (
      <article className="kart" key={event.id}>
        <h3>{event.title}</h3>
        <p className="kategori-etiket">{event.category}</p>
        <p>Tarih: {formatTarih(event.date)}, {event.time}</p>
        <p>Yer: {event.location}</p>
        {event.capacity && <p>Kontenjan: {event.capacity} kişi</p>}
        <p>{event.description}</p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            go("detail", event.id);
          }}
        >
          Detayları gör →
        </a>
      </article>
    );
  }

  return (
    <>
      <header>
        <h1>Kampüs Etkinlikleri</h1>
        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }}>Ana Sayfa</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go("events"); }}>Etkinlikler</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go("add"); }}>Ekle</a>
        </nav>
      </header>

      <main>
        {page === "home" && (
          <section>
            <p>Kampüsteki seminer, atölye ve sosyal etkinlikleri tek yerden takip et.</p>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <div className="kart-alani">{upcomingEvents.map(renderCard)}</div>
          </section>
        )}

        {page === "events" && (
          <section>
            <h2>Tüm Etkinlikler</h2>
            <form className="filtre" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="arama">Etkinlik ara</label>
                <input
                  type="search"
                  id="arama"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Örn. atölye, kariyer..."
                />
              </div>
              <div>
                <label htmlFor="kategori-filtre">Kategori</label>
                <select
                  id="kategori-filtre"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Tümü</option>
                  <option value="Seminer">Seminer</option>
                  <option value="Atölye">Atölye</option>
                  <option value="Söyleşi">Söyleşi</option>
                  <option value="Sosyal">Sosyal</option>
                </select>
              </div>
            </form>

            <p id="sonuc">{filteredEvents.length} etkinlik listeleniyor.</p>
            <div className="kart-alani">{filteredEvents.map(renderCard)}</div>
          </section>
        )}

        {page === "detail" && (
          selectedEvent ? (
            <article>
              <div className="detay-govde">
                {selectedEvent.image && (
                  <figure>
                    <img src={selectedEvent.image} alt={`${selectedEvent.title} afişi`} />
                    <figcaption>{selectedEvent.title} afişi</figcaption>
                  </figure>
                )}
                <dl>
                  <dt>Tarih</dt>
                  <dd>{formatTarih(selectedEvent.date)}, {selectedEvent.time}</dd>
                  <dt>Yer</dt>
                  <dd>{selectedEvent.location}</dd>
                  <dt>Kategori</dt>
                  <dd>{selectedEvent.category}</dd>
                  <dt>Kontenjan</dt>
                  <dd>{selectedEvent.capacity} kişi</dd>
                </dl>
              </div>
              <h2>Açıklama</h2>
              <p>{selectedEvent.description}</p>
              <button className="buton" onClick={() => go("events")}>← Listeye dön</button>
              <button className="buton" onClick={() => go("update", selectedEvent.id)}>Bu etkinliği güncelle</button>
            </article>
          ) : (
            <div className="hata-kutusu">
              <p>Etkinlik bulunamadı.</p>
              <button className="buton" onClick={() => go("events")}>Listeye dön</button>
            </div>
          )
        )}

        {(page === "add" || page === "update") && (
          <section>
            <h1>{page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}</h1>
            <p className="aciklama-metni">Bu sprintte form sadece görünüm; kayıt yapılmaz.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-grup">
                <label htmlFor="title">Etkinlik Adı *</label>
                <input id="title" type="text" maxLength={80} defaultValue={page === "update" ? selectedEvent?.title : ""} />
              </div>
              <div className="form-grup">
                <label htmlFor="category">Kategori *</label>
                <select id="category" defaultValue={page === "update" ? selectedEvent?.category : ""}>
                  <option value="">Seçiniz</option>
                  <option value="Seminer">Seminer</option>
                  <option value="Atölye">Atölye</option>
                  <option value="Söyleşi">Söyleşi</option>
                  <option value="Sosyal">Sosyal</option>
                </select>
              </div>
              <div className="form-grup">
                <label htmlFor="date">Tarih *</label>
                <input id="date" type="date" defaultValue={page === "update" ? selectedEvent?.date : ""} />
              </div>
              <div className="form-grup">
                <label htmlFor="time">Saat *</label>
                <input id="time" type="time" defaultValue={page === "update" ? selectedEvent?.time : ""} />
              </div>
              <div className="form-grup">
                <label htmlFor="location">Yer *</label>
                <input id="location" type="text" defaultValue={page === "update" ? selectedEvent?.location : ""} />
              </div>
              <div className="form-grup">
                <label htmlFor="capacity">Kontenjan</label>
                <input id="capacity" type="number" defaultValue={page === "update" ? selectedEvent?.capacity : ""} />
              </div>
              <div className="form-grup">
                <label htmlFor="description">Açıklama</label>
                <textarea id="description" rows={4} defaultValue={page === "update" ? selectedEvent?.description : ""}></textarea>
              </div>
              <button type="submit" className="buton-kaydet">
                {page === "add" ? "Kaydet" : "Güncelle"}
              </button>
            </form>
          </section>
        )}
      </main>

      <footer>
        <p>İrem Irmak Korkmaz · 2516501815 · 2026</p>
      </footer>
    </>
  );
}