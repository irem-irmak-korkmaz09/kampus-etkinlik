import Navigation from "./Navigation";

interface HeaderProps {
  title?: string;
  text?: string;
}

export default function Header({ title = "Kampüs Etkinlikleri", text }: HeaderProps) {
  return (
    <header className="site-baslik">
      <div className="header-icerik">
        <h1>{title}</h1>
        {text && <p className="header-alt-metin">{text}</p>}
        <Navigation />
      </div>
    </header>
  );
}