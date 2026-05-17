/* global React */
function HowItWorks() {
  const steps = [
    ["01", "Reúne a tu equipo", "Mayores de 16. Equipos mixtos o cerrados, como queráis. Si te falta gente, escríbenos y emparejamos. Nadie se queda fuera por número."],
    ["02", "Escribe por WhatsApp", "+34 644 89 35 71. Una línea basta: nombre del capitán + nombre del equipo. Te confirmamos en 24h."],
    ["03", "Sábado 27, 10:00", "Arrancamos a las diez. Te enviamos la sede y la hora de tu primer partido por WhatsApp. Llega, juega, quédate a comer y a tomar algo."],
  ];

  return (
    <section id="como" className="cream">
      <div className="bignum" style={{ top: 40, right: -40, fontSize: "clamp(180px, 22vw, 360px)" }}>
        02
      </div>

      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-header">
          <div className="eyebrow">02 · Cómo funciona</div>
          <h2 style={{ color: "var(--ny-navy-800)" }}>
            Tres pasos.<br />Cero fricción.
          </h2>
          <p className="lead">
            No hay formulario largo. No hay portal de donaciones. Te apuntas
            como te apuntarías a una pachanga — porque, técnicamente, eso es.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}>
          {steps.map(([n, t, d]) => (
            <div key={n} style={{
              padding: 32,
              background: "rgba(15,27,45,0.04)",
              borderTop: "3px solid var(--ny-navy-800)",
              position: "relative",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 84,
                lineHeight: 1,
                color: "var(--ny-earth)",
                letterSpacing: "-0.02em",
                marginBottom: 18,
              }}>{n}</div>
              <h4 style={{
                color: "var(--ny-navy-800)", marginBottom: 10,
                fontSize: 20, letterSpacing: "0.04em",
              }}>{t}</h4>
              <p style={{
                fontSize: 15, color: "var(--ny-navy-700)",
                opacity: 0.85, lineHeight: 1.55,
              }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #como .wrap > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 22px !important;
          }
          #como .wrap > div:last-child > div:nth-child(3) { grid-column: 1 / -1; }
        }
        @media (max-width: 720px) {
          #como .wrap > div:last-child { grid-template-columns: 1fr !important; }
          #como .wrap > div:last-child > div:nth-child(3) { grid-column: auto; }
          #como .bignum { font-size: clamp(140px, 30vw, 220px) !important; top: 20px !important; right: -20px !important; }
        }
      `}</style>
    </section>
  );
}

window.HowItWorks = HowItWorks;
