export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.includes("-") ? dateStr.split("-") : dateStr.split(".");
  if (parts.length !== 3) return dateStr;

  let yil: number, ay: number, gun: number;
  if (parts[0].length === 4) {
    [yil, ay, gun] = parts.map(Number);
  } else {
    [gun, ay, yil] = parts.map(Number);
  }

  const tarih = new Date(yil, ay - 1, gun);
  return tarih.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
