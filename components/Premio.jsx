/* global React */
function Premio() {
  // Two prize tiers:
  //  · Top row — the team prize (Adidas España kits + Gran Reserva case).
  //    Both cards lead with imagery.
  //  · Bottom row — individual surprise prizes (pichichi / MVP).
  //    No imagery — a big "?" corner glyph carries the surprise idea,
  //    same trick as Ambiente's CornerGlyph.

  return (
    <section id="premio" style={{ background: "var(--ny-navy-800)" }}>
      <div className="bignum" style={{
        top: -10, right: -50,
        fontSize: "clamp(180px, 22vw, 360px)",
      }}>04</div>

      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-header">
          <div className="eyebrow">04 · El premio</div>
          <h2>
            Levanta la copa.<br />
            Y vete con la <span className="brush" style={{
              fontSize: "clamp(40px, 5.6vw, 84px)",
              display: "inline-block",
              transform: "rotate(-2deg) translateY(-4px)",
              padding: "2px 22px 8px",
            }}>camiseta</span>{" "}
            de España.
          </h2>
          <p className="lead">
            El equipo campeón se lleva camisetas oficiales de Adidas con
            las que España juega el Mundial 2026 y una caja de vinos para
            el vestuario. Y dos premios sorpresa para los que marcan la
            diferencia individualmente.
          </p>
        </div>

        {/* ===== Row 1 — team prize ===== */}
        <div className="premio-row premio-row-team" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 22,
          marginBottom: 22,
        }}>
          {/* Card A — Camisetas España */}
          <article className="premio-card" style={{
            background: "var(--ny-navy-700)",
            border: "1px solid var(--line)",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            minHeight: 480,
          }}>
            <div className="premio-jerseys" style={{
              position: "relative",
              background: "linear-gradient(180deg, rgba(11,21,37,0) 0%, rgba(11,21,37,0.45) 100%), var(--ny-navy-900)",
              minHeight: 320,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "32px 32px 0",
              overflow: "hidden",
            }}>
              {/* Decorative gold spotlight under jerseys */}
              <div aria-hidden="true" style={{
                position: "absolute",
                bottom: "8%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(70%, 360px)",
                height: 26,
                background: "radial-gradient(ellipse at center, rgba(245,197,24,0.30), transparent 70%)",
                filter: "blur(2px)",
                pointerEvents: "none",
              }} />
              <img
                src="assets/www-001032435106326-05.png"
                alt="Camiseta visitante de la selección española — Adidas, Mundial 2026"
                loading="lazy"
                className="premio-jersey-main"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "min(54%, 220px)",
                  height: "auto",
                  marginBottom: 28,
                  filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.55))",
                }}
              />
              <img
                src="assets/www-001032435105773-00.png"
                alt="Camiseta local de la selección española — Adidas, Mundial 2026"
                loading="lazy"
                className="premio-jersey-alt"
                style={{
                  position: "absolute",
                  right: "6%",
                  bottom: "10%",
                  width: "min(34%, 150px)",
                  height: "auto",
                  zIndex: 2,
                  filter: "drop-shadow(0 14px 18px rgba(0,0,0,0.55))",
                  transform: "rotate(4deg)",
                }}
              />
            </div>
            <div style={{ padding: 32 }}>
              <div className="eyebrow" style={{
                color: "var(--ny-gold)",
                marginBottom: 18,
              }}>
                Adidas · Mundial 2026
              </div>
              <h3 style={{
                color: "var(--ny-bone)",
                fontSize: "clamp(26px, 2.8vw, 38px)",
                lineHeight: 1,
                marginBottom: 16,
              }}>Camisetas de la selección.</h3>
              <p style={{
                fontSize: 15, lineHeight: 1.55,
                color: "rgba(244,239,227,0.78)",
              }}>
                Las equipaciones oficiales que Adidas estrena con la Roja
                este verano en EE.UU., México y Canadá. Para el equipo
                campeón.
              </p>
            </div>
          </article>

          {/* Card B — Caja Gran Reserva */}
          <article className="premio-card" style={{
            background: "var(--ny-navy-700)",
            border: "1px solid var(--line)",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            minHeight: 480,
          }}>
            <div className="premio-wine" style={{
              position: "relative",
              background: "linear-gradient(180deg, rgba(11,21,37,0) 0%, rgba(11,21,37,0.45) 100%), var(--ny-navy-900)",
              minHeight: 320,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              overflow: "hidden",
            }}>
              <div aria-hidden="true" style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(70%, 360px)",
                height: 22,
                background: "radial-gradient(ellipse at center, rgba(245,197,24,0.28), transparent 70%)",
                filter: "blur(2px)",
                pointerEvents: "none",
              }} />
              <img
                src="assets/grandes-reservas.jpg"
                alt="Caja de madera Selección Gran Reserva — seis botellas"
                loading="lazy"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "min(82%, 340px)",
                  height: "auto",
                  filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.55))",
                }}
              />
            </div>
            <div style={{ padding: 32 }}>
              <div className="eyebrow" style={{
                color: "var(--ny-gold)",
                marginBottom: 18,
              }}>
                Vinos para celebrar
              </div>
              <h3 style={{
                color: "var(--ny-bone)",
                fontSize: "clamp(26px, 2.8vw, 38px)",
                lineHeight: 1,
                marginBottom: 16,
              }}>Caja para el vestuario.</h3>
              <p style={{
                fontSize: 15, lineHeight: 1.55,
                color: "rgba(244,239,227,0.78)",
              }}>
                Una caja de vinos para que el equipo campeón descorche
                después del último silbato y brinde por la victoria.
              </p>
            </div>
          </article>
        </div>

        {/* ===== Row 2 — individual surprise prizes ===== */}
        <div className="premio-row premio-row-individual" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 22,
        }}>
          {/* Card C — Pichichi */}
          <article className="premio-card premio-surprise" style={{
            background: "var(--ny-navy-700)",
            border: "1px solid var(--line)",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            minHeight: 280,
          }}>
            <SurpriseGlyph />
            <div className="eyebrow" style={{
              color: "var(--ny-gold)",
              marginBottom: 18,
              zIndex: 1, position: "relative",
            }}>
              Pichichi · Máximo goleador
            </div>
            <h3 style={{
              color: "var(--ny-bone)",
              fontSize: "clamp(26px, 2.8vw, 38px)",
              lineHeight: 1,
              marginBottom: 16,
              zIndex: 1, position: "relative",
            }}>Sorpresa para el que más marca.</h3>
            <p style={{
              fontSize: 15, lineHeight: 1.55,
              color: "rgba(244,239,227,0.78)",
              zIndex: 1, position: "relative",
              marginTop: "auto",
            }}>
              El jugador con más goles del torneo se lleva un premio
              individual. No lo enseñamos antes. Lo ves cuando lo ganas.
            </p>
          </article>

          {/* Card D — MVP */}
          <article className="premio-card premio-surprise" style={{
            background: "var(--ny-navy-700)",
            border: "1px solid var(--line)",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            minHeight: 280,
          }}>
            <SurpriseGlyph rotate={6} />
            <div className="eyebrow" style={{
              color: "var(--ny-gold)",
              marginBottom: 18,
              zIndex: 1, position: "relative",
            }}>
              MVP · Mejor jugador del torneo
            </div>
            <h3 style={{
              color: "var(--ny-bone)",
              fontSize: "clamp(26px, 2.8vw, 38px)",
              lineHeight: 1,
              marginBottom: 16,
              zIndex: 1, position: "relative",
            }}>Sorpresa para quien marca la diferencia.</h3>
            <p style={{
              fontSize: 15, lineHeight: 1.55,
              color: "rgba(244,239,227,0.78)",
              zIndex: 1, position: "relative",
              marginTop: "auto",
            }}>
              Elegido por árbitros y organización entre los que han hecho
              la mañana — defendiendo, asistiendo, sosteniendo al equipo.
              Premio individual y sorpresa hasta el trofeo.
            </p>
          </article>
        </div>

        {/* Tail note — same dashed pattern as Ambiente */}
        <div className="premio-note" style={{
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
            El premio se entrega el mismo día, al cierre del torneo. Si la
            organización lo confirma antes, lo verás aquí — pero la
            sorpresa individual se mantiene cerrada hasta el trofeo.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #premio .premio-card { min-height: 0 !important; }
          #premio .premio-jerseys,
          #premio .premio-wine { min-height: 280px !important; }
        }
        @media (max-width: 720px) {
          #premio .premio-row { grid-template-columns: 1fr !important; }
          #premio .premio-card > div:last-child { padding: 26px !important; }
          #premio .premio-jerseys,
          #premio .premio-wine { min-height: 240px !important; padding: 26px 26px 0 !important; }
          #premio .premio-surprise { padding: 26px !important; }
          #premio .bignum { font-size: clamp(140px, 30vw, 220px) !important; right: -20px !important; }
        }
        @media (max-width: 480px) {
          #premio .premio-jersey-main { width: min(64%, 200px) !important; }
          #premio .premio-jersey-alt { width: min(40%, 130px) !important; right: 4% !important; }
        }
      `}</style>
    </section>
  );
}

function SurpriseGlyph({ rotate = -6 }) {
  return (
    <div aria-hidden="true" style={{
      position: "absolute",
      top: -28, right: -18,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 260,
      lineHeight: 0.7,
      color: "transparent",
      WebkitTextStroke: "1px rgba(245,197,24,0.22)",
      letterSpacing: "-0.06em",
      userSelect: "none",
      transform: `rotate(${rotate}deg)`,
      pointerEvents: "none",
    }}>?</div>
  );
}

window.Premio = Premio;
