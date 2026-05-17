/* global React */
function Causa() {
  const pillars = [
    ["Directo", "Sin intermediarios. El dinero va de tu equipo a Burundi en cuestión de días, no años."],
    ["Tangible", "Una obra concreta sobre el terreno, no campañas abstractas. Ves dónde va tu inscripción."],
    ["Solidaridad sin fronteras", "Es el lema de NEAR YOU. No es un eslogan: es el método."],
  ];

  const slogan = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(26px, 2.9vw, 40px)",
    lineHeight: 1.12,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    color: "var(--ny-bone)",
  };

  return (
    <section id="causa">
      <div className="bignum" style={{ top: -10, left: -30, fontSize: "clamp(180px, 22vw, 360px)" }}>
        01
      </div>

      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-header">
          <div className="eyebrow">01 · La causa</div>
          <h2>
            No es un torneo.<br />
            Es un proyecto en Burundi<br />
            disfrazado de <span style={{ color: "var(--ny-gold)" }}>fútbol.</span>
          </h2>
          <p className="lead">
            NEAR YOU es una fundación sin ánimo de lucro (Reg. Fundaciones nº 3043)
            que actúa donde más se necesita: Ucrania, Burundi, Venezuela, Colombia.
            Lo recaudado este año se destina íntegramente a Burundi:
            adquisición de material sanitario y reconstrucción de clínicas
            en zonas rurales.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 72,
          alignItems: "start",
        }}>
          <div style={slogan}>
            Cada equipo inscrito{" "}
            <span style={{ color: "var(--ny-gold)" }}>suma</span>{" "}
            en Burundi.<br />
            Cada gol marcado{" "}
            <span style={{ color: "var(--ny-gold)" }}>se celebra</span>{" "}
            a 6.000 km.<br />
            <span style={{
              textDecoration: "line-through",
              textDecorationColor: "var(--ny-gold)",
              textDecorationThickness: "5px",
              opacity: 0.5,
            }}>
              Cada partido es solo un partido.
            </span>{" "}
            <br />
            <span style={{ color: "var(--ny-gold)" }}>Cada partido importa.</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {pillars.map(([title, body]) => (
              <div key={title} style={{
                borderLeft: "3px solid var(--ny-gold)",
                padding: "6px 0 6px 22px",
              }}>
                <h4 style={{
                  color: "var(--ny-bone)", marginBottom: 8,
                  fontSize: 17, letterSpacing: "0.06em",
                }}>{title}</h4>
                <p style={{
                  fontSize: 15, lineHeight: 1.55,
                  color: "var(--ny-bone)", opacity: 0.78,
                }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #causa .wrap > div:last-child { gap: 40px !important; }
        }
        @media (max-width: 880px) {
          #causa .wrap > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #causa .bignum { font-size: clamp(140px, 30vw, 220px) !important; top: -30px !important; left: -20px !important; }
        }
      `}</style>
    </section>
  );
}

window.Causa = Causa;
