/* global React, TOURNAMENT */
const { useState: useState_FAQ } = React;

function FAQ() {
  const fmt = TOURNAMENT.formato;
  const precio = TOURNAMENT.precio;
  const items = [
    [
      "¿Fútbol sala o fútbol 7?",
      `Estamos cerrando la sede. En cuanto la confirmemos te decimos el formato definitivo. La previsión actual es ${fmt.toLowerCase()}, pero podría cambiar. En cualquier caso te avisamos por WhatsApp con dos semanas de margen.`,
    ],
    [
      "¿Cuánto cuesta inscribir un equipo?",
      `${precio ? `${precio}€ por equipo` : "Aún sin cerrar"}. El precio definitivo depende del formato y de la sede. Como referencia, ediciones anteriores se han movido entre 50€ y 80€ por equipo. Te avisamos antes de confirmar.`,
    ],
    [
      "¿Dónde se juega exactamente?",
      "Madrid, instalaciones por confirmar. Se anuncia dos semanas antes del torneo, en cuanto sepamos el número exacto de equipos inscritos. Te lo enviamos por WhatsApp.",
    ],
    [
      "¿Y si no tengo equipo completo?",
      "Escríbenos al WhatsApp con cuánta gente tenéis. Emparejamos jugadores sueltos con equipos cortos para que nadie se quede fuera por número.",
    ],
    [
      "¿Qué incluye la inscripción?",
      "Partidos arbitrados, camiseta del torneo, agua y un café de bienvenida. Música, comida y bebida en barra se pagan aparte, en el propio sitio.",
    ],
    [
      "¿Cómo se paga?",
      "Efectivo o Bizum el mismo día del torneo, en mesa de inscripciones. No hay portal de donaciones — el 100% de tu inscripción va al proyecto de Burundi de esta edición.",
    ],
    [
      "¿Quién organiza?",
      "Fundación NEAR YOU. CIF G21897772. Reg. Fundaciones nº 3043. Auditada anualmente. wenearyou.org.",
    ],
  ];

  const [open, setOpen] = useState_FAQ(0);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">05 · Dudas sin fricción</div>
          <h2>
            Lo que la gente<br />
            pregunta siempre.
          </h2>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {items.map(([q, a], i) => {
            const isOpen = i === open;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "26px 0",
                    display: "flex", alignItems: "baseline", gap: 24,
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "0.01em",
                    textTransform: "uppercase", lineHeight: 1.1,
                    color: isOpen ? "var(--ny-gold)" : "var(--ny-bone)",
                    transition: "color 0.2s ease",
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ flex: 1, textWrap: "balance" }}>{q}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 22,
                    color: "var(--ny-gold)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.2s ease",
                    flex: "0 0 28px", textAlign: "right",
                    lineHeight: 1,
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{
                    paddingBottom: 28,
                    fontFamily: "var(--font-body)",
                    fontSize: 16, lineHeight: 1.6,
                    color: "var(--ny-bone)", opacity: 0.82,
                    maxWidth: 760,
                  }}>{a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
