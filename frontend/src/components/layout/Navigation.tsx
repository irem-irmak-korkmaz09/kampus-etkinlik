import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName, id?: string | null) => void;
}

export default function Navigation({ current, onNavigate }: NavigationProps) {
  const items: { name: PageName; label: string }[] = [
    { name: "home", label: "Ana Sayfa" },
    { name: "events", label: "Etkinlikler" },
    { name: "add", label: "Ekle" },
  ];

  return (
    <nav className="menu">
      {items.map((item) => (
        <a
          key={item.name}
          href="#"
          className={current === item.name ? "aktif" : ""}
          aria-current={current === item.name ? "page" : undefined}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.name);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}