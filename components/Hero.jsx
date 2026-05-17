/* global React, TOURNAMENT, KidAvatar */
function Hero() {
  const wrap = {
    position: "relative",
    minHeight: "100vh",
    paddingTop: "clamp(96px, 14vw, 140px)",
    paddingBottom: "clamp(48px, 8vw, 80px)",
    overflow: "hidden",
    background: `
      radial-gradient(ellipse at 88% 8%, rgba(245,197,24,0.10), transparent 55%),
      radial-gradient(ellipse at -10% 110%, rgba(140,94,59,0.18), transparent 55%),
      var(--ny-navy-900)
    `,
    display: "flex",
    alignItems: "stretch",
  };

  const grid = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.7fr 0.85fr",
    gap: 20,
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  };

  const titleStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    textTransform: "uppercase",
    fontSize: "clamp(56px, 8.2vw, 138px)",
    lineHeight: 0.88,
    letterSpacing: "-0.01em",
    color: "var(--ny-bone)",
    marginBottom: 24,
  };

  const subtitleWrap = {
    marginBottom: 28,
    display: "flex",
    alignItems: "baseline",
    gap: 18,
    flexWrap: "wrap",
  };

  const subSmall = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(244,239,227,0.65)",
  };

  const leadStyle = {
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "clamp(17px, 1.6vw, 21px)",
    lineHeight: 1.55,
    color: "rgba(244,239,227,0.86)",
    maxWidth: 640,
    marginBottom: 36,
  };

  const metaWrap = {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0,1fr))",
    gap: 20,
    marginTop: 40,
    borderTop: "1px solid var(--line)",
    paddingTop: 22,
  };
  const metaCell = {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(244,239,227,0.6)",
  };
  const metaStrong = {
    display: "block",
    marginTop: 8,
    fontFamily: "var(--font-display)",
    fontSize: 19,
    fontWeight: 800,
    letterSpacing: "0.02em",
    color: "var(--ny-bone)",
    lineHeight: 1.05,
  };

  const fmt = TOURNAMENT.formato;
  const precio = TOURNAMENT.precio;
  const sede = TOURNAMENT.sede;

  return (
    <section id="top" style={wrap}>
      {/* Decorative giant N·Y in the corner */}
      <div className="bignum hero-bignum" style={{
        bottom: -40, right: -50,
        fontSize: "clamp(220px, 28vw, 460px)",
      }}>N·Y</div>

      <div className="wrap" style={grid}>
        {/* LEFT — copy */}
        <div>
          <div className="eyebrow">
            Torneo Benéfico · Madrid · 27.06.2026
          </div>

          <h1 style={titleStyle}>
            FÚTBOL QUE<br />
            CAMBIA <span style={{ color: "var(--ny-gold)" }}>VIDAS.</span>
          </h1>

          <div style={subtitleWrap}>
            <span className="brush" style={{ fontSize: "clamp(34px, 4.4vw, 56px)" }}>
              apúntate
            </span>
            <span style={subSmall}>y marca la diferencia</span>
          </div>

          <p style={leadStyle}>
            Una mañana de sábado, un campo de Madrid, una causa concreta
            en Burundi. Un granero, una obra, lo que haga falta — el
            proyecto exacto se confirma antes del torneo. El destino y
            el método no cambian.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#inscripcion" className="btn-primary">
              Inscribe tu equipo
              <span aria-hidden="true">→</span>
            </a>
            <a href="#causa" className="btn-secondary">Saber más</a>
          </div>

          <div className="hero-meta" style={metaWrap}>
            <div style={metaCell}>
              Cuándo
              <strong style={metaStrong}>27.06.26</strong>
            </div>
            <div style={metaCell}>
              Dónde
              <strong style={metaStrong}>{sede}</strong>
            </div>
            <div style={metaCell}>
              Formato
              <strong style={metaStrong}>{fmt}</strong>
            </div>
            <div style={metaCell}>
              Inscripción
              <strong style={metaStrong}>
                {precio ? `${precio}€` : "—"} <span style={{ opacity: 0.55, fontSize: 11 }}>/EQUIPO</span>
              </strong>
            </div>
          </div>
        </div>

        {/* RIGHT — small kid avatar, transparent bg */}
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 360,
        }}>
          {/* Soft gold ground spotlight under the avatar */}
          <div style={{
            position: "absolute",
            bottom: "14%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(60%, 220px)", height: 28,
            background: "radial-gradient(ellipse at center, rgba(245,197,24,0.32), transparent 70%)",
            filter: "blur(2px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />
          <div style={{ width: "100%", maxWidth: "min(72vw, 460px)" }}>
            <KidAvatar size={(window.TOURNAMENT && window.TOURNAMENT.avatarSize) || 460} />
          </div>
        </div>
      </div>

      {/* Scroll affordance */}
      <a href="#tags" aria-label="Bajar" className="hero-scroll" style={{
        position: "absolute", bottom: 20, left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "var(--font-mono)", fontSize: 10,
        letterSpacing: "0.32em", textTransform: "uppercase",
        color: "var(--ny-gold)", zIndex: 3,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <span>Scroll</span>
        <span style={{ width: 1, height: 32, background: "var(--ny-gold)", opacity: 0.6 }} />
      </a>

      <style>{`
        @media (max-width: 880px) {
          /* Inline styles set on the elements need !important to be overridden. */
          #top {
            min-height: auto !important;
            padding-top: clamp(96px, 18vw, 120px) !important;
            padding-bottom: 60px !important;
          }
          #top .wrap {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #top .wrap > div:last-child {
            min-height: 0 !important;
            justify-content: center !important;
          }
          #top .hero-bignum {
            font-size: clamp(160px, 38vw, 280px) !important;
            bottom: -30px !important;
            right: -30px !important;
          }
          #top .hero-meta {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 18px 24px !important;
          }
          #top .hero-scroll { display: none !important; }
        }
        @media (max-width: 480px) {
          #top .hero-bignum { display: none !important; }
          #top .hero-meta { gap: 14px 18px !important; }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
