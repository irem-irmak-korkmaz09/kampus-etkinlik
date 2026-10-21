import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { PageName } from "./types/page";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

export default function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const selectedEvent = selectedId ? findEventById(events, selectedId) : undefined;

  // Header için dinamik başlık fonksiyonu
  function getHeaderTitle(): string {
    if (page === "detail" && selectedEvent) {
      return selectedEvent.title;
    }
    if (page === "events") {
      return "Tüm Etkinlikler";
    }
    if (page === "add") {
      return "Etkinlik Ekle";
    }
    if (page === "update") {
      return "Etkinlik Güncelle";
    }
    return "Kampüs Etkinlikleri";
  }

  // Yönlendirme fonksiyonu
  function go(nextPage: PageName, id: string | null = null) {
    setPage(nextPage);
    setSelectedId(id);
  }

  // Sekme (Tab) başlığını senkronize tutma (ESLint uyarısız hal)
  useEffect(() => {
    if (page === "detail" && selectedEvent) {
      document.title = `Kampüs Etkinlikleri - ${selectedEvent.title}`;
    } else if (page === "events") {
      document.title = "Kampüs Etkinlikleri - Tüm Etkinlikler";
    } else if (page === "add") {
      document.title = "Kampüs Etkinlikleri - Etkinlik Ekle";
    } else if (page === "update") {
      document.title = "Kampüs Etkinlikleri - Etkinlik Güncelle";
    } else {
      document.title = "Kampüs Etkinlikleri";
    }
  }, [page, selectedEvent]);

  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  const filtered = filterByCategory(searchEvents(events, searchText), category);
  const categories = [...new Set(events.map((e) => e.category))];

  return (
    <>
      <Header
        title={getHeaderTitle()}
        text={page === "home" ? "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin." : undefined}
        current={page}
        onNavigate={go}
      />

      <main>
        {page === "home" && (
          <section>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} />
          </section>
        )}

        {page === "events" && (
          <section>
            <h2>Tüm Etkinlikler</h2>
            <EventFilter
              searchText={searchText}
              category={category}
              categories={categories}
              onSearchChange={setSearchText}
              onCategoryChange={setCategory}
            />
            <p className="sonuc">{filtered.length} etkinlik listeleniyor.</p>
            <EventList
              events={filtered}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Aramanıza uygun etkinlik bulunamadı."
            />
          </section>
        )}

        {page === "detail" && selectedEvent && (
          <EventDetail
            event={selectedEvent}
            onBack={() => go("events")}
            onEdit={(id) => go("update", id)}
          />
        )}

        {(page === "add" || page === "update") && (
          <section>
            <h1>{page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}</h1>
            <EventForm
              event={page === "update" ? selectedEvent : undefined}
              onSubmit={() => window.scrollTo(0, 0)}
            />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}