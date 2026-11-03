import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

export default function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <section>
      <h2>Etkinlik Yönetimi</h2>
      <div style={{ marginBottom: "1rem" }}>
        <Link className="buton" to="/admin/new">
          + Yeni Etkinlik
        </Link>
      </div>

      <table className="tablo">
        <thead>
          <tr>
            <th>Etkinlik</th>
            <th>Tarih</th>
            <th>Kategori</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td data-baslik="Etkinlik">{event.title}</td>
              <td data-baslik="Tarih">{formatDate(event.date)}</td>
              <td data-baslik="Kategori">{event.category}</td>
              <td className="islemler" data-baslik="İşlemler">
                <Link className="buton" to={`/admin/${event.id}/edit`}>
                  Düzenle
                </Link>
                <button
                  type="button"
                  className="buton-sil"
                  onClick={() => handleDelete(event.id, event.title)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}