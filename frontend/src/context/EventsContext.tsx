import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { events as initialEvents } from "../data/events";
import type {
  CampusEvent,
  Category,
  EventFormData,
} from "../types/campus-event";

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

// Form verisini (hep metin) CampusEvent'e çevirir
function toEvent(
  id: string,
  data: EventFormData,
  image?: string
): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    category: data.category as Category,
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    capacity: Number(data.capacity),
    description: data.description.trim(),
    image,
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  // Ekle: [...dizi, yeni]
  function addEvent(data: EventFormData) {
    setEvents((prev) => [...prev, toEvent(`event-${Date.now()}`, data)]);
  }

  // Güncelle: map ile eşleşeni değiştir (afişi koru)
  function updateEvent(id: string, data: EventFormData) {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? toEvent(id, data, e.image) : e))
    );
  }

  // Sil: filter ile eşleşmeyenler kalır
  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider
      value={{ events, addEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEvents() {
  const value = useContext(EventsContext);
  if (value === null) throw new Error("Provider yok");
  return value;
}