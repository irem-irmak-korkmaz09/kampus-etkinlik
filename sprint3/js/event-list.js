import { events } from "./data.js";

function formatTarih(dateStr) {
  const [gun, ay, yil] = dateStr.split("-");
  const tarih = new Date(yil, ay - 1, gun);
  return tarih.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function createCard(event) {
  return `
    <article class="kart">
      <h3>${event.title}</h3>
      <p class="kategori-etiket">${event.category}</p>
      <p>Tarih: ${formatTarih(event.date)}, ${event.time}</p>
      <p>Yer: ${event.location}</p>
      <p>Kontenjan: ${event.capacity} kişi</p>
      <p>${event.description}</p>
      <a href="etkinlik-detay.html?id=${event.id}">Detayları gör →</a>
    </article>
  `;
}

const list = document.querySelector("#etkinlik-listesi");

function render(dizi) {
  if (dizi.length === 0) {
    list.innerHTML = `<p class="bulunamadi">Aramanıza uygun etkinlik bulunamadı.</p>`;
  } else {
    list.innerHTML = dizi.map(createCard).join("");
  }
}

if (list.dataset.limit) {
  const yaklasan = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, Number(list.dataset.limit));
  render(yaklasan);
} else {
  render(events);
}

const aramaInput = document.querySelector("#arama");
const kategoriSelect = document.querySelector("#kategori-filtre");
const sonucSatiri = document.querySelector("#sonuc");
const filtreFormu = document.querySelector("#filtre-formu");

if (filtreFormu) {
  filtreFormu.addEventListener("submit", (e) => e.preventDefault());
}

if (aramaInput && kategoriSelect) {
  const kategoriler = [...new Set(events.map((e) => e.category))];
  kategoriler.forEach((kat) => {
    const option = document.createElement("option");
    option.value = kat;
    option.textContent = kat;
    kategoriSelect.appendChild(option);
  });

  function filtrele() {
    const aranan = aramaInput.value.toLocaleLowerCase("tr-TR");
    const secilenKategori = kategoriSelect.value;

    const sonuc = events.filter((e) => {
      const metinUyuyor = e.title.toLocaleLowerCase("tr-TR").includes(aranan);
      const kategoriUyuyor = secilenKategori === "" || e.category === secilenKategori;
      return metinUyuyor && kategoriUyuyor;
    });

    render(sonuc);
    sonucSatiri.textContent = `${sonuc.length} etkinlik listeleniyor.`;
  }

  aramaInput.addEventListener("input", filtrele);
  kategoriSelect.addEventListener("change", filtrele);
  sonucSatiri.textContent = `${events.length} etkinlik listeleniyor.`;
}