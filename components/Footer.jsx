/* global React, TOURNAMENT */
function Footer() {
  const fmt = TOURNAMENT.formato;
  const precio = TOURNAMENT.precio;
  const sede = TOURNAMENT.sede;

  return (
    <footer
      style={{
        padding: "clamp(60px, 10vw, 96px) 0 clamp(40px, 6vw, 60px)",
        borderTop: "1px solid var(--line)",
        background: "var(--ny-navy-900)",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              <a
                href="https://wenearyou.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEAR YOU
              </a>{" "}
              · 2026
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.95,
                color: "var(--ny-bone)",
              }}
            >
              Apúntate y<br />
              <span style={{ color: "var(--ny-gold)" }}>marca</span> la{" "}
              <span style={{ color: "var(--ny-gold)" }}>diferencia.</span>
            </div>
            <a
              href="https://wa.me/34644893571"
              className="btn-primary"
              style={{ marginTop: 30 }}
            >
              Inscribir mi equipo
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <FooterCol
            title="Evento"
            lines={[
              "Sábado 27.06.2026",
              "Por la mañana · Madrid",
              sede,
              `Formato · ${fmt}`,
              precio ? `${precio}€ por equipo` : "Precio por confirmar",
              "+16 · mixto opcional",
            ]}
          />

          <FooterCol
            title="Fundación"
            lines={[
              <a
                href="https://wenearyou.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEAR YOU
              </a>,
              "Solidaridad sin fronteras",
              "CIF G21897772",
              "Reg. Fundaciones nº 3043",
              "wenearyou.org",
              "@we_nearyou",
              "WhatsApp +34 644 89 35 71",
            ]}
          />
        </div>

        <div
          style={{
            marginTop: 64,
            borderTop: "1px solid var(--line)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          <div>Torneo benéfico · Madrid · 27.06.2026</div>
          <div>Ucrania · Burundi · Venezuela · Colombia</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer .wrap > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          footer .wrap > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 720px) {
          footer .wrap > div:first-child { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, lines }) {
  return (
    <div>
      <h4
        style={{
          color: "var(--ny-gold)",
          fontSize: 13,
          letterSpacing: "0.18em",
          marginBottom: 18,
        }}
      >
        {title}
      </h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {lines.map((x, i) => (
          <li
            key={i}
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              color: "var(--ny-bone)",
              opacity: 0.78,
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

window.Footer = Footer;
