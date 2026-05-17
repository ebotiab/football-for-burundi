/* global React, TOURNAMENT */
const { useState: useState_IF } = React;

function Inscription() {
  const [captain, setCaptain] = useState_IF("");
  const [team, setTeam] = useState_IF("");
  const [phone, setPhone] = useState_IF("");
  const [size, setSize] = useState_IF("7+0");
  const [sent, setSent] = useState_IF(false);

  const valid = captain.trim() && team.trim() && phone.trim();

  function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;

    const lines = [
      "Hola, quiero inscribir un equipo en el torneo NEAR YOU.",
      "",
      `Capitán: ${captain.trim()}`,
      `Equipo: ${team.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Tamaño: ${size}`,
    ];
    const url = `https://wa.me/34644893571?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
  }

  const precio = TOURNAMENT.precio;
  const fmt = TOURNAMENT.formato;

  return (
    <section id="inscripcion" style={{ background: "var(--ny-navy-700)" }}>
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">05 · Inscríbete</div>
          <h2>
            Solo cuatro campos.<br />
            <span style={{ color: "var(--ny-gold)" }}>Y al campo.</span>
          </h2>
          <p className="lead">
            Te respondemos por WhatsApp en menos de 24h con punto de
            encuentro y horario de tu primer partido.
          </p>
        </div>

        {sent ? (
          <SuccessCard team={team} onReset={() => {
            setSent(false); setCaptain(""); setTeam(""); setPhone("");
          }} />
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px 40px",
            maxWidth: 920,
          }}>
            <div className="field">
              <label>Capitán</label>
              <input
                placeholder="Nombre y apellido"
                value={captain}
                onChange={(e) => setCaptain(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Nombre del equipo</label>
              <input
                placeholder="ej. Los Jacobos de Villaverde"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>WhatsApp</label>
              <input
                placeholder="+34 644 89 35 71"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Tamaño del equipo</label>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="7+0">7 en campo · sin suplentes</option>
                <option value="7+1">7 en campo + 1 suplente</option>
                <option value="7+2">7 en campo + 2 suplentes</option>
                <option value="7+3">7 en campo + 3 suplentes</option>
                <option value="7+4">7 en campo + 4 suplentes</option>
                <option value="7+5">7 en campo + 5 suplentes</option>
                <option value="?">Aún por confirmar</option>
              </select>
            </div>

            <div style={{
              gridColumn: "1 / -1", display: "flex",
              alignItems: "center", gap: 22, flexWrap: "wrap", marginTop: 12,
            }}>
              <button
                type="submit"
                className="btn-primary"
                style={{ opacity: valid ? 1 : 0.55, pointerEvents: valid ? "auto" : "none" }}
              >
                Apuntar equipo
                <span aria-hidden="true">→</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11, letterSpacing: "0.18em",
                  background: "var(--ny-navy-900)", color: "var(--ny-gold)",
                  padding: "4px 8px", marginLeft: 4,
                }}>WHATSAPP</span>
              </button>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--fg-subtle)",
                maxWidth: 360, lineHeight: 1.6,
              }}>
                {precio ? `${precio}€` : "Precio orientativo 60€"}/equipo · pago el
                día del torneo (efectivo o Bizum).
                <br />
                Formato: {fmt}.
                <br />
                <span style={{ color: "var(--ny-gold)" }}>Premio campeón</span>{" "}
                · Camisetas de España + caja de vinos. Pichichi y MVP,
                premio sorpresa.
              </div>
            </div>
          </form>
        )}

        <div className="ins-whatsapp" style={{
          marginTop: 64,
          padding: "26px 30px",
          background: "var(--ny-navy-900)",
          border: "1px solid var(--line)",
          display: "flex", gap: 22, flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Capitanes · línea directa
            </div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(22px, 6vw, 28px)", color: "var(--ny-bone)", letterSpacing: "0.02em",
            }}>
              644 · 89 · 35 · 71
            </div>
          </div>
          <a
            href="https://wa.me/34644893571?text=Hola%2C%20quiero%20inscribir%20un%20equipo%20en%20el%20torneo%20NEAR%20YOU"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
          >
            Abrir WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #inscripcion form { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 600px) {
          #inscripcion .ins-whatsapp {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            padding: 22px 22px;
            margin-top: 48px;
          }
          #inscripcion .ins-whatsapp .btn-primary { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

function SuccessCard({ team, onReset }) {
  return (
    <div style={{
      padding: "44px 40px",
      background: "var(--ny-gold)",
      color: "var(--ny-navy-900)",
      maxWidth: 760,
      position: "relative",
    }}>
      <span style={{
        position: "absolute", top: -10, left: -10,
        width: 20, height: 20, background: "var(--ny-navy-900)",
      }} />
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: "0.22em", textTransform: "uppercase",
        marginBottom: 14,
      }}>Inscripción enviada</div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(28px, 4vw, 44px)",
        lineHeight: 1.02, textTransform: "uppercase",
      }}>
        Bienvenido, equipo {team || "—"}.<br />
        Te escribimos por WhatsApp.
      </div>
      <button
        onClick={onReset}
        style={{
          marginTop: 28, padding: "12px 22px",
          background: "var(--ny-navy-900)", color: "var(--ny-gold)",
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.22em", textTransform: "uppercase",
        }}
      >Inscribir otro equipo</button>
    </div>
  );
}

window.Inscription = Inscription;
