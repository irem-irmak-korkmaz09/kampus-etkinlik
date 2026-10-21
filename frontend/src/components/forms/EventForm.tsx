import type { CampusEvent } from "../../types/campus-event";

interface EventFormProps {
  event?: CampusEvent;
  onSubmit: () => void;
}

export default function EventForm({ event, onSubmit }: EventFormProps) {
  return (
    <section>
      <p className="aciklama-metni">Bu sprintte form sadece görünüm; kayıt yapılmaz.</p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="form-grup">
          <label htmlFor="title">Etkinlik Adı *</label>
          <input id="title" type="text" maxLength={80} defaultValue={event?.title || ""} />
        </div>
        <div className="form-grup">
          <label htmlFor="category">Kategori *</label>
          <select id="category" defaultValue={event?.category || ""}>
            <option value="">Seçiniz</option>
            <option value="Seminer">Seminer</option>
            <option value="Atölye">Atölye</option>
            <option value="Söyleşi">Söyleşi</option>
            <option value="Sosyal">Sosyal</option>
          </select>
        </div>
        <div className="form-grup">
          <label htmlFor="date">Tarih *</label>
          <input id="date" type="date" defaultValue={event?.date || ""} />
        </div>
        <div className="form-grup">
          <label htmlFor="time">Saat *</label>
          <input id="time" type="time" defaultValue={event?.time || ""} />
        </div>
        <div className="form-grup">
          <label htmlFor="location">Yer *</label>
          <input id="location" type="text" defaultValue={event?.location || ""} />
        </div>
        <div className="form-grup">
          <label htmlFor="capacity">Kontenjan</label>
          <input id="capacity" type="number" defaultValue={event?.capacity || ""} />
        </div>
        <div className="form-grup">
          <label htmlFor="description">Açıklama</label>
          <textarea id="description" rows={4} defaultValue={event?.description || ""}></textarea>
        </div>
        <button type="submit" className="buton-kaydet">
          Kaydet
        </button>
      </form>
    </section>
  );
}
