/* global React */

const IBAN_DISPLAY = "ES11 0049 4288 1921 1403 1866";
const IBAN_RAW = "ES1100494288192114031866";
const BIZUM_CODE = "13457";

function FilaCero() {
  const [copied, setCopied] = React.useState(null);
  const timerRef = React.useRef(null);

  const copy = (key, value) => {
    try {
      navigator.clipboard.writeText(value);
      setCopied(key);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(null), 2000);
    } catch (_) {
      // Clipboard unavailable (insecure context, old browser) — silently ignore.
    }
  };

  React.useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  const cardStyle = {
    background: "var(--ny-navy-800)",
    color: "var(--ny-bone)",
    border: "1px solid rgba(15, 27, 45, 0.12)",
    borderLeft: "3px solid var(--ny-gold)",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    boxShadow: "8px 8px 0 rgba(15, 27, 45, 0.08)",
  };

  const eyebrowOnDark = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ny-gold)",
    marginBottom: 4,
  };

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(244, 239, 227, 0.55)",
    marginTop: 8,
  };

  return (
    <section id="fila-cero" className="cream">
      <div className="wrap">
        <div className="sec-header">
          <div className="eyebrow">Fila Cero · Apoya sin asistir</div>
          <h2>
            ¿No puedes venir? <br />
            <span className="brush">Súmate desde la grada.</span>
          </h2>
          <p className="lead" style={{ marginTop: 28 }}>
            Si el 27 de junio no puedes jugar, tu aportación sigue llegando a
            Burundi al 100&nbsp;%. Cada euro multiplica el impacto del proyecto
            de NEAR YOU.
          </p>
        </div>

        <div className="fc-grid">
          <article style={cardStyle}>
            <div style={eyebrowOnDark}>Transferencia</div>

            <div style={labelStyle}>IBAN</div>
            <div className="fc-iban">{IBAN_DISPLAY}</div>

            <div style={labelStyle}>Concepto</div>
            <div className="fc-concept">Torneo NEAR YOU</div>

            <button
              type="button"
              className="btn-primary fc-copy"
              onClick={() => copy("iban", IBAN_RAW)}
              aria-live="polite"
            >
              {copied === "iban" ? "Copiado ✓" : "Copiar IBAN"}
            </button>
          </article>

          <article style={cardStyle}>
            <div style={eyebrowOnDark}>Bizum</div>

            <div style={labelStyle}>Código ONG</div>
            <div className="fc-bizum">{BIZUM_CODE}</div>

            <div className="fc-hint">
              En tu app: <strong>Bizum → Enviar a ONG</strong> e introduce el
              código.
            </div>

            <button
              type="button"
              className="btn-primary fc-copy"
              onClick={() => copy("bizum", BIZUM_CODE)}
              aria-live="polite"
            >
              {copied === "bizum" ? "Copiado ✓" : "Copiar código"}
            </button>
          </article>
        </div>

        <p className="fc-tax">
          Tu donación a <strong>NEAR YOU</strong> es <em>desgravable</em> en la
          declaración de la renta. Escríbenos por WhatsApp con tu nombre y DNI
          y te enviamos el certificado fiscal.
        </p>
      </div>

      <style>{`
        #fila-cero .fc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;
        }
        #fila-cero .fc-iban {
          font-family: var(--font-mono);
          font-size: clamp(18px, 2.2vw, 24px);
          letter-spacing: 0.04em;
          color: var(--ny-gold);
          word-break: break-all;
        }
        #fila-cero .fc-concept {
          font-family: var(--font-body);
          font-size: 18px;
          color: var(--ny-bone);
        }
        #fila-cero .fc-bizum {
          font-family: var(--font-mono);
          font-size: clamp(28px, 5vw, 40px);
          letter-spacing: 0.12em;
          color: var(--ny-gold);
        }
        #fila-cero .fc-hint {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.55;
          color: rgba(244, 239, 227, 0.7);
          margin-top: 4px;
        }
        #fila-cero .fc-copy {
          margin-top: 20px;
          align-self: flex-start;
        }
        #fila-cero .fc-tax {
          margin-top: 40px;
          max-width: 720px;
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: var(--ny-earth);
        }
        #fila-cero .fc-tax strong {
          color: var(--ny-navy-900);
          font-weight: 700;
        }
        #fila-cero .fc-tax em {
          font-style: italic;
          color: var(--ny-navy-900);
        }
        @media (max-width: 880px) {
          #fila-cero .fc-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }
        }
        @media (max-width: 480px) {
          #fila-cero .fc-grid article {
            padding: 24px !important;
          }
          #fila-cero .fc-iban {
            font-size: clamp(14px, 4.4vw, 18px);
          }
        }
      `}</style>
    </section>
  );
}

window.FilaCero = FilaCero;
