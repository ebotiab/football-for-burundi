/* global React */
function Causa() {
  const pillars = [
    [
      "Directo",
      "Sin intermediarios. El dinero va de tu equipo a Burundi en cuestión de días, no años.",
    ],
    [
      "Tangible",
      "Una obra concreta sobre el terreno, no campañas abstractas. Ves dónde va tu inscripción.",
    ],
    [
      "Solidaridad sin fronteras",
      <>
        Es el lema de{" "}
        <a
          href="https://wenearyou.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NEAR YOU
        </a>
        . No es un eslogan: es el método.
      </>,
    ],
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
      <div
        className="bignum"
        style={{ top: -10, left: -30, fontSize: "clamp(180px, 22vw, 360px)" }}
      >
        01
      </div>

      <div className="wrap" style={{ position: "relative" }}>
        <div className="causa-header sec-header">
          <div>
            <div className="eyebrow">01 · La causa</div>
            <h2>
              No es un torneo.
              <br />
              Es solidaridad
              <br />
              disfrazada de{" "}
              <span style={{ color: "var(--ny-gold)" }}>fútbol.</span>
            </h2>
            <p className="lead">
              <a
                href="https://wenearyou.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEAR YOU
              </a>{" "}
              es una fundación sin ánimo de lucro (Reg. Fundaciones nº 3043) que
              actúa donde más se necesita: Ucrania, Burundi, Venezuela,
              Colombia. Lo recaudado este año se destina íntegramente a Burundi:
              adquisición de material sanitario y reconstrucción de clínicas en
              zonas rurales.
            </p>
          </div>

          <aside
            className="destino-card"
            aria-label="Destino del proyecto: Burundi"
          >
            <div className="destino-eyebrow">Destino</div>
            <div className="destino-flag">
              <img
                src="assets/Flag-Burundi.webp"
                alt="Bandera de Burundi"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="destino-meta">
              <strong>Burundi</strong>
              <span>3°23′S · 29°55′E</span>
              <span>5.912 km de Madrid</span>
            </div>
          </aside>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          <div style={slogan}>
            Cada equipo inscrito{" "}
            <span style={{ color: "var(--ny-gold)" }}>suma</span> en Burundi.
            <br />
            Cada gol <span style={{ color: "var(--ny-gold)" }}>
              se celebra
            </span>{" "}
            a 6.000 km.
            <br />
            <span
              style={{
                textDecoration: "line-through",
                textDecorationColor: "var(--ny-gold)",
                textDecorationThickness: "5px",
                opacity: 0.5,
              }}
            >
              Cada partido es solo un partido.
            </span>{" "}
            <br />
            <span style={{ color: "var(--ny-gold)" }}>
              Cada partido importa.
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {pillars.map(([title, body]) => (
              <div
                key={title}
                style={{
                  borderLeft: "3px solid var(--ny-gold)",
                  padding: "6px 0 6px 22px",
                }}
              >
                <h4
                  style={{
                    color: "var(--ny-bone)",
                    marginBottom: 8,
                    fontSize: 17,
                    letterSpacing: "0.06em",
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--ny-bone)",
                    opacity: 0.78,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        #causa .causa-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 56px;
          align-items: start;
        }
        #causa .destino-card {
          position: relative;
          width: 220px;
          padding: 18px 18px 20px;
          background: rgba(244,239,227,0.03);
          border: 1px solid rgba(244,239,227,0.14);
          box-shadow: 6px 6px 0 rgba(245,197,24,0.18);
          transform: rotate(1.2deg);
          transition: transform var(--t-fast) var(--ease-out),
                      box-shadow var(--t-fast) var(--ease-out);
        }
        #causa .destino-card:hover {
          transform: rotate(0deg) translate(-2px, -2px);
          box-shadow: 10px 10px 0 rgba(245,197,24,0.28);
        }
        #causa .destino-eyebrow {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--ny-gold);
          margin-bottom: 12px;
        }
        #causa .destino-flag {
          position: relative;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          border: 1px solid rgba(244,239,227,0.18);
        }
        #causa .destino-flag img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        #causa .destino-flag::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(244,239,227,0.08), transparent 40%);
        }
        #causa .destino-meta {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(244,239,227,0.6);
        }
        #causa .destino-meta strong {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 20px;
          letter-spacing: 0.02em;
          color: var(--ny-bone);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        @media (max-width: 1024px) {
          #causa .wrap > div:last-child { gap: 40px !important; }
          #causa .destino-card { width: 200px; }
        }
        @media (max-width: 880px) {
          #causa .wrap > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #causa .bignum { font-size: clamp(140px, 30vw, 220px) !important; top: -30px !important; left: -20px !important; }
          #causa .causa-header {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          #causa .destino-card {
            width: 100%;
            max-width: 280px;
            transform: rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
}

window.Causa = Causa;
