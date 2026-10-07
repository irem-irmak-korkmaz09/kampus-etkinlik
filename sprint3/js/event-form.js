import { events } from "./data.js";

function toInputDate(dateStr) {
  const [gun, ay, yil] = dateStr.split("-");
  return `${yil}-${ay}-${gun}`;
}

const form = document.querySelector("#etkinlik-formu");
const mesaj = document.querySelector("#form-mesaj");

if (form.dataset.mode === "guncelle") {
  const id = new URLSearchParams(location.search).get("id");
  const etkinlik = events.find((e) => e.id === id);

  if (etkinlik) {
    form.elements.ad.value = etkinlik.title;
    form.elements.kategori.value = etkinlik.category;
    form.elements.tarih.value = toInputDate(etkinlik.date);
    form.elements.saat.value = etkinlik.time;
    form.elements.yer.value = etkinlik.location;
    form.elements.kontenjan.value = etkinlik.capacity ?? "";
    form.elements.aciklama.value = etkinlik.description;
  } else {
    form.outerHTML = `
      <div class="hata-kutusu">
        <p>Güncellenecek etkinlik seçilmedi. Önce listeden bir etkinlik seçin, detay sayfasındaki "Bu etkinliği güncelle" butonunu kullanın.</p>
        <a href="etkinlikler.html" class="buton">Etkinliklere git</a>
      </div>
    `;
  }
}

const errorFields = ["ad", "kategori", "tarih", "saat", "yer", "kontenjan"];

function clearErrors() {
  errorFields.forEach((name) => {
    const span = document.querySelector(`#${name}-hata`);
    const alan = form.elements[name];
    if (span) span.textContent = "";
    if (alan) alan.removeAttribute("aria-invalid");
  });
}

function showError(name, message) {
  const span = document.querySelector(`#${name}-hata`);
  const alan = form.elements[name];
  if (span) span.textContent = message;
  if (alan) alan.setAttribute("aria-invalid", "true");
}

function validate(data) {
  const errors = {};
  if (data.title.length < 3) errors.ad = "Etkinlik adı en az 3 karakter olmalı.";
  if (!data.category) errors.kategori = "Bir kategori seçin.";
  if (!data.date) errors.tarih = "Tarih seçin.";
  if (!data.time) errors.saat = "Saat seçin.";
  if (!data.location) errors.yer = "Yer bilgisini yazın.";
  if (data.capacity !== null && (data.capacity < 1 || data.capacity > 1000)) {
    errors.kontenjan = "Kontenjan 1 ile 1000 arasında olmalı.";
  }
  return errors;
}

if (form.isConnected) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const data = {
      title: (fd.get("ad") || "").trim(),
      category: fd.get("kategori") || "",
      date: fd.get("tarih") || "",
      time: fd.get("saat") || "",
      location: (fd.get("yer") || "").trim(),
      capacity: fd.get("kontenjan") ? Number(fd.get("kontenjan")) : null,
      description: (fd.get("aciklama") || "").trim(),
    };

    clearErrors();
    const errors = validate(data);
    Object.keys(errors).forEach((name) => showError(name, errors[name]));

    if (Object.keys(errors).length > 0) {
      mesaj.innerHTML = `<p class="hata-mesaj">Formda hatalı alanlar var.</p>`;
      return;
    }

    const guncelleModu = form.dataset.mode === "guncelle";
    data.id = guncelleModu
      ? new URLSearchParams(location.search).get("id")
      : `event-${events.length + 1}`;

    mesaj.innerHTML = `
      <p class="basari-mesaj">Etkinlik ${guncelleModu ? "güncellendi" : "oluşturuldu"} (bu sprintte kaydedilmez):</p>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  });
}