import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart">
      {event.image && (
        <img
          src={event.image}
          alt={`${event.title} afişi`}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "0.5rem", objectFit: "cover" }}
        />
      )}
      <h3>{event.title}</h3>
      <p className="kategori-etiket">{event.category}</p>
      <p>Tarih: {formatDate(event.date)}, {event.time}</p>
      <p>Yer: {event.location}</p>
      {event.capacity && <p>Kontenjan: {event.capacity} kişi</p>}
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`}>
        Detayları gör →
      </Link>
    </article>
  );
}