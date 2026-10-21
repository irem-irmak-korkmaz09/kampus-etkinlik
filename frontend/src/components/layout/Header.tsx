import Navigation from "./Navigation";
import type { PageName } from "../../types/page";

interface HeaderProps {
  title: string;
  text?: string;
  current: PageName;
  onNavigate: (page: PageName, id?: string | null) => void;
}

export default function Header({ title, text, current, onNavigate }: HeaderProps) {
  return (
    <header className="site-baslik">
      <div className="header-icerik">
        <h1>{title}</h1>
        {text && <p className="header-alt-metin">{text}</p>}
        <Navigation current={current} onNavigate={onNavigate} />
      </div>
    </header>
  );
}