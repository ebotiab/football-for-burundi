/* global React */
function Ambiente() {
  // Three pillars of what's at the venue besides football.
  // Cards lean editorial — big iconographic glyphs built from brand type, no emoji.
  const cards = [
    {
      key: "musica",
      eyebrow: "Música en directo",
      title: "DJ a pie de campo.",
      body: "Una sesión que se enchufa cuando suena el último silbato y no para hasta que se vacía la última caña. Listas curadas por la peña.",
      glyph: <MusicGlyph />,
    },
    {
      key: "comida",
      eyebrow: "Comida de las propias pistas",
      title: "Bocadillos y aperitivos.",
      body: "Los prepara la organización y se venden en el mismo recinto del torneo. Sin foodtrucks ni intermediarios. Precios de bar de barrio.",
      glyph: <FoodGlyph />,
    },
    {
      key: "bebida",
      eyebrow: "Refrescos durante · cervecita al final",
      title: "Refrescos, agua, y al final la cervecita.",
      body: "Mismo puesto, mismas manos. Cuando suena el último silbato salen las cañas y arranca la música.",
      glyph: <DrinkGlyph />,
    },
  ];

  return (
    <section id="ambiente" style={{ background: "var(--ny-navy-800)" }}>
      <div className="bignum" style={{
        top: -10, right: -50,
        fontSize: "clamp(180px, 22vw, 360px)",
      }}>03</div>

      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-header">
          <div className="eyebrow">03 · El ambiente</div>
          <h2>
            Es <span className="brush" style={{
              fontSize: "clamp(40px, 5.6vw, 84px)",
              display: "inline-block",
              transform: "rotate(-2deg) translateY(-4px)",
              padding: "2px 22px 8px",
            }}>fútbol</span>{" "}
            <br />con <span style={{ color: "var(--ny-gold)" }}>tercer tiempo</span>.
          </h2>
          <p className="lead">
            Llegas a las nueve, juegas tu partido y te quedas. Música, comida
            y bebida en la propia sede — sin tener que moverte. Una mañana
            que termina en cervecita y bailoteo.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
        }}>
          {cards.map((c) => (
            <article key={c.key} style={{
              background: "var(--ny-navy-700)",
              border: "1px solid var(--line)",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 0,
              position: "relative",
              overflow: "hidden",
              minHeight: 380,
            }}>
              <div style={{
                position: "absolute",
                top: -18, right: -18,
                opacity: 0.85,
              }}>{c.glyph}</div>

              <div className="eyebrow" style={{
                color: "var(--ny-gold)",
                marginBottom: 18,
                zIndex: 1, position: "relative",
              }}>
                {c.eyebrow}
              </div>
              <h3 style={{
                color: "var(--ny-bone)",
                fontSize: "clamp(26px, 2.8vw, 38px)",
                lineHeight: 1,
                marginBottom: 16,
                zIndex: 1, position: "relative",
              }}>{c.title}</h3>
              <p style={{
                fontSize: 15, lineHeight: 1.55,
                color: "rgba(244,239,227,0.78)",
                zIndex: 1, position: "relative",
                marginTop: "auto",
              }}>{c.body}</p>
            </article>
          ))}
        </div>

        <div style={{
          marginTop: 48,
          padding: "20px 24px",
          border: "1px dashed var(--line)",
          display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap",
          fontFamily: "var(--font-mono)",
          fontSize: 12, letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(244,239,227,0.72)",
        }}>
          <span style={{
            display: "inline-block",
            width: 8, height: 8, background: "var(--ny-gold)",
          }} />
          <span>
            La inscripción del torneo y el bote del cambio van al 100% al
            proyecto de Burundi. Lo que consumas en el puesto se paga aparte
            y sostiene a la propia organización.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          #ambiente .wrap > div:nth-of-type(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ============ Iconographic glyphs — built from brand type, no emoji ============
   Each glyph is a giant Big Shoulders character offset into a card corner. */

function CornerGlyph({ children }) {
  return (
    <div aria-hidden="true" style={{
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 220,
      lineHeight: 0.7,
      color: "transparent",
      WebkitTextStroke: "1px rgba(245,197,24,0.18)",
      letterSpacing: "-0.06em",
      userSelect: "none",
      transform: "rotate(-6deg)",
    }}>
      {children}
    </div>
  );
}

function MusicGlyph() {
  // A pair of brand-style mono glyphs: an eighth note built from rectangles.
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true"
      style={{ transform: "rotate(-8deg)" }}>
      <g fill="none" stroke="rgba(245,197,24,0.20)" strokeWidth="3">
        <line x1="58" y1="38" x2="58" y2="130" />
        <line x1="58" y1="38" x2="118" y2="46" />
        <line x1="58" y1="62" x2="118" y2="70" />
      </g>
      <ellipse cx="48" cy="132" rx="20" ry="14"
        fill="none" stroke="rgba(245,197,24,0.32)" strokeWidth="3"
        transform="rotate(-15 48 132)" />
      <ellipse cx="108" cy="142" rx="20" ry="14"
        fill="none" stroke="rgba(245,197,24,0.18)" strokeWidth="3"
        transform="rotate(-15 108 142)" />
    </svg>
  );
}

function FoodGlyph() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true"
      style={{ transform: "rotate(-4deg)" }}>
      {/* Stylized bocadillo — two long rectangles with a filling */}
      <g fill="none" stroke="rgba(245,197,24,0.22)" strokeWidth="3">
        <rect x="26" y="60" width="124" height="22" />
        <rect x="26" y="92" width="124" height="22" />
      </g>
      <line x1="26" y1="86" x2="150" y2="86" stroke="rgba(245,197,24,0.32)" strokeWidth="6" strokeDasharray="6 4" />
      <text x="36" y="158" fill="rgba(245,197,24,0.18)"
        fontFamily="var(--font-display)" fontWeight="900" fontSize="34"
        letterSpacing="0.04em">07€</text>
    </svg>
  );
}

function DrinkGlyph() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true"
      style={{ transform: "rotate(8deg)" }}>
      {/* A pint */}
      <g fill="none" stroke="rgba(245,197,24,0.22)" strokeWidth="3">
        <path d="M50 38 L60 150 L120 150 L130 38 Z" />
        <path d="M50 70 L130 70" />
      </g>
      <path d="M50 70 L130 70 L122 56 L58 56 Z"
        fill="rgba(245,197,24,0.22)" />
      {/* Bubbles */}
      <circle cx="76" cy="92" r="3" fill="rgba(245,197,24,0.32)" />
      <circle cx="92" cy="106" r="2.4" fill="rgba(245,197,24,0.32)" />
      <circle cx="106" cy="98" r="2" fill="rgba(245,197,24,0.32)" />
      <circle cx="86" cy="122" r="2.6" fill="rgba(245,197,24,0.28)" />
    </svg>
  );
}

window.Ambiente = Ambiente;
