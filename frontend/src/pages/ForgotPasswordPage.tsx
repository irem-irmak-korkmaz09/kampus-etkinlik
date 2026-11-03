import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const isInvalid = !email.includes("@");
    setError(isInvalid ? "Geçerli bir e-posta girin." : "");
    setSent(!isInvalid);
  }

  return (
    <section>
      <h2>Şifremi Unuttum</h2>
      <p className="aciklama-metni">
        Hesabınıza bağlı e-posta adresinizi girin. Şifre sıfırlama bağlantısı gönderilecektir.
      </p>

      {sent && (
        <p className="mesaj mesaj-basari" style={{ color: "green", fontWeight: "bold" }}>
          Bağlantı {email} adresine gönderildi (demo).
        </p>
      )}

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-grup">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>

        <button type="submit" className="buton-kaydet">
          Bağlantı Gönder
        </button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/login">← Girişe dön</Link>
      </div>
    </section>
  );
}