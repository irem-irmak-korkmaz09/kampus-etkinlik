import type { CampusEvent } from "../types/campus-event";

export const events: CampusEvent[] = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    date: "12-10-2026",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Kariyer Günleri 2026 kapsamında farklı sektörlerden önde gelen şirket temsilcileri öğrencilerimizle bir araya gelecektir.",
    capacity: 120,
    image: "afis.jpg"
  },
  {
    id: "event-2",
    title: "Robotik Atölyesi",
    category: "Atölye",
    date: "20-10-2026",
    time: "10:00",
    location: "Lab 2",
    description: "Robotik ve kodlama dünyasına ilk adımı atın! Bu atölyede uygulamalı projeler deneyimlenecek.",
    capacity: 40,
    image: "afis2.jpg"
  },
  {
    id: "event-3",
    title: "Siber Güvenlik Söyleşisi",
    category: "Söyleşi",
    date: "27-10-2026",
    time: "13:00",
    location: "B Blok Amfi 1",
    description: "Sektörden bir uzmanla güvenlik kariyeri üzerine sohbet.",
    capacity: 50,
    image: "event-3.jpg"
  },
  {
    id: "event-4",
    title: "Web Tasarım Atölyesi",
    category: "Atölye",
    date: "03-11-2026",
    time: "15:00",
    location: "Bilgisayar Laboratuvarı 1",
    description: "HTML ve CSS ile ilk kişisel sayfanı yap.",
    capacity: 30,
    image: "event-4.jpg"  
  },
  {
    id: "event-5",
    title: "Girişimcilik Söyleşisi",
    category: "Söyleşi",
    date: "10-11-2026",
    time: "13:30",
    location: "B Blok Amfi 2",
    description: "Genç girişimcilerle tanışma ve soru-cevap.",
    capacity: 80,
    image: "event-5.jpg"
  },
  
  {
    id: "event-6",
    title: "Yapay Zeka Semineri",
    category: "Seminer",
    date: "17-11-2026",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Yapay zekanın güncel kullanım alanlarına genel bakış.",
    capacity: 100,
    image: "event-6.jpg"
  }
];