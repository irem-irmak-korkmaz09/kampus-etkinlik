import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import { searchEvents, filterByCategory } from "../utils/filter-events";
import EventFilter from "../components/events/EventFilter";
import EventList from "../components/events/EventList";

export default function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const categories = [...new Set(events.map((e) => e.category))];
  const filtered = filterByCategory(searchEvents(events, searchText), category);

  return (
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
      <EventList events={filtered} emptyText="Aramanıza uygun etkinlik bulunamadı." />
    </section>
  );
}