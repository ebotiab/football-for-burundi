/* global React, TOURNAMENT */
function StatsBar() {
  const precio = TOURNAMENT.precio;
  const stats = [
    [precio ? `${precio}€` : "TBD", "por equipo. Pendiente de confirmar el formato definitivo y la sede.", precio ? null : "POR CONFIRMAR"],
    ["100%", "de la recaudación va a un proyecto en Burundi. El destino concreto se confirma antes del torneo.", null],
    ["+16", "edad mínima. Equipos mixtos o cerrados — como prefiráis.", null],
  ];

  return (
    <section style={{ background: "var(--ny-navy-900)", padding: "80px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
        }}>
          {stats.map(([n, d, badge]) => (
            <div key={n + d} style={{
              borderTop: "1px solid var(--line)", paddingTop: 24,
            }}>
              <div className="numeral" style={{
                fontSize: "clamp(56px, 6vw, 96px)",
              }}>{n}</div>
              {badge && (
                <span className="tbd" style={{ marginLeft: 0, marginTop: 12, display: "inline-block" }}>
                  {badge}
                </span>
              )}
              <div style={{
                marginTop: 14, fontSize: 15,
                color: "var(--ny-bone)", opacity: 0.85, lineHeight: 1.5,
                maxWidth: 300,
              }}>{d}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56,
          padding: "26px 34px",
          background: "var(--ny-gold)",
          color: "var(--ny-navy-900)",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(18px, 2.2vw, 26px)",
          textTransform: "uppercase",
          lineHeight: 1.15,
          transform: "rotate(-0.5deg)",
          position: "relative",
        }}>
          <span style={{
            position: "absolute", top: -10, left: -10,
            width: 20, height: 20, background: "var(--ny-navy-900)",
          }} />
          {precio || 55}€ = tres rondas de cerveza. O agua corriente para una clínica entera.
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          section .wrap > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.StatsBar = StatsBar;
