import { NavLink } from "react-router-dom";

export default function Navigation() {
  const items = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/events", label: "Etkinlikler" },
    { to: "/admin", label: "Yönetim" },
    { to: "/login", label: "Giriş" },
  ];

  return (
    <nav className="menu">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) => (isActive ? "aktif" : "")}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}